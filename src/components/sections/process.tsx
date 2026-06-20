import { process, about } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const stepColor = [
  "var(--color-coral)",
  "var(--color-amber)",
  "var(--color-indigo)",
  "var(--color-teal)",
];

export function Process() {
  return (
    <section id="process" className="px-3 md:px-5">
      <div className="mx-auto max-w-6xl rounded-3xl border border-line bg-surface-soft px-5 py-20 md:px-12 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mono-label mb-4 text-accent">How It Works</p>
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
              From audit to ROI in 60 days.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <div
                  className="font-display mb-5 grid size-11 place-items-center rounded-full text-base font-bold text-white"
                  style={{ background: stepColor[i % stepColor.length] }}
                >
                  {p.step}
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* About / two-companies */}
        <Reveal>
          <div
            id="about"
            className="relative mt-6 overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-12"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--color-indigo), transparent 70%)",
              }}
            />
            <div className="relative grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
              <div>
                <p className="mono-label text-amber">{about.label}</p>
                <h3 className="font-display mt-3 text-3xl font-bold">
                  {about.headline}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  {about.body}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {about.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/85"
                  >
                    <span className="mt-0.5 text-amber">◆</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
