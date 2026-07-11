import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "artisan-alternative";
const TITLE = "Artisan alternative: AI BDR platform vs an owned AI GTM engine";
const DESCRIPTION =
  "Honest comparison of Artisan (Ava) and a custom AI GTM engine. Artisan is a subscription AI BDR platform; AI Ropeway ships an owned engine into your repo. When each one wins.";
const PUBLISHED = "2026-07-11T09:00:00.000Z";
const MODIFIED = "2026-07-11T09:00:00.000Z";

const sources: Source[] = [
  { publisher: "Artisan", title: "Artisan", url: "https://www.artisan.co", note: "Primary source for Artisan (Ava) platform positioning and pricing referenced below. Verify current details on their site." },
  { publisher: "AI Ropeway", title: "AI GTM engines complete guide", url: "https://www.airopeway.com/blog/ai-gtm-engines-complete-guide", note: "Reference for the 8-agent engine architecture compared here." },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { type: "article", url: `${SITE_URL}/blog/${SLUG}`, siteName: "AI Ropeway", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION, publishedTime: PUBLISHED, modifiedTime: MODIFIED, authors: ["Bharat Gulati"] },
  twitter: { card: "summary_large_image", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION },
};

const faqs = [
  { q: "Is AI Ropeway an Artisan competitor?", a: "Same job, opposite model. Artisan's Ava is a subscription AI BDR you manage inside their platform. AI Ropeway builds a custom AI GTM engine and ships the code into your own repo, so you own the whole system." },
  { q: "What is the core difference?", a: "Artisan is an all-in-one AI BDR product. AI Ropeway is a bespoke engine built for your ICP, running in your accounts, using best-of-breed tools as data layers inside it — and you keep the code if you ever leave." },
  { q: "Which costs less?", a: "Artisan is a subscription — check their site for current tiers. AI Ropeway is $3,000 one-time for a 14-day Sprint or $2,500/month ongoing. Compare against a hire in the ROI calculator." },
  { q: "When is Artisan the better call?", a: "If you want a single all-in-one AI BDR product with a managed UI and minimal setup, Artisan is a strong pick. If you want to own and shape the system around your ICP, pick the engine." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: MODIFIED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["Artisan alternative", "AI BDR", "AI GTM engine"], citation: sourcesToCitations(sources), isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: TITLE, item: `${SITE_URL}/blog/${SLUG}` }] },
    { "@type": "FAQPage", "@id": `${SITE_URL}/blog/${SLUG}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const rows = [
  ["Product model", "All-in-one AI BDR platform (Ava)", "Custom AI GTM engine in your repo"],
  ["What you own", "Access while subscribed", "The code, forever"],
  ["Pricing", "Monthly subscription (see site)", "$3k one-time or $2.5k/mo"],
  ["Personalization", "Platform AI", "Written off the signal that fired, for your ICP"],
  ["Runs in", "Artisan's platform", "Your accounts, your infrastructure"],
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
            <p className="mono-label mb-4 text-accent">Comparison · AI BDR</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">Artisan alternative: <span className="text-accent">AI BDR platform vs an owned engine</span></h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">Artisan&apos;s Ava is a capable all-in-one AI BDR. AI Ropeway is a different model: a custom AI GTM engine shipped into your own repo. Here is the honest breakdown of when each one wins.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By <Link href="/founder" className="text-accent hover:underline">Bharat Gulati</Link></span><span>Last updated July 11, 2026</span><span>~6 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>New to the category? Start with <Link href="/what-is-an-ai-gtm-engine" className="text-accent hover:underline">what an AI GTM engine is</Link>, then come back.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Artisan is good at</h2>
            <p>Artisan packages sourcing, personalization, and outreach into one AI BDR product (Ava) with a polished UI. If you want a single managed tool and minimal setup, it is a clean way to put AI-assisted outbound in front of your team fast.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Where a custom engine wins</h2>
            <p>Artisan is an all-in-one platform you rent. An AI Ropeway engine is built around your ICP and signals, ships into your GitHub repo, and runs in your own accounts. The difference shows up in fit and ownership: personalization grounded in the exact signal that fired, best-of-breed tools running as data layers inside the engine, and a system that keeps running whether or not you renew.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Honest comparison</h2>
            <div className="my-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-sm">
                <thead className="bg-surface"><tr><th className="px-4 py-3 text-left font-medium text-ink-soft">&nbsp;</th><th className="px-4 py-3 text-left font-medium text-ink-soft">Artisan</th><th className="px-4 py-3 text-left font-medium text-accent">AI Ropeway</th></tr></thead>
                <tbody>{rows.map(([k, c, ar]) => (<tr key={k} className="border-t border-line"><td className="px-4 py-3 font-medium text-ink">{k}</td><td className="px-4 py-3 text-ink-muted">{c}</td><td className="px-4 py-3 text-ink-soft">{ar}</td></tr>))}</tbody>
              </table>
            </div>
            <p className="text-sm text-ink-muted">Competitor features and pricing change often — confirm current details on <a href="https://www.artisan.co" target="_blank" rel="noopener" className="text-accent hover:underline">Artisan&apos;s site</a> before deciding.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">When to pick which</h2>
            <p><strong className="text-ink">Pick Artisan</strong> if you want one managed AI BDR product with minimal setup. <strong className="text-ink">Pick AI Ropeway</strong> if you want to own the system and shape it around your ICP. Run the math with the <Link href="/roi-calculator" className="text-accent hover:underline">ROI calculator</Link>.</p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <PostSources items={sources} />

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Own the engine in 14 days</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">See it built on your data first. The free 60-minute audit ends with a live demo on your ICP.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/aisdr-alternative" className="text-accent hover:underline">AiSDR alternative</Link> · <Link href="/blog/11x-alternative" className="text-accent hover:underline">11x alternative</Link> · <Link href="/blog/ai-ropeway-vs-apollo" className="text-accent hover:underline">vs Apollo</Link></p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
