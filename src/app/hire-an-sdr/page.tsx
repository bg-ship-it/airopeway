import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "hire-an-sdr";
const TITLE = "Hire an SDR, or build the engine?";
const DESCRIPTION =
  "Four ways to add outbound pipeline: hire an SDR, outsource, hire a GTM engineer, or build an engine you own. The real first-year math on each.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    images: ["/opengraph-image"],
    type: "article",
    url: `${SITE_URL}/${SLUG}`,
    siteName: "AI Ropeway",
    title: `${TITLE} | AI Ropeway`,
    description: DESCRIPTION,
    authors: ["Bharat Gulati"],
  },
  twitter: { images: ["/opengraph-image"], card: "summary_large_image", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION },
};

const options = [
  {
    name: "Hire an SDR",
    cost: "£70k–£90k",
    unit: "first year, fully loaded",
    detail: "Base sits near £39,500 with median OTE around £59,600. Add employer NI, pension, tooling at £8k–£15k per seat, and management time.",
    catch: "Five months to ramp. A 34% chance they leave inside twelve months.",
  },
  {
    name: "Outsource to an agency",
    cost: "$3k–$14k",
    unit: "per month, plus per-meeting fees",
    detail: "Nearshore to US-based, billed roughly $300 to $600 per held meeting on top of the retainer.",
    catch: "You rent the team and the lists. Nothing stays when the contract ends.",
  },
  {
    name: "Build the engine",
    cost: "$3k once",
    unit: "or $2.5k–$5k per month",
    detail: "A 14-day Sprint ships one engine into your own repo and accounts. Partnership and Full Stack add a new system each month.",
    catch: "You own the code. It keeps running whether or not we do.",
    win: true,
  },
];

const rows: [string, string, string, string][] = [
  ["Time to first meeting", "~5 months (ramp)", "2–4 weeks", "14 days"],
  ["What you own after", "Nothing, if they leave", "Nothing", "The code, forever"],
  ["Cost per held meeting", "Front-loaded, fixed", "$300–$600 on top", "Falls as volume rises"],
  ["Scales by", "Hiring another rep", "Buying more retainer", "Running the same engine wider"],
  ["Reply handling", "The rep, in working hours", "The agency's inbox", "Reply Triager, continuously"],
  ["CRM hygiene", "Manual, usually skipped", "Not included", "CRM Auto-Pilot"],
  ["Reporting", "Whatever the rep logs", "Agency's dashboard", "Revenue Pulse"],
  ["If you stop", "Redundancy and re-hire", "Sending stops", "Engine keeps running"],
];

const faqs = [
  {
    q: "What does an SDR actually cost in the UK?",
    a: "Base salary sits around £39,500 with median on-target earnings near £59,600. Once you add employer National Insurance, pension, a software stack at £8,000 to £15,000 per seat per year, and management time, a £45,000 hire lands north of £70,000 fully loaded in year one — before they book a qualified meeting independently. The full breakdown is in our teardown of what a £45k SDR actually costs.",
  },
  {
    q: "Is outsourcing cheaper than hiring?",
    a: "On paper, sometimes. An outsourced SDR agency runs roughly $3,000 to $14,000 a month depending on whether the team is nearshore or US-based, plus about $300 to $600 per held meeting. It is faster to start and easier to stop. What it does not do is leave you with anything — the lists, the sequences and the infrastructure belong to the agency.",
  },
  {
    q: "What is a GTM engineer, and should I hire one instead?",
    a: "A GTM engineer is the emerging role that builds the outbound machine rather than working it: email infrastructure, list building, enrichment, account scoring and AI copywriting, so that reps only touch accounts the system has already found and warmed. It is a genuinely better answer than hiring more SDRs. The question is whether you need that person on payroll, or whether you need the machine they would build.",
  },
  {
    q: "Why not just buy an AI SDR tool?",
    a: "You can, and for some teams it is the right call — we compare the main ones honestly. The trade is ownership: a subscription runs on someone else's platform and stops when you stop paying. An engine is built around your ICP, ships into your repo and accounts, and keeps running regardless.",
  },
  {
    q: "How fast does the engine actually go live?",
    a: "Fourteen days for a Sprint, from audit to a working engine in your stack. Every engagement starts with a free 60-minute audit that ends in a live demo running on your own ICP data, so you see the thing working before you commit.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/${SLUG}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}/${SLUG}`,
      author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: `${SITE_URL}/${SLUG}`,
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/${SLUG}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: TITLE, item: `${SITE_URL}/${SLUG}` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-4 pt-20 pb-24 md:pt-28">
        <header className="mb-10">
          <p className="mono-label mb-4 text-accent">Cost comparison</p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.06]">
            Hire an SDR, outsource, or build the engine?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Four ways to add outbound pipeline, and what each one actually costs in the first year. Same
            question every founder at <strong className="text-ink">£1M–£20M ARR</strong> asks before posting
            the job. Here is the arithmetic, with the sources.
          </p>
        </header>

        <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
          <div className="my-8 grid gap-4 md:grid-cols-3">
            {options.map((o) => (
              <div key={o.name} className="rounded-2xl border border-line bg-surface p-5">
                <p className={`mono-label mb-3 ${o.win ? "text-accent" : "text-ink-faint"}`}>{o.name}</p>
                <p className={`font-display text-2xl font-bold ${o.win ? "text-accent" : "text-ink"}`}>{o.cost}</p>
                <p className="mt-1 text-[13px] text-ink-faint">{o.unit}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{o.detail}</p>
                <p className="mt-3 border-t border-line pt-3 text-[13px] leading-relaxed text-ink-muted">{o.catch}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink-muted">
            SDR figures are UK benchmarks in GBP from our own{" "}
            <Link href="/blog/what-a-45k-sdr-actually-costs" className="text-accent hover:underline">
              £45k SDR teardown
            </Link>
            ; agency and engine figures are in USD. We have not converted between them, because the
            exchange rate moves and the comparison does not depend on it.
          </p>

          <h2 className="font-display mt-10 mb-2 text-2xl font-bold text-ink">The option most people miss</h2>
          <p>
            There is a fourth path, and it is the one changing fastest: hire a{" "}
            <strong className="text-ink">GTM engineer</strong> instead of another rep. One person who builds
            the machine — inbox infrastructure, list building, enrichment, account scoring, AI copywriting —
            so the reps you already have only touch accounts the system has found and warmed. Headcount goes
            down, coverage goes up.
          </p>
          <p>
            It is a better answer than hiring a third SDR, and we would tell you so on the call. The question
            it leaves open is whether you need that person on payroll at a full salary, or whether you need
            the machine they would spend their first six months building. We are the second thing. The engine
            arrives in fourteen days and you keep it.
          </p>

          <h2 className="font-display mt-10 mb-3 text-2xl font-bold text-ink">Side by side</h2>
          <div className="my-6 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-ink-soft">&nbsp;</th>
                  <th className="px-4 py-3 text-left font-medium text-ink-soft">Hire an SDR</th>
                  <th className="px-4 py-3 text-left font-medium text-ink-soft">Outsource</th>
                  <th className="px-4 py-3 text-left font-medium text-accent">AI Ropeway</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([k, a, b, c]) => (
                  <tr key={k} className="border-t border-line">
                    <td className="px-4 py-3 font-medium text-ink">{k}</td>
                    <td className="px-4 py-3 text-ink-muted">{a}</td>
                    <td className="px-4 py-3 text-ink-muted">{b}</td>
                    <td className="px-4 py-3 text-ink-soft">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display mt-10 mb-2 text-2xl font-bold text-ink">Where hiring still wins</h2>
          <p>
            An engine does not close deals, sit in a room, or read a buyer going quiet. If your motion is
            high-touch enterprise with long committees and heavy relationship work, a good human rep is worth
            more than any amount of automation and we will say so rather than sell you a Sprint.
          </p>
          <p>
            Hiring also wins when the problem is not volume. If you already get enough at-bats and lose them
            at the demo, more pipeline makes the leak worse. Fix the conversion first — that is a{" "}
            <Link href="/blog/first-90-days-of-a-vp-sales" className="text-accent hover:underline">
              VP Sales problem
            </Link>
            , not an outbound one.
          </p>
          <p>
            The engine wins when the constraint is coverage: you know who your buyer is, you cannot reach
            enough of them, and hiring your way there costs £70k a seat and five months you do not have.
          </p>

          <h2 className="font-display mt-10 mb-2 text-2xl font-bold text-ink">Go deeper on any of these</h2>
          <p>
            The full first-year math on a UK hire is in{" "}
            <Link href="/blog/what-a-45k-sdr-actually-costs" className="text-accent hover:underline">
              what a £45k SDR actually costs
            </Link>
            . If you are weighing an agency, we ran the cost-per-meeting comparison in{" "}
            <Link href="/blog/outsource-sdr-vs-ai-sdr" className="text-accent hover:underline">
              outsource SDR vs AI SDR
            </Link>
            . And if you are hiring in the UK specifically,{" "}
            <Link href="/blog/hiring-an-sdr-uk-read-this-first" className="text-accent hover:underline">
              read this first
            </Link>
            . For what the engine is made of, see{" "}
            <Link href="/what-is-an-ai-gtm-engine" className="text-accent hover:underline">
              what an AI GTM engine is
            </Link>{" "}
            and the{" "}
            <Link href="/pricing" className="text-accent hover:underline">
              pricing
            </Link>
            .
          </p>

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
            <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">
              Run the numbers on your own funnel
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-ink-soft">
              The free 60-minute audit ends with a live demo of an engine running on your actual ICP — so you
              can compare it against the job spec before you post it.
            </p>
            <Cta href="/#audit" size="lg">
              Book your free AI GTM audit
            </Cta>
          </section>
        </div>
      </article>
    </>
  );
}
