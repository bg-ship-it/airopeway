import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { systemPages, getSystem } from "@/lib/catalog";
import { industryPages } from "@/lib/catalog";

const SITE_URL = "https://www.airopeway.com";

export function generateStaticParams() {
  return systemPages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) return {};
  const description = `${system.desc} AI Ropeway deploys ${system.name} into your business — measurable outcomes, no months-long projects.`;
  return {
    title: system.name,
    description,
    alternates: { canonical: `/systems/${system.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/systems/${system.slug}`,
      siteName: "AI Ropeway",
      title: `${system.name} | AI Ropeway`,
      description,
    },
  };
}

export default async function SystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) notFound();

  const related = systemPages
    .filter((s) => s.slug !== system.slug)
    .slice(Number(system.num) % 12, (Number(system.num) % 12) + 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: system.name,
        serviceType: "AI consulting and deployment",
        description: system.desc,
        provider: { "@type": "Organization", name: "AI Ropeway", url: SITE_URL },
        areaServed: ["IN", "AU", "GB", "US", "CA"],
        url: `${SITE_URL}/systems/${system.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Systems",
            item: `${SITE_URL}/systems`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: system.name,
            item: `${SITE_URL}/systems/${system.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-3 pt-28 pb-10 md:px-5 md:pt-36">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-14 md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10">
            <nav className="mb-6 flex items-center gap-2 text-sm text-ink-muted">
              <Link href="/systems" className="inline-flex items-center gap-1 hover:text-ink">
                <ArrowLeft className="size-4" /> All AI Systems
              </Link>
            </nav>
            <p className="mono-label mb-4 text-accent">
              AI System {system.num} of 18
            </p>
            <h1 className="font-display max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.05]">
              {system.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {system.intro}
            </p>
            <div className="mt-8">
              <Cta href="/#audit" size="lg">
                Get a Free AI Audit
              </Cta>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-2xl font-bold">
              What you get with {system.name}
            </h2>
            <ul className="mt-6 space-y-4">
              {system.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal text-white">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-soft">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-12 text-2xl font-bold">
              How we deploy it
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Every engagement starts with a free 60-minute AI audit. We map
              where {system.name} fits your operations, quantify the time, cost,
              and revenue opportunity, then deploy it into your existing stack —
              no rip-and-replace, no months-long project. We monitor, optimise,
              and expand as you grow.
            </p>
          </div>

          <aside className="rounded-3xl border border-line bg-surface p-6">
            <p className="mono-label mb-3 text-accent">At a glance</p>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-ink-faint">System</dt>
                <dd className="font-medium text-ink">{system.name}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Time to impact</dt>
                <dd className="font-medium text-ink">30–60 days</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Engagement</dt>
                <dd className="font-medium text-ink">
                  Starts with a free audit
                </dd>
              </div>
              <div>
                <dt className="text-ink-faint">Served regions</dt>
                <dd className="font-medium text-ink">
                  India · Australia · UK · North America
                </dd>
              </div>
            </dl>
            <Cta href="/#audit" className="mt-6 w-full" showArrow={false}>
              Claim Your Free Audit
            </Cta>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8">
        <h2 className="font-display mb-6 text-xl font-bold">Related AI systems</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/systems/${r.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(22,21,26,0.35)]"
            >
              <div className="flex items-center justify-between">
                <span className="mono-label text-accent">{r.num}</span>
                <ArrowUpRight className="size-4 text-ink-faint group-hover:text-ink" />
              </div>
              <h3 className="font-display mt-3 text-base font-semibold">
                {r.name}
              </h3>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/industries"
            className="text-sm font-medium text-accent hover:underline"
          >
            See how this works for your industry →
          </Link>
        </div>
      </section>
    </>
  );
}
