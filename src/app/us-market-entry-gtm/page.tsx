import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";

const SITE_URL = "https://www.airopeway.com";
const SLUG = "us-market-entry-gtm";
const TITLE = "US market entry GTM for Indian SaaS founders";
const DESCRIPTION =
  "Cold email from India to US buyers fails on timing, domain reputation and copy before the pitch is read. A 14-day engine built for US time, US domains and US signals, shipped into your accounts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    images: ["/opengraph-image"],
    type: "article",
    url: `${SITE_URL}/${SLUG}`,
    siteName: "AI Ropeway",
    title: `${TITLE} | AI Ropeway`,
    description: DESCRIPTION,
    authors: ["Bharat Gulati"],
  },
  twitter: { images: ["/opengraph-image"], card: "summary_large_image", title: `${TITLE} | AI Ropeway`, description: DESCRIPTION },
};

const problems = [
  {
    name: "Timing",
    body: "US buyers read email between 7am and 10am in their own timezone. A sequence that fires on an Indian working day lands in the overnight pile and gets cleared with the spam.",
  },
  {
    name: "Domain reputation",
    body: "A fresh .com with no US sending history and no DMARC policy is treated as unknown mail by Google and Microsoft. Unknown mail from an unfamiliar country gets throttled first and read last. Most India-based domains fail two of the deliverability checks on day one.",
  },
  {
    name: "Copy",
    body: "Indian B2B email leans formal. \"I hope this email finds you well\" and \"kindly revert\" read as offshore lead-gen to a US buyer, and they have a filter for that in their head before they have one in their inbox. American buyers respond to short, direct, first-person mail that names their situation.",
  },
  {
    name: "The list",
    body: "Apollo and LinkedIn filters give you titles. They do not tell you which of the 4,000 VP Sales in your segment hired an SDR last month, raised money, or switched CRM. Without a signal, you are a stranger writing to a stranger, and the reply rate shows it.",
  },
];

const plan: [string, string][] = [
  ["Day 1 to 3", "Audit on your ICP data. US-entry setup: domains bought and warming, DMARC, sending infrastructure. Signal definitions agreed."],
  ["Day 4 to 10", "Intent Watcher, Lead Sourcer and Sequence Composer built for your segment. First 1,500 US prospects sourced. Sequences reviewed with you."],
  ["Day 11 to 14", "Reply Triager and CRM Auto-Pilot wired. First sends go out on US time. Handoff to your GitHub."],
];

const faqs = [
  {
    q: "Do I need a US entity to run outbound into the US?",
    a: "No. You need US-hosted sending domains and a compliant footer with a physical address and an unsubscribe. CAN-SPAM does not require a US entity. You will want one before you sign a US customer with a procurement team, and that is a separate conversation.",
  },
  {
    q: "Can I use my existing domain?",
    a: "Do not send cold email from it. We buy two or three lookalike domains, warm them, and keep your main domain for replies and customers only.",
  },
  {
    q: "How long before the first US meeting?",
    a: "Sequences start on day 12 to 14. First held meetings typically land in the third and fourth week after kickoff, once the warm-up period on the domains has finished and the first sequence has run its course.",
  },
  {
    q: "What about LinkedIn?",
    a: "Step three of the sequence adds a LinkedIn touch for anyone who has opened twice and not replied. It runs from your own profile with your approval on every message. We do not run LinkedIn pods.",
  },
  {
    q: "Will this work for a services company?",
    a: "It works for anything with a repeatable buyer and a message that already converts in India. If you have never closed a US deal by hand, run five manual conversations first. Outbound amplifies a message; it does not find one.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/${SLUG}#service`,
      name: "US market entry GTM engine",
      description: DESCRIPTION,
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "AI GTM Engine Deployment",
      areaServed: ["US"],
      audience: { "@type": "Audience", audienceType: "India-headquartered B2B SaaS founders entering the US market" },
      offers: {
        "@type": "Offer",
        url: `${SITE_URL}/pricing`,
        priceCurrency: "USD",
        price: "3750",
        description: "AI GTM Sprint ($3,000) plus the US market entry pack ($750). One-time. No setup fee, no minimum term.",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/${SLUG}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: TITLE, item: `${SITE_URL}/${SLUG}` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-4 pt-20 pb-24 md:pt-28">
        <header className="mb-10">
          <p className="mono-label mb-4 text-accent">US market entry</p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.06]">
            US market entry GTM for Indian SaaS founders
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            You have a product that works, customers in India who pay, and a plan to sell into the US. The
            first thing most founders try is cold email from a Bengaluru or Gurgaon domain at 10am IST, and
            the first thing they learn is that US buyers do not reply. The product is rarely the problem. The
            setup is.
          </p>
        </header>

        <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
          <h2 className="font-display mt-10 mb-2 text-2xl font-bold text-ink">What goes wrong when you email the US from India</h2>
          <p>
            The mail arrives at 11:30pm on the East Coast, from a domain that has never sent to a US inbox
            before, signed off with an address in a city the buyer cannot place. Three things are wrong before
            the buyer reads a word, and none of them are about your pitch.
          </p>
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {problems.map((p) => (
              <div key={p.name} className="rounded-2xl border border-line bg-surface p-5">
                <p className="mono-label mb-2 text-ink-faint">{p.name}</p>
                <p className="text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink-muted">
            The checks that decide whether a domain gets read are in{" "}
            <Link href="/blog/outbound-deliverability-checks-that-matter" className="text-accent hover:underline">
              outbound deliverability: the checks that matter
            </Link>
            . The six-part breakdown of why India-to-US cold email fails is in{" "}
            <Link href="/blog/cold-email-from-india-to-us-buyers" className="text-accent hover:underline">
              cold email from India to US buyers
            </Link>
            .
          </p>

          <h2 className="font-display mt-10 mb-2 text-2xl font-bold text-ink">What changes when the engine is built for the US</h2>
          <p>
            We build the engine the same way for every client. For a US entry the difference is in the setup,
            and it is mostly infrastructure.
          </p>
          <p>
            Sending domains are US-hosted lookalikes of your main domain, warmed for three weeks before a
            single prospect email goes out, with SPF, DKIM and a DMARC policy from the start. Your main domain
            never sends cold mail.
          </p>
          <p>
            Sequences fire on US time. The Sequence Composer agent schedules each step for the prospect&apos;s
            own timezone, so a buyer in Austin gets step one at 8:15am Central on a Tuesday, not at midnight.
          </p>
          <p>
            Copy is written off the signal that fired, in plain American English. The Intent Watcher agent
            finds the trigger (a new sales hire, a funding round, a job post for the role your product
            replaces) and the first line names it. Founder-to-founder, under 80 words, one ask.
          </p>
          <p>
            Replies land in your inbox, triaged. The Reply Triager agent sorts interest from out-of-office and
            objections, and the CRM Auto-Pilot logs every held meeting in HubSpot or whatever you run. You wake
            up in Delhi to a list of who wants a call, not a pile of bounces.
          </p>
          <p>
            All of it ships into your accounts. The code, the prompts, the Supabase schema, the Make or n8n
            scenarios. If you stop working with us, the engine keeps running.
          </p>

          <h2 className="font-display mt-10 mb-3 text-2xl font-bold text-ink">What ships in 14 days</h2>
          <div className="my-6 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-sm">
              <tbody>
                {plan.map(([when, what]) => (
                  <tr key={when} className="border-t border-line first:border-t-0">
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-ink">{when}</td>
                    <td className="px-4 py-3 text-ink-soft">{what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display mt-10 mb-2 text-2xl font-bold text-ink">Price</h2>
          <p>
            Sprint at $3,000 one-time, plus the US market entry pack at $750 one-time. The pack covers the
            US-hosted sending domains, US-timed scheduling and a US copy review before anything goes live. No
            setup fee beyond that, no minimum term. Partnership at $2,500 a month if you want an engineer
            adding an agent each month and tuning the sequences as the replies come in. The full ladder is on
            the{" "}
            <Link href="/pricing" className="text-accent hover:underline">
              pricing page
            </Link>
            .
          </p>
          <p>
            The Sprint guarantee applies: fewer than four ICP-matched held meetings in the first 30 days live,
            and month one of Partnership is free, provided you supplied the ICP, the domains are warm, and one
            named person owns replies.
          </p>

          <h2 className="font-display mt-10 mb-2 text-2xl font-bold text-ink">Where this does not work</h2>
          <p>
            If your US buyer is a Fortune 500 procurement committee with a nine-month cycle, cold email from a
            company they have never heard of will not open that door. You need a US-based seller with a
            network, and possibly a partner. We will say so on the audit call.
          </p>
          <p>
            It also does not work if nobody on your side can take a US-hours call. Meetings booked at 9am
            Pacific are 9:30pm IST. If that is a problem, fix it before you spend on outbound. The week-by-week
            version of the whole motion is in{" "}
            <Link href="/blog/us-market-entry-indian-saas-90-day-outbound-plan" className="text-accent hover:underline">
              the 90-day outbound plan
            </Link>
            .
          </p>

          <h2 className="font-display mt-12 mb-6 text-2xl font-bold text-ink">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-line bg-surface p-5">
                <summary className="cursor-pointer font-medium text-ink">{f.q}</summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>

          <section className="mt-16 rounded-3xl border border-line bg-surface-soft p-8 text-center md:p-12">
            <h2 className="font-display mb-4 text-2xl font-bold text-ink md:text-3xl">See it run on your ICP</h2>
            <p className="mx-auto mb-6 max-w-xl text-ink-soft">
              The free 60-minute audit ends with a live demo on a US list built from your own signals.
            </p>
            <Cta href="/#audit" size="lg">
              Book your free AI GTM audit
            </Cta>
          </section>
        </div>
      </article>
    </>
  );
}
