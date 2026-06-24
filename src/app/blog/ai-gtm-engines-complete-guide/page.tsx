import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "ai-gtm-engines-complete-guide";
const TITLE = "The complete guide to AI GTM engines (2026)";
const DESCRIPTION =
  "What an AI GTM engine is, the 8 agents that build one, how to ship in 14 days, and the build-vs-buy economics for B2B SaaS founders.";
const PUBLISHED = "2026-06-25T00:00:00.000Z";
const MODIFIED = "2026-06-25T00:00:00.000Z";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: "AI Ropeway",
    title: `${TITLE} | AI Ropeway`,
    description: DESCRIPTION,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Bharat Gulati"],
  },
};

const faqs = [
  {
    q: "What is an AI GTM engine?",
    a: "An AI GTM engine is a coordinated stack of AI agents that handles the unglamorous infrastructure of B2B outbound: detecting buying intent, enriching accounts, warming inboxes, sourcing leads, composing personalized outreach, triaging replies, cleaning the CRM, and reporting pipeline. It replaces or augments an SDR team with software you own.",
  },
  {
    q: "Why not just hire SDRs or use an agency?",
    a: "SDRs cost $96k+/year per rep and take 60-90 days to ramp. Agencies cost the same and you don't own the assets. An AI GTM engine costs $3k one-time or $2.5k/mo, ships in 14 days, scales 5x without new hires, and the code lives in your repo. The math only works against AI for very high-touch enterprise sales motions.",
  },
  {
    q: "What does 'you own everything we ship' mean?",
    a: "All agent code lands in your GitHub repo on day one. No SaaS subscription holds your data hostage. If you fire AI Ropeway tomorrow, your AI GTM engine keeps running on your infrastructure. No per-seat fees, no per-message fees, no lock-in.",
  },
  {
    q: "How is this different from Clay or Apollo?",
    a: "Clay and Apollo are data tools — you configure them, you run them, you pay monthly. We ship a full AI GTM engine built ON TOP of tools like Clay, Apollo, Make.com, GetReplies, and n8n. We design the ICP, write the prompts, wire the workflows, deploy the code. Clay is a layer in the stack. We deliver the stack.",
  },
  {
    q: "How fast can it actually go live?",
    a: "First AI SDR engine ships in 14 days from kickoff. We demo a working engine on your real ICP data on the first call — before you commit anything. Most clients see measurable pipeline impact within 30-60 days.",
  },
  {
    q: "What if I don't have a clean CRM?",
    a: "Most B2B SaaS founders don't. Our CRM Auto-Pilot agent (one of the 8) is purpose-built for this: stale deals get flagged, missing fields auto-filled from activity, duplicates merged, stages updated from real signals not manual rep entry. We typically clean the CRM as part of the deployment sprint.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BlogPosting", "Article"],
      "@id": `${SITE_URL}/blog/${SLUG}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}/blog/${SLUG}`,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      author: {
        "@type": "Person",
        name: "Bharat Gulati",
        url: `${SITE_URL}/about`,
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`,
      about: [
        "AI GTM engineering",
        "AI SDR systems",
        "signal-based outbound",
        "revenue operations automation",
      ],
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: TITLE,
          item: `${SITE_URL}/blog/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/blog/${SLUG}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const agents = [
  {
    n: "01",
    pillar: "AI SDR Engine",
    name: "Intent Watcher",
    body: "Watches LinkedIn activity, job changes, funding rounds, hiring posts, and review-site moves. Fires only on warm prospects — not the full TAM. Cuts noise so your other agents only work on accounts with a reason to buy this week.",
  },
  {
    n: "02",
    pillar: "AI SDR Engine",
    name: "Account Mapper",
    body: "Cross-references company data, tech stack, headcount, recent news. Builds full ICP-scored account profiles automatically so Sequence Composer has real ammo, not just job title + first name.",
  },
  {
    n: "03",
    pillar: "AI SDR Engine",
    name: "Inbox Operator",
    body: "Domain warmup, inbox rotation, deliverability monitoring. Lands in primary, not promotions, not spam. The single most-ignored layer of the stack — and the reason most cold outreach fails before the prospect ever sees it.",
  },
  {
    n: "04",
    pillar: "Signal-Based Outbound",
    name: "Lead Sourcer",
    body: "Surfaces net-new accounts in-market right now from intent signals. No buying lists. No spray-and-pray. Output is a fresh, scored list of accounts your competitors haven’t cold-pitched yet.",
  },
  {
    n: "05",
    pillar: "Signal-Based Outbound",
    name: "Sequence Composer",
    body: "Personalized outreach using the actual signal that fired — research-grounded, not a template with merge tags. Each email references the specific reason this account is in-market right now.",
  },
  {
    n: "06",
    pillar: "Signal-Based Outbound",
    name: "Reply Triager",
    body: "Classifies every reply: hot, nurture, objection, unsubscribe. Routes hot ones to your founder inbox. Auto-handles objections, nurtures, and unsubs. The agent that actually reclaims your time.",
  },
  {
    n: "07",
    pillar: "Revenue Ops Automation",
    name: "CRM Auto-Pilot",
    body: "Stale deals, missing fields, duplicate contacts, overdue follow-ups. Auto-updates stages from real activity. Most CRMs lie because reps update them manually — this one tells the truth because it watches the work.",
  },
  {
    n: "08",
    pillar: "Revenue Ops Automation",
    name: "Revenue Pulse",
    body: "Pipeline + agent performance + cost-per-meeting + LTV. A real-time command center for your sales motion. Tells you which agent earned its keep this week and where to redeploy effort.",
  },
];

export default function PillarPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="px-3 pt-6 pb-16 md:px-5 md:pt-8">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-8 text-sm text-ink-muted">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 hover:text-ink"
            >
              <ArrowLeft className="size-4" /> All posts
            </Link>
          </nav>

          <header className="mb-10">
            <p className="mono-label mb-4 text-accent">
              Pillar guide · AI GTM engineering
            </p>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.05]">
              The complete guide to AI GTM engines{" "}
              <span className="text-accent">(and the 8 agents that build one)</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Every B2B SaaS founder is asking the same question in 2026: do I
              keep hiring SDRs, or do I ship an AI GTM engine? This is the
              honest, technical answer — what it is, what it costs, the 8
              agents that make it work, and the 14-day playbook to ship one
              into your repo.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
              <span>By Bharat Gulati · Founder, AI Ropeway</span>
              <span>Published June 25, 2026</span>
              <span>~10 min read</span>
            </div>
          </header>

          <div className="prose-doc space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            <section>
              <h2 className="font-display mt-12 mb-4 text-2xl font-bold text-ink md:text-3xl">
                What is an AI GTM engine?
              </h2>
              <p>
                An AI GTM engine is a coordinated stack of AI agents that
                handles the entire unglamorous infrastructure of B2B outbound
                — detecting buying intent, enriching accounts, warming
                inboxes, sourcing leads, composing personalized outreach,
                triaging replies, cleaning the CRM, and reporting pipeline
                health.
              </p>
              <p>
                It is not one agent. It is not a chatbot wired into your
                website. It is a system of specialized agents that each own
                one job, and the integration glue between them.
              </p>
              <p>
                The difference between “we added AI to our outbound” and
                “we shipped an AI GTM engine” is the same as the difference
                between bolting a turbocharger on a Civic and building an F1
                power unit. Both have a turbo. Only one is engineered.
              </p>
            </section>

            <section>
              <h2 className="font-display mt-12 mb-4 text-2xl font-bold text-ink md:text-3xl">
                Why AI GTM beats the SDR-team default in 2026
              </h2>
              <p>
                The economics flipped sometime in 2025 and most go-to-market
                leaders are still pricing their plans against the 2023 stack.
                Here is the honest math:
              </p>
              <ul className="my-6 space-y-3 pl-0">
                {[
                  "One SDR: $96k/year fully-loaded, 60-90 days to ramp, books 4-8 meetings/month at steady state, churns every 14-18 months.",
                  "One AI GTM Sprint: $3k one-time, 14 days to ship, books 30-50 meetings/quarter at steady state, code in your repo forever.",
                  "Scaling 5x: hire 4 more SDRs ($384k/year + ramp) vs. run the same AI GTM engine on more accounts (same cost).",
                  "Owning the asset: an SDR walks out the door with the playbook in their head. The AI GTM engine lives in your GitHub.",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4"
                  >
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-teal text-white">
                      <Check className="size-3" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p>
                The exceptions are real but narrow: enterprise sales with
                7-figure ACVs and 12-month cycles still need humans driving
                the relationship. Everything below that ACV line, AI GTM wins
                on cost, speed, scale, and asset ownership.
              </p>
            </section>

            <section>
              <h2 className="font-display mt-12 mb-4 text-2xl font-bold text-ink md:text-3xl">
                The 3 pillars of an AI GTM engine
              </h2>
              <p>
                Every working AI GTM engine has three pillars. Skip one and
                the whole thing collapses.
              </p>
              <h3 className="font-display mt-8 mb-3 text-xl font-semibold text-ink">
                Pillar I — AI SDR Engine
              </h3>
              <p>
                The infrastructure layer. Signal detection, enrichment, inbox
                warmup, deliverability. The unsexy plumbing that decides
                whether you reach an inbox at all. Most founders skip this
                and wonder why their open rates are 8%.
              </p>
              <h3 className="font-display mt-8 mb-3 text-xl font-semibold text-ink">
                Pillar II — Signal-Based Outbound
              </h3>
              <p>
                The motion layer. Sourcing in-market accounts, composing
                research-grounded outreach, triaging replies. This is where
                meetings get booked. Without Pillar I underneath, Pillar II
                produces beautifully personalized emails that land in spam.
              </p>
              <h3 className="font-display mt-8 mb-3 text-xl font-semibold text-ink">
                Pillar III — Revenue Ops Automation
              </h3>
              <p>
                The accountability layer. Keeping the CRM honest, reporting
                pipeline truthfully, surfacing what worked. Skip this and you
                will have no idea which agent earned its keep, which signal
                converts, or whether the engine is paying for itself.
              </p>
            </section>

            <section>
              <h2 className="font-display mt-12 mb-4 text-2xl font-bold text-ink md:text-3xl">
                The 8 agents that make an AI GTM engine work
              </h2>
              <p>
                Three pillars. Eight agents. Each one specialized. None of
                them clever generalists. The point is not a single super-AI
                that does everything badly — it is eight focused agents
                that each do one thing well, with the wiring between them
                handled deliberately.
              </p>

              <div className="my-8 space-y-4">
                {agents.map((a) => (
                  <div
                    key={a.n}
                    className="rounded-2xl border border-line bg-surface p-6"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-ink-faint">
                        [ {a.n} ]
                      </span>
                      <span className="mono-label text-ink-soft">
                        {a.pillar}
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-xl font-bold text-ink">
                      {a.name}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display mt-12 mb-4 text-2xl font-bold text-ink md:text-3xl">
                Build vs. buy: the honest stack
              </h2>
              <p>
                You can build an AI GTM engine from scratch. You can also dig
                a swimming pool with a spoon. Both are technically possible.
                Neither is recommended.
              </p>
              <p>
                The pragmatic stack uses best-of-breed tools as layers and
                writes the orchestration glue in-house. The tools we ship on
                top of:
              </p>
              <ul className="my-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  "Claude (Anthropic)",
                  "Clay",
                  "Make.com",
                  "Apollo",
                  "GetReplies",
                  "n8n",
                  "HubSpot",
                  "Salesforce",
                  "Supabase",
                  "LinkedIn Sales Nav",
                  "Smartlead",
                  "Pinecone",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface-soft px-3 py-1.5 text-center text-xs text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </ul>
              <p>
                Each tool owns the layer it is best at. Clay handles
                waterfall enrichment. Smartlead handles inbox warmup.
                Anthropic handles reasoning. Make.com and n8n handle the
                workflow glue. Supabase stores the agent state. The
                orchestration code — the part you actually own — lives
                in your repo.
              </p>
              <p>
                The mistake we see most often: founders pick a single
                all-in-one “AI SDR platform” and assume it covers all three
                pillars. None of them do. They cover Pillar II reasonably
                well and leave Pillars I and III to chance — which is why
                their pipeline numbers look great in week 3 and collapse in
                month 4.
              </p>
            </section>

            <section>
              <h2 className="font-display mt-12 mb-4 text-2xl font-bold text-ink md:text-3xl">
                The 14-day shipping playbook
              </h2>
              <p>
                A focused AI GTM Sprint ships one full AI SDR engine in 14
                days. Here is the actual schedule, not a marketing-deck
                version:
              </p>
              <ol className="my-6 space-y-3">
                {[
                  [
                    "Day 1 — ICP & signal kickoff",
                    "60-min call. Define the wedge ICP (not the full TAM). Pick 3-5 buying signals to fire on. Get repo access.",
                  ],
                  [
                    "Day 2-3 — Signal detection + enrichment",
                    "Wire Intent Watcher + Account Mapper. Test against historical closed-won accounts to validate the signal mix.",
                  ],
                  [
                    "Day 4-5 — Inbox infrastructure",
                    "Provision sending domains, warmup, SPF/DKIM/DMARC. The unglamorous part that decides whether anything else works.",
                  ],
                  [
                    "Day 6-8 — Sequence Composer + Reply Triager",
                    "Write the prompt scaffolding for the personalization. Set up reply classification. Test on synthetic and live replies.",
                  ],
                  [
                    "Day 9-10 — Live test on real accounts",
                    "Soft launch on 50-100 in-market accounts. Watch the deliverability dashboard like a hawk. Tune prompts on the first batch of replies.",
                  ],
                  [
                    "Day 11-12 — CRM integration + Revenue Pulse",
                    "Wire CRM Auto-Pilot to update stages from real activity. Stand up the Revenue Pulse dashboard so you can see pipeline truthfully.",
                  ],
                  [
                    "Day 13 — Handover",
                    "Code documented in your repo. README walks the team through running, monitoring, and tuning each agent.",
                  ],
                  [
                    "Day 14 — Scale",
                    "Open the throttle. Move from 50-100 accounts to the full in-market list. Engine runs 24/7 from here.",
                  ],
                ].map(([title, body]) => (
                  <li
                    key={title}
                    className="rounded-2xl border border-line bg-surface p-5"
                  >
                    <p className="font-display text-sm font-bold text-ink">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {body}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-display mt-12 mb-4 text-2xl font-bold text-ink md:text-3xl">
                How AI Ropeway ships your AI GTM engine
              </h2>
              <p>
                Three things we do differently from agencies, SaaS platforms,
                and DIY tools:
              </p>
              <ul className="my-6 space-y-3">
                <li className="rounded-2xl border border-line bg-surface p-5">
                  <strong className="text-ink">Code in your repo, day one.</strong>{" "}
                  Every agent lands in your GitHub. No SaaS lock-in. No data
                  hostage situation. If we get hit by a bus, your engine
                  keeps running.
                </li>
                <li className="rounded-2xl border border-line bg-surface p-5">
                  <strong className="text-ink">
                    Live demo on your ICP data, first call.
                  </strong>{" "}
                  Before you commit anything, we demo a working AI GTM engine
                  against your real ICP — not a sandbox, not a slide.
                </li>
                <li className="rounded-2xl border border-line bg-surface p-5">
                  <strong className="text-ink">
                    Founder-led delivery.
                  </strong>{" "}
                  Bharat Gulati (ex-VP Sales scaling AI GTM from zero, IIM
                  Indore AI/ML) ships alongside your team weekly. No agency
                  middle layer. No junior dev learning on your dime.
                </li>
              </ul>
              <p>
                See the{" "}
                <Link
                  href="/#revenue-stack"
                  className="text-accent hover:underline"
                >
                  full 8-agent revenue stack
                </Link>
                ,{" "}
                <Link href="/#pricing" className="text-accent hover:underline">
                  pricing tiers
                </Link>
                , or{" "}
                <Link href="/industries" className="text-accent hover:underline">
                  industry-specific playbooks
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink md:text-3xl">
                FAQ
              </h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-line bg-surface p-5"
                  >
                    <summary className="cursor-pointer font-medium text-ink">
                      {f.q}
                    </summary>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
              <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">
                Ready to ship your AI GTM engine?
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-soft">
                Book a 60-minute audit. We demo a working AI GTM engine on
                your real ICP data. No decks. No retainer. Just a working
                system you can decide on.
              </p>
              <Cta href="/#audit" size="lg">
                Book live demo on your data
              </Cta>
              <p className="mt-6 text-xs text-ink-faint">
                Or jump straight to{" "}
                <Link href="/#pricing" className="text-accent hover:underline">
                  pricing
                </Link>{" "}
                ·{" "}
                <Link href="/about" className="text-accent hover:underline">
                  founder bio
                </Link>{" "}
                ·{" "}
                <Link href="/systems" className="text-accent hover:underline">
                  beyond AI GTM
                </Link>
              </p>
            </section>
          </div>

          <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"
            >
              <ArrowLeft className="size-4" /> All posts
            </Link>
            <Link
              href="/#revenue-stack"
              className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
            >
              See the 8-agent stack <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      </article>
    </>
  );
}
