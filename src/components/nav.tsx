"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { Cta } from "@/components/cta";
import { Logo } from "@/components/logo";

/* Static capsule nav. Scrolls with content. FloatingBottomCta in layout. */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 px-3 pt-3 md:px-5 md:pt-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-line bg-canvas/85 py-2 pl-2 pr-2 shadow-[0_10px_30px_-18px_rgba(22,21,26,0.4)] backdrop-blur-md">
        <Link href="/" className="focus-ring flex items-center rounded-2xl">
          <Logo />
        </Link>

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
