import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "ai-ropeway-vs-clay";
const TITLE = "AI Ropeway vs Clay: tool vs full AI GTM engine";
const DESCRIPTION =
  "Honest comparison: Clay is the best data layer for waterfall enrichment. AI Ropeway is the AI GTM engine you build on top of Clay. Here's when you need both, and when you don't.";
const PUBLISHED = "2026-06-25T09:00:00.000Z";
const MODIFIED = "2026-06-25T09:00:00.000Z";

const sources: Source[] = [
  {
    publisher: "Clay",
    title: "Clay pricing",
    url: "https://www.clay.com/pricing",
    note: "Primary source for Clay subscription tiers and credit pricing referenced in the cost comparison.",
  },
  {
    publisher: "Apollo",
    title: "Apollo pricing",
    url: "https://www.apollo.io/pricing",
    note: "Primary source for Apollo seat pricing referenced in the waterfall-enrichment discussion.",
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
  { q: "Are AI Ropeway and Clay competitors?", a: "No — Clay is a layer inside an AI Ropeway deployment. Clay handles the waterfall enrichment best in the market. AI Ropeway builds the full 8-agent AI GTM engine that uses Clay as one of its data layers." },
  { q: "Do I need Clay if I hire AI Ropeway?", a: "Yes, typically. Clay is the enrichment layer Account Mapper runs on. If you don’t have Clay credits, we provision them as part of the sprint. Cost is passed through at usage." },
  { q: "Why not just use Clay tables for everything?", a: "Clay is exceptional at table-based enrichment and one-off automations. It’s not designed to be the orchestration backbone for 8 coordinated agents, signal detection across web sources, inbox warmup, or reply triage. For that you need code in your repo." },
  { q: "What does the cost comparison look like?", a: "Clay alone: $349–$2,000+/month depending on credits. AI Ropeway Sprint: $3,000 one-time (Clay credits included for pilot). Most teams end up with both: AI Ropeway for the engine, Clay for the data layer inside it." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: MODIFIED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["AI Ropeway vs Clay", "Clay alternatives", "AI GTM stack"], citation: sourcesToCitations(sources), isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: TITLE, item: `${SITE_URL}/blog/${SLUG}` }] },
    { "@type": "FAQPage", "@id": `${SITE_URL}/blog/${SLUG}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const rows = [
  ["Primary product", "Data tables + waterfall enrichment", "Full 8-agent AI GTM engine"],
  ["Asset ownership", "Workbook in Clay account", "Code in your GitHub repo"],
  ["Pricing", "$349–$2,000+/mo subscription", "$3k one-time or $2.5k/mo"],
  ["Signal detection", "DIY with Claygent", "Built in (Intent Watcher agent)"],
  ["Sequence composition", "Configurable per table", "Built in (Sequence Composer agent)"],
  ["Inbox warmup & deliverability", "Out of scope", "Built in (Inbox Operator agent)"],
  ["Reply triage", "Out of scope", "Built in (Reply Triager agent)"],
  ["CRM auto-pilot", "Out of scope", "Built in (CRM Auto-Pilot agent)"],
  ["Pipeline analytics", "Out of scope", "Built in (Revenue Pulse agent)"],
  ["Cancel anytime", "Yes (lose tables on cancel)", "Yes (keep all code on cancel)"],
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
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">AI Ropeway vs Clay: <span className="text-accent">tool vs full AI GTM engine</span></h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">The honest answer: they’re not competitors. Clay is the best data layer in the market. AI Ropeway builds the AI GTM engine you run on top of it. This post explains when you need both, and when one is enough.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By <Link href="/founder" className="text-accent hover:underline">Bharat Gulati</Link></span><span>Last updated June 25, 2026</span><span>~7 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>This sits inside the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link>. Recommended reading before this one.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Clay is genuinely best at</h2>
            <p>Clay is the most powerful enrichment table builder shipped. Their waterfall pattern — hit ZoomInfo first, fall through to Apollo if confidence is low, then to Hunter — is the right architecture for B2B data enrichment, and they execute it better than anyone. If you need to build a one-off enriched list of 500 accounts with verified emails by Friday, Clay wins by a wide margin.</p>
            <p>Claygent (their AI agent inside tables) is also genuinely good for table-bound research tasks: scrape a website, extract a fact, score against a rubric. It’s designed for the table-cell unit of work.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What AI Ropeway is genuinely best at</h2>
            <p>Building the full AI GTM engine that runs continuously, autonomously, with measurable per-agent ROI. The 8 agents — Intent Watcher, Account Mapper (which uses Clay as a layer), Inbox Operator, Lead Sourcer, Sequence Composer, Reply Triager, CRM Auto-Pilot, Revenue Pulse — are coordinated as one system shipped to your repo in 14 days.</p>
            <p>You can’t build Inbox Operator inside Clay. You can’t build Reply Triager inside Clay. Clay isn’t designed for that — it’s designed for tables. AI Ropeway uses Clay <em>inside</em> the Account Mapper agent because Clay is the best tool for that layer.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Honest comparison</h2>
            <div className="my-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-sm">
                <thead className="bg-surface"><tr><th className="px-4 py-3 text-left font-medium text-ink-soft">&nbsp;</th><th className="px-4 py-3 text-left font-medium text-ink-soft">Clay</th><th className="px-4 py-3 text-left font-medium text-accent">AI Ropeway</th></tr></thead>
                <tbody>{rows.map(([k, c, ar]) => (<tr key={k} className="border-t border-line"><td className="px-4 py-3 font-medium text-ink">{k}</td><td className="px-4 py-3 text-ink-muted">{c}</td><td className="px-4 py-3 text-ink-soft">{ar}</td></tr>))}</tbody>
              </table>
            </div>
            <p className="text-sm text-ink-muted">Pricing figures sourced from <a href="https://www.clay.com/pricing" target="_blank" rel="noopener" className="text-accent hover:underline">Clay’s pricing page</a> and <a href="https://www.apollo.io/pricing" target="_blank" rel="noopener" className="text-accent hover:underline">Apollo’s pricing page</a> as of June 2026; check the source for current rates.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">When to use Clay alone</h2>
            <p>You have a small team, a focused use case (build enriched lists, run one-off campaigns), and the bandwidth to configure tables yourself. Clay alone is the right call.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">When to use AI Ropeway</h2>
            <p>You want a continuous AI GTM engine — not a workbook you maintain. You want code in your repo, not a SaaS workbook locked behind a subscription. You want all 8 agents (not just the enrichment layer) running 24/7 with measured ROI. Then AI Ropeway is what you ship, with Clay as one of the data layers inside it.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <PostSources items={sources} />

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Ship the full engine in 14 days</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">Clay is one of the 12+ tools in the stack we ship. The engine is the thing.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/account-mapper-ai-account-enrichment" className="text-accent hover:underline">Account Mapper</Link> · <Link href="/blog/ai-ropeway-vs-apollo" className="text-accent hover:underline">AI Ropeway vs Apollo</Link> · <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">Pillar guide</Link></p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
