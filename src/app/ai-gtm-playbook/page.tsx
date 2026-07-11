import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "ai-gtm-playbook";
const TITLE = "The 14-Day AI GTM Build Plan (free playbook)";
const DESCRIPTION =
  "The exact 14-day plan we use to ship an AI GTM engine into a founder's repo — the audit checklist, the 8-agent build order, and the deliverables. Free, no call required.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/${SLUG}`,
    siteName: "AI Ropeway",
    title: `${TITLE} | AI Ropeway`,
    description: DESCRIPTION,
    authors: ["Bharat Gulati"],
  },
  twitter: { card: "summary_large_image", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION },
};

const checklist = [
  { phase: "Days 1–2 · Audit", items: ["Define the ICP in one sentence a machine can filter on", "List the 3–5 buying signals that actually precede a deal", "Map the current CRM + inbox + data stack", "Agree the single metric the engine is judged on"] },
  { phase: "Days 3–7 · Signal + data layer", items: ["Stand up Intent Watcher on the chosen signals", "Wire Account Mapper enrichment (Clay as the data layer)", "Score accounts against the ICP rubric", "Provision + warm dedicated sending domains"] },
  { phase: "Days 8–12 · Outreach + triage", items: ["Sequence Composer writes off the signal that fired — not a template", "Reply Triager classifies hot / nurture / objection / unsubscribe", "Route hot replies to the founder inbox; auto-handle the rest", "Deliverability monitoring live before volume ramps"] },
  { phase: "Days 13–14 · Ship + own", items: ["Push all code to the client's GitHub repo", "CRM Auto-Pilot keeps stages + fields honest", "Revenue Pulse dashboard: pipeline, cost-per-meeting, agent performance", "Handoff walkthrough — the team can run it without us"] },
];

const faqs = [
  { q: "Is the playbook actually free?", a: "Yes. The full 14-day build plan and audit checklist are on this page. Enter your email and we send the editable template you can run against your own stack — no call required." },
  { q: "Do I need to book a call to use it?", a: "No. The playbook stands alone. If you want us to run it for you, the free 60-minute audit is there — but it is not a condition of getting the plan." },
  { q: "Who is this for?", a: "B2B SaaS and services founders at roughly $1M–$20M ARR running founder-led sales who want qualified meetings without hiring SDRs." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Article", "HowTo"],
      "@id": `${SITE_URL}/${SLUG}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}/${SLUG}`,
      author: { "@type": "Person", name: "Bharat Gulati", url: `${SITE_URL}/founder` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: `${SITE_URL}/${SLUG}`,
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "AI GTM Playbook", item: `${SITE_URL}/${SLUG}` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/${SLUG}#faq`,
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-4 pt-20 pb-24 md:pt-28">
        <header className="mb-10">
          <p className="mono-label mb-4 text-accent">Free playbook</p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.06]">
            The 14-day plan we use to ship an <span className="text-accent">AI GTM engine</span> into a founder&apos;s repo.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            No gated fluff. The full build plan is below. Drop your email and we send the editable checklist you can run against your own stack.
          </p>
        </header>

        <div className="mb-12 rounded-3xl border border-line bg-surface-soft p-6 md:p-8">
          <p className="font-display text-lg font-bold text-ink">Get the editable template</p>
          <p className="mt-1 mb-4 text-sm text-ink-muted">The 14-day checklist as a doc you can copy and run.</p>
          <LeadCapture source="ai-gtm-playbook" buttonLabel="Send me the playbook" />
        </div>

        <div className="space-y-8">
          {checklist.map((block) => (
            <section key={block.phase}>
              <h2 className="font-display mb-4 text-xl font-bold text-ink md:text-2xl">{block.phase}</h2>
              <ul className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink-soft">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                      <Check className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display mb-6 text-2xl font-bold text-ink">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-line bg-surface p-5">
                <summary className="cursor-pointer font-medium text-ink">{f.q}</summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
          <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">Rather we just build it?</h2>
          <p className="mx-auto mb-6 max-w-xl text-ink-soft">Book the free 60-minute audit and we run this plan on your ICP — with a live demo on your data.</p>
          <Cta href="/#audit" size="lg">Book your free AI GTM audit</Cta>
          <p className="mt-6 text-xs text-ink-faint">Or run the numbers first with the <Link href="/roi-calculator" className="text-accent hover:underline">ROI calculator</Link>.</p>
        </section>
      </div>
    </>
  );
}
