import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { footer } from "@/lib/content";

const SITE_URL = "https://www.airopeway.com";
const FOUNDER_NAME = "Bharat Gulati";
const FOUNDER_TITLE = "Founder & AI GTM Engineer, AI Ropeway";
const FOUNDER_URL = `${SITE_URL}/founder`;

const credentials = [
  "12+ years enterprise B2B sales",
  "Ex-VP Sales — scaled an AI automation platform's GTM from zero",
  "IIM Indore alum, AI/ML specialization",
  "Founder, AI Ropeway (AI GTM engineering studio)",
  "Founder, AI Placers (AI-native talent placement)",
  "Serving B2B SaaS founders across India, AU, UK, US, CA",
];

const sameAs = [
  "https://www.linkedin.com/in/bharatgulati",
  "https://www.aiplacers.com",
];

const publishedArticles = [
  {
    slug: "ai-gtm-engines-complete-guide",
    title: "The complete guide to AI GTM engines (2026)",
    description:
      "Pillar guide: what an AI GTM engine is, the 8 agents that build one, 14-day shipping playbook, and the build-vs-buy economics.",
    tag: "Pillar guide",
  },
  {
    slug: "intent-watcher-ai-buying-signals",
    title: "Intent Watcher: AI buying signals that fire only on warm prospects",
    description:
      "How the Intent Watcher agent surfaces buying signals from LinkedIn, job posts, funding rounds, and review sites.",
    tag: "Agent 01 · AI SDR Engine",
  },
  {
    slug: "account-mapper-ai-account-enrichment",
    title: "Account Mapper: AI account enrichment built on Clay",
    tag: "Agent 02 · AI SDR Engine",
  },
  {
    slug: "inbox-operator-cold-email-deliverability",
    title: "Inbox Operator: cold email deliverability infrastructure",
    tag: "Agent 03 · AI SDR Engine",
  },
  {
    slug: "lead-sourcer-signal-based-outbound",
    title: "Lead Sourcer: signal-based outbound for B2B SaaS",
    tag: "Agent 04 · Signal-Based Outbound",
  },
  {
    slug: "sequence-composer-ai-personalized-outreach",
    title: "Sequence Composer: AI personalized outreach",
    tag: "Agent 05 · Signal-Based Outbound",
  },
  {
    slug: "reply-triager-ai-reply-classification",
    title: "Reply Triager: AI reply classification",
    tag: "Agent 06 · Signal-Based Outbound",
  },
  {
    slug: "crm-auto-pilot-ai-crm-automation",
    title: "CRM Auto-Pilot: AI CRM automation",
    tag: "Agent 07 · Revenue Ops Automation",
  },
  {
    slug: "revenue-pulse-pipeline-analytics",
    title: "Revenue Pulse: pipeline analytics",
    tag: "Agent 08 · Revenue Ops Automation",
  },
  {
    slug: "ai-ropeway-vs-clay",
    title: "AI Ropeway vs Clay: tool vs full AI GTM engine",
    tag: "Comparison",
  },
  {
    slug: "ai-ropeway-vs-apollo",
    title: "AI Ropeway vs Apollo: data layer vs AI GTM engine",
    tag: "Comparison",
  },
];

export const metadata: Metadata = {
  title: "Bharat Gulati · Founder, AI Ropeway",
  description:
    "Bharat Gulati — founder of AI Ropeway. Ex-VP Sales who scaled AI GTM from zero. IIM Indore AI/ML alum. 12+ yrs B2B enterprise sales. Ships AI GTM engines into your repo in 14 days.",
  alternates: { canonical: "/founder" },
  openGraph: {
    type: "profile",
    url: FOUNDER_URL,
    siteName: "AI Ropeway",
    title: "Bharat Gulati · Founder, AI Ropeway",
    description:
      "Founder of AI Ropeway. Ex-VP Sales who scaled AI GTM from zero. IIM Indore AI/ML alum.",
    firstName: "Bharat",
    lastName: "Gulati",
    username: "bharatgulati",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Gulati · Founder, AI Ropeway",
    description:
      "Founder of AI Ropeway. Ex-VP Sales who scaled AI GTM from zero. IIM Indore AI/ML alum.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${FOUNDER_URL}#profile`,
      url: FOUNDER_URL,
      name: `${FOUNDER_NAME} · Founder profile`,
      dateCreated: "2026-06-25T00:00:00.000Z",
      dateModified: "2026-06-25T00:00:00.000Z",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#bharat-gulati` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#bharat-gulati`,
      name: FOUNDER_NAME,
      givenName: "Bharat",
      familyName: "Gulati",
      jobTitle: FOUNDER_TITLE,
      description:
        "Founder of AI Ropeway. Ex-VP Sales who scaled an AI automation platform's GTM from zero. IIM Indore AI/ML alum. 12+ years B2B enterprise sales. Ships AI GTM engines into client repos.",
      url: FOUNDER_URL,
      email: footer.email,
      sameAs,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      founderOf: [
        { "@id": `${SITE_URL}/#organization` },
        { "@type": "Organization", name: "AI Placers", url: "https://www.aiplacers.com" },
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Management Indore",
        sameAs: "https://www.iimidr.ac.in",
      },
      knowsAbout: [
        "AI GTM engineering",
        "AI SDR systems",
        "signal-based outbound",
        "revenue operations automation",
        "B2B SaaS sales",
        "AI agent orchestration",
        "cold email deliverability",
        "CRM automation",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "AI GTM Engineer",
        skills: [
          "Claude",
          "Clay",
          "Apollo",
          "Make.com",
          "n8n",
          "HubSpot",
          "Salesforce",
          "Supabase",
          "Smartlead",
        ],
      },
      subjectOf: publishedArticles.map((a) => ({
        "@type": "BlogPosting",
        "@id": `${SITE_URL}/blog/${a.slug}#article`,
        headline: a.title,
        url: `${SITE_URL}/blog/${a.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Founder",
          item: FOUNDER_URL,
        },
      ],
    },
  ],
};

export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-3 pt-6 pb-10 md:px-5 md:pt-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10 grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
            <div
              className="grid size-24 place-items-center rounded-full font-display text-3xl font-bold text-canvas md:size-28"
              style={{ background: "var(--color-indigo)" }}
              aria-label={FOUNDER_NAME}
            >
              BG
            </div>
            <div>
              <p className="mono-label mb-4 text-accent">Founder profile</p>
              <h1 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.06]">
                {FOUNDER_NAME}
              </h1>
              <p className="mt-2 text-lg text-ink-soft">{FOUNDER_TITLE}</p>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                12+ years enterprise sales. Most recently VP Sales scaling an
                AI automation platform&apos;s GTM from zero. IIM Indore alum,
                AI/ML specialization — a rare bridge between deep
                go-to-market and shipping AI in production. Now ships AI GTM
                engines into B2B SaaS founder repos in 14 days.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={sameAs[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm text-ink-soft hover:bg-surface-soft"
                >
                  LinkedIn <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href={sameAs[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm text-ink-soft hover:bg-surface-soft"
                >
                  AI Placers <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href={`mailto:${footer.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm text-ink-soft hover:bg-surface-soft"
                >
                  <Mail className="size-3.5" /> {footer.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <p className="mono-label mb-4 text-accent">Credentials</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {credentials.map((c) => (
            <div
              key={c}
              className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal text-white">
                <Check className="size-3.5" />
              </span>
              <span className="text-[15px] text-ink-soft">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8 md:px-8">
        <div className="rounded-3xl border border-line bg-surface p-8 md:p-12">
          <p className="mono-label mb-4 text-accent">Background</p>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft">
            <p>
              <strong className="text-ink">Education.</strong> Indian
              Institute of Management Indore (IIM Indore), AI/ML
              specialization. The combination of MBA-grade go-to-market
              fundamentals with hands-on AI/ML systems training is the
              foundation for how AI Ropeway approaches AI GTM — not as a
              prompt-engineering exercise, but as productionable systems
              tied to revenue outcomes.
            </p>
            <p>
              <strong className="text-ink">Enterprise sales.</strong>{" "}
              12+ years across B2B enterprise software — selling complex,
              multi-stakeholder deals into mid-market and enterprise
              accounts. Built outbound motions, hired and ran SDR teams,
              owned pipeline and revenue targets. This is the empathy that
              shows up in every agent we ship.
            </p>
            <p>
              <strong className="text-ink">AI GTM, from zero.</strong>{" "}
              Most recently served as VP Sales scaling an AI automation
              platform&apos;s GTM motion from nothing. Designed the
              outbound playbook, built the team, wired the agents that did
              the work. That experience is what AI Ropeway productizes for
              other B2B SaaS founders.
            </p>
            <p>
              <strong className="text-ink">Founder, AI Ropeway.</strong>{" "}
              AI GTM engineering studio for B2B SaaS founders. Signal
              detection, enrichment, personalized outreach, reply triage —
              shipped into your repo in 14 days. You own everything we
              ship.
            </p>
            <p>
              <strong className="text-ink">Founder, AI Placers.</strong>{" "}
              Sister company. Places AI-native talent into businesses ready
              to scale. Different wedge, same conviction: AI is a
              workforce, not a feature.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mono-label mb-2 text-accent">Published articles</p>
            <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">
              Writing on AI GTM engineering
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-accent hover:underline"
          >
            All posts →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {publishedArticles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(22,21,26,0.35)]"
            >
              <p className="mono-label text-ink-faint">{a.tag}</p>
              <h3 className="font-display mt-2 text-base font-semibold leading-snug text-ink group-hover:text-accent">
                {a.title}
              </h3>
              {a.description && (
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {a.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 text-center md:px-8">
        <Cta href="/#audit" size="lg">
          Book a 60-min call with Bharat
        </Cta>
        <p className="mt-6 text-sm text-ink-muted">
          Live demo on your real ICP data, first call. Code in your repo,
          day one.
        </p>
      </section>
    </>
  );
}
