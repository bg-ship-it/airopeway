import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "reply-triager-ai-reply-classification";
const TITLE = "Reply Triager: AI reply classification that routes only hot leads to humans";
const DESCRIPTION =
  "How the Reply Triager agent classifies every inbound reply — hot, nurture, objection, unsubscribe — and auto-handles 80% of them so founders only touch the meetings that matter.";
const PUBLISHED = "2026-06-25T06:00:00.000Z";
const MODIFIED = "2026-06-25T06:00:00.000Z";

const sources: Source[] = [
  {
    publisher: "Anthropic",
    title: "Claude",
    url: "https://www.anthropic.com/claude",
    note: "The classification model Reply Triager uses to categorise inbound replies.",
  },
  {
    publisher: "The Bridge Group",
    title: "SDR Metrics & Compensation Report",
    url: "https://bridgegroupinc.com/sdr-metrics",
    note: "Benchmark on rep time spent on reply handling and admin vs selling.",
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
  { q: "What categories does Reply Triager classify into?", a: "Default categories: HOT (ready to talk), NURTURE (interested but not now), OBJECTION (specific concern), UNSUBSCRIBE (remove), OOO (out of office), REFERRAL (not me, try X), BOUNCE (delivery failure). Custom categories configurable per ICP." },
  { q: "What happens to non-hot replies?", a: "NURTURE auto-sets a follow-up date and re-enters the sequence. OBJECTION sends an objection-specific reply pulled from your battle card. UNSUBSCRIBE suppresses the contact. OOO pauses sequence until return date. Hot replies route to founder inbox immediately." },
  { q: "How accurate is the classification?", a: "Above 95% on the default categories after the first 200 replies are used to calibrate. The model improves as it sees more of your replies. We review accuracy weekly during the first month of deployment." },
  { q: "Can a human override classifications?", a: "Yes. Misclassifications are 1-click correctable and feed back into the model. Most of the value is in the first-pass triage, not in being right 100% of the time." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: MODIFIED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["reply classification", "AI SDR", "reply triage"], citation: sourcesToCitations(sources), isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
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
            <p className="mono-label mb-4 text-accent">Agent 06 · Signal-Based Outbound</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">Reply Triager: <span className="text-accent">AI reply classification</span> that routes only hot leads to humans</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">The agent that actually reclaims your time. Every reply gets classified, auto-handled where safe, and only routed to your inbox when human judgment is required.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By <Link href="/founder" className="text-accent hover:underline">Bharat Gulati</Link></span><span>Last updated June 25, 2026</span><span>~5 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>Most founders don’t run more outbound because they can’t handle the reply load. 200 emails sent = 30 replies = 90 minutes of triage. Reply Triager kills 80% of that load. Part of the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link>.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Reply Triager does</h2>
            <p>Reads every inbound reply against the sequences your AI GTM engine is running. Classifies it. Routes hot replies straight to the founder inbox. Auto-handles nurtures, OOOs, unsubs, referrals, and common objections from your battle card. Logs everything to Revenue Pulse for reporting.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Why this is the agent that scales the engine</h2>
            <p>Without Reply Triager, doubling your outbound volume doubles your reply triage load. Linear scaling. With Reply Triager, doubling volume mostly doubles your hot replies, with marginal extra triage cost. The cap on how big your outbound can get moves from “how much can the founder triage” to “how many meetings does the founder want to take.”</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Auto-handling logic</h2>
            <p>Nurture replies set a follow-up date in the CRM and re-enter the sequence. Objections get matched against your battle card and respond with a relevant counter. Unsubs immediately suppress the contact across all future sequences. OOOs pause the sequence until return. Referrals capture the new contact and route to Lead Sourcer for enrichment. Hot replies bypass all of it and ping the founder inbox.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Stack</h2>
            <p>Anthropic Claude for classification. n8n for the routing logic. CRM (HubSpot, Pipedrive, Salesforce) for nurture-date persistence. Slack for the hot-reply alerts to the founder inbox.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <PostSources items={sources} />

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Stop triaging replies manually</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">Reply Triager ships in days 8–10 of the 14-day sprint. By day 14 you’re only seeing hot replies.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/sequence-composer-ai-personalized-outreach" className="text-accent hover:underline">Sequence Composer</Link> · <Link href="/blog/crm-auto-pilot-ai-crm-automation" className="text-accent hover:underline">CRM Auto-Pilot</Link> · <Link href="/blog/revenue-pulse-pipeline-analytics" className="text-accent hover:underline">Revenue Pulse</Link></p>
            </section>
          </div>

          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm">
            <Link href="/blog/sequence-composer-ai-personalized-outreach" className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"><ArrowLeft className="size-4" /> Prev: Sequence Composer</Link>
            <Link href="/blog/crm-auto-pilot-ai-crm-automation" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">Next: CRM Auto-Pilot <ArrowRight className="size-4" /></Link>
          </nav>
        </div>
      </article>
    </>
  );
}
