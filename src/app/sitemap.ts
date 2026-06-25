import type { MetadataRoute } from "next";
import { systemPages, industryPages } from "@/lib/catalog";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://www.airopeway.com";

const STATIC_BLOG_POSTS = [
  "ai-gtm-engines-complete-guide",
  "intent-watcher-ai-buying-signals",
  "account-mapper-ai-account-enrichment",
  "inbox-operator-cold-email-deliverability",
  "lead-sourcer-signal-based-outbound",
  "sequence-composer-ai-personalized-outreach",
  "reply-triager-ai-reply-classification",
  "crm-auto-pilot-ai-crm-automation",
  "revenue-pulse-pipeline-analytics",
  "ai-ropeway-vs-clay",
  "ai-ropeway-vs-apollo",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const lastModBlog = new Date("2026-06-25");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/systems`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/founder`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const staticBlogUrls: MetadataRoute.Sitemap = STATIC_BLOG_POSTS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: lastModBlog,
    changeFrequency: "monthly",
    priority: slug === "ai-gtm-engines-complete-guide" ? 0.9 : 0.7,
  }));

  const systemUrls: MetadataRoute.Sitemap = systemPages.map((s) => ({
    url: `${SITE_URL}/systems/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryUrls: MetadataRoute.Sitemap = industryPages.map((i) => ({
    url: `${SITE_URL}/industries/${i.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const posts = await getAllPosts().catch(() => []);
  const cmsBlogUrls: MetadataRoute.Sitemap = posts
    .filter((p) => !STATIC_BLOG_POSTS.includes(p.slug))
    .map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticPages, ...staticBlogUrls, ...systemUrls, ...industryUrls, ...cmsBlogUrls];
}
