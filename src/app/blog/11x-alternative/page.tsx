import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "11x-alternative";
const TITLE =
  "11x alternative: rent an AI SDR or own it";
const DESCRIPTION =
  "Honest comparison of 11x (Alice) and a custom AI GTM engine. One is a subscription; the other ships into your stack in 14 days. When each wins.";
const PUBLISHED = "2026-07-11T09:00:00.000Z";
const MODIFIED = "2026-08-25T00:00:00.000Z";
const PRICING_CHECKED = "25 August 2026";

const sources: Source[] = [
  { publisher: "11x", title: "11x", url: "https://www.11x.ai", note: "Primary source for 11x (Alice) platform positioning and pricing referenced below. Verify current details on their site." },
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
  { q: "Is AI Ropeway an 11x competitor?", a: "They target the same outcome — automated outbound that books meetings — with opposite models. 11x's Alice is a subscription AI SDR you run inside their platform. AI Ropeway builds a custom AI GTM engine and ships the code into your own repo." },
  { q: "What is the main difference?", a: "Ownership and fit. 11x is a rented platform; AI Ropeway is a bespoke engine built for your ICP, running in your accounts, with best-of-breed tools as data layers inside it — and you keep the code if you leave." },
  { q: "Which is more affordable?", a: "11x is a subscription — check their site for current pricing. AI Ropeway is $3,000 one-time for a 14-day Sprint or $2,500/month ongoing. Compare against a hire in the ROI calculator." },
  { q: "When should I choose 11x?", a: "If you want a managed, all-in-one AI SDR platform and minimal build, 11x is a strong option. If you want to own the system and tailor it to your ICP, pick the engine." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: MODIFIED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["11x alternative", "AI SDR", "AI GTM engine"], citation: sourcesToCitations(sources), isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: TITLE, item: `${SITE_URL}/blog/${SLUG}` }] },
    { "@type": "FAQPage", "@id": `${SITE_URL}/blog/${SLUG}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const rows = [
  ["Product model", "Subscription AI SDR platform (Alice)", "Custom AI GTM engine in your stack"],
  ["What you own", "Access while subscribed", "The code, forever"],
  ["Pricing", "Growth from $36k/yr listed; reported ~$5k/mo, first year $50&ndash;60k", "$3k one-time or $2.5k/mo"],
  ["Personalization", "Platform AI", "Written off the signal that fired, for your ICP"],
  ["Runs in", "11x's platform", "Your accounts, your infrastructure"],
  ["Data / enrichment layer", "Bundled", "Best-of-breed (Clay, etc.) inside the engine"],
  ["Reply triage & CRM", "Within the platform", "Owned agents: Reply Triager + CRM Auto-Pilot"],
  ["If you leave", "Access ends", "Engine keeps running"],
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
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">11x alternative: <span className="text-accent">subscription AI SDR vs an engine you own</span></h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">11x&apos;s Alice is a well-known AI SDR platform. AI Ropeway is a different model: a custom AI GTM engine shipped into your own repo. Here is the honest breakdown of when each one wins.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By <Link href="/founder" className="text-accent hover:underline">Bharat Gulati</Link></span><span>Last updated July 11, 2026</span><span>~6 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>New to the category? Start with <Link href="/what-is-an-ai-gtm-engine" className="text-accent hover:underline">what an AI GTM engine is</Link>, then come back.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What 11x is good at</h2>
            <p>11x offers a managed, all-in-one AI SDR (Alice) that handles sourcing, personalization, and outreach inside their platform. If you want a recognizable product and minimal build, it puts AI-driven outbound in front of your team quickly.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Where a custom engine wins</h2>
            <p>11x is a platform you subscribe to. An AI Ropeway engine is built for your ICP and signals, ships into your stack, and runs in your own accounts. That means personalization grounded in the actual signal that fired, best-of-breed tools as data layers inside the engine, and a system you keep whether or not you renew.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Honest comparison</h2>
            <div className="my-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-sm">
                <thead className="bg-surface"><tr><th className="px-4 py-3 text-left font-medium text-ink-soft">&nbsp;</th><th className="px-4 py-3 text-left font-medium text-ink-soft">11x</th><th className="px-4 py-3 text-left font-medium text-accent">AI Ropeway</th></tr></thead>
                <tbody>{rows.map(([k, c, ar]) => (<tr key={k} className="border-t border-line"><td className="px-4 py-3 font-medium text-ink">{k}</td><td className="px-4 py-3 text-ink-muted">{c}</td><td className="px-4 py-3 text-ink-soft">{ar}</td></tr>))}</tbody>
              </table>
            </div>
            <p className="text-sm text-ink-muted">11x pricing above was checked on {PRICING_CHECKED} against <a href="https://www.11x.ai/pricing" target="_blank" rel="noopener" className="text-accent hover:underline">11x&apos;s pricing page</a>. 11x&rsquo;s own site lists Growth from $36,000 a year. Third-party marketplace data reports a median contract nearer $40,000 with a range up to $65,000, and independent reviews describe roughly $5,000 a month with implementation fees on top. We publish the spread rather than a single number because the spread is real. Vendors change plans without notice &mdash; confirm before deciding.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Who should choose 11x over AI Ropeway</h2>
            <p>11x sells a managed relationship: an implementation team, a service agreement, and somebody accountable when it breaks at 2am. For an enterprise buyer who needs a vendor on a contract rather than a system in their repository &mdash; procurement sign-off, a security review, a name on the SLA &mdash; that is a real product difference, and we are not it.</p>
            <p>Founder-led delivery is a feature at our size and a liability at theirs. If your board needs to see a vendor rather than a consultant, 11x is the more defensible purchase.</p>
            <p>Pick 11x if you are enterprise, you want a vendor rather than an asset, and annual commitment with implementation support is what your procurement process expects rather than what it objects to.</p>
            <p>Do read the exit terms closely. Reported contract lengths are twelve months, and several public reviews describe difficulty leaving mid-term even during stated opt-out windows.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">When to pick which</h2>
            <p><strong className="text-ink">Pick 11x</strong> if you want a managed, all-in-one AI SDR platform with minimal build. <strong className="text-ink">Pick AI Ropeway</strong> if you want to own the system and tailor it to your ICP. Run the math with the <Link href="/roi-calculator" className="text-accent hover:underline">ROI calculator</Link>.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <PostSources items={sources} />

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Own the engine in 14 days</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">See it built on your data first. The free 60-minute audit ends with a live demo on your ICP.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/aisdr-alternative" className="text-accent hover:underline">AiSDR alternative</Link> · <Link href="/blog/artisan-alternative" className="text-accent hover:underline">Artisan alternative</Link> · <Link href="/blog/ai-ropeway-vs-clay" className="text-accent hover:underline">vs Clay</Link></p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
