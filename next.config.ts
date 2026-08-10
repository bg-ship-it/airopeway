import type { NextConfig } from "next";

// URLs from the pre-Next.js static site. Google still has them indexed, so they
// must 308 to the closest current page instead of 404ing.
// Old /services/<x> became /systems/<y>; old /industries/ai-for-<x> became /industries/<x>.
const legacy: Record<string, string> = {
  "/services": "/systems",
  "/services/ai-sdr-as-a-service": "/systems/sales-automation-and-revops",
  "/services/ai-lead-generation": "/systems/sales-automation-and-revops",
  "/services/whatsapp-ai-outreach": "/systems/sales-automation-and-revops",
  "/services/ai-crm-integration": "/systems/sales-automation-and-revops",
  "/services/ai-gtm-engine": "/systems/ai-gtm-strategy-builder",
  "/services/ai-export-accelerator": "/systems/ai-gtm-strategy-builder",
  "/services/ai-cso-as-a-service": "/systems/ai-consultation-and-advisory",
  "/services/ai-content-engine": "/systems/ai-content-media-and-growth",
  "/services/ai-cmo-as-a-service": "/systems/ai-content-media-and-growth",
  "/services/ai-brand-voice-positioning": "/systems/ai-content-media-and-growth",
  "/services/ai-social-media-management": "/systems/ai-content-media-and-growth",
  "/services/ai-seo-search-strategy": "/systems/ai-content-media-and-growth",
  "/services/ai-operations-audit": "/systems/ai-automation-and-workflow",
  "/services/ai-competitive-intelligence": "/systems/ai-business-intelligence",
  "/services/ai-business-intelligence": "/systems/ai-business-intelligence",
  "/services/ai-data-analytics": "/systems/ai-data-analysis",
  "/services/ai-transformation-roadmap": "/systems/ai-business-transformation",
  "/industries/ai-for-retail": "/industries/retail",
  "/industries/ai-for-healthcare": "/industries/healthcare",
  "/industries/ai-for-finance": "/industries/finance",
  "/industries/ai-for-ecommerce": "/industries/ecommerce",
  "/industries/ai-for-saas": "/industries/saas",
  "/industries/ai-for-real-estate": "/industries/realestate",
  "/industries/ai-for-education": "/industries/education",
  "/industries/ai-for-logistics": "/industries/logistics",
  "/industries/ai-for-d2c-brands": "/industries/d2c",
  "/industries/ai-for-hospitality": "/industries/hospitality",
  "/industries/ai-for-manufacturing": "/industries/manufacturing",
  "/industries/ai-for-food-tech": "/industries/foodtech",
  "/industries/ai-for-legal": "/industries/legal",
  "/industries/ai-for-travel": "/industries/travel",
  "/industries/ai-for-agriculture": "/industries/agriculture",
  "/industries/ai-for-franchise": "/industries/franchise",
  "/contact": "/#audit",
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...Object.entries(legacy).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      // Any old service URL not mapped above still lands on the section index.
      { source: "/services/:path*", destination: "/systems", permanent: true },
    ];
  },
  // /privacy-policy and /terms are the original static pages, kept at their
  // indexed URLs by serving the HTML in public/ without the .html suffix.
  async rewrites() {
    return [
      { source: "/privacy-policy", destination: "/privacy-policy.html" },
      { source: "/terms", destination: "/terms.html" },
    ];
  },
};

export default nextConfig;
