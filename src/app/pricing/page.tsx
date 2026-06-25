import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Every engagement starts with a free AI audit. Deploy a focused sprint or embed AI Ropeway as your ongoing partner — priced to ROI, not strategy decks.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: "https://www.airopeway.com/pricing",
    siteName: "AI Ropeway",
    title: "Pricing | AI Ropeway",
    description:
      "Every engagement starts with a free AI audit. Priced to ROI, not strategy decks.",
  },
};

type Tier = {
  name: string;
  price: string;
  cadence?: string;
  blurb: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "AI Audit",
    price: "Free",
    blurb: "Start here. A 60-minute deep-dive that quantifies your opportunity.",
    cta: "Book Free Audit",
    features: [
      "60-minute operations deep-dive",
      "Top 3–5 AI opportunities, ranked by ROI",
      "Quantified time, cost & revenue impact",
      "Custom deployment roadmap",
      "No commitment, no spam",
    ],
  },
  {
    name: "Deployment Sprint",
    price: "From $4,000",
    cadence: "/ 60-day sprint",
    blurb: "We deploy a focused set of AI systems into your existing stack.",
    cta: "Scope My Sprint",
    featured: true,
    features: [
      "Everything in AI Audit",
      "3–5 AI systems deployed in 60 days",
      "Integration with your CRM & tools",
      "Weekly optimisation & reporting",
      "Team enablement & handover",
      "Measurable ROI within 30–60 days",
    ],
  },
  {
    name: "Embedded AI Partner",
    price: "Custom",
    blurb: "Ongoing partnership — we run and expand your AI as you scale.",
    cta: "Talk to Us",
    features: [
      "Everything in Deployment Sprint",
      "Access to all 18 AI systems",
      "Dedicated deployment team",
      "AI Employees & RevOps automation",
      "Governance, security & change management",
      "Quarterly roadmap & expansion",
    ],
  },
];

const pricingFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.slice(0, 4).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqJsonLd) }}
      />
      <section className="px-3 pt-28 pb-10 md:px-5 md:pt-36">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 text-center md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mono-label mb-4 text-accent">Pricing</p>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.05]">
              Priced to ROI, not strategy decks.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
              Every engagement starts with a free audit. You only invest once
              we&apos;ve shown you exactly where AI pays for itself.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-7 md:p-8",
                  tier.featured
                    ? "bg-ink text-white shadow-[0_30px_60px_-30px_rgba(22,21,26,0.6)]"
                    : "card",
                )}
              >
                {tier.featured && (
                  <span
                    className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                    style={{ background: "var(--color-accent)" }}
                  >
                    Most popular
                  </span>
                )}
                <h2 className="font-display text-2xl font-bold">{tier.name}</h2>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold">
                    {tier.price}
                  </span>
                  {tier.cadence && (
                    <span
                      className={cn(
                        "text-sm",
                        tier.featured ? "text-white/55" : "text-ink-muted",
                      )}
                    >
                      {tier.cadence}
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    tier.featured ? "text-white/65" : "text-ink-muted",
                  )}
                >
                  {tier.blurb}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          tier.featured ? "text-amber" : "text-teal",
                        )}
                      />
                      <span className={tier.featured ? "text-white/85" : "text-ink-soft"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#audit"
                  className={cn(
                    "focus-ring mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-colors",
                    tier.featured
                      ? "bg-white text-ink hover:bg-white/90"
                      : "btn-primary",
                  )}
                >
                  {tier.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl px-5 text-center text-xs text-ink-faint">
          Figures are indicative. Final scope and investment are set together in
          your free AI audit — sized to the ROI we can prove, not a fixed package.
        </p>
      </section>

      <section className="px-3 py-16 md:px-5">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              title: "ROI-first, always",
              body: "We quantify the opportunity before you spend a rupee or dollar. If the numbers don’t work, we’ll tell you.",
            },
            {
              title: "No rip-and-replace",
              body: "We deploy into your existing CRM, helpdesk and tools. No long migrations, no disruption.",
            },
            {
              title: "Results in 30–60 days",
              body: "Sprints are built to show measurable impact fast. Some systems show ROI in week one.",
            },
          ].map((item) => (
            <div key={item.title} className="card rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <h2 className="font-display mb-9 text-center text-3xl font-bold">
          Questions before you book?
        </h2>
        <div className="space-y-3">
          {faqs.slice(0, 4).map((item) => (
            <div key={item.q} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Cta href="/#audit" size="lg">
            Claim Your Free AI Audit
          </Cta>
        </div>
      </section>
    </>
  );
}
