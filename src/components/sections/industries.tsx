"use client";

import { useState } from "react";
import { industries } from "@/lib/content";
import { Cta } from "@/components/cta";
import { cn } from "@/lib/cn";

export function Industries() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId) ?? industries[0];

  return (
    <section id="industries" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-9 max-w-2xl">
        <p className="mono-label mb-4 text-accent">Industry Playbooks</p>
        <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
          AI that works for your specific industry.
        </h2>
        <p className="mt-4 max-w-lg text-base text-ink-muted">
          Generic AI advice doesn&apos;t work. We deploy industry-specific AI
          playbooks with measurable, proven outcomes.
        </p>
      </div>

      <div className="mb-9 flex flex-wrap gap-2">
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => setActiveId(ind.id)}
            className={cn(
              "focus-ring cursor-pointer rounded-full border px-3.5 py-2 text-sm transition-colors",
              ind.id === activeId
                ? "border-ink bg-ink text-white"
                : "border-line-strong bg-surface text-ink-soft hover:border-ink",
            )}
          >
            <span className="mr-1.5">{ind.icon}</span>
            {ind.name}
          </button>
        ))}
      </div>

      <div key={active.id} className="card overflow-hidden rounded-3xl p-7 md:p-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-3xl">{active.icon}</span>
              <h3 className="font-display text-2xl font-bold">{active.name}</h3>
            </div>
            <div className="space-y-5">
              <Field label="Common Challenges" value={active.challenge} />
              <Field label="AI Solutions We Deploy" value={active.solution} />
              <Field label="Example Workflow" value={active.workflow} muted />
            </div>
          </div>

          <div>
            <p className="mono-label mb-4 text-accent">Measurable Impact</p>
            <div className="space-y-3">
              {active.impact.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-surface-soft p-4"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-teal text-xs text-white">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>
            <Cta href="/#audit" className="mt-7">
              Get {active.name} AI Audit
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div>
      <p className="mono-label mb-1.5 text-ink-faint">{label}</p>
      <p
        className={cn(
          "leading-relaxed",
          muted ? "text-sm text-ink-muted" : "text-[15px] text-ink-soft",
        )}
      >
        {value}
      </p>
    </div>
  );
}
