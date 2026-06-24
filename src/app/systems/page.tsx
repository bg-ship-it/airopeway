import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { systemPages } from "@/lib/catalog";

const SITE_URL = "https://www.airopeway.com";

export const metadata: Metadata = {
  title: "Beyond AI GTM · 18 other AI systems we ship",
  description:
    "AI GTM is our wedge — but every layer of your business has an AI ropeway. Voice AI, content engines, ops automation, support deflection: 18 production-ready systems.",
  alternates: { canonical: "/systems" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/systems`,
    siteName: "AI Ropeway",
    title: "Beyond AI GTM · 18 other AI systems | AI Ropeway",
    description:
      "Voice AI, content engines, ops automation, support deflection. 18 production-ready systems beyond AI GTM.",
  },
};

const chip = [
  "var(--color-coral)",
  "var(--color-amber)",
  "var(--color-indigo)",
  "var(--color-teal)",
  "var(--color-pink)",
];

export default function SystemsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI systems shipped by AI Ropeway",
    itemListElement: systemPages.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE_URL}/systems/${s.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-3 pt-6 pb-10 md:px-5 md:pt-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 text-center md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mono-label mb-4 text-accent">
              Beyond AI GTM · 18 other systems
            </p>
            <h1 className="font-display text-[clamp(2.3rem,5vw,3.8rem)] font-bold leading-[1.05]">
              AI GTM is the wedge.{" "}
              <span className="text-accent">
                18 more systems for every other layer.
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
              We lead with AI GTM because that&apos;s where ROI lands fastest.
              But every layer of your business has an AI ropeway. Voice AI,
              content engines, ops automation, support deflection — each
              shipped into your existing stack, code in your repo.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#revenue-stack"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas hover:opacity-80"
              >
                See the 8-agent GTM stack <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systemPages.map((s, i) => (
            <Link
              key={s.slug}
              href={`/systems/${s.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(22,21,26,0.35)]"
            >
              <div className="flex items-center justify-between">
                <span
                  className="grid size-9 place-items-center rounded-full font-mono text-xs font-medium text-white"
                  style={{ background: chip[i % chip.length] }}
                >
                  {s.num}
                </span>
                <ArrowUpRight className="size-4 text-ink-faint transition-colors group-hover:text-ink" />
              </div>
              <h2 className="font-display mt-4 text-lg font-semibold">{s.name}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Cta href="/#audit" size="lg">
            Book live demo on your data
          </Cta>
        </div>
      </section>
    </>
  );
}
