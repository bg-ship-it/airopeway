// Posts that were consolidated into another URL. The document still exists in
// Sanity, but next.config.ts redirects the slug, so the page never renders.
//
// Single source of truth on purpose: next.config.ts builds the redirects from
// this map, and the sitemap and /blog listing filter against it. Keeping the
// redirect and the exclusions in separate lists is what let a dead URL stay
// advertised in both places after the first merge.
export const mergedPosts: Record<string, string> = {
  "how-to-build-an-ai-gtm-strategy-that-books-meetings-on-autopilot":
    "/blog/ai-gtm-strategy-pipeline",
};

export const mergedPostSlugs = new Set(Object.keys(mergedPosts));
