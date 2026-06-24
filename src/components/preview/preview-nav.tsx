"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Cta } from "@/components/cta";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";

const previewNav = [
  { label: "8 Agents", href: "#revenue-stack" },
  { label: "Pricing", href: "#pricing" },
  { label: "Founder", href: "#founder" },
  { label: "Other systems", href: "/systems" },
  { label: "Blog", href: "/blog" },
];

export function PreviewNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="preview-nav-root"
      className="fixed inset-x-0 top-3 z-50 px-3 md:top-5 md:px-5"
    >
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

        <ul className="hidden items-center gap-1 rounded-full bg-surface-soft/70 p-1 md:flex">
          {previewNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

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
          <ul className="flex flex-col gap-1">
            {previewNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full px-4 py-2.5 text-sm text-ink-soft hover:bg-surface-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Cta href="/#audit" className="mt-2 w-full" showArrow={false}>
                Free AI Audit
              </Cta>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
