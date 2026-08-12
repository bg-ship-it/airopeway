import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/blog/ingest/status
 *
 * Reports whether the ingest route's environment variables are visible to the
 * running function. Booleans only — never values, lengths or prefixes.
 *
 * Exists because a 401 from the ingest route looks identical whether
 * BLOG_INGEST_TOKEN is unset or simply wrong, which made a config mistake
 * invisible without server log access.
 */
export async function GET() {
  return NextResponse.json({
    sanityWriteToken: Boolean(process.env.SANITY_WRITE_TOKEN),
    blogIngestToken: Boolean(process.env.BLOG_INGEST_TOKEN),
  });
}
