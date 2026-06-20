import Link from "next/link";
import { systems } from "@/lib/content";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";

const chip = [
  "var(--color-coral)",
  "var(--color-amber)",
  "var(--color-indigo)",
  "var(--color-teal)",
  "var(--color-pink)",
];

export function Systems() {
  return (
    <section id="systems" className="px-3 md:px-5">
      <div className="mx-auto max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-20 md:px-12 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mono-label mb-4 text-accent">The Deployment Stack</p>
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
              18 AI Systems. One unified deployment.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <Reveal key={s.num} delay={(i % 3) * 0.06}>
              <Link
                href="/#audit"
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(22,21,26,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="grid size-9 place-items-center rounded-full font-mono text-xs font-medium text-white"
                    style={{ background: chip[i % chip.length] }}
                  >
                    {s.num}
                  </span>
                  <ArrowUpRight className="size-4 text-ink-faint transition-colors group-hover:text-ink" />
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">
                  {s.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Cta href="/#audit" size="lg">
            See Which Systems Fit Your Business
          </Cta>
        </div>
      </div>
    </section>
  );
}
