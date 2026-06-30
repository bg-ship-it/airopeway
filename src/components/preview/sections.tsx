import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Telescope,
  Layers,
  Inbox,
  Compass,
  Sparkles,
  MessageSquareReply,
  RefreshCw,
  Activity,
  Check,
  X,
  ShieldCheck,
  Code2,
  PlayCircle,
  Target,
  Zap,
  Rocket,
  Package,
  HelpCircle,
  MapPin,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";
import { BOOK_URL } from "@/lib/content";

const accentChips = [
  "var(--color-coral)",
  "var(--color-amber)",
  "var(--color-indigo)",
  "var(--color-teal)",
  "var(--color-pink)",
  "var(--color-coral)",
  "var(--color-amber)",
  "var(--color-indigo)",
];

export function PreviewBadge() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-6 md:pt-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-xs">
        <span className="size-1.5 rounded-full bg-amber" />
        <span className="font-mono uppercase tracking-wider text-amber">
          PREVIEW · v5 final draft · noindex
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-3 pt-6 pb-12 md:px-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-24">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="mono-label inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 px-4 py-1.5 text-ink-soft">
            <span className="size-1.5 rounded-full bg-accent" />
            AI GTM engineering · for B2B SaaS founders
          </span>

          <h1 className="font-display mt-6 text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1.02]">
            AI GTM engines that{" "}
            <span className="text-accent">book meetings</span> on autopilot.
            <br />
            <em className="font-medium italic text-ink-muted">
              You own everything we ship.
            </em>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We design, build, and deploy{" "}
            <strong className="font-semibold text-ink">
              AI GTM engines
            </strong>{" "}
            for B2B founders — signal detection, enrichment, personalized
            outreach, reply triage. Shipped into your repo in{" "}
            <strong className="font-semibold text-ink">14 days</strong>.
            Live demo on{" "}
            <strong className="font-semibold text-ink">your data</strong> on
            our first call.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas hover:opacity-80"
            >
              Book live demo on your data <ArrowRight className="size-4" />
            </a>
            <Link
              href="#revenue-stack"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
            >
              See the 8-agent stack ↓
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <Code2 className="size-4 text-teal" />
              Code in your repo, day one
            </span>
            <span className="inline-flex items-center gap-1.5">
              <PlayCircle className="size-4 text-teal" />
              Live demo on your ICP, first call
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-teal" />
              No lock-in, no SaaS fees
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { val: "14 days", lbl: "First system shipped" },
            { val: "12+ yrs", lbl: "Founder enterprise sales" },
            { val: "100%", lbl: "Code ownership, day one" },
            { val: "B2B SaaS", lbl: "Primary wedge" },
          ].map((s) => (
            <div
              key={s.lbl}
              className="rounded-2xl border border-line bg-surface/80 px-4 py-5 text-center backdrop-blur-sm"
            >
              <div className="font-display text-3xl font-bold">{s.val}</div>
              <div className="mt-1 text-xs text-ink-muted">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    num: "I",
    name: "AI SDR Engine",
    blurb:
      "Turn buying signals into booked meetings. Intent detection, enrichment, inbox warmup — all the unglamorous infra that decides whether you reach the inbox at all.",
    icon: Telescope,
  },
  {
    num: "II",
    name: "Signal-Based Outbound",
    blurb:
      "Find accounts in-market this week. Reach them with research-grade personalization. Triage replies to humans only when humans matter.",
    icon: Compass,
  },
  {
    num: "III",
    name: "Revenue Ops Automation",
    blurb:
      "Keep your CRM clean. Keep your pipeline accurate. Keep your reps focused on closing — not on data entry, lead scrubbing, or hygiene.",
    icon: Activity,
  },
];

export function PillarsSection() {
  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface px-5 py-20 md:px-12 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[002] · What we build</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            Three pillars.{" "}
            <span className="text-ink-muted">One unified GTM engine.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            No more cobbling together six SaaS tools and a Zapier prayer. We
            ship a single coherent stack across three layers — built around
            your ICP, your CRM, your inbox.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="rounded-2xl border border-line bg-surface-soft p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="grid size-10 place-items-center rounded-full text-canvas"
                    style={{ background: "var(--color-indigo)" }}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-ink-faint">
                    PILLAR {p.num}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-xl font-bold">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {p.blurb}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const agents = [
  {
    pillar: "AI SDR Engine",
    icon: Telescope,
    name: "Intent Watcher",
    desc: "Watches LinkedIn activity, job changes, funding rounds, hiring posts, and review-site moves. Fires only on warm prospects.",
  },
  {
    pillar: "AI SDR Engine",
    icon: Layers,
    name: "Account Mapper",
    desc: "Cross-references company data, tech stack, headcount, recent news. Builds full ICP-scored account profiles automatically.",
  },
  {
    pillar: "AI SDR Engine",
    icon: Inbox,
    name: "Inbox Operator",
    desc: "Domain warmup, inbox rotation, deliverability monitoring. Lands in primary, not promotions, not spam.",
  },
  {
    pillar: "Signal-Based Outbound",
    icon: Compass,
    name: "Lead Sourcer",
    desc: "Surfaces net-new accounts in-market right now from intent signals. No buying lists. No spray-and-pray.",
  },
  {
    pillar: "Signal-Based Outbound",
    icon: Sparkles,
    name: "Sequence Composer",
    desc: "Personalized outreach using the actual signal that fired — research-grounded, not a template with merge tags.",
  },
  {
    pillar: "Signal-Based Outbound",
    icon: MessageSquareReply,
    name: "Reply Triager",
    desc: "Classifies every reply: hot, nurture, objection, unsubscribe. Routes hot ones to your inbox; auto-handles the rest.",
  },
  {
    pillar: "Revenue Ops Automation",
    icon: RefreshCw,
    name: "CRM Auto-Pilot",
    desc: "Stale deals, missing fields, duplicate contacts, overdue follow-ups. Auto-updates stages from real activity.",
  },
  {
    pillar: "Revenue Ops Automation",
    icon: Activity,
    name: "Revenue Pulse",
    desc: "Pipeline + agent performance + cost-per-meeting + LTV. A real-time command center for your sales motion.",
  },
];

export function RevenueStack() {
  return (
    <section id="revenue-stack" className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-20 md:px-12 md:py-24">
        <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-line pb-4">
          <span className="font-mono text-sm text-ink-soft">↳</span>
          <span className="mono-label text-ink-soft">
            REVENUE STACK · 8 AGENTS
          </span>
          <span className="ml-auto font-mono text-xs text-ink-faint">
            v 1.0 · production
          </span>
        </div>

        <div className="mb-12 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[003] · The build</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            8 agents across the 3 pillars.
            <br />
            <span className="text-ink-muted">
              Shipped into your repo. Yours forever.
            </span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.name}
                className="flex h-full flex-col bg-surface p-6"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="grid size-10 place-items-center rounded-full text-canvas"
                    style={{ background: accentChips[i % accentChips.length] }}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: accentChips[i % accentChips.length] }}
                  >
                    [ {String(i + 1).padStart(2, "0")} ]
                  </span>
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">
                  {a.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {a.desc}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                  {a.pillar}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          <strong className="font-semibold text-ink">Built with:</strong>{" "}
          Claude · Clay · Make.com · Apollo · GetReplies · n8n · HubSpot ·
          Supabase · LinkedIn Sales Nav · +30 more
        </p>
      </div>
    </section>
  );
}

export function FounderBlock() {
  return (
    <section id="founder" className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface px-5 py-14 md:px-12 md:py-20">
        <p className="mono-label mb-4 text-accent">[004] · Founder</p>
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
          <div
            className="grid size-20 place-items-center rounded-full font-display text-2xl font-bold text-canvas"
            style={{ background: "var(--color-indigo)" }}
            aria-label="Bharat Gulati"
          >
            BG
          </div>
          <div>
            <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-[1.12]">
              VP Sales who scaled AI GTM from zero.{" "}
              <span className="text-accent">
                Now I ship the systems that do it for you.
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Bharat Gulati, founder. 12+ years enterprise sales. Most recently
              VP Sales scaling an AI automation platform&apos;s GTM from zero.{" "}
              <strong className="font-semibold text-ink">IIM Indore</strong>{" "}
              alum, AI/ML specialization — a rare bridge between deep
              go-to-market and shipping AI in production. I&apos;ve actually
              been the VP Sales who built outbound from nothing. Now I ship
              the AI systems that do the same job at machine speed —{" "}
              <em className="italic">and you own the code on day one</em>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="/founder"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-soft px-4 py-2 text-ink-soft hover:bg-surface"
              >
                Founder bio <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="#manifesto"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-soft px-4 py-2 text-ink-soft hover:bg-surface"
              >
                Read the manifesto <ArrowUpRight className="size-3.5" />
              </Link>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft px-4 py-2 text-ink-faint">
                IIM Indore · AI/ML
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const cases = [
  {
    num: "CASE 01",
    title: "B2B SaaS · ~$5M ARR",
    blurb:
      "Replaced 2 outbound SDRs with Intent Watcher + Sequence Composer + Reply Triager. Reply rate lifted 8× in 60 days.",
    client: "Series A SaaS — US West Coast",
    stats: [
      { v: "11.2%", l: "Reply rate" },
      { v: "47", l: "Meetings / 60d" },
      { v: "$192k", l: "SDR cost saved /yr" },
    ],
  },
  {
    num: "CASE 02",
    title: "D2C brand · ~$12M GMV",
    blurb:
      "Full Revenue Stack deployment. Lead Sourcer surfaced 38 in-market wholesale accounts in 60 days.",
    client: "D2C wellness brand — India",
    stats: [
      { v: "38", l: "In-market accts" },
      { v: "9", l: "Closed in Q1" },
      { v: "4.2×", l: "Pipeline ROI" },
    ],
  },
  {
    num: "CASE 03",
    title: "Growth-stage agency",
    blurb:
      "CRM Auto-Pilot + Revenue Pulse. Killed 14 hrs/week of RevOps grunt work. Forecast accuracy +27%.",
    client: "Digital agency — 40-person team",
    stats: [
      { v: "14 hrs/wk", l: "RevOps saved" },
      { v: "+27%", l: "Forecast accuracy" },
      { v: "$0", l: "Headcount added" },
    ],
  },
];

export function ProofCases() {
  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-20 md:px-12 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[005] · Proof</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            Real systems. <span className="text-accent">Real numbers.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Anonymized deployment outcomes from real AI Ropeway engagements.
            Named case studies available on request.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.num}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <p className="font-mono text-xs text-ink-faint">{c.num}</p>
              <h3 className="font-display mt-1 text-lg font-bold leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {c.blurb}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-amber">
                {c.client}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-5">
                {c.stats.map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-lg font-bold text-accent">
                      {s.v}
                    </div>
                    <div className="mt-0.5 text-[11px] text-ink-muted">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function CompareTable() {
  const rows = [
    {
      k: "Annual cost",
      sdr: "$96k / rep",
      agency: "$96k+",
      diy: "$30k tools",
      us: "$36k+",
    },
    {
      k: "Time to first meeting",
      sdr: "60–90 days",
      agency: "30 days",
      diy: "90 days+",
      us: "14–30 days",
    },
    { k: "You own the code", sdr: false, agency: false, diy: true, us: true },
    {
      k: "Scales 5×",
      sdr: "Hire 5",
      agency: "Pay 5×",
      diy: "Rebuild",
      us: "Same stack",
    },
    { k: "Replaces RevOps", sdr: false, agency: false, diy: false, us: true },
    {
      k: "Live demo on your data",
      sdr: false,
      agency: false,
      diy: false,
      us: true,
    },
    { k: "Cancel anytime", sdr: false, agency: "30-day", diy: true, us: true },
  ];

  const cell = (v: string | boolean, win = false) => {
    if (v === true)
      return (
        <Check
          className={`size-4 ${win ? "text-accent" : "text-ink-muted"}`}
        />
      );
    if (v === false) return <X className="size-4 text-ink-faint" />;
    return (
      <span className={win ? "font-medium text-accent" : "text-ink-muted"}>
        {v}
      </span>
    );
  };

  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface px-5 py-20 md:px-12 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[006] · Honest comparison</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            Why not hire SDRs, agencies, or DIY tools?
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-line bg-surface-soft">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface">
                <th className="px-4 py-4 text-left font-medium text-ink-muted">
                  &nbsp;
                </th>
                <th className="px-4 py-4 text-left font-medium text-ink-soft">
                  Hire SDR
                </th>
                <th className="px-4 py-4 text-left font-medium text-ink-soft">
                  Agency
                </th>
                <th className="px-4 py-4 text-left font-medium text-ink-soft">
                  DIY tools
                </th>
                <th className="px-4 py-4 text-left font-display font-bold text-accent">
                  AI Ropeway
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k} className="border-b border-line last:border-0">
                  <td className="px-4 py-4 font-medium text-ink">{r.k}</td>
                  <td className="px-4 py-4">{cell(r.sdr)}</td>
                  <td className="px-4 py-4">{cell(r.agency)}</td>
                  <td className="px-4 py-4">{cell(r.diy)}</td>
                  <td className="px-4 py-4">{cell(r.us, true)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function PricingTiers() {
  const tiers = [
    {
      name: "AI GTM Sprint",
      price: "$3,000",
      cadence: "one-time",
      blurb:
        "1 AI SDR engine, built and deployed in 14 days. Signal detection + enrichment + personalized outreach. Full code handoff.",
      cta: "Book free AI audit",
      features: [
        "1 system shipped in 14 days",
        "Full code handoff",
        "ICP & signal config included",
        "3 months bug-fix support",
      ],
      target: "Founders testing AI GTM",
    },
    {
      name: "GTM Partnership",
      price: "$2,500",
      cadence: "/mo · ongoing",
      blurb:
        "Dedicated AI GTM engineer. 1 new system every month. Continuous optimization. Weekly check-ins.",
      cta: "Book free AI audit",
      features: [
        "Dedicated GTM engineer",
        "Ship a new agent every month",
        "Weekly optimization cycles",
        "Slack channel access",
      ],
      target: "Growing B2B teams",
    },
    {
      name: "Full Stack GTM",
      price: "$5,000",
      cadence: "/mo · 2 engineers",
      blurb:
        "Full Revenue Stack live: GTM + content engine + CRM automation. Bi-weekly strategy calls.",
      cta: "Book free AI audit",
      featured: true,
      features: [
        "All 8 agents in production",
        "GTM + content + RevOps",
        "Bi-weekly strategy calls",
        "Founder-led delivery",
        "Quarterly architecture review",
      ],
      target: "Scaling companies",
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "multi-system",
      blurb:
        "Multi-system deployment + Voice AI bundle (via AI Placers). Dedicated PM. Quarterly business reviews.",
      cta: "Book free AI audit",
      features: [
        "Multi-system custom build",
        "Voice AI add-on (via AI Placers)",
        "Dedicated PM",
        "Quarterly business reviews",
        "Priority response SLA",
      ],
      target: "Mid-market B2B",
    },
  ];

  return (
    <section id="pricing" className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-20 md:px-12 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[007] · Pricing</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            Transparent. <span className="text-accent">Specific.</span> No
            decks before the price.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Your AI agents work{" "}
            <strong className="font-semibold text-ink">24/7</strong>. The
            founder works{" "}
            <strong className="font-semibold text-ink">
              alongside your team
            </strong>{" "}
            — weekly meetings, real ownership, code in your repo. No
            offshoring layers. No junior-dev surprises.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-2xl border bg-surface p-6 ${
                t.featured
                  ? "border-accent ring-2 ring-accent/20"
                  : "border-line"
              }`}
            >
              {t.featured && (
                <span className="mono-label mb-3 inline-block w-fit rounded-full bg-accent px-3 py-1 text-canvas">
                  FLAGSHIP
                </span>
              )}
              <h3 className="font-display text-lg font-bold">{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold">
                  {t.price}
                </span>
                <span className="text-xs text-ink-muted">{t.cadence}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                {t.blurb}
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-xs text-ink-soft">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-teal" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                For: {t.target}
              </p>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition ${
                  t.featured
                    ? "bg-ink text-canvas hover:opacity-80"
                    : "border border-line-strong bg-surface text-ink hover:bg-surface-soft"
                }`}
              >
                {t.cta} <ArrowRight className="size-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-muted">
          Every engagement starts with a free 60-minute AI GTM audit and live
          demo on your ICP data.
        </p>
      </div>
    </section>
  );
}

export function OtherSystems() {
  const others = [
    "AI Voice Agents",
    "AI Customer Support",
    "AI Content Engine",
    "AI Inventory & Demand",
    "AI Onboarding",
    "AI Churn Prevention",
    "AI Knowledge Base",
    "AI Recruiting Ops",
    "AI Finance Ops",
    "+9 more",
  ];

  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface px-5 py-14 md:px-12 md:py-16">
        <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-line pb-4">
          <span className="font-mono text-sm text-ink-soft">↳</span>
          <span className="mono-label text-ink-soft">
            BEYOND GTM · MORE AI SYSTEMS
          </span>
          <Link
            href="/systems"
            className="ml-auto font-mono text-xs text-accent hover:underline"
          >
            See all →
          </Link>
        </div>

        <p className="mono-label mb-4 text-accent">[008] · Other systems</p>
        <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-[1.12]">
          AI GTM is our wedge.{" "}
          <span className="text-accent">We also ship these.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Built for B2B SaaS first — adaptable to other GTM-heavy businesses.
          Voice AI, content engines, ops automation, and more. Each system
          gets its own dedicated build page.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {others.map((o) => (
            <span
              key={o}
              className="rounded-full border border-line bg-surface-soft px-4 py-2 text-sm text-ink-soft"
            >
              {o}
            </span>
          ))}
        </div>

        <Link
          href="/systems"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
        >
          Browse all system pages <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

export function StackStrip() {
  const tools = [
    "Claude",
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
    "Anthropic",
    "Pinecone",
    "Cursor",
    "Railway",
    "Vercel",
    "+20 more",
  ];

  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface px-5 py-14 md:px-12 md:py-16">
        <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-line pb-4">
          <span className="font-mono text-sm text-ink-soft">↳</span>
          <span className="mono-label text-ink-soft">
            BUILT WITH · {tools.length - 1}+ INTEGRATIONS
          </span>
        </div>
        <p className="mono-label mb-4 text-accent">[009] · The stack</p>
        <h2 className="font-display mb-6 text-2xl font-bold leading-tight md:text-3xl">
          Tools your team already trusts. No proprietary lock-in.
        </h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-surface-soft px-4 py-2 text-sm text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatusFooter() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-faint">
        <span className="font-mono">
          © 2026 AI Ropeway · bg@aiplacers.com
        </span>
        <span className="font-mono inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-teal" />
          v 5.0 · go-live candidate · ALL SYSTEMS NORMAL
        </span>
      </div>
    </div>
  );
}

export function WhoThisIsFor() {
  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mono-label mb-4 text-accent">Who this is for</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            Built for <span className="text-accent">B2B SaaS founders</span> running
            founder-led sales.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-teal">
              <Check className="size-5" /> This is for you if
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-teal" />B2B SaaS or services company, $1M–$20M ARR</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-teal" />Founder-led or small sales team (1–5 reps)</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-teal" />CRM and inbox already in place (HubSpot, Salesforce, etc.)</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-teal" />Outbound is a priority channel (or should be)</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-teal" />Want to book 20–60 qualified meetings/month without hiring SDRs</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-muted">
              <X className="size-5" /> Not a fit if
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li className="flex items-start gap-2"><X className="mt-0.5 size-4 shrink-0 text-ink-faint" />Pre-revenue or pre-product — you need product-market fit first</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 size-4 shrink-0 text-ink-faint" />Pure inbound/PLG with no outbound intent</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 size-4 shrink-0 text-ink-faint" />Looking for a SaaS tool — we build and hand off custom systems</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 size-4 shrink-0 text-ink-faint" />Enterprise with 12-month procurement cycles for a $3k project</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ThreeStepProcess() {
  const steps = [
    {
      num: "01",
      icon: Target,
      title: "Audit ICP & signals",
      desc: "60-minute deep-dive. We map your ICP, identify buying signals, and show you what the engine looks like with your data. Free, no pitch deck.",
    },
    {
      num: "02",
      icon: Zap,
      title: "Build the engine",
      desc: "14 days. Signal detection, enrichment, personalized outreach, reply triage — deployed in your repo. Weekly check-ins throughout.",
    },
    {
      num: "03",
      icon: Rocket,
      title: "Launch & optimize",
      desc: "Go live. Monitor deliverability, tune sequences, scale what works. You own the code. We optimize alongside you.",
    },
  ];

  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-20">
        <div className="mb-10 text-center">
          <p className="mono-label mb-4 text-accent">How it works</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            Audit. <span className="text-accent">Build.</span> Launch.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="relative rounded-2xl border border-line bg-surface p-6 text-center">
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent/10">
                <s.icon className="size-6 text-accent" />
              </div>
              <p className="font-mono text-xs text-ink-faint">STEP {s.num}</p>
              <h3 className="font-display mt-1 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Deliverables() {
  const items = [
    "Full source code in your GitHub repo",
    "Signal detection workflows (Clay / Make.com / n8n)",
    "Enrichment & ICP scoring logic",
    "Personalized outreach sequences",
    "Reply triage & routing automation",
    "Domain warmup & deliverability infrastructure",
    "Real-time pipeline dashboard",
    "3 months of bug-fix support",
  ];

  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="mono-label mb-4 text-accent">What you get</p>
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.08]">
            After 14 days, <span className="text-accent">you own all of this.</span>
          </h2>
          <p className="mt-3 text-lg text-ink-soft">
            No SaaS login. No vendor dependency. Everything ships into your repo,
            your accounts, your infrastructure.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
              <Package className="mt-0.5 size-4 shrink-0 text-accent" />
              <span className="text-sm text-ink-soft">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ObjectionFaq() {
  const objections = [
    {
      q: "Will this hurt my email deliverability?",
      a: "No. Inbox Operator handles domain warmup, inbox rotation, and deliverability monitoring. We set up dedicated sending domains separate from your primary domain — your main email reputation stays untouched.",
    },
    {
      q: "Do you use my personal LinkedIn account?",
      a: "Only if you choose to. Most clients use dedicated LinkedIn profiles or skip LinkedIn entirely. The engine works across email, LinkedIn, and multi-channel — you pick the channels.",
    },
    {
      q: "What tools do I need already?",
      a: "A CRM (HubSpot, Salesforce, or similar) and a business email. We provide or configure everything else — Clay, Make.com, sending infrastructure, enrichment APIs.",
    },
    {
      q: "What happens after the 14-day sprint?",
      a: "You own the code. It runs in your accounts. We include 3 months of bug-fix support. Most clients move to an ongoing partnership for optimization and new agent deployments.",
    },
    {
      q: "Who owns the code and data?",
      a: "You do. 100%. Code ships to your GitHub repo. Workflows run in your accounts. If you stop working with us tomorrow, everything keeps running.",
    },
    {
      q: "Can my team maintain this without you?",
      a: "Yes. We build with standard tools (Clay, Make.com, n8n, HubSpot) your team already knows. We document everything and do a handoff walkthrough. Most teams are self-sufficient within a month.",
    },
  ];

  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="mono-label mb-4 text-accent">Common questions</p>
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.08]">
            Before you book: <span className="text-accent">the honest answers.</span>
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {objections.map((o) => (
            <details key={o.q} className="group rounded-xl border border-line bg-surface p-5">
              <summary className="flex cursor-pointer items-center gap-3 font-display text-sm font-semibold text-ink list-none">
                <HelpCircle className="size-4 shrink-0 text-accent" />
                {o.q}
              </summary>
              <p className="mt-3 pl-7 text-sm leading-relaxed text-ink-muted">{o.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AeoAnswerBlocks() {
  const blocks = [
    {
      q: "What is an AI GTM engine?",
      a: "An AI GTM engine is a system of AI agents that automate go-to-market activities — detecting buying signals, enriching leads, writing personalized outreach, and triaging replies. Unlike SaaS tools, an AI GTM engine is custom-built for your ICP and deployed in your own infrastructure.",
    },
    {
      q: "How does AI Ropeway work?",
      a: "AI Ropeway builds and deploys custom AI GTM engines for B2B SaaS founders. The process takes 14 days: we audit your ICP and signals, build 8 AI agents (signal detection, enrichment, outreach, reply triage, CRM automation), and ship everything into your GitHub repo. You own the code from day one.",
    },
    {
      q: "How much does AI GTM automation cost?",
      a: "AI Ropeway starts at $3,000 for a one-time AI GTM Sprint (1 system, 14-day deployment). Ongoing partnerships run $2,500–$5,000/month with continuous optimization and new agent deployments. Every engagement starts with a free 60-minute AI GTM audit.",
    },
    {
      q: "AI Ropeway vs Clay vs Apollo — what's the difference?",
      a: "Clay and Apollo are SaaS tools — you pay monthly fees to use their platform. AI Ropeway builds custom AI systems deployed in your infrastructure. You own the code, there are no per-seat fees, and the system is tailored to your specific ICP and signals rather than one-size-fits-all.",
    },
  ];

  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="mono-label mb-4 text-accent">Quick answers</p>
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.08]">
            Everything you need to know about{" "}
            <span className="text-accent">AI GTM engines.</span>
          </h2>
        </div>
        <div className="space-y-4">
          {blocks.map((b) => (
            <div key={b.q} className="rounded-xl border border-line bg-surface p-6">
              <h3 className="font-display text-base font-bold text-ink">{b.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{b.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSignals() {
  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface px-5 py-10 md:px-12 md:py-12">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-accent" />
            New Delhi, India · Serving globally
          </span>
          <span className="h-4 w-px bg-line" />
          <a
            href="https://www.linkedin.com/in/bharatgulati/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            <Linkedin className="size-4 text-accent" />
            Founder on LinkedIn
          </a>
          <span className="h-4 w-px bg-line" />
          <a
            href="mailto:bg@aiplacers.com"
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            <Mail className="size-4 text-accent" />
            bg@aiplacers.com
          </a>
          <span className="h-4 w-px bg-line" />
          <a
            href="https://www.aiplacers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            <Globe className="size-4 text-accent" />
            Also: AI Placers (Voice AI)
          </a>
        </div>
      </div>
    </section>
  );
}
