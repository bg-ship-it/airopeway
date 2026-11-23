import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { Reveal } from "@/components/reveal";
import { BOOK_URL, faqs } from "@/lib/content";
import { cn } from "@/lib/cn";
import { tiers } from "@/lib/pricing";

const SITE_URL = "https://www.airopeway.com";

export const metadata: Metadata = {
  title: "Pricing · $250 per held meeting",
  description:
    "AI GTM pricing in full. Results as a Service: $250 per held meeting, setup refunded under five. Or own the engine: Sprint $3k once, Partnership $2.5k/mo.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    images: ["/opengraph-image"],
    type: "website",
    url: `${SITE_URL}/pricing`,
    siteName: "AI Ropeway",
    title: "Pricing | Results as a Service from $250 a meeting | AI Ropeway",
    description:
      "Pay per held meeting with Results as a Service, or own the engine: Sprint $3k, Partnership $2.5k/mo. No term.",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Pricing | Results as a Service from $250 a meeting | AI Ropeway",
    description:
      "Pay per held meeting with Results as a Service, or own the engine: Sprint $3k, Partnership $2.5k/mo. No term.",
  },
};

// Numbers above are published targets, not guarantees, and are checked against
// live engagements each quarter. Last reviewed: 14 September 2026.
const TARGETS_REVIEWED = "14 September 2026";

const benchmarks: [string, string, string][] = [
  ["Email reply rate", "2–4% typical cold", "8–11% signal-led"],
  ["Reply to held meeting", "20–30%", "35–50%"],
  ["Show rate", "50–60%", "65–75%"],
  ["Time to first held meeting", "~5 months for a new SDR hire", "Day 18–25 from kickoff"],
  ["Cost per held meeting", "$900–$1,500 in-house SDR", "$250 on RaaS · $170–$310 on Partnership"],
];

const addOns: [string, string, string][] = [
  ["Extra LinkedIn seat", "$300 / mo", "One more profile in the LinkedIn engine, sequenced and monitored."],
  ["Extra sending domain set", "$250 / mo", "3 domains, 9 inboxes, warmed and rotated. Recommended above 6,000 sends a month."],
  ["US market entry pack", "$750 one-time", "US-hosted sending domains, US-timed sequences, US copy review. For teams selling into the US from outside it."],
];

const comparisons: [string, string, string][] = [
  ["/blog/11x-alternative", "vs 11x", "Subscription AI SDR, 12-month contracts"],
  ["/blog/aisdr-alternative", "vs AiSDR", "Subscription AI SDR, per-tier pricing"],
  ["/blog/artisan-alternative", "vs Artisan", "AI BDR platform, Enterprise on annual"],
  ["/blog/revengineer-alternative", "vs RevEngineer", "Retainer growth arm, setup fee + 3–12 month terms"],
  ["/blog/ai-ropeway-vs-clay", "vs Clay", "Enrichment workbook you configure"],
  ["/blog/ai-ropeway-vs-apollo", "vs Apollo", "Data + sequencing, per seat"],
  ["/blog/selling-com-alternative", "vs Selling.com", "Contact database + dialer, annual"],
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
      if (t.perMeeting) {
        offer.priceSpecification = {
          "@type": "UnitPriceSpecification",
          priceCurrency: "USD",
          price: t.perMeeting,
          unitText: "per held meeting",
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
            <p className="mono-label mb-4 text-accent">Pricing · Results as a Service</p>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.05]">
              Pay for <span className="text-accent">meetings,</span> not
              promises.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
              Start with Results as a Service:{" "}
              <strong className="font-semibold text-ink">
                $250 for each meeting a prospect attends
              </strong>
              , setup refunded if we book fewer than five. Once it works, own
              the engine with a Sprint, or have us run it on Partnership. Every
              price is on this page.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Cta href="/#audit" size="lg">
                Book a RaaS fit call
              </Cta>
              <Cta href="/results-as-a-service" variant="ghost" size="lg" showArrow={false}>
                How RaaS works
              </Cta>
            </div>
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
                    Start here
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

                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "focus-ring mt-5 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors",
                    tier.featured
                      ? "bg-white text-ink hover:bg-white/90"
                      : "btn-primary",
                  )}
                >
                  {tier.cta}
                  <ArrowRight className="size-4" />
                </a>
                {tier.more?.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    {...(m.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className={cn(
                      "mt-3 text-center text-xs font-semibold underline-offset-2 hover:underline",
                      tier.featured ? "text-white/75" : "text-accent",
                    )}
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl px-5 text-center text-xs text-ink-faint">
          Every engagement starts with a free 60-minute AI GTM audit and live
          demo on your ICP data. Final scope set in the audit. No setup fee
          except the RaaS one, and that comes back under five held meetings.
          No minimum term. Targets last reviewed {TARGETS_REVIEWED}.
        </p>
        <p className="mx-auto mt-4 max-w-3xl px-5 text-center text-sm text-ink-soft">
          <strong className="font-semibold text-ink">You keep the code.</strong>{" "}
          Sprint, Partnership and custom plans hand over the agents, prompts,
          Supabase schema and Make/n8n scenarios to your GitHub and your
          accounts from day one. On RaaS the engine runs in ours for 45 days,
          then moves to you for $3,000.
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
                breakdown, or against the cost of a{" "}
                <Link href="/gtm-engineer" className="text-accent hover:underline">
                  GTM engineer on payroll
                </Link>
                .
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
            , or see what our own engine produced in Q2 2026 in{" "}
            <Link href="/blog/ai-gtm-strategy-pipeline" className="text-accent hover:underline">
              how to build an AI GTM strategy
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-3 py-10 md:px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-2 text-center text-3xl font-bold">How we compare</h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm text-ink-muted">
            Six honest comparisons, each with the competitor&rsquo;s current pricing, their
            setup fee and minimum term, and a section on who should choose them over us.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map(([href, name, note]) => (
              <Link key={href} href={href} className="card rounded-2xl p-5 transition-colors hover:border-line-strong">
                <p className="font-display text-base font-semibold text-ink">{name}</p>
                <p className="mt-1 text-xs text-ink-muted">{note}</p>
              </Link>
            ))}
          </div>
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
