import { hero } from "@/lib/content";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { Reveal } from "@/components/reveal";
import { ShieldCheck, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-3 pt-28 pb-12 md:px-5 md:pt-36">
      {/* Rounded hero canvas with the colourful motion field */}
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-24">
        <MotionBg />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="mono-label inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 px-4 py-1.5 text-ink-soft">
              <span className="size-1.5 rounded-full bg-accent" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1.02]">
              Do <span className="text-accent">5×</span> more. Run on{" "}
              <em className="font-medium italic">half</em> the team. Scale{" "}
              <span className="text-accent">50×</span> faster —{" "}
              <span className="text-ink-muted">or get left behind.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Your competitors are deploying AI{" "}
              <strong className="font-semibold text-ink">right now</strong>. Every
              week you operate manually costs you market share, margin, and
              momentum. AI Ropeway deploys{" "}
              <strong className="font-semibold text-ink">
                18 battle-tested AI systems
              </strong>{" "}
              into your business — turning operations into a revenue engine that
              runs at machine speed.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Cta href="/#audit" size="lg">
                {hero.primaryCta}
              </Cta>
              <Cta href="/#systems" size="lg" variant="ghost" showArrow={false}>
                {hero.secondaryCta} ↓
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-teal" />
                No commitment, no spam
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-teal" />
                60-minute audit
              </span>
            </div>
          </Reveal>
        </div>

        {/* Stat strip — rounded chips, consistent shape language */}
        <Reveal delay={0.25}>
          <div className="relative z-10 mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {hero.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line bg-surface/80 px-4 py-5 text-center backdrop-blur-sm"
              >
                <div className="font-display text-3xl font-bold">{s.val}</div>
                <div className="mt-1 text-xs text-ink-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
