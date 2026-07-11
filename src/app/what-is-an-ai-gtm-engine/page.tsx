import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "what-is-an-ai-gtm-engine";
const TITLE = "What is an AI GTM engine?";
const DESCRIPTION =
  "An AI GTM engine is a system of coordinated AI agents that detect buying signals, enrich accounts, write personalized outreach, and triage replies — custom-built for your ICP and deployed in your own infrastructure. Full definition, components, and cost.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/${SLUG}`,
    siteName: "AI Ropeway",
    title: `${TITLE} | AI Ropeway`,
    description: DESCRIPTION,
    authors: ["Bharat Gulati"],
  },
  twitter: { card: "summary_large_image", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION },
};

const glossary = [
  { term: "Signal-based outbound", def: "Outreach triggered by a real buying signal — a funding round, a job change, a hiring post, a tech-stack move — instead of a static list. The signal decides who to contact and what to say." },
  { term: "AI SDR engine", def: "The subset of an AI GTM engine that handles top-of-funnel: intent detection, enrichment, inbox warmup, and deliverability. It replaces the manual work of a sales development rep, not the strategy." },
  { term: "Reply triage", def: "Automatic classification of every inbound reply into hot, nurture, objection, or unsubscribe — routing the ones that need a human to a human, and handling the rest without one." },
];

const faqs = [
  { q: "What is an AI GTM engine?", a: "An AI GTM engine is a system of AI agents that automate go-to-market activities — detecting buying signals, enriching leads, writing personalized outreach, and triaging replies. Unlike SaaS tools, an AI GTM engine is custom-built for your ICP and deployed in your own infrastructure, so you own the code." },
  { q: "How is it different from a SaaS tool like Clay or Apollo?", a: "SaaS tools are rented platforms you pay for monthly and configure yourself. An AI GTM engine is a custom system built for your specific ICP and shipped into your own repo and accounts. You own the code; there are no per-seat fees; and tools like Clay can run as a data layer inside the engine." },
  { q: "How much does an AI GTM engine cost?", a: "With AI Ropeway it starts at $3,000 for a one-time 14-day Sprint (one engine). Ongoing partnerships run $2,500–$5,000/month for continuous optimization and new agents. Every engagement starts with a free 60-minute audit." },
  { q: "Who needs one?", a: "B2B SaaS and services founders at roughly $1M–$20M ARR running founder-led sales who want 20–60 qualified meetings a month without hiring a team of SDRs." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Article", "DefinedTerm"],
      "@id": `${SITE_URL}/${SLUG}#article`,
      name: "AI GTM engine",
      headline: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}/${SLUG}`,
      author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: `${SITE_URL}/${SLUG}`,
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "What is an AI GTM engine?", item: `${SITE_URL}/${SLUG}` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/${SLUG}#faq`,
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-4 pt-20 pb-24 md:pt-28">
        <header className="mb-10">
          <p className="mono-label mb-4 text-accent">Definition</p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.06]">What is an AI GTM engine?</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            An <strong className="text-ink">AI GTM engine</strong> is a system of coordinated AI agents that automate go-to-market: detecting buying signals, enriching accounts, writing personalized outreach, and triaging replies. Unlike a SaaS tool you rent, an AI GTM engine is custom-built for your ICP and deployed in your own infrastructure — so you own the code from day one.
          </p>
        </header>

        <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
          <h2 className="font-display mt-8 mb-2 text-2xl font-bold text-ink">SaaS tool vs AI GTM engine</h2>
          <p>
            A SaaS tool is a rented platform: you pay per seat every month, configure it yourself, and lose the work the day you cancel. An AI GTM engine is the opposite — a system built around your specific ICP, signals, CRM, and inbox, shipped into your own repo and accounts. Best-in-class tools like Clay or Apollo don&apos;t compete with the engine; they run as data layers <em>inside</em> it.
          </p>

          <h2 className="font-display mt-10 mb-2 text-2xl font-bold text-ink">What it is made of</h2>
          <p>A complete engine spans three layers — an AI SDR engine (signal detection, enrichment, deliverability), signal-based outbound (sourcing, personalized sequences, reply triage), and revenue-ops automation (CRM hygiene, pipeline analytics). AI Ropeway ships these as eight coordinated agents. The full breakdown lives in the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link>.</p>

          <h2 className="font-display mt-10 mb-2 text-2xl font-bold text-ink">What it costs</h2>
          <p>With AI Ropeway, a one-time 14-day Sprint starts at $3,000; ongoing partnerships run $2,500–$5,000/month. Run your own numbers with the <Link href="/roi-calculator" className="text-accent hover:underline">ROI calculator</Link>, or get the <Link href="/ai-gtm-playbook" className="text-accent hover:underline">free 14-day build plan</Link>.</p>

          <h2 className="font-display mt-10 mb-3 text-2xl font-bold text-ink">Related terms</h2>
          <div className="space-y-3">
            {glossary.map((g) => (
              <div key={g.term} className="rounded-2xl border border-line bg-surface p-5">
                <p className="font-display font-semibold text-ink">{g.term}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{g.def}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-line bg-surface p-5">
                <summary className="cursor-pointer font-medium text-ink">{f.q}</summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>

          <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
            <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">See one built on your data</h2>
            <p className="mx-auto mb-6 max-w-xl text-ink-soft">The free 60-minute audit ends with a live demo of an engine running on your actual ICP.</p>
            <Cta href="/#audit" size="lg">Book your free AI GTM audit</Cta>
          </section>
        </div>
      </article>
    </>
  );
}
