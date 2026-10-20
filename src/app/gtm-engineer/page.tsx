import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "gtm-engineer";
const TITLE = "What a GTM engineer actually builds";
const DESCRIPTION =
  "The role, the five systems it owns, what it costs to hire one in 2026, and how to decide between hiring a GTM engineer and buying the engine they would build.";
const PUBLISHED = "2026-10-20T09:00:00.000Z";
const MODIFIED = "2026-10-20T09:00:00.000Z";

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
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Bharat Gulati"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: `${TITLE} | AI Ropeway`,
    description: DESCRIPTION,
  },
};

const sources: Source[] = [
  {
    publisher: "Apollo",
    title: "What Do GTM Engineer Jobs Pay in 2026?",
    url: "https://www.apollo.io/insights/gtm-engineer-jobs",
    note: "Total compensation of $132,000 to $241,000 with a $176,000 median, attributed to GTM Engineer Club. Also carries the job-growth and posting-count figures cited here.",
  },
  {
    publisher: "RevPartners",
    title: "The GTM Engineer is the Most Underrated Role in B2B",
    url: "https://blog.revpartners.io/en/revops-articles/the-most-underrated-role-in-b2b-the-gtm-engineer",
    note: "Defines the role as a technical revenue operator building automated systems across data, workflows, AI, CRM and outreach.",
  },
  {
    publisher: "Revenue Operations Alliance",
    title: "What is GTM engineering? The complete growth guide",
    url: "https://www.revenueoperationsalliance.com/what-is-gtm-engineering/",
    note: "Positions GTM engineering as the next step on from sales and revenue operations.",
  },
];

const layers = [
  {
    n: "01",
    name: "Signal detection",
    body: "Deciding which observable events mean a company is in market, then watching for them continuously. Funding, hiring, tech-stack changes, leadership moves. Not a list of companies, a standing query.",
  },
  {
    n: "02",
    name: "Enrichment and scoring",
    body: "Turning a detected account into a decision: who the buyer is, what they already run, whether the account resembles the ones that closed. Waterfall enrichment across providers, because no single source is complete.",
  },
  {
    n: "03",
    name: "Sending infrastructure",
    body: "Domains, mailboxes, warmup, rotation, SPF, DKIM and DMARC. The least glamorous layer and the one that silently sinks the other four when it is wrong.",
  },
  {
    n: "04",
    name: "Message generation",
    body: "Copy generated per account from the signal that triggered it, rather than a template with a merge field. The architecture is the engineer's; the sentences are the model's.",
  },
  {
    n: "05",
    name: "Reply handling and CRM",
    body: "Classifying what comes back, routing the positives, suppressing the rest, and writing all of it to the CRM without a human remembering to. The part most teams discover they needed in month three.",
  },
];

const salary: [string, string][] = [
  ["Junior, 0 to 2 years", "$110k – $140k"],
  ["Mid-level, 3 to 5 years", "$160k – $200k"],
  ["Senior, 6+ years", "$210k – $280k"],
  ["Reported range, all levels", "$132k – $241k, median $176k"],
];

const faqs = [
  {
    q: "What is a GTM engineer?",
    a: "A technical revenue operator who builds the system that generates pipeline, rather than working the pipeline by hand. They own signal detection, enrichment and scoring, sending infrastructure, message generation, and reply handling into the CRM. The output is a running system, not a list of activity.",
  },
  {
    q: "How is a GTM engineer different from a RevOps hire?",
    a: "RevOps mostly maintains and reports on the systems a revenue team already uses: CRM hygiene, routing, forecasting, dashboards. A GTM engineer builds new systems that create pipeline, and is judged on meetings rather than on data quality. The skills overlap; the brief does not.",
  },
  {
    q: "What does a GTM engineer cost?",
    a: "Reported total compensation runs roughly $132,000 to $241,000 in the US, with a median near $176,000, by experience band from about $110k junior to $280k senior. Add recruiting time, the tooling budget they will ask for, and the months before the first system is live.",
  },
  {
    q: "Should I hire a GTM engineer or buy the engine?",
    a: "Hire if outbound is your permanent core motion, you have enough volume to keep one person busy, and you can wait a hiring cycle plus a build cycle. Buy the system if you need it running sooner than that, or if the work is a one-off build rather than a standing function. The honest test is whether you need the person or the thing they would build.",
  },
  {
    q: "Can a GTM engineer work without a coding background?",
    a: "Largely yes, now. Most of the stack is configuration, orchestration and prompt design across tools that expose the logic without requiring a language. What does not substitute is systems thinking: knowing what should happen when a step fails, and designing for that rather than for the happy path.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Article", "BlogPosting"],
      "@id": `${SITE_URL}/${SLUG}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}/${SLUG}`,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: `${SITE_URL}/${SLUG}`,
      about: ["GTM engineer", "GTM engineering", "revenue operations", "outbound systems"],
      citation: sourcesToCitations(sources),
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
    <div className="mx-auto max-w-6xl px-5 py-32 md:py-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="mono-label mb-4 text-accent">The role · The cost · The decision</p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.06]">
            What a GTM engineer <span className="text-accent">actually builds</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            The title arrived faster than the job description. Postings went from over 1,400 in mid-2025 to
            more than 3,000 by January 2026, and the salary band opened before most founders could say what
            the person would do on a Tuesday. Here is the role as a system, what it costs, and how to tell
            whether you need the person or the machine they would build.
          </p>
        </header>

        <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
          <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">
            The job in one sentence
          </h2>
          <p>
            A GTM engineer builds the system that generates pipeline, instead of working the pipeline by
            hand. An SDR sends the emails. A GTM engineer builds the thing that decides who gets emailed, what
            it says, and what happens to the reply.
          </p>
          <p>
            The distinction that matters to a founder: an SDR&apos;s output stops when they stop. A GTM
            engineer&apos;s output keeps running, which is why one of them can replace the coverage of several
            reps and why the salary band looks the way it does.
          </p>

          <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">
            The five systems they own
          </h2>
          <p>
            Every credible version of this role covers the same five layers. A candidate strong on three of
            them is common. One strong on all five is what the salary data is actually pricing.
          </p>
          <div className="mt-6 space-y-4">
            {layers.map((l) => (
              <div key={l.n} className="rounded-2xl border border-line bg-surface p-5">
                <div className="flex items-baseline gap-3">
                  <span className="mono-label text-accent">{l.n}</span>
                  <h3 className="font-display text-lg font-semibold text-ink">{l.name}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{l.body}</p>
              </div>
            ))}
          </div>
          <p>
            Layer 03 is the one that decides whether the other four ever get read. Deliverability is
            infrastructure work, it is invisible when correct, and it is the most common reason a
            well-built engine produces nothing.
          </p>

          <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">
            What it costs to hire one
          </h2>
          <p>
            US total compensation, as reported by Apollo from GTM Engineer Club data. Treat these as a
            market signal rather than a quote: the role is young, the title is not standardised, and two
            companies using it can mean different jobs.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="border-b border-line bg-surface-soft">
                  <th className="px-4 py-3 text-left font-semibold text-ink">Experience</th>
                  <th className="px-4 py-3 text-left font-semibold text-ink">Total compensation, US</th>
                </tr>
              </thead>
              <tbody>
                {salary.map(([band, amount]) => (
                  <tr key={band} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 text-ink">{band}</td>
                    <td className="px-4 py-3">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            That is the salary line only. The real first-year number adds recruiting, the tooling budget the
            role assumes, and the gap between signing and the first system going live.
          </p>
          <p className="text-[15px] text-ink-muted">
            A note on the growth figures, because the sources disagree. Bloomberry reports GTM engineering
            jobs up 205% year on year in 2025. Brookings Register describes hiring as having doubled year on
            year for two years. Those are not the same claim, and we have not been able to reconcile them, so
            read both as directional: demand is rising quickly, by an amount nobody has pinned down.
          </p>

          <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">
            Hire one, or buy the system they would build?
          </h2>
          <p>
            This is the question the salary band forces, and it has an honest answer in both directions.
          </p>
          <p>
            <strong className="text-ink">Hire</strong> when outbound is a permanent core motion rather than a
            project, when there is enough volume to keep one person busy after the build is done, and when you
            can absorb a hiring cycle followed by a build cycle before the first meeting lands. A good one
            compounds: every system they ship makes the next one cheaper.
          </p>
          <p>
            <strong className="text-ink">Buy the system</strong> when you need it running before a hire could
            realistically start, when the work is a build rather than a standing function, or when you would
            rather own the engine than the employment risk. That is what we do: a{" "}
            <Link href="/pricing" className="text-accent hover:underline">
              14-day Sprint at $3,000
            </Link>{" "}
            ships one engine into your own accounts and leaves it there, which is roughly a fortnight of a
            senior GTM engineer&apos;s loaded cost.
          </p>
          <p>
            We are obviously not neutral here. The test we would actually apply: if you can name the next five
            systems you want built, hire someone to build them. If you can name one, buy that one.
          </p>
          <p>
            The four-way version of this decision, including outsourcing and hiring an SDR instead, is laid
            out on{" "}
            <Link href="/hire-an-sdr" className="text-accent hover:underline">
              hire an SDR, or build the engine
            </Link>
            .
          </p>

          <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">
            What to ask in the interview
          </h2>
          <p>
            Five questions that separate someone who has run this from someone who has read about it.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Walk me through what happens when deliverability drops below 90% on a Monday. The answer should
              be a procedure, not a tool name.
            </li>
            <li>
              Which signals have you dropped as useless, and what made you drop them? Anyone can list signals;
              only an operator has killed some.
            </li>
            <li>
              Show me a sequence where the copy changes with the trigger, not just the merge fields.
            </li>
            <li>
              What does your enrichment waterfall do when every provider misses? Silence is a design decision
              and it should be a deliberate one.
            </li>
            <li>
              What did you stop doing when the system started working? The answer tells you whether they
              build systems or collect them.
            </li>
          </ul>

          <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-line bg-surface p-5">
                <summary className="cursor-pointer font-medium text-ink">{f.q}</summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>

          <PostSources items={sources} />

          <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
            <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">
              Not sure which side of that decision you are on?
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-ink-soft">
              The free AI GTM audit maps your ICP, names the signals worth watching, and shows what the engine
              would look like on your data. If the answer is hire someone, we will say so.
            </p>
            <Cta href="/#audit" size="lg">
              Claim your free AI audit
            </Cta>
            <p className="mt-6 text-xs text-ink-faint">
              Related:{" "}
              <Link href="/hire-an-sdr" className="text-accent hover:underline">
                Hire an SDR, or build the engine
              </Link>{" "}
              ·{" "}
              <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">
                The complete guide to AI GTM engines
              </Link>{" "}
              ·{" "}
              <Link href="/pricing" className="text-accent hover:underline">
                Pricing
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
