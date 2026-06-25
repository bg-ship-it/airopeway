import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "account-mapper-ai-account-enrichment";
const TITLE = "Account Mapper: AI account enrichment that gives outreach actual ammo";
const DESCRIPTION =
  "How the Account Mapper agent builds ICP-scored account profiles automatically — firmographics, tech stack, headcount, recent news — so Sequence Composer writes outreach worth replying to.";
const PUBLISHED = "2026-06-25T02:00:00.000Z";
const MODIFIED = "2026-06-25T02:00:00.000Z";

const sources: Source[] = [
  {
    publisher: "Clay",
    title: "Clay — waterfall enrichment",
    url: "https://www.clay.com",
    note: "The data layer Account Mapper runs its waterfall enrichment on.",
  },
  {
    publisher: "Crunchbase",
    title: "Crunchbase",
    url: "https://www.crunchbase.com",
    note: "Funding-data source referenced in the enrichment waterfall.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { type: "article", url: `${SITE_URL}/blog/${SLUG}`, siteName: "AI Ropeway", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION, publishedTime: PUBLISHED, modifiedTime: MODIFIED, authors: ["Bharat Gulati"] },
  twitter: { card: "summary_large_image", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION },
};

const faqs = [
  { q: "What data sources does Account Mapper pull from?", a: "Clay waterfall enrichment (firmographics + people), Crunchbase (funding), BuiltWith (tech stack), LinkedIn (org structure), Common Crawl + Google for recent news, plus first-party signals from your CRM. Waterfall logic stops when confidence is high enough — saves credits." },
  { q: "How is this different from just buying a list from ZoomInfo?", a: "Lists are stale the moment they’re bought. Account Mapper enriches in real-time per signal, scored against your specific ICP. You never enrich the full TAM — only accounts that fired in Intent Watcher." },
  { q: "Does this work for non-tech companies?", a: "Yes. Tech-stack signals are optional. For non-SaaS ICPs we lean harder on firmographics, hiring patterns, and news mentions. The waterfall is configurable." },
  { q: "What does the output look like?", a: "A structured account profile JSON: firmographics, decision-maker contacts with verified emails, tech stack, recent triggers, ICP score, and the context payload Sequence Composer references in the email body." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: MODIFIED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["account enrichment", "ICP scoring", "AI SDR"], citation: sourcesToCitations(sources), isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
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
            <p className="mono-label mb-4 text-accent">Agent 02 · AI SDR Engine</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">Account Mapper: <span className="text-accent">AI account enrichment</span> that gives outreach actual ammo</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">The agent that turns a “fired signal” into a full ICP-scored account profile in seconds — so the email Sequence Composer writes is grounded in real research, not template merge tags.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By <Link href="/founder" className="text-accent hover:underline">Bharat Gulati</Link></span><span>Last updated June 25, 2026</span><span>~5 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>Personalized outreach is dead the moment the prospect can tell it’s a template. Account Mapper exists so personalization has something true to say. Part of the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link>.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Account Mapper does</h2>
            <p>Takes the account-fired event from Intent Watcher and runs a waterfall enrichment: firmographics, people (decision-makers + champions + influencers), verified emails, tech stack, recent funding, hiring posts, news mentions. Stops at the first source with high enough confidence — you don’t spend credits enriching things you already know.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Why waterfall logic matters</h2>
            <p>Single-source enrichment fails silently. ZoomInfo misses 30% of companies; Apollo misses different ones; Clearbit different again. A waterfall pattern — hit source A, fall through to B if confidence is low, then C — covers 85–95% of any ICP at a fraction of the cost of paying for all three.</p>
            <p>Account Mapper runs the waterfall pattern <a href="https://www.clay.com" target="_blank" rel="noopener" className="text-accent hover:underline">Clay</a> popularized but does it inside your AI GTM engine, with the providers and confidence thresholds you control.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">ICP scoring</h2>
            <p>Every enriched account gets a score against the ICP you defined at sprint kickoff. Score uses signal type (Intent Watcher), firmographic fit (Account Mapper), and historical conversion patterns (Revenue Pulse data, once it’s running). Accounts below threshold get logged but not contacted. Accounts above threshold flow to Sequence Composer.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Stack & integration</h2>
            <p>Built on Clay waterfall (data layer), Anthropic (reasoning + scoring), Supabase (account state). Outputs to whatever CRM you use. Apollo, ZoomInfo, BuiltWith, Crunchbase, and your own first-party data are all configurable as providers.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Common failure modes</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Enriching the full TAM (burns credits, doesn’t produce better outreach).</li>
              <li>No confidence threshold (sends low-quality data to Sequence Composer, kills reply rates).</li>
              <li>Scoring on title alone (a VP at a 50-person company is not the same buyer as a VP at a 5,000-person company).</li>
            </ul>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <PostSources items={sources} />

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Ship Account Mapper alongside the other 7 agents</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">14-day sprint. Code in your repo. Live demo on your data, first call.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/intent-watcher-ai-buying-signals" className="text-accent hover:underline">Intent Watcher</Link> · <Link href="/blog/sequence-composer-ai-personalized-outreach" className="text-accent hover:underline">Sequence Composer</Link> · <Link href="/blog/ai-ropeway-vs-clay" className="text-accent hover:underline">AI Ropeway vs Clay</Link></p>
            </section>
          </div>

          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm">
            <Link href="/blog/intent-watcher-ai-buying-signals" className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"><ArrowLeft className="size-4" /> Prev: Intent Watcher</Link>
            <Link href="/blog/inbox-operator-cold-email-deliverability" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">Next: Inbox Operator <ArrowRight className="size-4" /></Link>
          </nav>
        </div>
      </article>
    </>
  );
}
