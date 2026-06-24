import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/cn";

const SITE_URL = "https://www.airopeway.com";

export const metadata: Metadata = {
  title: "Pricing · AI GTM engines from $3k",
  description:
    "Transparent AI GTM pricing. Sprint $3k one-time, Partnership $2.5k/mo, Full Stack $5k/mo, Enterprise custom. Free 60-min audit + live demo on your data first.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/pricing`,
    siteName: "AI Ropeway",
    title: "Pricing | AI GTM engines from $3k | AI Ropeway",
    description:
      "Transparent AI GTM pricing. Sprint, Partnership, Full Stack, Enterprise. Free 60-min audit first.",
  },
};

type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  cta: string;
  featured?: boolean;
  features: string[];
  target: string;
};

const tiers: Tier[] = [
  {
    name: "AI GTM Sprint",
    price: "$3,000",
    cadence: "one-time",
    blurb:
      "1 AI SDR engine, built and deployed in 14 days. Signal detection + enrichment + personalized outreach. Full code handoff.",
    cta: "Scope a Sprint",
    target: "Founders testing AI GTM",
    features: [
      "1 system shipped in 14 days",
      "Full code handoff to your repo",
      "ICP & signal config included",
      "3 months bug-fix support",
      "Free 60-min AI GTM audit first",
    ],
  },
  {
    name: "GTM Partnership",
    price: "$2,500",
    cadence: "/mo · ongoing",
    blurb:
      "Dedicated AI GTM engineer. 1 new system every month. Continuous optimization. Weekly check-ins.",
    cta: "Start Partnership",
    target: "Growing B2B SaaS teams",
    features: [
      "Dedicated AI GTM engineer",
      "Ship a new agent every month",
      "Weekly optimization cycles",
      "Slack channel access",
      "Cancel anytime",
    ],
  },
  {
    name: "Full Stack GTM",
    price: "$5,000",
    cadence: "/mo · 2 engineers",
    blurb:
      "Full Revenue Stack live: GTM + content engine + CRM automation. Bi-weekly strategy calls. Founder-led.",
    cta: "Scope Flagship",
    featured: true,
    target: "Scaling companies",
    features: [
      "All 8 agents in production",
      "GTM + content + RevOps",
      "Bi-weekly strategy calls",
      "Founder-led delivery",
      "Quarterly architecture review",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "multi-system",
    blurb:
      "Multi-system deployment + Voice AI bundle (via AI Placers). Dedicated PM. Quarterly business reviews.",
    cta: "Talk to Founder",
    target: "Mid-market & enterprise",
    features: [
      "Multi-system custom build",
      "Voice AI add-on (via AI Placers)",
      "Dedicated PM",
      "Quarterly business reviews",
      "Priority response SLA",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": tiers.map((t) => {
    const numericMatch = t.price.match(/\$([\d,]+)/);
    const offer: Record<string, unknown> = {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: t.cadence,
    };
    if (numericMatch) {
      offer.price = numericMatch[1].replace(/,/g, "");
    } else {
      offer.priceSpecification = {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: "0",
        description: "Custom pricing",
      };
    }
    return {
      "@type": "Service",
      "@id": `${SITE_URL}/pricing#${t.name.replace(/\s+/g, "-").toLowerCase()}`,
      name: t.name,
      description: t.blurb,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: ["IN", "AU", "GB", "US", "CA"],
      audience: { "@type": "Audience", audienceType: t.target },
      offers: offer,
    };
  }),
};

export default function PricingPage() {
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
            <p className="mono-label mb-4 text-accent">Pricing</p>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.05]">
              Transparent. <span className="text-accent">Specific.</span> No
              decks before the price.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
              AI GTM engines that work 24/7. Founder works{" "}
              <strong className="font-semibold text-ink">
                alongside your team
              </strong>{" "}
              — weekly meetings, real ownership, code in your repo. No
              offshoring layers. No junior-dev surprises. Every engagement
              starts with a free 60-min audit and live demo on your ICP data.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.06}>
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
                    Flagship
                  </span>
                )}
                <h2 className="font-display text-xl font-bold">{tier.name}</h2>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-bold">
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "text-xs",
                      tier.featured ? "text-white/55" : "text-ink-muted",
                    )}
                  >
                    {tier.cadence}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    tier.featured ? "text-white/65" : "text-ink-muted",
                  )}
                >
                  {tier.blurb}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          tier.featured ? "text-amber" : "text-teal",
                        )}
                      />
                      <span
                        className={tier.featured ? "text-white/85" : "text-ink-soft"}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className={cn(
                    "mt-6 font-mono text-[10px] uppercase tracking-wider",
                    tier.featured ? "text-white/45" : "text-ink-faint",
                  )}
                >
                  For: {tier.target}
                </p>

                <Link
                  href="/#audit"
                  className={cn(
                    "focus-ring mt-5 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors",
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
          Every engagement starts with a free 60-minute AI GTM audit and live
          demo on your ICP data. Final scope set in the audit.
        </p>
      </section>

      <section className="px-3 py-16 md:px-5">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Code in your repo, day one",
              body: "Every system ships to your GitHub. No SaaS lock-in, no per-seat fees, no “data held hostage” on the way out.",
            },
            {
              title: "Live demo on your ICP, first call",
              body: "We don’t pitch slides. We demo a working AI GTM engine on your real ICP data — before you commit anything.",
            },
            {
              title: "Founder-led, 24/7 agents",
              body: "Bharat ships alongside your team weekly. Agents run round-the-clock. No agency middle layer, no juniors learning on your dime.",
            },
          ].map((item) => (
            <div key={item.title} className="card rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">
                {item.title}
              </h3>
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
            <div
              key={item.q}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="font-medium text-ink">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Cta href="/#audit" size="lg">
            Book live demo on your data
          </Cta>
        </div>
      </section>
    </>
  );
}
