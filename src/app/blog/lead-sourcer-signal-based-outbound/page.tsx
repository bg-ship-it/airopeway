import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "lead-sourcer-signal-based-outbound";
const TITLE = "Lead Sourcer: signal-based outbound that beats list-buying";
const DESCRIPTION =
  "How the Lead Sourcer agent surfaces net-new accounts in-market right now from intent signals — no buying lists, no spray-and-pray. The signal-based outbound layer of an AI GTM engine.";
const PUBLISHED = "2026-06-25T04:00:00.000Z";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { type: "article", url: `${SITE_URL}/blog/${SLUG}`, siteName: "AI Ropeway", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION, publishedTime: PUBLISHED, authors: ["Bharat Gulati"] },
};

const faqs = [
  { q: "How is Lead Sourcer different from Intent Watcher?", a: "Intent Watcher monitors accounts you already know about (in your CRM or a defined ICP list). Lead Sourcer goes outbound — it finds net-new accounts in-market that are not yet in your system. They’re complementary, not redundant." },
  { q: "Where does it source accounts from?", a: "Public job-board crawls, funding announcements, LinkedIn industry filters, conference attendee lists, podcast guest data, G2 review activity, Crunchbase, and any custom sources you define. Each source has signal weighting." },
  { q: "Doesn't this just produce a giant noisy list?", a: "No — it produces a small, focused list of accounts that match your ICP AND show buying behavior right now. Most clients see 30–80 fresh in-market accounts per week, not thousands." },
  { q: "How is this different from Apollo's search?", a: "Apollo searches static firmographic + technographic filters. Lead Sourcer adds the time dimension — buying signals fired in the last 14 days — and runs continuously, not just when a rep remembers to log in and search." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: PUBLISHED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/about` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["signal-based outbound", "lead sourcing", "AI GTM"], isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: TITLE, item: `${SITE_URL}/blog/${SLUG}` }] },
    { "@type": "FAQPage", "@id": `${SITE_URL}/blog/${SLUG}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="px-3 pt-6 pb-16 md:px-5 md:pt-8">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-8 text-sm text-ink-muted"><Link href="/blog" className="inline-flex items-center gap-1 hover:text-ink"><ArrowLeft className="size-4" /> All posts</Link></nav>
          <header className="mb-10">
            <p className="mono-label mb-4 text-accent">Agent 04 · Signal-Based Outbound</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">Lead Sourcer: <span className="text-accent">signal-based outbound</span> that beats list-buying</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">The agent that finds net-new accounts in-market right now — the ones your competitors haven’t cold-pitched yet because they’re too busy hitting the same ZoomInfo lists.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By Bharat Gulati</span><span>~6 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>Everyone buying the same list runs the same sequences. The accounts on those lists are pitched 12 times a week. Reply rates collapse. The 2026 alternative is signal-based sourcing — part of the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link>.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Lead Sourcer does</h2>
            <p>Runs a continuous crawl across public sources for accounts that match your ICP AND show recent buying behavior. Each account it surfaces has both fit (firmographic match) and timing (signal fired in last N days). It hands the account to Account Mapper for enrichment, which hands it to Sequence Composer.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Signal sources we wire up</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-ink">Job posts:</strong> hiring for the role your product replaces or supports.</li>
              <li><strong className="text-ink">Funding rounds:</strong> series A/B closings = budget unlock.</li>
              <li><strong className="text-ink">LinkedIn activity:</strong> exec posts about the problem you solve.</li>
              <li><strong className="text-ink">Review-site moves:</strong> evaluating a competitor on G2/Capterra.</li>
              <li><strong className="text-ink">Conference data:</strong> companies sending people to relevant events.</li>
              <li><strong className="text-ink">Podcast guests:</strong> execs publicly talking about the problem.</li>
            </ul>
            <p>Each source has a signal weight tuned to your ICP at deploy. A funding round at a fintech is weighted differently than a funding round at a healthcare SaaS.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Why this beats list-buying</h2>
            <p>Bought lists give you everyone. Lead Sourcer gives you 30–80 accounts a week that have a reason to talk to you this month. Same number of seats in your day, ~10× the conversion rate.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Stack</h2>
            <p>Custom Node crawl workers running on Vercel cron, LinkedIn Sales Nav for activity, Anthropic for signal classification, Supabase for the account candidate queue, Clay for the enrichment hand-off.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Ship Lead Sourcer in the next 14 days</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">Live demo on your real ICP data, first call.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/intent-watcher-ai-buying-signals" className="text-accent hover:underline">Intent Watcher</Link> · <Link href="/blog/sequence-composer-ai-personalized-outreach" className="text-accent hover:underline">Sequence Composer</Link> · <Link href="/blog/ai-ropeway-vs-apollo" className="text-accent hover:underline">AI Ropeway vs Apollo</Link></p>
            </section>
          </div>

          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm">
            <Link href="/blog/inbox-operator-cold-email-deliverability" className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"><ArrowLeft className="size-4" /> Prev: Inbox Operator</Link>
            <Link href="/blog/sequence-composer-ai-personalized-outreach" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">Next: Sequence Composer <ArrowRight className="size-4" /></Link>
          </nav>
        </div>
      </article>
    </>
  );
}
