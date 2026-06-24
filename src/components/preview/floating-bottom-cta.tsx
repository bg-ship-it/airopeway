"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export function FloatingBottomCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight - 240;
      setVisible(y > 600 && y < max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-3 transition-all duration-300 md:bottom-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="pointer-events-auto flex max-w-[95vw] items-center gap-2 rounded-full border border-ink/10 bg-ink/95 py-1.5 pl-3 pr-1.5 text-canvas shadow-[0_18px_40px_-12px_rgba(22,21,26,0.45)] backdrop-blur-md sm:gap-3 sm:py-2 sm:pl-4 sm:pr-2">
        <span className="font-display text-sm font-semibold whitespace-nowrap">
          AI Ropeway
        </span>
        <span className="hidden text-canvas/30 sm:inline">|</span>
        <ul className="hidden items-center gap-3 text-xs text-canvas/80 sm:flex">
          <li>
            <Link
              href="#revenue-stack"
              className="rounded-full px-2 py-1 hover:bg-white/10 hover:text-canvas"
            >
              8 Agents
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="rounded-full px-2 py-1 hover:bg-white/10 hover:text-canvas"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/systems"
              className="rounded-full px-2 py-1 hover:bg-white/10 hover:text-canvas"
            >
              Other systems
            </Link>
          </li>
        </ul>
        <Link
          href="/#audit"
          className="inline-flex items-center gap-1 rounded-full bg-coral px-4 py-2 text-xs font-semibold text-canvas transition-opacity hover:opacity-90"
        >
          <Plus className="size-3.5" /> Book a call
        </Link>
      </div>
    </div>
  );
}
