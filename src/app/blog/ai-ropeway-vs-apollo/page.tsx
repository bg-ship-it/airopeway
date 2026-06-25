import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "ai-ropeway-vs-apollo";
const TITLE = "AI Ropeway vs Apollo: data platform vs full AI GTM engine";
const DESCRIPTION =
  "Apollo is the best B2B data platform for SDR teams. AI Ropeway is the full AI GTM engine that uses Apollo as one of its data sources. Here's an honest comparison of where each one wins.";
const PUBLISHED = "2026-06-25T10:00:00.000Z";
const MODIFIED = "2026-06-25T10:00:00.000Z";

const sources: Source[] = [
  {
    publisher: "Apollo",
    title: "Apollo pricing",
    url: "https://www.apollo.io/pricing",
    note: "Primary source for Apollo seat and credit pricing referenced in the cost comparison.",
  },
  {
    publisher: "Gartner",
    title: "Future of Sales",
    url: "https://www.gartner.com/en/sales/insights/future-of-sales",
    note: "Gartner research on the shift of B2B buying toward digital, AI-augmented channels.",
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
  { q: "Is AI Ropeway an Apollo alternative?", a: "Apollo's static data + outreach platform is different from an AI GTM engine. We use Apollo as one of the data sources inside Account Mapper. If you want a self-serve data + outreach SaaS, Apollo is the right tool. If you want a continuous AI GTM engine you own, AI Ropeway is the right tool." },
  { q: "Can I keep using Apollo if I hire AI Ropeway?", a: "Yes. Apollo is one of the providers in the Account Mapper waterfall. We typically keep existing Apollo seats and integrate them into the engine." },
  { q: "What about Apollo's AI features (Apollo AI)?", a: "Apollo AI handles tasks inside Apollo's platform. AI Ropeway's agents run across your full stack — CRM, Slack, inbox, signal sources — with the orchestration code in your repo. Different scope, different ownership model." },
  { q: "How does pricing compare?", a: "Apollo: $59–$149/seat/mo for the SaaS, $0.10–$0.40 per credit for data. AI Ropeway Sprint: $3,000 one-time, all 8 agents shipped to your repo. Most teams keep Apollo seats for the data layer and add AI Ropeway for the engine." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: MODIFIED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["AI Ropeway vs Apollo", "Apollo alternatives", "AI GTM stack"], citation: sourcesToCitations(sources), isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: TITLE, item: `${SITE_URL}/blog/${SLUG}` }] },
    { "@type": "FAQPage", "@id": `${SITE_URL}/blog/${SLUG}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const rows = [
  ["Primary product", "B2B data + sequencing platform", "Full 8-agent AI GTM engine"],
  ["Asset ownership", "Account on Apollo's platform", "Code in your GitHub repo"],
  ["Pricing", "$59–$149/seat + credit fees", "$3k one-time or $2.5k/mo"],
  ["Data coverage", "Apollo's database only", "Waterfall across Apollo + ZoomInfo + Clay + first-party"],
  ["Signal-based sourcing", "Static filters in their UI", "Continuous (Lead Sourcer + Intent Watcher agents)"],
  ["Sequence composition", "Templates + AI suggestions", "Signal-grounded per touch (Sequence Composer agent)"],
  ["Inbox warmup", "Basic in higher tier", "Dedicated agent + monitoring (Inbox Operator)"],
  ["Reply triage", "Manual in inbox", "Auto-classified (Reply Triager agent)"],
  ["CRM hygiene", "Apollo CRM only", "Your CRM, auto-updated (CRM Auto-Pilot agent)"],
  ["Pipeline analytics", "Apollo's reporting", "Custom dashboard in your repo (Revenue Pulse agent)"],
  ["Lock-in if you cancel", "Lose sequences, data, history", "Keep all code, run forever"],
];

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="px-3 pt-6 pb-16 md:px-5 md:pt-8">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-8 text-sm text-ink-muted"><Link href="/blog" className="inline-flex items-center gap-1 hover:text-ink"><ArrowLeft className="size-4" /> All posts</Link></nav>
          <header className="mb-10">
            <p className="mono-label mb-4 text-accent">Comparison · AI GTM stack</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">AI Ropeway vs Apollo: <span className="text-accent">data platform vs full AI GTM engine</span></h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">Apollo is a great B2B data platform. AI Ropeway is the AI GTM engine that runs on top of platforms like Apollo. The choice is not “which one” — it’s how you stack them.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By <Link href="/founder" className="text-accent hover:underline">Bharat Gulati</Link></span><span>Last updated June 25, 2026</span><span>~7 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>Read the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link> first if you haven’t. It explains the 3 pillars and 8 agents that make this comparison make sense.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Apollo is genuinely best at</h2>
            <p>Apollo is a self-serve B2B data + sequencing platform with one of the largest contact databases on the market. For a small team that needs to spin up outbound this week without writing code, Apollo is hard to beat. Filter, build a sequence, hit send. It works.</p>
            <p>Apollo AI handles in-platform tasks well — quick personalization, auto-bumping, simple reply suggestions. It’s a meaningful productivity layer for SDR teams already living inside Apollo.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What AI Ropeway is genuinely best at</h2>
            <p>Building the full AI GTM engine that runs continuously, autonomously, with 8 specialized agents coordinated across signal detection, enrichment, deliverability, outreach, reply triage, CRM hygiene, and analytics — all shipped to your repo so you own the asset on day one.</p>
            <p>Apollo can’t run continuous signal-based sourcing across the open web. Apollo can’t do reply triage with auto-handling of nurtures and objections. Apollo can’t auto-update your HubSpot deal stages from real activity. AI Ropeway can — because the 8 agents are designed for that scope.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Honest comparison</h2>
            <div className="my-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-sm">
                <thead className="bg-surface"><tr><th className="px-4 py-3 text-left font-medium text-ink-soft">&nbsp;</th><th className="px-4 py-3 text-left font-medium text-ink-soft">Apollo</th><th className="px-4 py-3 text-left font-medium text-accent">AI Ropeway</th></tr></thead>
                <tbody>{rows.map(([k, c, ar]) => (<tr key={k} className="border-t border-line"><td className="px-4 py-3 font-medium text-ink">{k}</td><td className="px-4 py-3 text-ink-muted">{c}</td><td className="px-4 py-3 text-ink-soft">{ar}</td></tr>))}</tbody>
              </table>
            </div>
            <p className="text-sm text-ink-muted">Apollo pricing sourced from <a href="https://www.apollo.io/pricing" target="_blank" rel="noopener" className="text-accent hover:underline">Apollo’s pricing page</a> as of June 2026; check the source for current rates.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">When to use Apollo alone</h2>
            <p>Small team, low complexity, need to ship this week. You’re fine running on someone else’s SaaS rails. You don’t need 8 coordinated agents — you just need to send some emails and book some meetings. Apollo is the right call.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">When to use AI Ropeway</h2>
            <p>You want the engine to keep running even if Apollo changes pricing or shuts off your account. You want continuous signal-based sourcing — not static filters. You want CRM Auto-Pilot keeping your HubSpot or Salesforce honest. You want code in your repo and measured per-agent ROI. AI Ropeway ships that engine in 14 days — and it can still use Apollo as one of its data layers.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <PostSources items={sources} />

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">See the full engine in action</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">Live demo on your ICP data, first call. We use Apollo if you already have it.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/lead-sourcer-signal-based-outbound" className="text-accent hover:underline">Lead Sourcer</Link> · <Link href="/blog/ai-ropeway-vs-clay" className="text-accent hover:underline">AI Ropeway vs Clay</Link> · <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">Pillar guide</Link></p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
