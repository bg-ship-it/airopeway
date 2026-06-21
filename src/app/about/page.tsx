import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { about, founderQuote, footer } from "@/lib/content";

const SITE_URL = "https://www.airopeway.com";

export const metadata: Metadata = {
  title: "About AI Ropeway",
  description:
    "AI Ropeway is a premier AI deployment partner founded by Bharat Gulati (IIM Indore alumnus, founder of AI Placers). We deploy 18 AI systems for businesses across India, Australia, the UK, and North America.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "AI Ropeway",
    title: "About AI Ropeway | AI Ropeway",
    description:
      "Premier AI deployment partner founded by Bharat Gulati. ROI-first, not strategy-deck-first.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      url: `${SITE_URL}/about`,
      name: "About AI Ropeway",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "Person",
      name: "Bharat Gulati",
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: "AI Ropeway", url: SITE_URL },
      alumniOf: { "@type": "CollegeOrUniversity", name: "IIM Indore" },
      email: footer.email,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-3 pt-28 pb-10 md:px-5 md:pt-36">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10 max-w-3xl">
            <p className="mono-label mb-4 text-accent">{about.label}</p>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.06]">
              {about.headline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {about.body}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {about.points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal text-white">
                <Check className="size-3.5" />
              </span>
              <span className="text-[15px] text-ink-soft">{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8 md:px-8">
        <div className="rounded-3xl border border-line bg-surface p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold">
            Founded by Bharat Gulati
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">
            <p>
              AI Ropeway was founded by Bharat Gulati, an IIM Indore alumnus and
              the founder of AI Placers. The two companies share one mission:
              AI Ropeway handles the systems and deployment — embedding AI into
              how you operate, sell, support, and grow — while AI Placers handles
              the workforce side, placing AI-native talent into businesses ready
              to scale.
            </p>
            <p>
              Our approach is deliberately ROI-first, not strategy-deck-first. We
              identify where AI can save time, reduce cost, and increase revenue,
              then deploy working systems that generate measurable outcomes.
              Implementation is our product.
            </p>
          </div>

          <figure className="mt-8 rounded-3xl border border-line bg-surface-soft p-6">
            <blockquote className="font-display text-lg italic leading-relaxed text-ink">
              &ldquo;{founderQuote.quote}&rdquo;
            </blockquote>
            <figcaption className="mono-label mt-4 text-ink-muted">
              {founderQuote.attribution}
            </figcaption>
          </figure>

          <div className="mt-8 flex flex-col gap-2 text-sm text-ink-muted">
            {footer.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <a
              href={`mailto:${footer.email}`}
              className="font-mono text-ink hover:text-accent"
            >
              {footer.email}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 text-center md:px-8">
        <Cta href="/#audit" size="lg">
          Claim Your Free AI Audit
        </Cta>
        <p className="mt-6 text-sm text-ink-muted">
          Or explore the{" "}
          <Link href="/systems" className="text-accent hover:underline">
            18 AI systems
          </Link>{" "}
          we deploy and{" "}
          <Link href="/industries" className="text-accent hover:underline">
            AI solutions by industry
          </Link>
          .
        </p>
      </section>
    </>
  );
}
