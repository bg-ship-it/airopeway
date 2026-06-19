import { edge } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const accents = [
  "var(--color-coral)",
  "var(--color-indigo)",
  "var(--color-teal)",
  "var(--color-amber)",
];

export function Edge() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <p className="mono-label mb-4 text-accent">{edge.label}</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08]">
            {edge.headline[0]}
            <br />
            {edge.headline[1]}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
            <p>{edge.paragraphs[0]}</p>
            <p>{edge.paragraphs[1]}</p>
            <p className="font-display text-xl font-semibold text-ink">
              {edge.paragraphs[2]}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {edge.metrics.map((m, i) => (
            <Reveal key={m.metric} delay={i * 0.07}>
              <div className="card flex items-start gap-5 rounded-2xl p-6">
                <div
                  className="font-display text-4xl font-bold leading-none"
                  style={{ color: accents[i % accents.length] }}
                >
                  {m.metric}
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
