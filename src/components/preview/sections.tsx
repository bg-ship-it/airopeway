import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Radar,
  DatabaseZap,
  PenLine,
  Send,
  Mic,
  BarChart3,
  Check,
  X,
  ShieldCheck,
  Clock,
} from "lucide-react";

const accentChips = [
  "var(--color-coral)",
  "var(--color-amber)",
  "var(--color-indigo)",
  "var(--color-teal)",
  "var(--color-pink)",
  "var(--color-coral)",
];

export function PreviewBanner({ variant }: { variant: "A" | "B" }) {
  const other = variant === "A" ? "B" : "A";
  return (
    <div className="fixed top-3 left-1/2 z-50 -translate-x-1/2 rounded-full border border-line-strong bg-ink/95 px-4 py-1.5 text-xs text-canvas backdrop-blur">
      <span className="mono-label text-amber">PREVIEW · VARIANT {variant}</span>
      <Link
        href={`/preview/gtm-${other.toLowerCase()}`}
        className="ml-3 underline underline-offset-4 hover:text-amber"
      >
        See variant {other}
      </Link>
      <Link
        href="/"
        className="ml-3 text-ink-faint hover:text-canvas"
      >
        ← Back to live site
      </Link>
    </div>
  );
}

export function HeroA() {
  return (
    <section className="relative overflow-hidden px-3 pt-32 pb-12 md:px-5 md:pt-40">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-24">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="mono-label inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 px-4 py-1.5 text-ink-soft">
            <span className="size-1.5 rounded-full bg-accent" />
            AI GTM systems · built by an SDR-hiring veteran
          </span>

          <h1 className="font-display mt-6 text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1.02]">
            Your next <span className="text-accent">1,000</span> meetings
            won&apos;t come from SDRs.
            <br />
            <em className="font-medium italic text-ink-muted">
              They&apos;ll come from this.
            </em>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We deploy a{" "}
            <strong className="font-semibold text-ink">
              6-agent GTM stack
            </strong>{" "}
            into your business — signal hunting to call analysis. First agent
            live in <strong className="font-semibold text-ink">14 days</strong>.
            First meetings in <strong className="font-semibold text-ink">30</strong>.
            Code shipped to your repo. Owned by you forever.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas hover:opacity-80"
            >
              Book free GTM audit <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#gtm-os"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
            >
              See the 6 agents ↓
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-teal" />
              You own the code
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-teal" />
              14-day first ship
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { val: "14 days", lbl: "First agent shipped" },
            { val: "11.2%", lbl: "Avg outbound reply rate" },
            { val: "100+", lbl: "SDRs hired by founder" },
            { val: "$72k", lbl: "Avg annual SDR cost saved" },
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

export function HeroB() {
  return (
    <section className="relative overflow-hidden px-3 pt-32 pb-12 md:px-5 md:pt-40">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-24">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="mono-label inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 px-4 py-1.5 text-ink-soft">
            <span className="size-1.5 rounded-full bg-accent" />
            The Ropeway GTM OS · v 1.0
          </span>

          <h1 className="font-display mt-6 text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1.02]">
            <span className="text-accent">6 agents.</span> One GTM stack.
            <br />
            <em className="font-medium italic text-ink-muted">
              Shipped into your repo.
            </em>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Signal Hunter to Revenue Dashboard. The Ropeway GTM OS replaces your
            outbound SDR motion, RevOps hygiene, and half your marketing ops —
            with{" "}
            <strong className="font-semibold text-ink">
              code you own forever
            </strong>
            , not another SaaS subscription.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#gtm-os"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas hover:opacity-80"
            >
              Explore the 6 agents <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 px-6 py-3 text-sm font-semibold text-ink hover:bg-surface"
            >
              Book free audit ↓
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-teal" />
              Open source-friendly stack
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-teal" />
              30 days to first meeting
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { val: "6", lbl: "Agents in the OS" },
            { val: "v 1.0", lbl: "Production release" },
            { val: "40+", lbl: "Tool integrations" },
            { val: "100%", lbl: "Code ownership" },
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

export function FounderBlock() {
  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface px-5 py-14 md:px-12 md:py-20">
        <p className="mono-label mb-4 text-accent">[002] · Founder</p>
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
              Hired 100+ SDRs. Now I ship the AI that{" "}
              <span className="text-accent">replaces</span> them.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Bharat Gulati, founder. Previously built{" "}
              <strong className="font-semibold text-ink">AI Placers</strong> —
              the SDR/GTM talent firm that placed 100+ outbound reps across 100+
              companies. IIM Indore alum. After watching the same playbook
              repeat across every deal cycle, the pattern was clear:{" "}
              <em className="italic">80% of SDR motion is automatable</em>. So I
              built it. The Ropeway GTM OS is what an SDR-hiring veteran would
              build if they had to start outbound from scratch in 2026.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="https://www.linkedin.com/"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-soft px-4 py-2 text-ink-soft hover:bg-surface"
              >
                LinkedIn <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="#manifesto"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-soft px-4 py-2 text-ink-soft hover:bg-surface"
              >
                Read the manifesto <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const agents = [
  {
    icon: Radar,
    name: "Signal Hunter",
    desc: "Buying-intent monitor — LinkedIn moves, funding rounds, tech-stack triggers, hiring signals.",
  },
  {
    icon: DatabaseZap,
    name: "Enrichment Engine",
    desc: "Clay + Apollo + Prospeo unified into one waterfall. 90%+ contact accuracy at lowest cost.",
  },
  {
    icon: PenLine,
    name: "Outbound Drafter",
    desc: "Personalized email + LinkedIn copy, grounded in account research and your ICP voice.",
  },
  {
    icon: Send,
    name: "Outreach Manager",
    desc: "Multi-channel sequencer, inbox warmup, deliverability guardrails, reply triage to CRM.",
  },
  {
    icon: Mic,
    name: "Call Analyst",
    desc: "Gong/Fathom → CRM hygiene + next-step automation. Coaches reps on objection handling.",
  },
  {
    icon: BarChart3,
    name: "Revenue Dashboard",
    desc: "Funnel + agent performance + cost-per-meeting + LTV. One view, no spreadsheet swamp.",
  },
];

export function GtmOsSection() {
  return (
    <section id="gtm-os" className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-20 md:px-12 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[003] · The Ropeway GTM OS</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            6 agents. One stack.{" "}
            <span className="text-ink-muted">Replaces SDR + RevOps.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Each agent ships into your repo as standalone code. Buy one. Buy
            all six. Swap any layer without rebuilding the rest.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.name}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(22,21,26,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="grid size-10 place-items-center rounded-full text-canvas"
                    style={{ background: accentChips[i % accentChips.length] }}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">
                  {a.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProofCases() {
  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface px-5 py-20 md:px-12 md:py-28">
        <div className="mb-10 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[004] · Shipped, not pitched</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            Real systems. <span className="text-accent">Real numbers.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              num: "CASE 01",
              title: "B2B SaaS · $5M ARR",
              blurb:
                "Replaced 2 SDRs with Outbound Drafter + Outreach Manager. Reply rate 8× lift in 60 days.",
              stats: [
                { v: "11.2%", l: "Reply rate" },
                { v: "47", l: "Meetings / 60d" },
                { v: "$192k", l: "SDR cost saved /yr" },
              ],
            },
            {
              num: "CASE 02",
              title: "D2C brand · $12M GMV",
              blurb:
                "Full Ropeway GTM OS deployment. Signal Hunter surfaced 38 in-market wholesale accounts in 60 days.",
              stats: [
                { v: "38", l: "In-market accts" },
                { v: "9", l: "Closed in Q1" },
                { v: "4.2×", l: "Pipeline ROI" },
              ],
            },
          ].map((c) => (
            <div
              key={c.num}
              className="rounded-2xl border border-line bg-surface-soft p-6"
            >
              <p className="font-mono text-xs text-ink-faint">{c.num}</p>
              <h3 className="font-display mt-1 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {c.blurb}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
                {c.stats.map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-xl font-bold text-accent">
                      {s.v}
                    </div>
                    <div className="mt-0.5 text-xs text-ink-muted">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border-l-4 border-accent bg-surface-soft p-6">
          <p className="text-lg leading-relaxed text-ink-soft italic">
            “Replaced our entire outbound team. Reply rate went from 1.4%
            to 9%. Bharat ships faster than agencies that charge 3×.”
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            — Placeholder for real customer testimonial · name, title, company
          </p>
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
      us: "$42k",
    },
    {
      k: "Time to first meeting",
      sdr: "60–90 days",
      agency: "30 days",
      diy: "90 days+",
      us: "30 days",
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
    { k: "Cancel anytime", sdr: false, agency: "30-day", diy: true, us: true },
  ];

  const cell = (v: string | boolean, win = false) => {
    if (v === true)
      return <Check className={`size-4 ${win ? "text-accent" : "text-ink-muted"}`} />;
    if (v === false) return <X className="size-4 text-ink-faint" />;
    return (
      <span className={win ? "font-medium text-accent" : "text-ink-muted"}>
        {v}
      </span>
    );
  };

  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-20 md:px-12 md:py-28">
        <div className="mb-10 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[005] · Honest comparison</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            Why not hire SDRs, agencies, or DIY Clay?
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-line bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface-soft">
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
                  DIY Clay
                </th>
                <th className="px-4 py-4 text-left font-display font-bold text-accent">
                  Ropeway
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
      name: "Single Agent",
      price: "$2,500",
      cadence: "fixed",
      blurb: "One agent shipped. 14-day build. Code yours forever.",
      cta: "Scope a build",
      features: [
        "1 agent of your choice",
        "14-day delivery",
        "Code handed over",
        "3 months bug-fix support",
      ],
    },
    {
      name: "Embedded Team",
      price: "$3,500",
      cadence: "/mo · 3-mo min",
      blurb: "Dedicated engineer. Continuous shipping. Monthly architecture sessions.",
      cta: "Start partnership",
      features: [
        "Dedicated GTM engineer",
        "Ship a new agent every 2–3 weeks",
        "Monthly arch review",
        "Slack channel access",
      ],
    },
    {
      name: "Outbound Engine",
      price: "$7,500",
      cadence: "/mo · meeting SLA",
      blurb:
        "Full 6-agent GTM OS, live. 1,200 meetings/yr SLA. Cancel if we miss it.",
      cta: "Scope flagship build",
      featured: true,
      features: [
        "All 6 agents production-live",
        "1,200 meetings/yr SLA",
        "Performance-tied cancellation",
        "Weekly optimization cycles",
        "Revenue Dashboard included",
      ],
    },
  ];

  return (
    <section id="pricing" className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface px-5 py-20 md:px-12 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[006] · Pricing</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            Transparent. <span className="text-accent">Outcome-tied</span> where it matters.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-2xl border bg-surface-soft p-6 ${
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
              <h3 className="font-display text-xl font-bold">{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold">{t.price}</span>
                <span className="text-sm text-ink-muted">{t.cadence}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {t.blurb}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#audit"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  t.featured
                    ? "bg-ink text-canvas hover:opacity-80"
                    : "border border-line-strong bg-surface text-ink hover:bg-surface-soft"
                }`}
              >
                {t.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StackStrip() {
  const tools = [
    "Claude",
    "n8n",
    "Clay",
    "Apollo",
    "HubSpot",
    "Salesforce",
    "Smartlead",
    "Apify",
    "Supabase",
    "LinkedIn Sales Nav",
    "Gong",
    "Fathom",
    "Make",
    "Pinecone",
    "+30 more",
  ];

  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-14 md:px-12 md:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="mono-label mb-4 text-accent">[007] · The stack</p>
          <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">
            Built on tools your team already uses.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatusFooter({ variant }: { variant: "A" | "B" }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-faint">
        <span className="font-mono">© 2026 AI Ropeway · bg@aiplacers.com</span>
        <span className="font-mono inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-teal" />v 2.0 · variant {variant} · ALL SYSTEMS NORMAL
        </span>
      </div>
    </div>
  );
}
