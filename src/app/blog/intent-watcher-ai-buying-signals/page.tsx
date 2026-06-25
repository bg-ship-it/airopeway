import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";
import { PostSources, sourcesToCitations, type Source } from "@/components/post-sources";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "intent-watcher-ai-buying-signals";
const TITLE = "Intent Watcher: AI buying signals that fire only on warm prospects";
const DESCRIPTION =
  "How the Intent Watcher agent surfaces real buying signals from LinkedIn, job posts, funding rounds, and review sites — so your outbound stops wasting reach on cold accounts.";
const PUBLISHED = "2026-06-25T01:00:00.000Z";
const MODIFIED = "2026-06-25T01:00:00.000Z";

const sources: Source[] = [
  {
    publisher: "Crunchbase",
    title: "Crunchbase",
    url: "https://www.crunchbase.com",
    note: "Funding-announcement source Intent Watcher polls for budget-unlock signals.",
  },
  {
    publisher: "G2",
    title: "G2 business software reviews",
    url: "https://www.g2.com",
    note: "Review-site activity source used as a competitor-evaluation buying signal.",
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
  { q: "What buying signals does Intent Watcher track?", a: "LinkedIn job changes, hiring posts, role expansions, funding announcements, review-site activity, technographic moves, and content engagement. Each signal type carries a different weight in the ICP score." },
  { q: "How is this different from intent data tools like Bombora or 6sense?", a: "Intent data vendors sell aggregated content-consumption signals. Intent Watcher composes signals from public sources you can verify, customized to your ICP, and triggers downstream agents directly. You own the logic and the output." },
  { q: "How fast can Intent Watcher detect a signal?", a: "Most signals fire within hours of publication. LinkedIn signals are polled hourly. Job posts and funding within 24h. Review-site activity within 1-3 days. Hot accounts hit Sequence Composer same-day." },
  { q: "What if our ICP is very specific?", a: "That's the point. Intent Watcher is configured to your ICP at deploy. Industry, headcount band, geography, tech stack, role titles, signal mix — all tuned during the 14-day sprint kickoff." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: MODIFIED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["buying intent signals", "AI SDR", "signal-based outbound"], citation: sourcesToCitations(sources), isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
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
          <nav className="mb-8 text-sm text-ink-muted">
            <Link href="/blog" className="inline-flex items-center gap-1 hover:text-ink">
              <ArrowLeft className="size-4" /> All posts
            </Link>
          </nav>

          <header className="mb-10">
            <p className="mono-label mb-4 text-accent">Agent 01 · AI SDR Engine</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">
              Intent Watcher: <span className="text-accent">AI buying signals</span> that fire only on warm prospects
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              The agent that watches the public web for the exact moment an account starts behaving like a buyer — then routes only those accounts to the rest of your AI GTM engine.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By <Link href="/founder" className="text-accent hover:underline">Bharat Gulati</Link> · Founder, AI Ropeway</span><span>Last updated June 25, 2026</span><span>~6 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>
              Cold outbound dies in volume. The 2026 stack of mature AI GTM engines moves the other direction — surgical, signal-triggered outreach against tiny lists of accounts that have a reason to buy <em>this week</em>. Intent Watcher is the agent that builds those lists.
            </p>
            <p>
              This post is part of the{" "}
              <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete guide to AI GTM engines</Link>. See how Intent Watcher fits into the 3-pillar architecture and the other 7 agents.
            </p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Intent Watcher actually does</h2>
            <p>
              It watches a curated set of public sources — LinkedIn activity, job listings, funding announcements, review-site moves, tech-stack changes, content engagement — and fires when an account crosses a signal threshold you defined.
            </p>
            <p>
              Output is not a CSV. Output is a structured event: account ID, the signal that fired, signal confidence, recency, and the context payload (so Sequence Composer can write outreach that references the actual signal, not “I noticed you’re a leader in X”).
            </p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Why this matters</h2>
            <p>
              The single highest-leverage decision in B2B outbound is <strong className="text-ink">which accounts to contact this week</strong>. Most teams skip it. They buy a list, hit send, and watch reply rates flatline at 1%.
            </p>
            <p>
              A working intent layer collapses your reachable list from “the full TAM” (cold, noisy, ignored) to “the 40–80 accounts currently showing buyer behavior” (warm, focused, replied-to). Reply rates jump 5–10× because you stopped wasting reach on accounts that had no reason to buy.
            </p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">How it works under the hood</h2>
            <p>
              Intent Watcher runs on a scheduled poll loop. Each source has its own connector — LinkedIn Sales Nav for activity, Google Job Search APIs for hiring posts,{" "}
              <a href="https://www.crunchbase.com" target="_blank" rel="noopener" className="text-accent hover:underline">Crunchbase</a>{" "}
              for funding,{" "}
              <a href="https://www.g2.com" target="_blank" rel="noopener" className="text-accent hover:underline">G2</a>/Capterra for review moves. Signals stream into a Supabase event table.
            </p>
            <p>
              An ICP-scoring function (defined at sprint kickoff, tunable per industry) reads the events, multiplies by signal weights, and emits a {`"fire"`} event when the account crosses threshold. Account Mapper takes it from there.
            </p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Common failure modes</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Too many signals weighted equally — fires too often, dilutes the warm list back into noise.</li>
              <li>Polling too slowly — signal goes cold before Sequence Composer reaches the prospect.</li>
              <li>No suppression logic — same account fires twice in a week, looks spammy to the prospect.</li>
              <li>Treating every signal as equal — a funding round is not the same buying intent as a job post.</li>
            </ul>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">When to deploy first</h2>
            <p>
              If you have an existing outbound motion with low reply rates, Intent Watcher is the highest-ROI agent to ship first — it makes every other agent more effective without changing anything else in your stack. If you’re starting from scratch, ship it alongside Inbox Operator (no point watching intent if your emails land in spam).
            </p>
            <p>
              The pillar guide covers the full{" "}
              <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">14-day shipping playbook</Link>{" "}with where Intent Watcher slots into days 2–3.
            </p>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-surface p-5">
                  <summary className="cursor-pointer font-medium text-ink">{f.q}</summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>

            <PostSources items={sources} />

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Ship Intent Watcher in 14 days</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">Live demo on your real ICP data, first call. Code in your repo, day one.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">
                Related: <Link href="/blog/account-mapper-ai-account-enrichment" className="text-accent hover:underline">Account Mapper</Link> · <Link href="/blog/inbox-operator-cold-email-deliverability" className="text-accent hover:underline">Inbox Operator</Link> · <Link href="/blog/sequence-composer-ai-personalized-outreach" className="text-accent hover:underline">Sequence Composer</Link>
              </p>
            </section>
          </div>

          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm">
            <Link href="/blog/ai-gtm-engines-complete-guide" className="inline-flex items-center gap-1 text-ink-muted hover:text-ink">
              <ArrowLeft className="size-4" /> Back to pillar guide
            </Link>
            <Link href="/blog/account-mapper-ai-account-enrichment" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
              Next: Account Mapper <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      </article>
    </>
  );
}
