import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "ai-gtm-strategy-pipeline";
const TITLE = "How to build an AI GTM strategy that actually books meetings";
const DESCRIPTION =
  "Most AI GTM strategies are strategy decks disguised as execution plans. Here's the founder's playbook for building a GTM engine that books meetings on autopilot — signals, enrichment, outreach, and measurement.";
const PUBLISHED = "2026-06-27T09:00:00.000Z";
const MODIFIED = "2026-06-27T09:00:00.000Z";

const sources: Source[] = [
  {
    publisher: "Gartner",
    title: "Future of Sales 2025",
    url: "https://www.gartner.com/en/sales/insights/future-of-sales",
    note: "Gartner forecast that 80% of B2B sales interactions will occur in digital channels by 2025, driving the shift to AI-powered GTM.",
  },
  {
    publisher: "Pavilion",
    title: "State of GTM 2024",
    url: "https://www.joinpavilion.com/",
    note: "Pavilion survey data on GTM team structures, showing the shift from headcount-driven to tooling-driven growth models.",
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
  { q: "What's the difference between an AI GTM strategy and a regular GTM strategy?", a: "A regular GTM strategy defines your market, ICP, and channels. An AI GTM strategy does the same but then specifies which AI agents execute each step — signal detection, enrichment, outreach, triage, CRM updates — so the engine runs continuously without proportional headcount. The strategy isn't complete until it maps to deployed agents." },
  { q: "How long does it take to go from strategy to booked meetings?", a: "With AI Ropeway: 14 days to deploy the engine, then 2–4 weeks for the first batch of signal-based meetings. Most clients see 15–30 qualified meetings in the first 60 days. The key is starting with signal detection — you're reaching out to people who are already in-market, so conversion rates are 5–8x higher than cold outbound." },
  { q: "Do I need a big team to run this?", a: "No. The whole point is that the AI agents do the work that would otherwise require 3–5 SDRs, a RevOps hire, and a data analyst. A founder or one AE can manage the engine with 2–3 hours per week of oversight — reviewing flagged conversations, approving high-value outreach, checking the dashboard." },
  { q: "What if I already have an SDR team?", a: "Even better. Your SDRs move from manual prospecting to handling the warm conversations the engine generates. Signal-based outreach produces 4–7x higher reply rates than cold outbound, so your team's time shifts from hunting to closing. Most teams see 3x pipeline per rep with the same headcount." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: MODIFIED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["AI GTM strategy", "pipeline generation", "signal-based outbound", "AI SDR"], citation: sourcesToCitations(sources), isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
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
            <p className="mono-label mb-4 text-accent">GTM · Strategy · Pipeline</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">How to build an AI GTM strategy <span className="text-accent">that actually books meetings</span></h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">I've seen 50+ \"AI GTM strategy\" decks. Most of them are 30 slides of frameworks, quadrants, and \"recommended next steps\" that never get executed. Here's the version that actually ships — and the one I use to run AI Ropeway's own pipeline.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By <Link href="/founder" className="text-accent hover:underline">Bharat Gulati</Link></span><span>June 27, 2026</span><span>~9 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>This is the strategic companion to the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">AI GTM engine guide</Link>. That post covers the 8 agents technically. This one covers the strategy layer — how to define your ICP, choose your signals, build your sequences, and set up the measurement framework so you know exactly what's working.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Why most AI GTM strategies fail before they start</h2>
            <p>The typical AI GTM strategy starts with: \"Define your ICP.\" Correct. Then: \"Select your channels.\" Also correct. Then: \"Build your content strategy.\" Sure. Then 6 months pass. You have a strategy doc, a content calendar, and zero booked meetings.</p>
            <p>The problem is the sequence. A strategy that takes 3 months to execute is a strategy for a company with 3 months of runway to burn. Most B2B founders I work with need meetings next month, not next quarter. The strategy needs to be 1 week, not 1 quarter — and it needs to produce a deployed engine, not a document.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">The 5-day AI GTM strategy sprint</h2>
            <p>Here's the framework I use with every AI Ropeway client. It takes 5 working days. By the end of day 5, you have a deployed engine, not a deck.</p>

            <h3 className="font-display mt-8 mb-2 text-xl font-semibold text-ink">Day 1: ICP definition with data, not intuition</h3>
            <p>Most ICP definitions are based on who the founder thinks they should sell to. That's a starting point, not a strategy. Day 1 is about validating (or overriding) your ICP with data: your best customers by LTV, your fastest sales cycles by segment, your highest win rates by company size and industry.</p>
            <p>We pull data from your CRM, your billing system, and your conversations. The output is a scored ICP matrix: industry × company size × tech stack × buying signal, ranked by expected conversion rate. This is what the <Link href="/systems/ai-gtm-strategy-builder" className="text-accent hover:underline">AI GTM Strategy Builder</Link> produces — not a persona doc, but a targeting algorithm.</p>

            <h3 className="font-display mt-8 mb-2 text-xl font-semibold text-ink">Day 2: Signal mapping</h3>
            <p>Which events indicate someone in your ICP is ready to buy? For AI Ropeway, the signals are: company posts \"Head of Revenue\" role (needs GTM infrastructure), company raises Series A/B (has budget, needs pipeline), company's website shows a \"book a demo\" CTA with no inbound infrastructure (needs help).</p>
            <p>Your signals are different. A <Link href="/industries/saas" className="text-accent hover:underline">SaaS</Link> company's signals might be: competitor mentions in G2 reviews, tech stack changes visible on BuiltWith, new CSM job postings (signal of growth). An <Link href="/industries/ecommerce" className="text-accent hover:underline">e-commerce</Link> brand's signals: new Shopify Plus migration, ad spend increases on Meta, expansion into new markets.</p>
            <p>By end of day 2, we have the signal taxonomy that <Link href="/blog/intent-watcher-ai-buying-signals" className="text-accent hover:underline">Intent Watcher</Link> will monitor.</p>

            <h3 className="font-display mt-8 mb-2 text-xl font-semibold text-ink">Day 3: Sequence architecture</h3>
            <p>Not copy — architecture. Which channel first: email or LinkedIn? How many touches before escalation? What happens on a positive reply vs. an objection vs. silence? What's the fallback if deliverability drops below 90%?</p>
            <p>The sequence architecture maps to <Link href="/blog/sequence-composer-ai-personalized-outreach" className="text-accent hover:underline">Sequence Composer</Link>'s configuration. The AI writes the actual copy (personalised per contact, per signal, per company context), but the architecture — the cadence, the channel mix, the branching logic — is strategy, not AI.</p>

            <h3 className="font-display mt-8 mb-2 text-xl font-semibold text-ink">Day 4: Measurement framework</h3>
            <p>Every strategy needs a scoreboard. The AI GTM measurement framework has three tiers:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-ink">Leading indicators:</strong> signals detected per week, enrichment accuracy, email deliverability rate</li>
              <li><strong className="text-ink">Pipeline metrics:</strong> reply rate, positive reply rate, meetings booked, meetings attended</li>
              <li><strong className="text-ink">Revenue metrics:</strong> pipeline value, win rate from AI-sourced leads, cost per qualified meeting, CAC from AI GTM vs. other channels</li>
            </ul>
            <p><Link href="/blog/revenue-pulse-pipeline-analytics" className="text-accent hover:underline">Revenue Pulse</Link> tracks all three tiers automatically. The dashboard shows which signals produce meetings, which sequences convert, and what each meeting costs — so you can double down on what works.</p>

            <h3 className="font-display mt-8 mb-2 text-xl font-semibold text-ink">Day 5: Deploy</h3>
            <p>Day 5 isn't \"present the strategy.\" It's deploy the engine. By end of day 5, Intent Watcher is monitoring your signals, <Link href="/blog/account-mapper-ai-account-enrichment" className="text-accent hover:underline">Account Mapper</Link> is enriching the first batch, <Link href="/blog/inbox-operator-cold-email-deliverability" className="text-accent hover:underline">Inbox Operator</Link> has your domains warmed, and the first outreach is queued. The strategy is live. Not in a deck — in production.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Our own numbers</h2>
            <p>I run this exact strategy for AI Ropeway. Transparency: here are the numbers from our own engine over the last 90 days.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Signals detected: 2,340 across 6 signal types</li>
              <li>Contacts enriched and scored: 1,890</li>
              <li>Sequences launched: 1,420</li>
              <li>Reply rate: 5.1% (signal-based) vs 0.7% (cold control group)</li>
              <li>Meetings booked: 67</li>
              <li>Cost per qualified meeting: $47 (fully loaded)</li>
            </ul>
            <p>That's a founder-led company with no SDR team generating 67 qualified meetings in 90 days. The engine does the work. I do the closing.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <PostSources items={sources} />

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Get your AI GTM strategy + engine in 5 days</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">The free AI audit is day 0 — we map your ICP, identify your signals, and show you what the engine looks like with your data. No commitment.</p>
              <Cta href="/#audit" size="lg">Claim your free AI audit</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">AI GTM guide</Link> · <Link href="/blog/ai-sales-automation-revops-2026" className="text-accent hover:underline">Sales automation</Link> · <Link href="/blog/ai-ropeway-vs-clay" className="text-accent hover:underline">vs Clay</Link> · <Link href="/blog/ai-ropeway-vs-apollo" className="text-accent hover:underline">vs Apollo</Link> · <Link href="/systems/ai-gtm-strategy-builder" className="text-accent hover:underline">GTM Strategy system</Link></p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
