import { marquee } from "@/lib/content";

const dotColors = [
  "var(--color-coral)",
  "var(--color-amber)",
  "var(--color-indigo)",
  "var(--color-teal)",
  "var(--color-pink)",
];

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden py-8">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="mono-label flex items-center gap-5 px-5 text-ink-muted"
          >
            {item}
            <span
              className="size-2 rounded-full"
              style={{ background: dotColors[i % dotColors.length] }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
