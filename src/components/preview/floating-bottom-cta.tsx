"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Logo } from "@/components/logo";
import { BOOK_URL } from "@/lib/content";

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
      className={`fixed inset-x-0 bottom-4 z-40 flex justify-center px-3 transition-all duration-300 md:bottom-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="flex max-w-5xl items-center justify-between gap-2 rounded-full border border-line bg-canvas/95 py-2 pl-2 pr-2 shadow-[0_18px_40px_-12px_rgba(22,21,26,0.45)] backdrop-blur-md">
        <Link href="#top" className="focus-ring flex items-center rounded-2xl">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 rounded-full bg-surface-soft/70 p-1 md:flex">
          <li>
            <Link
              href="#revenue-stack"
              className="rounded-full px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
            >
              8 Agents
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="rounded-full px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/systems"
              className="rounded-full px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
            >
              Other systems
            </Link>
          </li>
        </ul>

        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-canvas transition-opacity hover:opacity-90"
        >
          <Plus className="size-4" /> Book a call
        </a>
      </div>
    </div>
  );
}
