"use client";

import { useState } from "react";
import { Cta } from "@/components/cta";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

type Plan = "sprint" | "partnership";

export function RoiCalculator() {
  const [reps, setReps] = useState(2);
  const [costPerRep, setCostPerRep] = useState(96000);
  const [plan, setPlan] = useState<Plan>("partnership");

  const inhouseAnnual = reps * costPerRep;
  // AI Ropeway first-year cost. Sprint: one-time $3,000. Partnership: $3,000
  // sprint + $2,500/mo for 12 months.
  const aiAnnual = plan === "sprint" ? 3000 : 3000 + 2500 * 12;
  const savings = inhouseAnnual - aiAnnual;
  const multiple = aiAnnual > 0 ? inhouseAnnual / aiAnnual : 0;

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
              onChange={(e) => setReps(Number(e.target.value))}
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
              onChange={(e) => setCostPerRep(Number(e.target.value))}
              className="w-full accent-[var(--color-accent)]"
            />
            <span className="font-display w-24 text-right text-lg font-bold text-ink">{fmt(costPerRep)}</span>
          </div>
          <p className="mt-2 text-xs text-ink-faint">Salary + tools + management + ramp. US average lands near $96k.</p>
        </div>

        <div>
          <label className="mono-label text-ink-faint">AI Ropeway engagement</label>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              onClick={() => setPlan("sprint")}
              className={`focus-ring rounded-2xl border px-4 py-3 text-sm transition-colors ${plan === "sprint" ? "border-ink bg-surface-soft text-ink" : "border-line text-ink-muted hover:border-line-strong"}`}
            >
              Sprint<br /><span className="text-xs text-ink-faint">$3k one-time</span>
            </button>
            <button
              onClick={() => setPlan("partnership")}
              className={`focus-ring rounded-2xl border px-4 py-3 text-sm transition-colors ${plan === "partnership" ? "border-ink bg-surface-soft text-ink" : "border-line text-ink-muted hover:border-line-strong"}`}
            >
              Partnership<br /><span className="text-xs text-ink-faint">$3k + $2.5k/mo</span>
            </button>
          </div>
        </div>
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
          {multiple > 1 && (
            <p className="text-sm text-ink-muted">
              An in-house team costs <span className="font-semibold text-ink">{multiple.toFixed(1)}×</span> more than the engine — and you own the code either way.
            </p>
          )}
        </div>
        <div>
          <Cta href="/#audit" size="lg" className="w-full">Book a live demo on your data</Cta>
          <p className="mt-3 text-center text-xs text-ink-faint">Estimate only. Your numbers get refined in the free 60-minute audit.</p>
        </div>
      </div>
    </div>
  );
}
