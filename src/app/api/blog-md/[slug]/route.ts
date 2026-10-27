// Serves the Markdown twin of a Sanity-rendered blog post. Reached as
// /blog/<slug>.md through the rewrite in next.config.ts, which is where the
// public URL lives — /blog/[slug] is already a page, and a segment cannot hold
// both a page and a route handler.
//
// Only Sanity posts have a twin. The ~19 posts that live as their own route
// under src/app/blog/<slug>/ keep their prose in JSX with no extractable
// source, so they 404 here by design rather than serving a stub.
//
// Mirrors the page's own caching (revalidate = 600, prerendered from
// generateStaticParams) so a twin never reports content older than its page.

import { getPost, getAllSlugs } from "@/lib/blog";
import { staticPosts } from "@/lib/static-posts";
import { portableTextToMarkdown } from "@/lib/portable-text-to-markdown";

const SITE_URL = "https://www.airopeway.com";

// Five slugs exist in Sanity AND as their own route under src/app/blog/<slug>/.
// The static segment wins, so the page a reader sees is the JSX one while Sanity
// may hold an older copy. Serving a Sanity-derived twin for those would publish
// a .md that disagrees with its own canonical page, so they 404 like the rest of
// the code routes.
const CODE_ROUTE_SLUGS = new Set(staticPosts.map((p) => p.slug));

export const revalidate = 600;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.filter((slug) => !CODE_ROUTE_SLUGS.has(slug)).map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  // Next 16 passes params as a promise; awaiting it is required.
  const { slug } = await params;
  const post = CODE_ROUTE_SLUGS.has(slug) ? null : await getPost(slug);

  if (!post) {
    return new Response(`No post at /blog/${slug}\n`, {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const url = `${SITE_URL}/blog/${slug}`;
  const published = post.publishedAt?.slice(0, 10);
  const updated = (post.updatedAt ?? post.publishedAt)?.slice(0, 10);

  const head = [`# ${post.title}`, "", `URL: ${url}`];
  if (post.authorName) head.push(`Author: ${post.authorName}`);
  if (published) head.push(`Published: ${published}`);
  if (updated && updated !== published) head.push(`Updated: ${updated}`);
  if (post.categories.length > 0) head.push(`Categories: ${post.categories.join(", ")}`);

  const excerpt = post.seoDescription ?? post.excerpt;
  const body = portableTextToMarkdown(post.body);

  const doc =
    [
      head.join("\n"),
      excerpt ? `> ${excerpt}` : null,
      body || "_This post has no body content._",
      `---\n\nCanonical page: ${url}\nAll posts: ${SITE_URL}/blog\nSite summary for agents: ${SITE_URL}/llms.txt`,
    ]
      .filter(Boolean)
      .join("\n\n") + "\n";

  return new Response(doc, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      // Same window the page revalidates on, so a crawler that fetches both
      // does not see them disagree.
      "cache-control": "public, max-age=0, s-maxage=600, stale-while-revalidate=86400",
    },
  });
}
