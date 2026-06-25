import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { industryPages, getIndustry } from "@/lib/catalog";

const SITE_URL = "https://www.airopeway.com";

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const description = `AI GTM for ${industry.name}. ${industry.solution} Shipped to your repo in 14 days. Live demo on your ICP data, first call.`;
  const title = `AI GTM for ${industry.name}`;
  const ogTitle = `${title} | AI Ropeway`;
  return {
    title,
    description,
    alternates: { canonical: `/industries/${industry.id}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/industries/${industry.id}`,
      siteName: "AI Ropeway",
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = industryPages.filter((i) => i.id !== industry.id).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `AI GTM for ${industry.name}`,
        serviceType: "AI GTM engineering",
        description: industry.solution,
        provider: { "@type": "Organization", name: "AI Ropeway", url: SITE_URL },
        areaServed: ["IN", "AU", "GB", "US", "CA"],
        url: `${SITE_URL}/industries/${industry.id}`,
        audience: { "@type": "Audience", audienceType: `${industry.name} B2B founders` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: `${SITE_URL}/industries`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `AI GTM for ${industry.name}`,
            item: `${SITE_URL}/industries/${industry.id}`,
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

      <section className="px-3 pt-6 pb-10 md:px-5 md:pt-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-14 md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10">
            <nav className="mb-6 text-sm text-ink-muted">
              <Link
                href="/industries"
                className="inline-flex items-center gap-1 hover:text-ink"
              >
                <ArrowLeft className="size-4" /> All industries
              </Link>
            </nav>
            <p className="mono-label mb-4 text-accent">
              AI GTM · {industry.name} playbook
            </p>
            <h1 className="font-display flex items-center gap-3 text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.05]">
              <span aria-hidden>{industry.icon}</span>
              AI GTM for {industry.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {industry.solution} Shipped to your repo in 14 days. Live demo
              on your ICP, first call.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href="/#audit" size="lg">
                Book live demo on {industry.name} data
              </Cta>
              <Link
                href="/#revenue-stack"
                className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
              >
                See the 8-agent stack
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-surface p-7">
            <p className="mono-label mb-3 text-ink-faint">Common challenges</p>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              {industry.challenge}
            </p>

            <p className="mono-label mb-3 mt-7 text-ink-faint">
              AI GTM systems we deploy
            </p>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              {industry.solution}
            </p>

            <p className="mono-label mb-3 mt-7 text-ink-faint">
              Example workflow
            </p>
            <p className="text-sm leading-relaxed text-ink-muted">
              {industry.workflow}
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-7">
            <p className="mono-label mb-4 text-accent">Measurable impact</p>
            <div className="space-y-3">
              {industry.impact.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-surface-soft p-4"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-teal text-white">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>
            <Cta href="/#audit" className="mt-7 w-full" showArrow={false}>
              Book live demo on your data
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8">
        <h2 className="font-display mb-6 text-xl font-bold">
          Other industries
        </h2>
        <div className="flex flex-wrap gap-2">
          {related.map((r) => (
            <Link
              key={r.id}
              href={`/industries/${r.id}`}
              className="rounded-full border border-line-strong bg-surface px-3.5 py-2 text-sm text-ink-soft transition-colors hover:border-ink"
            >
              <span className="mr-1.5" aria-hidden>
                {r.icon}
              </span>
              AI GTM for {r.name}
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#revenue-stack"
            className="text-sm font-medium text-accent hover:underline"
          >
            See the 8-agent AI GTM stack →
          </Link>
          <Link
            href="/systems"
            className="text-sm font-medium text-accent hover:underline"
          >
            18 other systems beyond GTM →
          </Link>
        </div>
      </section>
    </>
  );
}
