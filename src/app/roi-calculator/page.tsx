import type { Metadata } from "next";
import Link from "next/link";
import { RoiCalculator } from "@/components/roi-calculator";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "roi-calculator";
const TITLE = "AI SDR ROI Calculator: in-house SDR cost vs an AI GTM engine";
const DESCRIPTION =
  "Compare the fully-loaded annual cost of hiring SDRs against a custom AI GTM engine you own. Move the sliders, see your first-year savings.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/${SLUG}`,
    siteName: "AI Ropeway",
    title: `${TITLE} | AI Ropeway`,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/${SLUG}#app`,
      name: "AI SDR ROI Calculator",
      url: `${SITE_URL}/${SLUG}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "ROI Calculator", item: `${SITE_URL}/${SLUG}` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl px-4 pt-20 pb-24 md:pt-28">
        <header className="mb-10 text-center">
          <p className="mono-label mb-4 text-accent">ROI Calculator</p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.08]">
            What does an SDR really cost you — <span className="text-accent">versus an engine you own?</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            Hiring an SDR is a six-figure annual commitment before a single meeting is booked. Move the sliders to see the first-year math against an AI GTM engine live in your stack in 14 days.
          </p>
        </header>

        <RoiCalculator />

        <section className="mt-14 space-y-4 text-[17px] leading-[1.75] text-ink-soft">
          <h2 className="font-display text-2xl font-bold text-ink">How the numbers work</h2>
          <p>
            The in-house figure is fully loaded: base salary, tooling, management overhead, and ramp time before an SDR hits quota. Industry benchmarks put this near $96,000 per rep per year in the US. The AI Ropeway figure is the real engagement cost — a $3,000 one-time Sprint, or the Sprint plus a $2,500/month partnership for continuous optimization.
          </p>
          <p>
            The difference most calculators miss: with an SDR hire you rent the output and lose it the day they leave. With an AI GTM engine, the full system lives in <em>your</em> stack — it keeps running whether or not you keep working with us.
          </p>
          <p className="text-sm text-ink-muted">
            Want the assumptions in writing? Grab the <Link href="/ai-gtm-playbook" className="text-accent hover:underline">free AI GTM playbook</Link>, or read <Link href="/what-is-an-ai-gtm-engine" className="text-accent hover:underline">what an AI GTM engine actually is</Link>.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
          <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">See the engine run on your data</h2>
          <p className="mx-auto mb-6 max-w-xl text-ink-soft">The free 60-minute audit includes a live demo on your actual ICP — no pitch deck, no obligation.</p>
          <Cta href="/#audit" size="lg">Book your free AI GTM audit</Cta>
        </section>
      </div>
    </>
  );
}
