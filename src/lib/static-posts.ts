import type { BlogPost } from "./blog";

// Posts that live as their own route under src/app/blog/<slug>/ rather than in
// Sanity. The index only queried Sanity, so these 19 never appeared on /blog and
// picked up almost no internal links — /blog/11x-alternative and
// /blog/artisan-alternative recorded zero impressions in 90 days as a result.
//
// A static segment takes precedence over blog/[slug], so where a slug exists in
// both places this entry is the one that renders. Keep title/excerpt in sync
// with the TITLE/DESCRIPTION constants in the matching page.tsx.
export const staticPosts: BlogPost[] = [
  {
    _id: "static-11x-alternative",
    slug: "11x-alternative",
    title: "11x alternative: rent an AI SDR or own it",
    excerpt:
      "Honest comparison of 11x (Alice) and a custom AI GTM engine. One is a subscription; the other ships into your stack in 14 days. When each wins.",
    publishedAt: "2026-07-11T09:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-aisdr-alternative",
    slug: "aisdr-alternative",
    title: "AiSDR alternative: rented vs owned",
    excerpt:
      "Honest comparison of AiSDR and a custom AI GTM engine. AiSDR is a subscription; AI Ropeway ships an owned engine in 14 days. When each wins.",
    publishedAt: "2026-07-11T09:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-artisan-alternative",
    slug: "artisan-alternative",
    title: "Artisan alternative: rented vs owned",
    excerpt:
      "Honest comparison of Artisan (Ava) and a custom AI GTM engine. Artisan is a subscription AI BDR; AI Ropeway ships an engine you own. When each wins.",
    publishedAt: "2026-07-11T09:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-ai-automation-workflow-operational-bottlenecks",
    slug: "ai-automation-workflow-operational-bottlenecks",
    title: "AI automation for operational bottlenecks",
    excerpt:
      "Most teams lose 20-40% of their time to 3-5 bottlenecks. The framework for finding them, deploying AI automation, and measuring ROI in 30 days.",
    publishedAt: "2026-06-27T09:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-ai-business-transformation-board-playbook",
    slug: "ai-business-transformation-board-playbook",
    title: "AI transformation: the board playbook",
    excerpt:
      "Most AI transformation stalls because it starts with technology and ends with a deck. The board-level playbook that starts with revenue instead.",
    publishedAt: "2026-06-27T09:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-ai-gtm-strategy-pipeline",
    slug: "ai-gtm-strategy-pipeline",
    title: "How to build an AI GTM strategy",
    excerpt:
      "Most AI GTM strategies are decks disguised as execution. The founder's playbook for signals, enrichment, outreach, and measurement that books meetings.",
    publishedAt: "2026-06-27T09:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-ai-sales-automation-revops-2026",
    slug: "ai-sales-automation-revops-2026",
    title: "AI sales automation & RevOps in 2026",
    excerpt:
      "Most AI sales tools automate the wrong things. What actually moves pipeline in 2026: signal-based outbound, reply triage, and CRM automation.",
    publishedAt: "2026-06-27T09:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-enterprise-ai-agent-management-guide",
    slug: "enterprise-ai-agent-management-guide",
    title: "Enterprise AI agent management",
    excerpt:
      "Deploying one AI agent is easy. Running 5, 10, or 18 without silent failures is not. The management layer that makes multi-agent AI actually work.",
    publishedAt: "2026-06-27T09:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-ai-ropeway-vs-apollo",
    slug: "ai-ropeway-vs-apollo",
    title: "AI Ropeway vs Apollo: honest comparison",
    excerpt:
      "Apollo is the best B2B data platform for SDR teams. AI Ropeway is the GTM engine that uses Apollo as a data source. Where each one actually wins.",
    publishedAt: "2026-06-25T10:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-ai-ropeway-vs-clay",
    slug: "ai-ropeway-vs-clay",
    title: "AI Ropeway vs Clay: tool vs full AI GTM engine",
    excerpt:
      "Clay is the best data layer for waterfall enrichment. AI Ropeway is the engine you build on top of it. When you need both, and when you don't.",
    publishedAt: "2026-06-25T09:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-revenue-pulse-pipeline-analytics",
    slug: "revenue-pulse-pipeline-analytics",
    title: "Revenue Pulse: AI pipeline analytics",
    excerpt:
      "How the Revenue Pulse agent measures pipeline velocity, agent performance, cost-per-meeting, and LTV — so you know which AI GTM agent earned its keep this week.",
    publishedAt: "2026-06-25T08:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-crm-auto-pilot-ai-crm-automation",
    slug: "crm-auto-pilot-ai-crm-automation",
    title: "CRM Auto-Pilot: AI CRM automation",
    excerpt:
      "How the CRM Auto-Pilot agent updates stages from real activity, fills fields, merges duplicates, and flags stale deals — so your CRM stops lying.",
    publishedAt: "2026-06-25T07:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-reply-triager-ai-reply-classification",
    slug: "reply-triager-ai-reply-classification",
    title: "Reply Triager: AI reply classification",
    excerpt:
      "How the Reply Triager agent sorts every reply — hot, nurture, objection, unsubscribe — and auto-handles 80%, so you only touch real meetings.",
    publishedAt: "2026-06-25T06:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-sequence-composer-ai-personalized-outreach",
    slug: "sequence-composer-ai-personalized-outreach",
    title: "Sequence Composer: AI personalized outreach",
    excerpt:
      "How the Sequence Composer agent writes research-grounded cold outreach from the actual signal that fired — not the template 50,000 reps also sent.",
    publishedAt: "2026-06-25T05:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-lead-sourcer-signal-based-outbound",
    slug: "lead-sourcer-signal-based-outbound",
    title: "Lead Sourcer: signal-based outbound",
    excerpt:
      "How the Lead Sourcer agent finds net-new accounts in-market right now from intent signals — no bought lists, no spray-and-pray outbound.",
    publishedAt: "2026-06-25T04:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-inbox-operator-cold-email-deliverability",
    slug: "inbox-operator-cold-email-deliverability",
    title: "Inbox Operator: cold email deliverability",
    excerpt:
      "How the Inbox Operator agent handles domain warmup, inbox rotation, and deliverability monitoring — the plumbing that decides if you reach inbox.",
    publishedAt: "2026-06-25T03:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-account-mapper-ai-account-enrichment",
    slug: "account-mapper-ai-account-enrichment",
    title: "Account Mapper: AI account enrichment",
    excerpt:
      "How the Account Mapper agent builds ICP-scored profiles automatically — firmographics, tech stack, headcount, recent news — so outreach lands.",
    publishedAt: "2026-06-25T02:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-intent-watcher-ai-buying-signals",
    slug: "intent-watcher-ai-buying-signals",
    title: "Intent Watcher: AI buying signals",
    excerpt:
      "How the Intent Watcher agent surfaces real buying signals from LinkedIn, job posts, funding rounds, and review sites — so outbound stops going cold.",
    publishedAt: "2026-06-25T01:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
  {
    _id: "static-ai-gtm-engines-complete-guide",
    slug: "ai-gtm-engines-complete-guide",
    title: "The complete guide to AI GTM engines (2026)",
    excerpt:
      "What an AI GTM engine is, the 8 agents that build one, how to ship in 14 days, and the build-vs-buy economics for B2B SaaS founders.",
    publishedAt: "2026-06-25T00:00:00.000Z",
    imageRef: null,
    authorName: "Bharat Gulati",
    categories: [],
  },
];
