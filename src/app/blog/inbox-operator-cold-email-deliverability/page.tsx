import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "inbox-operator-cold-email-deliverability";
const TITLE = "Inbox Operator: cold email deliverability that lands in primary, not spam";
const DESCRIPTION =
  "How the Inbox Operator agent handles domain warmup, inbox rotation, deliverability monitoring, and the unsexy plumbing that decides whether your cold outreach reaches the inbox at all.";
const PUBLISHED = "2026-06-25T03:00:00.000Z";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { type: "article", url: `${SITE_URL}/blog/${SLUG}`, siteName: "AI Ropeway", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION, publishedTime: PUBLISHED, authors: ["Bharat Gulati"] },
};

const faqs = [
  { q: "Why can't I just use my real domain for outbound?", a: "You can, and Google will eventually flag your domain for cold sending volume. Once flagged, every email from anyone at your company (sales, support, exec) starts landing in spam. Inbox Operator uses dedicated sending domains so your primary brand domain stays clean." },
  { q: "How many sending domains do I need?", a: "Depends on volume. Rule of thumb: 30–50 emails/day per inbox, 3 inboxes per domain, 1 domain per 100–150 emails/day in steady state. We provision and warm a pool sized to your sprint plan." },
  { q: "How long does warmup actually take?", a: "14–21 days of automated warmup before you can send cold at full volume. Inbox Operator runs the warmup loop in parallel with the rest of the sprint, so you’re ready to scale on day 14." },
  { q: "What about Microsoft 365 / Outlook prospects?", a: "Outlook has stricter authentication signals than Gmail (SPF/DKIM/DMARC enforcement is harder). Inbox Operator monitors per-provider placement, not just blended. If Outlook rates drop, it auto-rotates inboxes before damage spreads." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: PUBLISHED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/about` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["cold email deliverability", "inbox warmup", "AI SDR"], isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
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
            <p className="mono-label mb-4 text-accent">Agent 03 · AI SDR Engine</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">Inbox Operator: <span className="text-accent">cold email deliverability</span> that lands in primary, not spam</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">The unsexy plumbing layer that decides whether anything else in your AI GTM engine matters. Most teams skip it. Their reply rates tell on them.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By Bharat Gulati</span><span>~6 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>You can have the smartest Sequence Composer in the world. If the email lands in spam, none of it matters. Inbox Operator is the agent that owns the wire — part of the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link>.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Inbox Operator owns</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provisioning dedicated sending domains (separate from your primary brand domain).</li>
              <li>Configuring SPF, DKIM, DMARC, MX, and BIMI records.</li>
              <li>Running 14–21 day automated warmup loops before any inbox sends real cold mail.</li>
              <li>Rotating across inboxes and domains as volume scales.</li>
              <li>Monitoring deliverability per provider (Gmail, Outlook, Yahoo) and bounce rates per inbox.</li>
              <li>Auto-rotating or pausing inboxes when reputation drops, before the damage spreads.</li>
            </ul>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Why this is the agent founders skip and regret</h2>
            <p>The economics are brutal: 1 day of bad deliverability burns the warmup investment of the previous 3 weeks. Recovery takes another 3–6 weeks. Meanwhile your sequences are running and your prospects are silently not seeing them.</p>
            <p>Founders skip Inbox Operator because the work is invisible when it’s done right. There is no flashy dashboard. No “wow” moment in the demo. Just the absence of a problem the team didn’t know they were going to have.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Stack & integration</h2>
            <p>Built on Smartlead (or Instantly / Mailreef) for the sending infrastructure, plus custom monitoring code that watches placement-rate signals across providers and pulls inboxes that drop below threshold. Sending domains are provisioned via Cloudflare or Vercel — DNS records are versioned in your repo.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Common failure modes</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Using primary brand domain for outbound (kills delivery for the whole company).</li>
              <li>Skipping warmup to ship faster (burns the domain in week 1).</li>
              <li>Monitoring blended deliverability instead of per-provider (Outlook drops invisibly).</li>
              <li>No bounce-rate threshold (one bad list segment poisons the inbox).</li>
            </ul>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Ship Inbox Operator before you ship outreach</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">14-day sprint warms the inboxes in parallel with the rest of the build. Ready to scale on day 14.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/intent-watcher-ai-buying-signals" className="text-accent hover:underline">Intent Watcher</Link> · <Link href="/blog/sequence-composer-ai-personalized-outreach" className="text-accent hover:underline">Sequence Composer</Link> · <Link href="/blog/reply-triager-ai-reply-classification" className="text-accent hover:underline">Reply Triager</Link></p>
            </section>
          </div>

          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm">
            <Link href="/blog/account-mapper-ai-account-enrichment" className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"><ArrowLeft className="size-4" /> Prev: Account Mapper</Link>
            <Link href="/blog/lead-sourcer-signal-based-outbound" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">Next: Lead Sourcer <ArrowRight className="size-4" /></Link>
          </nav>
        </div>
      </article>
    </>
  );
}
