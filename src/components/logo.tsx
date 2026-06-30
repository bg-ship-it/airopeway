import { cn } from "@/lib/cn";

const GOLD = "#d8b45a";

/* The AI Ropeway "A" ropeway mark: an A-shaped peak with a gold cable + two
   pulley nodes crossing it (the ropeway metaphor). Rebuilt as crisp vector. */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 46 42" fill="none" className={className} aria-hidden>
      {/* A — two legs meeting at the apex */}
      <path
        d="M9 36 L23 7 L37 36"
        stroke="#ffffff"
        strokeWidth="3.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* ropeway cable */}
      <path d="M13 33 L34 17.5" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
      {/* lower pulley (filled) */}
      <circle cx="13" cy="33" r="3" fill={GOLD} />
      {/* upper pulley (outline) */}
      <circle cx="34" cy="17.5" r="3" stroke={GOLD} strokeWidth="2" fill="none" />
    </svg>
  );
}

/* Full logo lockup. Sits in a dark chip so the original gold-on-dark identity
   reads correctly on the light canvas (background adaptable to the design). */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl bg-ink px-3.5 py-2",
        className,
      )}
    >
      <LogoMark className="h-7 w-7 shrink-0" />
      <span className="h-8 w-px shrink-0 bg-white/20" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-bold tracking-tight">
          <span style={{ color: GOLD }}>AI</span>{" "}
          <span className="text-white">Ropeway</span>
        </span>
        <span
          className="mt-1.5 flex items-center gap-1.5 text-[8px] font-medium uppercase"
          style={{ color: GOLD, letterSpacing: "0.32em" }}
        >
          <span className="h-px w-2.5" style={{ background: GOLD, opacity: 0.5 }} />
          AI GTM Engineering
          <span
            className="h-px w-2.5"
            style={{ background: GOLD, opacity: 0.5 }}
          />
        </span>
      </span>
    </span>
  );
}
