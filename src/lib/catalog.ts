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
  // Optional search-targeting overrides. Only set these where a system page
  // competes with an editorial page for the same query — otherwise the page
  // name and desc are the better default.
  seoTitle?: string;
  seoDescription?: string;
  // Optional long-form body. Without these a system page renders intro +
  // benefits only, which is ~90 words of unique copy — too thin to rank for
  // anything competitive. Populate them for systems with real search demand.
  sections?: { h: string; body: string[] }[];
  faqs?: { q: string; a: string }[];
};

// Unique intro + benefits per system. Descriptive and accurate — no invented metrics.
const systemExtra: Record<
  string,
  {
    slug: string;
    intro: string;
    benefits: string[];
    seoTitle?: string;
    seoDescription?: string;
    sections?: { h: string; body: string[] }[];
    faqs?: { q: string; a: string }[];
  }
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
    // /blog/enterprise-ai-agent-management-guide and this page both surfaced for
    // "ai agent management" (193 impressions at position 48.9 vs 113 at 75.5) and
    // for every other query in that cluster the guide ranked higher. Pointing this
    // page at service intent instead stops the two competing for the same term.
    seoTitle: "AI Agent Management Services",
    seoDescription:
      "Run a fleet of AI agents in production: orchestration, monitoring, guardrails, and continuous tuning. Deployed into your stack in 14 days.",
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
    // "voice ai consulting" and "voice ai implementation services" are
    // buying-intent queries this page surfaced for but never answered. Sections
    // below cover what the page can state from first-party knowledge; the
    // measured latency figures, deployment numbers and per-minute pricing are
    // deliberately absent until they can be quoted accurately.
    sections: [
      {
        h: "What voice AI handles well — and what it doesn't",
        body: [
          "Voice agents are strongest on calls with a narrow, well-defined job: qualifying an inbound enquiry, confirming or rescheduling an appointment, chasing a form fill, answering the same tier-one question for the hundredth time that week. These are conversations with a predictable shape, where the caller wants a fast answer more than they want a person.",
          "They are weakest where the call is the relationship. Escalations, renewals under strain, anything involving a distressed or angry caller, and any conversation where the next question genuinely cannot be anticipated — those belong with a human, and a voice agent that tries to hold them will damage the account faster than a slow callback would.",
          "The practical test before deploying a voice agent to a call type: could a well-briefed new hire handle this from a one-page script on day one? If yes, it is a good candidate. If the honest answer is that it takes judgement built over months, keep it human and use the agent to route the call there faster.",
        ],
      },
      {
        h: "Why latency decides whether it works",
        body: [
          "In natural conversation people leave roughly a fifth of a second between turns. Every component in a voice pipeline eats into that budget: speech recognition, the model generating a reply, speech synthesis, and the round trip over the telephony network. Push total response time much past a second and callers start talking over the agent, repeating themselves, or assuming the line has dropped.",
          "This is the single technical constraint that separates a voice deployment people tolerate from one they do not notice. It is also the reason a voice agent cannot simply be a chatbot with a phone number attached — the architecture has to be built backwards from the latency budget, streaming partial results rather than waiting for complete ones at each stage.",
          "When evaluating any voice AI vendor, including us, ask what their measured response time is at the median and at the 95th percentile, and on which telephony provider. A vendor who quotes only model inference time is not measuring the thing the caller experiences.",
        ],
      },
      {
        h: "Interruptions, and why they are the hard part",
        body: [
          "The moment a real caller talks over the agent is the moment most voice demos fall apart. Handling it — barge-in — means the agent has to detect speech while it is still talking, stop cleanly mid-sentence, discard the rest of its planned reply, and pick up from what the caller actually said rather than from where its script was.",
          "Done badly, the agent talks over the caller, or stops and restarts its whole sentence, or loses the thread entirely. Done well, it is the difference between a call that feels like a conversation and one that feels like fighting a phone menu. Any serious evaluation of a voice agent should include deliberately interrupting it three or four times.",
        ],
      },
      {
        h: "What it connects to",
        body: [
          "A voice agent that cannot see your systems is an answering machine with better manners. We deploy into your existing telephony and CRM rather than asking you to move to a new stack, so the agent can look up a caller before it greets them, write the outcome back to the record, and hand a warm transfer to a human with the context already attached.",
          "That last part matters more than it sounds. The common failure in voice deployments is not the agent mishandling a call — it is the agent handling it correctly and then dropping the caller onto a colleague who has to start the conversation from scratch, which is a worse experience than never using the agent at all.",
        ],
      },
      {
        h: "Disclosure and consent",
        body: [
          "Rules on recording consent and on disclosing that a caller is speaking to an AI vary by jurisdiction and are tightening in most of them. Some regions require all-party consent to record; some require the AI nature of the caller to be disclosed up front; some require both, and the rules differ again for outbound calls versus inbound.",
          "Our position is to disclose by default rather than to the legal minimum. Callers tend to react far better to a voice agent that says what it is in the first sentence than to one they work out halfway through, and the disclosure costs less in call outcome than the discovery does in trust. The specific requirements for your markets are part of the scoping call.",
        ],
      },
    ],
    faqs: [
      { q: "Will callers know they are talking to an AI?", a: "Yes, if we build it — we disclose in the opening line by default rather than to the legal minimum. Disclosure requirements differ by jurisdiction and by whether the call is inbound or outbound, and we scope yours before deployment, but the practical argument is simpler than the legal one: callers who are told up front react better than callers who work it out midway." },
      { q: "What happens when the agent cannot handle the call?", a: "It routes to a human, with the context it has already gathered attached to the transfer. The failure to design for is not the agent getting stuck — it is the agent handing over cleanly to a colleague who then has to restart the conversation from nothing, which is worse than not deploying the agent at all." },
      { q: "Which calls should stay with humans?", a: "Escalations, renewals under strain, distressed or angry callers, and anything where the next question genuinely cannot be anticipated. A useful test: if a well-briefed new hire could handle the call from a one-page script on day one, a voice agent can too. If it takes judgement built over months, keep it human and use the agent to get the caller there faster." },
      { q: "Does it replace the phone system we already have?", a: "No. We deploy into your existing telephony and CRM rather than asking you to migrate. The agent sits in front of what you run today, looks up the caller before greeting them, and writes outcomes back to the record." },
    ],
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
