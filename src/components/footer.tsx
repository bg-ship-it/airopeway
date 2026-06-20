import Link from "next/link";
import { footer, nav } from "@/lib/content";
import { Cta } from "@/components/cta";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="px-3 pb-6 md:px-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-6 py-12 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Logo />

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Cta href="/#audit" showArrow={false}>
            Free AI Audit
          </Cta>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            {footer.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a
            href={`mailto:${footer.email}`}
            className="font-mono text-ink transition-colors hover:text-accent"
          >
            {footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
