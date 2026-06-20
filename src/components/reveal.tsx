"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/* Scroll-reveal that NEVER hides content if JS/observer doesn't run.
   Content is visible by default (SSR + no-JS safe). When the component mounts
   and IntersectionObserver is available, we start it slightly offset and let
   it settle in — purely as enhancement. */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Default to "shown" so content is always visible even if effects never run.
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced || !("IntersectionObserver" in window)) return;

    const el = ref.current;
    if (!el) return;

    // Enhancement path: hide, then reveal on enter.
    setShown(false);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    // Safety net: guarantee visibility shortly after mount no matter what.
    const t = setTimeout(() => setShown(true), 1200);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", className)}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${y}px)`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
