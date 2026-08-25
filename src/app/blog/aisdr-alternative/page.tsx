import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "aisdr-alternative";
const TITLE =
  "AiSDR alternative: rented vs owned";
const DESCRIPTION =
  "Honest comparison of AiSDR and a custom AI GTM engine. AiSDR is a subscription; AI Ropeway ships an owned engine in 14 days. When each wins.";
const PUBLISHED = "2026-07-11T09:00:00.000Z";
const MODIFIED = "2026-08-25T00:00:00.000Z";
const PRICING_CHECKED = "25 August 2026";

const sources: Source[] = [
  { publisher: "AiSDR", title: "AiSDR pricing", url: "https://aisdr.com/pricing", note: "Primary source for AiSDR subscription pricing and included features referenced below. Verify current rates on their site." },
  { publisher: "AI Ropeway", title: "AI GTM engines complete guide", url: "https://www.airopeway.com/blog/ai-gtm-engines-complete-guide", note: "Reference for the 8-agent engine architecture compared here." },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { images: ["/opengraph-image"], type: "article", url: `${SITE_URL}/blog/${SLUG}`, siteName: "AI Ropeway", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION, publishedTime: PUBLISHED, modifiedTime: MODIFIED, authors: ["Bharat Gulati"] },
  twitter: { images: ["/opengraph-image"], card: "summary_large_image", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION },
};

const faqs = [
  { q: "Is AI Ropeway an AiSDR competitor?", a: "They solve the same job — booking meetings from outbound — but with opposite models. AiSDR is a subscription AI SDR platform you log into. AI Ropeway builds a custom AI GTM engine and deploys it into your own stack, with full access from day one." },
  { q: "What is the main difference?", a: "Ownership and fit. With AiSDR you rent a general platform and lose access when you stop paying. With AI Ropeway the engine is built around your specific ICP and signals, runs in your accounts, and keeps running whether or not you renew." },
  { q: "Which is cheaper?", a: "AiSDR is a monthly subscription — check their pricing page for current tiers. AI Ropeway is $3,000 one-time for a 14-day Sprint or $2,500/month for an ongoing partnership. Use the ROI calculator to compare against your numbers." },
  { q: "When should I pick AiSDR?", a: "If you want plug-and-play SaaS today, a light lift, and you are comfortable renting the workflow, AiSDR can get you sending fast. If you want to own the system and tailor it to your ICP, pick the engine." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: MODIFIED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["AiSDR alternative", "AI SDR", "AI GTM engine"], citation: sourcesToCitations(sources), isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: TITLE, item: `${SITE_URL}/blog/${SLUG}` }] },
    { "@type": "FAQPage", "@id": `${SITE_URL}/blog/${SLUG}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const rows = [
  ["Product model", "Subscription AI SDR platform", "Custom AI GTM engine in your stack"],
  ["What you own", "Access while subscribed", "The code, forever"],
  ["Pricing", "Solo $250 · Explore $900 · Scale $2,500/mo", "$3k one-time or $2.5k/mo"],
  ["Personalization", "Platform AI + templates", "Written off the signal that fired, for your ICP"],
  ["Runs in", "AiSDR's platform", "Your accounts, your infrastructure"],
  ["Data / enrichment layer", "Bundled", "Best-of-breed (Clay, etc.) inside the engine"],
  ["Reply triage & CRM", "Within the platform", "Owned agents: Reply Triager + CRM Auto-Pilot"],
  ["If you leave", "Sending stops", "Engine keeps running"],
];

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="px-3 pt-6 pb-16 md:px-5 md:pt-8">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-8 text-sm text-ink-muted"><Link href="/blog" className="inline-flex items-center gap-1 hover:text-ink"><ArrowLeft className="size-4" /> All posts</Link></nav>
          <header className="mb-10">
            <p className="mono-label mb-4 text-accent">Comparison · AI SDR</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">AiSDR alternative: <span className="text-accent">rented AI SDR vs an engine you own</span></h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">AiSDR is a solid subscription AI SDR platform. AI Ropeway is a different model entirely: a custom AI GTM engine shipped into your own repo. Here is the honest breakdown of when each one wins.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By <Link href="/founder" className="text-accent hover:underline">Bharat Gulati</Link></span><span>Last updated July 11, 2026</span><span>~6 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>New to the category? Start with <Link href="/what-is-an-ai-gtm-engine" className="text-accent hover:underline">what an AI GTM engine is</Link>, then come back.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What AiSDR is good at</h2>
            <p>AiSDR is a fast way to get AI-assisted outbound running without building anything. It handles email and LinkedIn outreach, personalization, and follow-up inside one subscription platform. If you want a light lift and you are comfortable renting the workflow, it gets you sending quickly.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Where a custom engine wins</h2>
            <p>An AiSDR subscription is a rented workflow on a shared platform. An AI Ropeway engine is built for your ICP and signals, ships into your stack, and runs in your own accounts — so the personalization is grounded in the actual signal that fired, and you keep the whole system if you ever stop working with us. Best-of-breed tools run <em>inside</em> the engine as data layers rather than being locked behind one vendor.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Honest comparison</h2>
            <div className="my-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-sm">
                <thead className="bg-surface"><tr><th className="px-4 py-3 text-left font-medium text-ink-soft">&nbsp;</th><th className="px-4 py-3 text-left font-medium text-ink-soft">AiSDR</th><th className="px-4 py-3 text-left font-medium text-accent">AI Ropeway</th></tr></thead>
                <tbody>{rows.map(([k, c, ar]) => (<tr key={k} className="border-t border-line"><td className="px-4 py-3 font-medium text-ink">{k}</td><td className="px-4 py-3 text-ink-muted">{c}</td><td className="px-4 py-3 text-ink-soft">{ar}</td></tr>))}</tbody>
              </table>
            </div>
            <p className="text-sm text-ink-muted">AiSDR pricing above was checked on {PRICING_CHECKED} against <a href="https://aisdr.com/pricing" target="_blank" rel="noopener" className="text-accent hover:underline">AiSDR&apos;s pricing page</a>. AiSDR bills on message volume rather than seats, and all standard plans include unlimited users. Annual billing runs roughly 20% below the monthly rates shown. Vendors change plans without notice &mdash; confirm before deciding.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Who should choose AiSDR over AI Ropeway</h2>
            <p>AiSDR charges by message volume with unlimited users, which is a genuinely better model than ours for a team that needs many senders. If eight people each need to send from their own mailbox, we would charge a team of eight what we charge a solo founder &mdash; AiSDR lets you add all eight at no additional seat cost.</p>
            <p>Their Solo tier is also contract-free, so you can test the idea for a single month and walk away. Our Sprint is a $3,000 commitment before a single email sends.</p>
            <p>Pick AiSDR if you want volume across many senders, you have someone in-house watching reply quality, and you would rather not own or maintain anything.</p>
            <p>One thing to check before signing: Explore and Scale require a quarterly contract paid in advance, so the month-to-month flexibility stops above the Solo tier.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">When to pick which</h2>
            <p><strong className="text-ink">Pick AiSDR</strong> if you want plug-and-play SaaS today and are fine renting the workflow. <strong className="text-ink">Pick AI Ropeway</strong> if you want to own the system, tailor it to your ICP, and keep the code. Run the math with the <Link href="/roi-calculator" className="text-accent hover:underline">ROI calculator</Link>.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <PostSources items={sources} />

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Own the engine in 14 days</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">See it built on your data first. The free 60-minute audit ends with a live demo on your ICP.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/artisan-alternative" className="text-accent hover:underline">Artisan alternative</Link> · <Link href="/blog/11x-alternative" className="text-accent hover:underline">11x alternative</Link> · <Link href="/blog/ai-ropeway-vs-clay" className="text-accent hover:underline">vs Clay</Link></p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
