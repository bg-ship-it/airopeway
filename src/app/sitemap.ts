import type { MetadataRoute } from "next";
import { systemPages, industryPages } from "@/lib/catalog";

const SITE_URL = "https://www.airopeway.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/systems`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

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

  return [...staticPages, ...systemUrls, ...industryUrls];
}
