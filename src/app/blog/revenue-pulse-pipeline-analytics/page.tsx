import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "revenue-pulse-pipeline-analytics";
const TITLE = "Revenue Pulse: real-time pipeline analytics for AI GTM engines";
const DESCRIPTION =
  "How the Revenue Pulse agent measures pipeline velocity, agent performance, cost-per-meeting, and LTV — so you know which AI GTM agent earned its keep this week.";
const PUBLISHED = "2026-06-25T08:00:00.000Z";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { type: "article", url: `${SITE_URL}/blog/${SLUG}`, siteName: "AI Ropeway", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION, publishedTime: PUBLISHED, authors: ["Bharat Gulati"] },
};

const faqs = [
  { q: "What metrics does Revenue Pulse track?", a: "Pipeline velocity per stage, agent-attributed meetings, cost per meeting per agent, reply rate per ICP segment, sequence performance, signal-to-meeting conversion, blended CAC, projected vs actual pipeline, and per-agent cost vs revenue contribution." },
  { q: "Is it a dashboard or a Slack agent?", a: "Both. Dashboard is a Vercel-hosted Next.js page in your repo. Slack agent posts daily summaries and fires alerts when key metrics break threshold (deliverability drop, reply-rate drop, signal source going stale)." },
  { q: "Can I add custom metrics?", a: "Yes — metrics live as queries against your Supabase event log. Adding a metric is adding a query + a chart. Done in your repo, deploys with the rest of the stack." },
  { q: "How is this different from a generic BI tool?", a: "Revenue Pulse is purpose-built for the 8-agent AI GTM engine. The metric definitions are the right ones for this architecture: per-agent ROI, signal-source decay, reply triage accuracy. Generic BI would need months of modeling to get the same view." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: PUBLISHED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/about` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["pipeline analytics", "revenue operations", "AI GTM measurement"], isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
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
            <p className="mono-label mb-4 text-accent">Agent 08 · Revenue Ops Automation</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">Revenue Pulse: <span className="text-accent">real-time pipeline analytics</span> for AI GTM engines</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">The command center for the AI GTM engine. Tells you which agent earned its keep this week, which signal source decayed, and where to redeploy effort. Without it, you’re flying blind on a stack you don’t fully understand yet.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By Bharat Gulati</span><span>~5 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>You can’t optimize what you can’t see. The other 7 agents need Revenue Pulse to know when something’s breaking before it shows up in next quarter’s numbers. Part of the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link>.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Revenue Pulse measures</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-ink">Per-agent attribution:</strong> meetings booked traced back to Intent Watcher signal vs Lead Sourcer source.</li>
              <li><strong className="text-ink">Cost per meeting:</strong> total stack cost / meetings booked, with per-agent breakdown.</li>
              <li><strong className="text-ink">Signal-source decay:</strong> which sources still convert vs which have burned out (signals lose effectiveness as they get common).</li>
              <li><strong className="text-ink">Reply-rate cohorts:</strong> by ICP segment, by signal type, by sequence variant.</li>
              <li><strong className="text-ink">Deliverability tracking:</strong> per-provider placement rate, alerts when Outlook breaks.</li>
              <li><strong className="text-ink">Forecast vs actual:</strong> what the engine predicted last week vs what closed.</li>
            </ul>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Why this matters</h2>
            <p>Signal sources go stale. Sequences fatigue. Deliverability erodes. An AI GTM engine without Revenue Pulse looks great in month 1 and quietly degrades by month 4. Revenue Pulse surfaces the degradation early enough to fix the right agent without blowing up the whole stack.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Stack</h2>
            <p>Supabase for the event log (every agent writes events). Next.js dashboard hosted on Vercel (in your repo). Slack bot for daily summary + threshold alerts. Charts via Tremor or Recharts. Optional integration with Linear or Notion for the weekly review.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Ship the full 8-agent engine in 14 days</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">Revenue Pulse goes live on day 12 with the rest of the RevOps pillar. By day 14, every agent has a measured ROI.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/crm-auto-pilot-ai-crm-automation" className="text-accent hover:underline">CRM Auto-Pilot</Link> · <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">Pillar guide</Link></p>
            </section>
          </div>

          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm">
            <Link href="/blog/crm-auto-pilot-ai-crm-automation" className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"><ArrowLeft className="size-4" /> Prev: CRM Auto-Pilot</Link>
            <Link href="/blog/ai-gtm-engines-complete-guide" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">Back to pillar guide <ArrowRight className="size-4" /></Link>
          </nav>
        </div>
      </article>
    </>
  );
}
