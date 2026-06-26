import Link from "next/link";
import { footer, BOOK_URL } from "@/lib/content";
import { Cta } from "@/components/cta";
import { Logo } from "@/components/logo";

const footerColumns = [
  {
    heading: "AI Systems",
    links: [
      { label: "AI GTM Strategy", href: "/systems/ai-gtm-strategy-builder" },
      { label: "AI Agent Management", href: "/systems/ai-agent-management" },
      { label: "Voice AI", href: "/systems/voice-ai-solutions" },
      { label: "Sales Automation", href: "/systems/sales-automation-and-revops" },
      { label: "AI Automation", href: "/systems/ai-automation-and-workflow" },
      { label: "All 18 Systems", href: "/systems" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "SaaS", href: "/industries/saas" },
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Finance", href: "/industries/finance" },
      { label: "D2C Brands", href: "/industries/d2c" },
      { label: "All Industries", href: "/industries" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "AI GTM Guide", href: "/blog/ai-gtm-engines-complete-guide" },
      { label: "AI GTM Strategy", href: "/blog/ai-gtm-strategy-pipeline" },
      { label: "AI Agent Management", href: "/blog/enterprise-ai-agent-management-guide" },
      { label: "AI vs Clay", href: "/blog/ai-ropeway-vs-clay" },
      { label: "AI vs Apollo", href: "/blog/ai-ropeway-vs-apollo" },
      { label: "All Posts", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "8 Agents", href: "/#revenue-stack" },
      { label: "Pricing", href: "/pricing" },
      { label: "Founder", href: "/founder" },
      { label: "About", href: "/about" },
      { label: "Book a Call", href: BOOK_URL, external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="px-3 pb-6 md:px-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-6 py-12 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
          <div className="shrink-0">
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-ink-muted">
              AI GTM engines for B2B founders. Signal detection, enrichment,
              outreach, reply triage — shipped to your repo in 14 days.
            </p>
            <Cta href={BOOK_URL} className="mt-5" showArrow={false}>
              Book a Call
            </Cta>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="mono-label mb-3 text-ink-faint">{col.heading}</p>
                <ul className="space-y-2">
                  {col.links.map((item) => {
                    const cls = "text-sm text-ink-soft transition-colors hover:text-ink";
                    const ext = "external" in item && item.external;
                    return (
                      <li key={item.label}>
                        {ext ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                            {item.label}
                          </a>
                        ) : (
                          <Link href={item.href} className={cls}>
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
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
