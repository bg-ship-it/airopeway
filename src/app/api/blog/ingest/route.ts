import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@sanity/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Blog ingest endpoint for the daily blog engine.
 *
 *   POST  /api/blog/ingest  - create a post (optionally with a hero image)
 *   PATCH /api/blog/ingest  - attach or replace the hero image on an existing post
 *
 * Auth: Authorization: Bearer <BLOG_INGEST_TOKEN>
 *
 * Why this exists: writing posts straight to Sanity means every caller has to
 * remember this project's field names. AI Ropeway uses excerpt / seoTitle /
 * seoDescription; AI Placers uses description / metaTitle / metaDescription.
 * Nine Placers posts were once written with Ropeway's names and had to be
 * repaired by hand. This endpoint owns the shape so callers cannot get it wrong.
 *
 * Body is Portable Text, not HTML - the engine already produces Portable Text
 * via the Sanity MCP, so no conversion step is needed here.
 *
 * See BLOG_POST_CONTRACT.md.
 */

const writeClient = createClient({
  projectId: "q7oqmxr6",
  dataset: "production",
  apiVersion: "2024-06-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

function authorized(request: NextRequest): boolean {
  const expected = process.env.BLOG_INGEST_TOKEN;
  if (!expected) {
    console.error("[blog/ingest] BLOG_INGEST_TOKEN is not set");
    return false;
  }
  const header = request.headers.get("authorization");
  if (!header || !header.startsWith("Bearer ")) return false;
  return header.slice(7).trim() === expected;
}

type MainImage = {
  _type: "image";
  alt: string;
  asset: { _type: "reference"; _ref: string };
};

/** Download an image by URL and upload it into the Sanity asset store. */
async function uploadHeroImage(url?: string, alt?: string): Promise<MainImage | null> {
  if (!url) return null;

  const response = await fetch(url);
  if (!response.ok) {
    console.warn(`[blog/ingest] hero image fetch failed: ${response.status} ${url}`);
    return null;
  }

  const contentType = response.headers.get("content-type") || "image/png";
  const buffer = Buffer.from(await response.arrayBuffer());
  const asset = await writeClient.assets.upload("image", buffer, {
    filename: url.split("/").pop() || "hero.png",
    contentType,
  });

  return {
    _type: "image",
    alt: alt || "",
    asset: { _type: "reference", _ref: asset._id },
  };
}

export async function POST(request: NextRequest) {
  try {
    if (!authorized(request)) {
      return NextResponse.json(
        { error: "Unauthorized - invalid or missing Bearer token" },
        { status: 401 }
      );
    }

    const data = await request.json();
    const {
      title,
      slug,
      body,
      excerpt,
      seoTitle,
      seoDescription,
      publishedAt,
      featured_image_url,
      featured_image_alt,
    } = data ?? {};

    if (!title || !slug || !Array.isArray(body) || body.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields: title, slug, body (non-empty Portable Text array)" },
        { status: 400 }
      );
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      return NextResponse.json(
        { error: "Invalid slug. Use lowercase letters, numbers and hyphens only." },
        { status: 400 }
      );
    }

    const existing = await writeClient.fetch<{ _id: string } | null>(
      `*[_type == "post" && slug.current == $slug][0]{ _id }`,
      { slug }
    );
    if (existing?._id) {
      return NextResponse.json(
        { error: `A post with slug "${slug}" already exists. Use PATCH to update its image.` },
        { status: 409 }
      );
    }

    const mainImage = await uploadHeroImage(featured_image_url, featured_image_alt);
    if (featured_image_url && !mainImage) {
      return NextResponse.json(
        { error: "Hero image could not be fetched or uploaded" },
        { status: 502 }
      );
    }

    const created = await writeClient.create({
      _type: "post",
      title,
      slug: { _type: "slug", current: slug },
      excerpt: excerpt || "",
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt || "",
      publishedAt: publishedAt || new Date().toISOString(),
      ...(mainImage ? { mainImage } : {}),
      body,
    });

    return NextResponse.json(
      {
        success: true,
        id: created._id,
        slug,
        assetId: mainImage?.asset._ref ?? null,
        url: `https://www.airopeway.com/blog/${slug}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[blog/ingest] POST error:", error);
    return NextResponse.json(
      { error: "Failed to create post", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

/** Attach or replace the hero image on an existing post. */
export async function PATCH(request: NextRequest) {
  try {
    if (!authorized(request)) {
      return NextResponse.json(
        { error: "Unauthorized - invalid or missing Bearer token" },
        { status: 401 }
      );
    }

    const data = await request.json();
    const { id, slug, featured_image_url, featured_image_alt } = data ?? {};

    if (!id && !slug) {
      return NextResponse.json({ error: "Provide either id or slug" }, { status: 400 });
    }
    if (!featured_image_url) {
      return NextResponse.json({ error: "Missing featured_image_url" }, { status: 400 });
    }

    let docId: string | undefined = id;
    if (!docId) {
      const found = await writeClient.fetch<{ _id: string } | null>(
        `*[_type == "post" && slug.current == $slug][0]{ _id }`,
        { slug }
      );
      if (!found?._id) {
        return NextResponse.json({ error: `No post found for slug "${slug}"` }, { status: 404 });
      }
      docId = found._id;
    }

    const mainImage = await uploadHeroImage(featured_image_url, featured_image_alt);
    if (!mainImage) {
      return NextResponse.json(
        { error: "Hero image could not be fetched or uploaded" },
        { status: 502 }
      );
    }

    await writeClient.patch(docId).set({ mainImage }).commit();

    return NextResponse.json(
      { success: true, id: docId, assetId: mainImage.asset._ref },
      { status: 200 }
    );
  } catch (error) {
    console.error("[blog/ingest] PATCH error:", error);
    return NextResponse.json(
      { error: "Failed to attach image", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
