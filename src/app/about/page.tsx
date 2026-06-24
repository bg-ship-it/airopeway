import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { founderQuote, footer } from "@/lib/content";

const SITE_URL = "https://www.airopeway.com";

export const metadata: Metadata = {
  title: "About · Founder-led AI GTM engineering",
  description:
    "Founded by Bharat Gulati — 12+ yrs enterprise sales, ex-VP Sales scaling AI GTM from zero, IIM Indore AI/ML. We ship AI GTM engines into your repo in 14 days.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "AI Ropeway",
    title: "About AI Ropeway | Founder-led AI GTM engineering",
    description:
      "Founded by Bharat Gulati — ex-VP Sales who scaled AI GTM from zero. We ship AI GTM engines into your repo, you own the code.",
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
      jobTitle: "Founder & AI GTM Engineer",
      worksFor: { "@type": "Organization", name: "AI Ropeway", url: SITE_URL },
      alumniOf: { "@type": "CollegeOrUniversity", name: "IIM Indore" },
      knowsAbout: [
        "AI GTM engineering",
        "AI SDR systems",
        "signal-based outbound",
        "revenue operations automation",
        "B2B SaaS sales",
      ],
      email: footer.email,
    },
  ],
};

const principles = [
  "AI GTM engines, not strategy decks",
  "Code shipped into your repo on day one",
  "Live demo on your ICP data, first call",
  "No SaaS lock-in, no per-seat fees",
  "Founder-led delivery, weekly meetings",
  "Measurable pipeline impact in 30 days",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-3 pt-6 pb-10 md:px-5 md:pt-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10 max-w-3xl">
            <p className="mono-label mb-4 text-accent">About · Founder-led</p>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.06]">
              VP Sales who scaled AI GTM from zero.{" "}
              <span className="text-accent">
                Now I ship the systems that do it for you.
              </span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              AI Ropeway is an AI GTM engineering studio for B2B SaaS founders.
              We design, build, and deploy AI GTM engines — signal detection,
              enrichment, personalized outreach, reply triage — shipped into
              your repo in 14 days. You own everything we ship.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((point) => (
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
              12+ years enterprise sales. Most recently VP Sales scaling an AI
              automation platform&apos;s GTM from zero. IIM Indore alum, AI/ML
              specialization — a rare bridge between deep go-to-market and
              shipping AI in production.
            </p>
            <p>
              I&apos;ve actually been the VP Sales who built outbound from
              nothing. Now I ship the AI systems that do the same job at
              machine speed — and you own the code on day one. No agency
              middle layer, no offshoring, no junior-dev surprises.
            </p>
            <p>
              AI Ropeway focuses on AI GTM as the wedge because that&apos;s
              where ROI lands fastest. Beyond GTM, we ship 18 other systems
              — voice AI, content engines, ops automation, support
              deflection. AI Placers (sister company) handles the AI-native
              workforce side.
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
          Book live demo on your data
        </Cta>
        <p className="mt-6 text-sm text-ink-muted">
          See the{" "}
          <Link href="/#revenue-stack" className="text-accent hover:underline">
            8-agent AI GTM stack
          </Link>{" "}
          or browse{" "}
          <Link href="/systems" className="text-accent hover:underline">
            18 other systems
          </Link>{" "}
          we ship.
        </p>
      </section>
    </>
  );
}
