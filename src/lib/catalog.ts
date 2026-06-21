// SEO catalog: enriches the base `systems` + `industries` data with slugs and
// unique, genuinely useful page copy so each becomes its own indexable page.
import { systems as baseSystems, industries as baseIndustries } from "@/lib/content";
import type { Industry } from "@/lib/content";

export type SystemPage = {
  slug: string;
  num: string;
  name: string;
  desc: string;
  intro: string;
  benefits: string[];
};

// Unique intro + benefits per system. Descriptive and accurate — no invented metrics.
const systemExtra: Record<
  string,
  { slug: string; intro: string; benefits: string[] }
> = {
  "01": {
    slug: "ai-gtm-strategy-builder",
    intro:
      "Most AI initiatives stall because they start with tools instead of a go-to-market plan. The AI GTM Strategy Builder maps your market, ICP, and funnel, then sequences the AI systems that will generate pipeline fastest — so deployment is tied to revenue from day one.",
    benefits: [
      "A prioritised AI roadmap sequenced by revenue impact, not hype",
      "Clear ICP, messaging, and channel plan your AI systems plug into",
      "Defined success metrics so every deployment is measurable",
    ],
  },
  "02": {
    slug: "ai-agent-management",
    intro:
      "Deploying one AI agent is easy; running a fleet of them reliably is not. AI Agent Management gives you the orchestration, monitoring, and guardrails to run agents across sales, support, and operations without things silently breaking.",
    benefits: [
      "Central monitoring and logging across every deployed agent",
      "Guardrails, fallbacks, and human-in-the-loop where it matters",
      "Continuous tuning so agents improve instead of drift",
    ],
  },
  "03": {
    slug: "voice-ai-solutions",
    intro:
      "Voice AI handles inbound calls, outbound follow-ups, and tier-one support at scale — answering instantly, qualifying intent, and routing to a human only when needed. We deploy voice agents into your existing telephony and CRM.",
    benefits: [
      "Instant, 24/7 answering for inbound and outbound calls",
      "Natural qualification and routing tied to your CRM",
      "Frees your team from repetitive, scriptable conversations",
    ],
  },
  "04": {
    slug: "ai-business-transformation",
    intro:
      "Real transformation touches people, process, and technology together. We embed AI across how you operate, sell, support, and grow — not as a bolt-on, but as a redesign of the workflows that move your numbers.",
    benefits: [
      "End-to-end AI integration across your core workflows",
      "Change management so adoption actually sticks",
      "A phased plan that ships value every sprint, not after a year",
    ],
  },
  "05": {
    slug: "linkedin-gtm-engine",
    intro:
      "The LinkedIn GTM Engine turns your founder and sales profiles into a consistent pipeline source — AI handles targeting, personalised outreach, and follow-up cadence so qualified conversations land in your inbox on autopilot.",
    benefits: [
      "Targeted, personalised outreach at a volume humans can't match",
      "Consistent follow-up cadence that stops leads going cold",
      "Booked conversations without a full SDR headcount",
    ],
  },
  "06": {
    slug: "ai-enterprise-implementations",
    intro:
      "Enterprise AI rollouts fail on integration, security, and scale — not models. We design large-scale implementations that fit complex stacks, satisfy security review, and roll out across teams without disruption.",
    benefits: [
      "Architecture built for complex, regulated environments",
      "Security, access, and compliance handled up front",
      "Staged rollout that scales across teams and regions",
    ],
  },
  "07": {
    slug: "ai-automation-and-workflow",
    intro:
      "Every manual, repetitive task is a candidate for automation. We map your workflows, identify the highest-leverage steps, and deploy AI automations that eliminate busywork and the errors that come with it.",
    benefits: [
      "Repetitive tasks removed from your team's plate",
      "Fewer manual errors and faster cycle times",
      "Automations that connect the tools you already use",
    ],
  },
  "08": {
    slug: "ai-saas-product-building",
    intro:
      "If AI is your product, speed to a working build matters. We take AI-native SaaS from concept to launch — architecture, model integration, and a deployable front end — without the months most teams burn getting started.",
    benefits: [
      "Concept-to-launch build with AI at the core",
      "Production-ready architecture, not a throwaway prototype",
      "A front end and infrastructure ready to ship",
    ],
  },
  "09": {
    slug: "website-and-mobile-app-deployment",
    intro:
      "We design and deploy high-converting web and mobile experiences with AI built in — fast, modern, and instrumented for conversion. From landing pages to full apps, shipped and live, not stuck in design review.",
    benefits: [
      "Fast, modern, conversion-focused web and mobile builds",
      "AI features (chat, personalisation, search) built in",
      "Deployed and measurable, not just designed",
    ],
  },
  "10": {
    slug: "ai-consultation-and-advisory",
    intro:
      "Sometimes you need direction before deployment. Our AI advisory aligns technology choices with business outcomes — what to build, what to buy, what to skip — so you invest in the AI that actually moves your metrics.",
    benefits: [
      "Clear build-vs-buy guidance tied to business outcomes",
      "An opinionated roadmap, not a vendor-neutral deck",
      "Senior input without a full-time hire",
    ],
  },
  "11": {
    slug: "sales-automation-and-revops",
    intro:
      "We automate the revenue operations that quietly eat selling time — lead routing, enrichment, follow-up, reporting — so your team spends its hours on the deals most likely to close.",
    benefits: [
      "Automated lead routing, enrichment, and follow-up",
      "Cleaner pipeline data and faster reporting",
      "More selling time, less CRM admin",
    ],
  },
  "12": {
    slug: "ai-trainings-and-workshops",
    intro:
      "Adoption depends on capability. Our hands-on AI trainings and workshops upskill your team on the exact tools and use cases relevant to their roles — practical, not theoretical.",
    benefits: [
      "Role-specific, hands-on training on real use cases",
      "Faster, more confident adoption across the team",
      "Internal champions who keep momentum after we leave",
    ],
  },
  "13": {
    slug: "ai-security-governance-and-risk",
    intro:
      "Deploying AI without governance is a liability. We put the frameworks in place — data handling, access control, compliance, and risk review — so you can scale AI safely and pass scrutiny.",
    benefits: [
      "Governance, access, and data-handling frameworks",
      "Compliance and risk review built into deployment",
      "Confidence to scale AI without exposure",
    ],
  },
  "14": {
    slug: "ai-content-media-and-growth",
    intro:
      "We scale content production and growth with AI media systems — research, drafting, repurposing, and distribution — so you publish more, consistently, without ballooning your team.",
    benefits: [
      "Higher content output without more headcount",
      "Consistent publishing and repurposing across channels",
      "Growth systems that compound over time",
    ],
  },
  "15": {
    slug: "ai-enablement-and-change-management",
    intro:
      "Tools don't transform companies; people do. We drive adoption and embed AI into your culture and workflows so the systems you deploy are actually used — and keep delivering after launch.",
    benefits: [
      "Adoption playbooks tailored to your teams",
      "AI embedded into daily workflows, not bolted on",
      "Sustained usage and value after go-live",
    ],
  },
  "16": {
    slug: "ai-data-analysis",
    intro:
      "Your data already holds the decisions you're guessing at. We deploy AI analytics that turn raw data into clear, strategic answers — surfacing patterns, risks, and opportunities you can act on.",
    benefits: [
      "Raw data turned into decisions, not dashboards no one reads",
      "Patterns, risks, and opportunities surfaced automatically",
      "Faster, more confident strategic calls",
    ],
  },
  "17": {
    slug: "ai-employees-deployment",
    intro:
      "AI Employees are digital workers that execute defined tasks around the clock — qualifying leads, handling support, processing data — without fatigue. We place and manage them inside your operation.",
    benefits: [
      "24/7 execution of defined, repeatable tasks",
      "Capacity that scales without hiring",
      "Managed and tuned so output stays reliable",
    ],
  },
  "18": {
    slug: "ai-business-intelligence",
    intro:
      "We deploy real-time intelligence dashboards that make your data work for you — live metrics, alerts, and forecasts so leaders see what's happening and what's next without waiting on a report.",
    benefits: [
      "Live dashboards across the metrics that matter",
      "Alerts and forecasts, not just historical reports",
      "Decisions based on what's happening now",
    ],
  },
};

export const systemPages: SystemPage[] = baseSystems.map((s) => ({
  ...s,
  ...systemExtra[s.num],
}));

export function getSystem(slug: string): SystemPage | undefined {
  return systemPages.find((s) => s.slug === slug);
}

// Industries already carry a stable `id` we use as the slug + rich copy.
export const industryPages: Industry[] = baseIndustries;

export function getIndustry(slug: string): Industry | undefined {
  return industryPages.find((i) => i.id === slug);
}
