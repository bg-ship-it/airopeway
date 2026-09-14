"use client";

import { useRef, useState } from "react";
import { Cta } from "@/components/cta";
import { track } from "@/components/track-events";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

type Plan = "sprint" | "partnership" | "fullstack";

// Pricing as published on /pricing. Keep in sync with the tiers there.
const SPRINT = 3000;
const PARTNERSHIP_MO = 2500;
const FULLSTACK_BASE_MO = 4000;
const FULLSTACK_PER_MEETING = { smb: 150, midmarket: 250 } as const;

const plans: { id: Plan; label: string; sub: string }[] = [
  { id: "sprint", label: "Sprint", sub: "$3k one-time" },
  { id: "partnership", label: "Partnership", sub: "$3k + $2.5k/mo" },
  { id: "fullstack", label: "Full Stack", sub: "$4k/mo + per meeting" },
];

export function RoiCalculator() {
  const [reps, setReps] = useState(2);
  const [costPerRep, setCostPerRep] = useState(96000);
  const [plan, setPlan] = useState<Plan>("partnership");
  const [meetings, setMeetings] = useState(15);
  const [segment, setSegment] = useState<keyof typeof FULLSTACK_PER_MEETING>("smb");
  const tracked = useRef(false);
  const mark = () => {
    if (tracked.current) return;
    tracked.current = true;
    track("roi_calculator_used");
  };

  const inhouseAnnual = reps * costPerRep;
  // In-house meetings per year at a typical 8–12 held meetings per rep per
  // month; 10 is the midpoint. Used only for the cost-per-meeting row.
  const inhouseMeetingsAnnual = reps * 10 * 12;

  let aiAnnual: number;
  let aiMeetingsAnnual: number;
  if (plan === "sprint") {
    aiAnnual = SPRINT;
    aiMeetingsAnnual = 6 * 12; // target: 4–8 meetings/month from one engine
  } else if (plan === "partnership") {
    aiAnnual = SPRINT + PARTNERSHIP_MO * 12;
    aiMeetingsAnnual = 12 * 12; // target: 8–15 meetings/month
  } else {
    const perMeeting = FULLSTACK_PER_MEETING[segment];
    aiAnnual = (FULLSTACK_BASE_MO + perMeeting * meetings) * 12;
    aiMeetingsAnnual = meetings * 12;
  }

  const savings = inhouseAnnual - aiAnnual;
  const multiple = aiAnnual > 0 ? inhouseAnnual / aiAnnual : 0;
  const inhousePerMeeting = inhouseAnnual / inhouseMeetingsAnnual;
  const aiPerMeeting = aiAnnual / aiMeetingsAnnual;

  const btn = (active: boolean) =>
    `focus-ring rounded-2xl border px-4 py-3 text-sm transition-colors ${active ? "border-ink bg-surface-soft text-ink" : "border-line text-ink-muted hover:border-line-strong"}`;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Inputs */}
      <div className="space-y-6 rounded-3xl border border-line bg-surface p-6 md:p-8">
        <div>
          <label className="mono-label text-ink-faint">SDRs you would hire</label>
          <div className="mt-3 flex items-center gap-4">
            <input
              type="range"
              min={1}
              max={10}
              value={reps}
              onChange={(e) => { mark(); setReps(Number(e.target.value)); }}
              className="w-full accent-[var(--color-accent)]"
            />
            <span className="font-display w-10 text-right text-xl font-bold text-ink">{reps}</span>
          </div>
        </div>

        <div>
          <label className="mono-label text-ink-faint">Fully-loaded cost per SDR / year</label>
          <div className="mt-3 flex items-center gap-4">
            <input
              type="range"
              min={40000}
              max={160000}
              step={2000}
              value={costPerRep}
              onChange={(e) => { mark(); setCostPerRep(Number(e.target.value)); }}
              className="w-full accent-[var(--color-accent)]"
            />
            <span className="font-display w-24 text-right text-lg font-bold text-ink">{fmt(costPerRep)}</span>
          </div>
          <p className="mt-2 text-xs text-ink-faint">Salary + tools + management + ramp. US average lands near $96k.</p>
        </div>

        <div>
          <label className="mono-label text-ink-faint">AI Ropeway engagement</label>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {plans.map((p) => (
              <button key={p.id} onClick={() => { mark(); setPlan(p.id); }} className={btn(plan === p.id)}>
                {p.label}<br /><span className="text-xs text-ink-faint">{p.sub}</span>
              </button>
            ))}
          </div>
        </div>

        {plan === "fullstack" && (
          <>
            <div>
              <label className="mono-label text-ink-faint">Meetings held per month</label>
              <div className="mt-3 flex items-center gap-4">
                <input
                  type="range"
                  min={5}
                  max={40}
                  value={meetings}
                  onChange={(e) => { mark(); setMeetings(Number(e.target.value)); }}
                  className="w-full accent-[var(--color-accent)]"
                />
                <span className="font-display w-10 text-right text-xl font-bold text-ink">{meetings}</span>
              </div>
              <p className="mt-2 text-xs text-ink-faint">Full Stack target is 15–30 held meetings a month once all eight agents are live.</p>
            </div>
            <div>
              <label className="mono-label text-ink-faint">Your target accounts</label>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button onClick={() => { mark(); setSegment("smb"); }} className={btn(segment === "smb")}>
                  SMB<br /><span className="text-xs text-ink-faint">$150 per meeting held</span>
                </button>
                <button onClick={() => { mark(); setSegment("midmarket"); }} className={btn(segment === "midmarket")}>
                  Mid-market<br /><span className="text-xs text-ink-faint">$250 per meeting held</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Output */}
      <div className="flex flex-col justify-between gap-6 rounded-3xl border border-line bg-surface-soft p-6 md:p-8">
        <div className="space-y-4">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-ink-muted">In-house SDR team / year</span>
            <span className="font-display text-xl font-bold text-ink">{fmt(inhouseAnnual)}</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-ink-muted">AI Ropeway engine / year</span>
            <span className="font-display text-xl font-bold text-ink">{fmt(aiAnnual)}</span>
          </div>
          <div className="h-px bg-line-strong" />
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-ink">First-year savings</span>
            <span className={`font-display text-3xl font-bold ${savings >= 0 ? "text-teal" : "text-coral"}`}>{fmt(Math.abs(savings))}</span>
          </div>
          <div className="h-px bg-line-strong" />
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-ink-muted">Cost per held meeting, in-house</span>
            <span className="font-display text-lg font-bold text-ink">{fmt(inhousePerMeeting)}</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-ink-muted">Cost per held meeting, engine</span>
            <span className="font-display text-lg font-bold text-teal">{fmt(aiPerMeeting)}</span>
          </div>
          {multiple > 1 && (
            <p className="text-sm text-ink-muted">
              An in-house team costs <span className="font-semibold text-ink">{multiple.toFixed(1)}×</span> more than the engine — and you get full access either way.
            </p>
          )}
          <p className="text-xs text-ink-faint">
            Meeting counts are targets: in-house assumes 10 held meetings per rep per month; engine tiers use the published targets on the pricing page. A held meeting is one the prospect attended, logged by the CRM Auto-Pilot agent.
          </p>
        </div>
        <div>
          <Cta href="/#audit" size="lg" className="w-full">Book a live demo on your data</Cta>
          <p className="mt-3 text-center text-xs text-ink-faint">Estimate only. Your numbers get refined in the free 60-minute audit.</p>
        </div>
      </div>
    </div>
  );
}
