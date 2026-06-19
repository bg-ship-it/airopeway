import { cn } from "@/lib/cn";

/* Colourful drifting gradient field. In-flow (absolute within a relative
   parent), never position:fixed — renders reliably everywhere. Original mix of
   coral / amber / indigo / teal / pink blobs over the cream canvas. */
export function MotionBg({ className }: { className?: string }) {
  return (
    <div className={cn("spectrum", className)} aria-hidden>
      <span
        className="blob blob-a"
        style={{
          width: "38rem",
          height: "38rem",
          top: "-10rem",
          right: "-6rem",
          background:
            "radial-gradient(circle at 30% 30%, var(--color-coral), transparent 70%)",
        }}
      />
      <span
        className="blob blob-b"
        style={{
          width: "32rem",
          height: "32rem",
          top: "-4rem",
          left: "-8rem",
          background:
            "radial-gradient(circle at 50% 50%, var(--color-indigo), transparent 70%)",
          opacity: 0.4,
        }}
      />
      <span
        className="blob blob-c"
        style={{
          width: "30rem",
          height: "30rem",
          bottom: "-12rem",
          left: "30%",
          background:
            "radial-gradient(circle at 50% 50%, var(--color-amber), transparent 70%)",
          opacity: 0.42,
        }}
      />
      <span
        className="blob blob-a"
        style={{
          width: "26rem",
          height: "26rem",
          bottom: "-8rem",
          right: "12%",
          background:
            "radial-gradient(circle at 50% 50%, var(--color-teal), transparent 70%)",
          opacity: 0.34,
        }}
      />
    </div>
  );
}
