"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { Cta } from "@/components/cta";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";

/* Distinctive nav: a floating, fully-rounded "capsule" bar. Brand mark on the
   left in a colourful gradient chip, links in a recessed pill segment in the
   centre, ink CTA on the right. Consistent rounded shape language throughout. */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-5 md:px-5">
      <div
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full py-2 pl-2 pr-2 transition-all duration-300",
          scrolled
            ? "border border-line bg-canvas/85 shadow-[0_10px_30px_-18px_rgba(22,21,26,0.4)] backdrop-blur-md"
            : "border border-transparent bg-canvas/40 backdrop-blur-sm",
        )}
      >
        <Link href="/" className="focus-ring flex items-center rounded-2xl">
          <Logo />
        </Link>

        {/* Centre link segment */}
        <nav className="hidden items-center gap-1 rounded-full bg-surface-soft/70 p-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Cta href="/#audit" showArrow={false}>
            Free AI Audit
          </Cta>
        </div>

        <button
          className="focus-ring rounded-full p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-canvas/95 p-3 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-2.5 text-sm text-ink-soft hover:bg-surface-soft"
              >
                {item.label}
              </Link>
            ))}
            <Cta href="/#audit" className="mt-2 w-full" showArrow={false}>
              Free AI Audit
            </Cta>
          </nav>
        </div>
      )}
    </header>
  );
}
