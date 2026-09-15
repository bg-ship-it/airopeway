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
    "Transparent AI GTM pricing with published targets. Sprint $3k one-time, Partnership $2.5k/mo, Full Stack $4k/mo + $150–$250 per held meeting, Portfolio custom. No setup fee, no minimum term, you keep the code.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    images: ["/opengraph-image"],
    type: "website",
    url: `${SITE_URL}/pricing`,
    siteName: "AI Ropeway",
    title: "Pricing | AI GTM engines from $3k | AI Ropeway",
    description:
      "Sprint $3k, Partnership $2.5k/mo, Full Stack $4k/mo + per held meeting. No setup fee, no term, you keep the code.",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Pricing | AI GTM engines from $3k | AI Ropeway",
    description:
      "Sprint $3k, Partnership $2.5k/mo, Full Stack $4k/mo + per held meeting. No setup fee, no term, you keep the code.",
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
  outcomes: string[];
  target: string;
};

const tiers: Tier[] = [
  {
    name: "AI GTM Sprint",
    price: "$3,000",
    cadence: "one-time · no term",
    blurb:
      "1 AI SDR engine, built and deployed into your accounts in 14 days. Signal detection + enrichment + personalized outreach. Full system handoff.",
    cta: "Scope a Sprint",
    target: "Founders testing AI GTM",
    features: [
      "1 engine shipped in 14 days",
      "Runs in your accounts from day one",
      "ICP & signal config included",
      "3 months bug-fix support",
      "Free 60-min AI GTM audit first",
    ],
    outcomes: [
      "1,500 prospects sourced",
      "80–150 signal-qualified accounts",
      "4–8 held meetings in the first 30 days live",
    ],
  },
  {
    name: "GTM Partnership",
    price: "$2,500",
    cadence: "/mo · month to month",
    blurb:
      "Dedicated AI GTM engineer. 1 new agent every month. Continuous optimization. Weekly check-ins.",
    cta: "Start Partnership",
    target: "Growing B2B SaaS teams",
    features: [
      "Dedicated AI GTM engineer",
      "Ship a new agent every month",
      "Weekly optimization cycles",
      "Slack channel access",
      "Cancel any month",
    ],
    outcomes: [
      "3,000 prospects sourced / month",
      "150–300 signal-qualified accounts / month",
      "8–15 held meetings / month",
      "$170–$310 per held meeting",
    ],
  },
  {
    name: "Full Stack GTM",
    price: "$4,000",
    cadence: "/mo + $150–$250 per held meeting",
    blurb:
      "All eight agents in production: GTM + content engine + CRM automation. Base covers the build and the engineers; the per-meeting part only bills when a prospect shows up.",
    cta: "Scope Full Stack",
    featured: true,
    target: "Scaling companies",
    features: [
      "All 8 agents in production",
      "$150 per held meeting for SMB targets, $250 for mid-market",
      "Bi-weekly strategy calls, 2 engineers",
      "Founder-led delivery",
      "Quarterly architecture review",
    ],
    outcomes: [
      "6,000 prospects sourced / month",
      "300–600 signal-qualified accounts / month",
      "15–30 held meetings / month",
      "$280–$520 blended per held meeting, falling with volume",
    ],
  },
  {
    name: "Portfolio",
    price: "Custom",
    cadence: "from $8,000/mo · quarterly",
    blurb:
      "One engine per company across a fund's portfolio or a multi-brand group, with a central Revenue Pulse dashboard. Voice AI via AI Placers. Dedicated PM.",
    cta: "Talk to Founder",
    target: "PE/VC portfolios, multi-brand groups",
    features: [
      "One engine per company, shared playbook",
      "Central pipeline reporting across companies",
      "Voice AI add-on (via AI Placers)",
      "Dedicated PM, quarterly business reviews",
      "Priority response SLA",
    ],
    outcomes: [
      "Full Stack targets, per company",
      "Fund-level pipeline view from month two",
    ],
  },
];

// Numbers above are published targets, not guarantees, and are checked against
// live engagements each quarter. Last reviewed: 14 September 2026.
const TARGETS_REVIEWED = "14 September 2026";

const benchmarks: [string, string, string][] = [
  ["Email reply rate", "2–4% typical cold", "8–11% signal-led"],
  ["Reply to held meeting", "20–30%", "35–50%"],
  ["Show rate", "50–60%", "65–75%"],
  ["Time to first held meeting", "~5 months for a new SDR hire", "Day 18–25 from kickoff"],
  ["Cost per held meeting", "$900–$1,500 in-house SDR", "$170–$520 by tier"],
];

const addOns: [string, string, string][] = [
  ["Extra LinkedIn seat", "$300 / mo", "One more profile in the LinkedIn engine, sequenced and monitored."],
  ["Extra sending domain set", "$250 / mo", "3 domains, 9 inboxes, warmed and rotated. Recommended above 6,000 sends a month."],
  ["US market entry pack", "$750 one-time", "US-hosted sending domains, US-timed sequences, US copy review. For teams selling into the US from outside it."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...tiers.map((t) => {
      const numericMatch = t.price.match(/\$([\d,]+)/);
      const offer: Record<string, unknown> = {
        "@type": "Offer",
        url: `${SITE_URL}/pricing`,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: t.cadence,
      };
      if (numericMatch && t.name === "Full Stack GTM") {
        offer.price = numericMatch[1].replace(/,/g, "");
        offer.priceSpecification = {
          "@type": "UnitPriceSpecification",
          priceCurrency: "USD",
          price: "150-250",
          unitText: "per held meeting, in addition to the monthly base",
        };
      } else if (numericMatch) {
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
    {
      // Exactly the four rendered below by faqs.slice(0, 4). Structured data
      // has to match what is on the page; the previous sitewide node claimed
      // six on all 73 URLs.
      "@type": "FAQPage",
      "@id": `${SITE_URL}/pricing#faq`,
      mainEntity: faqs.slice(0, 4).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pricing",
          item: `${SITE_URL}/pricing`,
        },
      ],
    },
  ],
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
              — weekly meetings, real ownership, full system access. No
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

                <div
                  className={cn(
                    "mt-6 rounded-2xl border p-4",
                    tier.featured ? "border-white/15 bg-white/5" : "border-line bg-surface-soft",
                  )}
                >
                  <p
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-wider",
                      tier.featured ? "text-white/55" : "text-ink-faint",
                    )}
                  >
                    Targets
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {tier.outcomes.map((o) => (
                      <li
                        key={o}
                        className={cn("text-xs leading-snug", tier.featured ? "text-white/80" : "text-ink-soft")}
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <p
                  className={cn(
                    "mt-5 font-mono text-[10px] uppercase tracking-wider",
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
          demo on your ICP data. Final scope set in the audit. No setup fee on
          any tier. No minimum term. Targets last reviewed {TARGETS_REVIEWED}.
        </p>
        <p className="mx-auto mt-4 max-w-3xl px-5 text-center text-sm text-ink-soft">
          <strong className="font-semibold text-ink">You keep the code.</strong>{" "}
          Every tier hands over the agents, prompts, Supabase schema and
          Make/n8n scenarios to your GitHub and your accounts. No handoff fee,
          no export request, nothing held on our side.
        </p>
      </section>

      <section className="px-3 py-10 md:px-5">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card rounded-3xl p-7 md:p-8">
              <p className="mono-label mb-3 text-accent">Sprint guarantee</p>
              <h2 className="font-display text-2xl font-bold">
                Four held meetings in 30 days, or month one of Partnership is free.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                If the engine books fewer than four ICP-matched held meetings in
                its first 30 days live, the first month of GTM Partnership is on
                us. Three conditions, because they are the three things that
                sink every outbound pilot: you have supplied the ICP, a working
                sending domain set is in place, and one named person owns
                replies. Meetings are counted by the CRM Auto-Pilot log. Once
                per company.
              </p>
              <p className="mt-3 text-xs text-ink-faint">
                A held meeting is one the prospect attended, matched to your
                ICP, and logged in your CRM by the engine.
              </p>
            </div>
            <div className="card rounded-3xl p-7 md:p-8">
              <p className="mono-label mb-3 text-accent">Switching from a retainer</p>
              <h2 className="font-display text-2xl font-bold">
                Locked into an outbound agency term? Ship your own engine in 14 days.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                A Sprint builds the engine inside your accounts for $3,000 while
                your current contract runs down. If you are inside a term with
                another vendor, we credit up to $1,000 of their setup fee
                against Partnership month one on proof of contract. Month to
                month from day one. Nothing to migrate later, because it was
                never on our side.
              </p>
              <p className="mt-3 text-xs text-ink-faint">
                Compare the models in the{" "}
                <Link href="/hire-an-sdr" className="text-accent hover:underline">
                  hire, outsource or build
                </Link>{" "}
                breakdown.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-10 md:px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-2 text-center text-3xl font-bold">
            The funnel behind the targets
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-ink-muted">
            Baseline is what founders report before an engine; the right column
            is the range we build to. Targets, not guarantees, reviewed each
            quarter against live engagements. Last reviewed {TARGETS_REVIEWED}.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-ink-soft">&nbsp;</th>
                  <th className="px-4 py-3 text-left font-medium text-ink-soft">Baseline</th>
                  <th className="px-4 py-3 text-left font-medium text-accent">With the engine</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map(([k, a, b]) => (
                  <tr key={k} className="border-t border-line">
                    <td className="px-4 py-3 font-medium text-ink">{k}</td>
                    <td className="px-4 py-3 text-ink-muted">{a}</td>
                    <td className="px-4 py-3 text-ink-soft">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-faint">
            In-house cost per meeting assumes a fully loaded SDR near $96k a
            year booking 8–12 held meetings a month. The UK version of that
            math is in{" "}
            <Link href="/blog/what-a-45k-sdr-actually-costs" className="text-accent hover:underline">
              what a £45k SDR actually costs
            </Link>
            . Run your own numbers in the{" "}
            <Link href="/roi-calculator" className="text-accent hover:underline">
              ROI calculator
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-3 py-10 md:px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-6 text-center text-3xl font-bold">Add-ons</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {addOns.map(([name, price, body]) => (
              <div key={name} className="card rounded-3xl p-6">
                <h3 className="font-display text-lg font-semibold">{name}</h3>
                <p className="mt-1 font-display text-xl font-bold text-accent">{price}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-ink-faint">
            Selling into the US from India? The{" "}
            <Link href="/us-market-entry-gtm" className="text-accent hover:underline">
              US market entry page
            </Link>{" "}
            has the 14-day plan and what the pack changes.
          </p>
        </div>
      </section>

      <section className="px-3 py-16 md:px-5">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Full system access, day one",
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
