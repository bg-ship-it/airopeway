import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { industryPages } from "@/lib/catalog";

const SITE_URL = "https://www.airopeway.com";

export const metadata: Metadata = {
  title: "AI Solutions by Industry",
  description:
    "Industry-specific AI playbooks with proven outcomes — retail, healthcare, finance, SaaS, e-commerce, logistics, real estate, and more. See how AI Ropeway deploys AI for your industry.",
  alternates: { canonical: "/industries" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/industries`,
    siteName: "AI Ropeway",
    title: "AI Solutions by Industry | AI Ropeway",
    description:
      "Industry-specific AI playbooks with proven outcomes across 16+ industries.",
  },
};

export default function IndustriesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries served by AI Ropeway",
    itemListElement: industryPages.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `AI for ${i.name}`,
      url: `${SITE_URL}/industries/${i.id}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-3 pt-28 pb-10 md:px-5 md:pt-36">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 text-center md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mono-label mb-4 text-accent">Industry Playbooks</p>
            <h1 className="font-display text-[clamp(2.3rem,5vw,3.8rem)] font-bold leading-[1.05]">
              AI that works for your specific industry
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
              Generic AI advice doesn&apos;t work. We deploy industry-specific AI
              playbooks with measurable, proven outcomes. Find yours below.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industryPages.map((i) => (
            <Link
              key={i.id}
              href={`/industries/${i.id}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(22,21,26,0.35)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl" aria-hidden>
                  {i.icon}
                </span>
                <ArrowUpRight className="size-4 text-ink-faint transition-colors group-hover:text-ink" />
              </div>
              <h2 className="font-display mt-4 text-lg font-semibold">
                AI for {i.name}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {i.challenge}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Cta href="/#audit" size="lg">
            Get Your Industry AI Audit
          </Cta>
        </div>
      </section>
    </>
  );
}
