import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "crm-auto-pilot-ai-crm-automation";
const TITLE = "CRM Auto-Pilot: AI CRM automation that keeps your pipeline honest";
const DESCRIPTION =
  "How the CRM Auto-Pilot agent updates stages from real activity, fills missing fields, merges duplicates, and surfaces stale deals — so your CRM stops lying to you about pipeline.";
const PUBLISHED = "2026-06-25T07:00:00.000Z";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { type: "article", url: `${SITE_URL}/blog/${SLUG}`, siteName: "AI Ropeway", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION, publishedTime: PUBLISHED, authors: ["Bharat Gulati"] },
};

const faqs = [
  { q: "Which CRMs does this work with?", a: "HubSpot, Salesforce, Pipedrive, Close, Attio, Folk, Copper. Anywhere with a reasonable REST/GraphQL API and webhook support. We deploy CRM-specific adapter layers during the 14-day sprint." },
  { q: "Won't this overwrite work my reps are doing?", a: "No — CRM Auto-Pilot writes through specific automation user accounts and never touches fields it doesn’t own. Stage transitions, last-touch dates, and missing firmographic fields are owned by Auto-Pilot. Notes and human-entered context stay untouched." },
  { q: "How does it know when to move a deal to a new stage?", a: "Activity-based rules: meetings booked, demos held, contracts sent, opportunities pushed N days without activity. Rules are configured per CRM and per pipeline at deploy." },
  { q: "What about deduplication?", a: "Fuzzy match on company domain + person email. Auto-merge with confidence > 95%, queue for human review below. Merge history is logged so nothing is silently destroyed." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: PUBLISHED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/about` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["CRM automation", "revenue operations", "AI RevOps"], isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
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
            <p className="mono-label mb-4 text-accent">Agent 07 · Revenue Ops Automation</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">CRM Auto-Pilot: <span className="text-accent">AI CRM automation</span> that keeps your pipeline honest</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">Most CRMs lie about pipeline because reps update them manually — or don’t. CRM Auto-Pilot is the agent that updates stages from real activity, fills missing fields, and surfaces deals that need attention.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By Bharat Gulati</span><span>~6 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>If your CRM is a lie, your pipeline meeting is theater. Part of the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link>.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What CRM Auto-Pilot does</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Auto-updates deal stages from real activity (calls held, demos done, contracts sent).</li>
              <li>Fills missing firmographic fields from the Account Mapper enrichment cache.</li>
              <li>Deduplicates contacts and companies on fuzzy match.</li>
              <li>Surfaces stale deals (no activity in N days for stage type).</li>
              <li>Logs sequence + reply activity from Reply Triager into the contact timeline.</li>
              <li>Tags accounts with the signal that brought them in (closes the attribution loop).</li>
            </ul>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Why CRMs lie</h2>
            <p>The default human contract with a CRM is “I will update it when I have time.” Reps don’t have time. Stages get advanced retroactively to make pipeline meetings less painful. Deals get marked closed-lost in batches at quarter-end. Nobody is doing this maliciously — the data model has the wrong incentive structure.</p>
            <p>CRM Auto-Pilot fixes the incentive by removing the human from the data-entry loop. The CRM updates itself from real signals. The rep enters notes, judgment, and context — the things humans are actually good at.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Stack</h2>
            <p>CRM-specific adapter layer (HubSpot/Salesforce/Pipedrive). n8n for the workflow orchestration. Supabase for the activity event log. Custom rules engine for stage-transition logic. Anthropic for the fuzzy-match and signal-attribution reasoning.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Stop running pipeline reviews on a CRM that lies</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">CRM Auto-Pilot ships on days 11–12 of the sprint. By day 14 your pipeline is true.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/reply-triager-ai-reply-classification" className="text-accent hover:underline">Reply Triager</Link> · <Link href="/blog/revenue-pulse-pipeline-analytics" className="text-accent hover:underline">Revenue Pulse</Link></p>
            </section>
          </div>

          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm">
            <Link href="/blog/reply-triager-ai-reply-classification" className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"><ArrowLeft className="size-4" /> Prev: Reply Triager</Link>
            <Link href="/blog/revenue-pulse-pipeline-analytics" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">Next: Revenue Pulse <ArrowRight className="size-4" /></Link>
          </nav>
        </div>
      </article>
    </>
  );
}
