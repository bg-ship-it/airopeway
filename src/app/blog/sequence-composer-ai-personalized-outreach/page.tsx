import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "sequence-composer-ai-personalized-outreach";
const TITLE = "Sequence Composer: AI personalized outreach that isn't a template with merge tags";
const DESCRIPTION =
  "How the Sequence Composer agent writes research-grounded cold outreach using the actual buying signal that fired — not the same template Apollo gave 50,000 other reps.";
const PUBLISHED = "2026-06-25T05:00:00.000Z";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: { type: "article", url: `${SITE_URL}/blog/${SLUG}`, siteName: "AI Ropeway", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION, publishedTime: PUBLISHED, authors: ["Bharat Gulati"] },
};

const faqs = [
  { q: "What LLM does Sequence Composer use?", a: "Anthropic Claude as the default. Prompts are tuned per ICP. We don’t use generic OpenAI prompts off-the-shelf because the quality difference at high volume is meaningful and the cost difference at our volumes is not." },
  { q: "How is this different from Apollo's AI writer or Lavender?", a: "Apollo and Lavender write FROM a template + a few merge fields. Sequence Composer writes FROM the specific buying signal that fired in Intent Watcher plus the account profile from Account Mapper. The personalization references concrete public facts, not 'I noticed you’re a leader in X.'" },
  { q: "Won't prospects spot it as AI-written?", a: "They will if the signal is weak. Strong signal-grounded outreach reads like a thoughtful rep wrote it because the substance is real. The AI is doing the assembly, not the inventing." },
  { q: "How many touches per sequence?", a: "Typically 4–6 touches over 14–21 days. Each touch can deepen the angle (LinkedIn DM, follow-up email, voice note, second email with new value framing). Sequence shape is configured per ICP." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["BlogPosting", "Article"], "@id": `${SITE_URL}/blog/${SLUG}#article`, headline: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: PUBLISHED, dateModified: PUBLISHED, author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/about` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`, about: ["personalized outreach", "AI SDR", "cold email AI"], isPartOf: { "@id": `${SITE_URL}/blog/ai-gtm-engines-complete-guide#article` }, inLanguage: "en" },
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
            <p className="mono-label mb-4 text-accent">Agent 05 · Signal-Based Outbound</p>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.06]">Sequence Composer: <span className="text-accent">AI personalized outreach</span> that isn’t a template with merge tags</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">The agent that turns a fired signal + enriched account profile into outreach that reads like a thoughtful rep wrote it — because the substance is real, not invented.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"><span>By Bharat Gulati</span><span>~7 min read</span></div>
          </header>

          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <p>Cold outreach personalization has a ceiling, and most teams hit it: “I noticed you raised Series B — congrats!” The prospect noticed the same thing in 14 other inboxes that week. Part of the <Link href="/blog/ai-gtm-engines-complete-guide" className="text-accent hover:underline">complete AI GTM engine guide</Link>.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">What Sequence Composer does</h2>
            <p>Takes the structured signal payload (Intent Watcher) + the enriched account profile (Account Mapper) and generates a sequence: 4–6 touches across email + LinkedIn over 14–21 days, each touch referencing real facts about the account, with the value framing escalating across touches.</p>
            <p>The first email is not a template. It is a generated email grounded in one specific signal and one specific account fact. The second touch acknowledges no reply and pivots framing. The third introduces a different angle. The compose pattern is the IP — not the prompt.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Why this matters</h2>
            <p>Reply rates on signal-grounded outreach run 3–10× above template outreach in the same ICP. The difference is not cleverness — it is that the prospect can immediately tell the email is about <em>them</em>, not about the sender’s pipeline.</p>
            <p>The unfortunate truth: most “AI personalization” tools generate emails that pattern-match like AI. Sequence Composer avoids that because the source material (the signal) is concrete and verifiable. Concrete inputs produce concrete outputs.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Stack & integration</h2>
            <p>Anthropic Claude for generation. Custom prompt scaffolding tuned per ICP. Smartlead or Lemlist for sending. n8n or Make.com for the orchestration. Output is structured so the Inbox Operator agent can route across the warmed inbox pool.</p>

            <h2 className="font-display mt-12 mb-3 text-2xl font-bold text-ink md:text-3xl">Common failure modes</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Asking the LLM to write the whole email from scratch instead of assembling from concrete facts.</li>
              <li>Same prompt for every ICP (ignores objection patterns, tone differences).</li>
              <li>Generating sequences that don’t pivot framing across touches (just “bump” emails).</li>
              <li>No tone guardrails (the LLM defaults to corporate-bland or aggressive-cringe).</li>
            </ul>

            <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">FAQ</h2>
            <div className="space-y-3">{faqs.map((f) => (<details key={f.q} className="rounded-2xl border border-line bg-surface p-5"><summary className="cursor-pointer font-medium text-ink">{f.q}</summary><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p></details>))}</div>

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Ship Sequence Composer with the rest of the stack</h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">14-day sprint. Code in your repo. Live demo on your data, first call.</p>
              <Cta href="/#audit" size="lg">Book live demo on your data</Cta>
              <p className="mt-6 text-xs text-ink-faint">Related: <Link href="/blog/lead-sourcer-signal-based-outbound" className="text-accent hover:underline">Lead Sourcer</Link> · <Link href="/blog/reply-triager-ai-reply-classification" className="text-accent hover:underline">Reply Triager</Link> · <Link href="/blog/inbox-operator-cold-email-deliverability" className="text-accent hover:underline">Inbox Operator</Link></p>
            </section>
          </div>

          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm">
            <Link href="/blog/lead-sourcer-signal-based-outbound" className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"><ArrowLeft className="size-4" /> Prev: Lead Sourcer</Link>
            <Link href="/blog/reply-triager-ai-reply-classification" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">Next: Reply Triager <ArrowRight className="size-4" /></Link>
          </nav>
        </div>
      </article>
    </>
  );
}
