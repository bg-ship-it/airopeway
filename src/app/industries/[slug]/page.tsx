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
  const description = `AI for ${industry.name}: ${industry.solution}. AI Ropeway deploys industry-specific AI playbooks with measurable, proven outcomes.`;
  return {
    title: `AI for ${industry.name}`,
    description,
    alternates: { canonical: `/industries/${industry.id}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/industries/${industry.id}`,
      siteName: "AI Ropeway",
      title: `AI for ${industry.name} | AI Ropeway`,
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
        name: `AI for ${industry.name}`,
        serviceType: "AI consulting and deployment",
        description: industry.solution,
        provider: { "@type": "Organization", name: "AI Ropeway", url: SITE_URL },
        areaServed: ["IN", "AU", "GB", "US", "CA"],
        url: `${SITE_URL}/industries/${industry.id}`,
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
            name: `AI for ${industry.name}`,
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

      <section className="px-3 pt-28 pb-10 md:px-5 md:pt-36">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-14 md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10">
            <nav className="mb-6 text-sm text-ink-muted">
              <Link href="/industries" className="inline-flex items-center gap-1 hover:text-ink">
                <ArrowLeft className="size-4" /> All industries
              </Link>
            </nav>
            <p className="mono-label mb-4 text-accent">Industry Playbook</p>
            <h1 className="font-display flex items-center gap-3 text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.05]">
              <span aria-hidden>{industry.icon}</span>
              AI for {industry.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {industry.solution}
            </p>
            <div className="mt-8">
              <Cta href="/#audit" size="lg">
                Get a Free {industry.name} AI Audit
              </Cta>
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
              AI solutions we deploy
            </p>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              {industry.solution}
            </p>

            <p className="mono-label mb-3 mt-7 text-ink-faint">Example workflow</p>
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
              Claim Your Free Audit
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8">
        <h2 className="font-display mb-6 text-xl font-bold">Other industries</h2>
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
              AI for {r.name}
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/systems"
            className="text-sm font-medium text-accent hover:underline"
          >
            Explore the 18 AI systems we deploy →
          </Link>
        </div>
      </section>
    </>
  );
}
