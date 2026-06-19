"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-10 text-center">
        <p className="mono-label mb-4 text-accent">Common Questions</p>
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.1]">
          Everything you need to know before booking your audit.
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="focus-ring flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-ink">{item.q}</span>
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-surface-soft text-ink">
                  {isOpen ? (
                    <Minus className="size-3.5" />
                  ) : (
                    <Plus className="size-3.5" />
                  )}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
