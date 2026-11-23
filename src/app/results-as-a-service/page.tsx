import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Cta } from "@/components/cta";
import { MotionBg } from "@/components/motion-bg";
import { Reveal } from "@/components/reveal";
import { BOOK_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Results as a Service (RaaS) · $250 a meeting",
  description:
    "Results as a Service for B2B outbound: $1,000 setup, refunded under five held meetings, then $250 per meeting that takes place. 45 days, then buy the engine.",
  alternates: { canonical: "/results-as-a-service" },
  openGraph: {
    images: ["/opengraph-image"],
    url: "https://www.airopeway.com/results-as-a-service",
    title: "Results as a Service (RaaS) | AI Ropeway",
    description:
      "Pay for meetings that happen, not hours, seats or software. $250 per held meeting, setup refunded under five.",
  },
};

const SETUP = 1000;
const PER_MEETING = 250;
const FLOOR = 5;

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

// Under the floor the setup comes back, so only the meetings held are billed.
const bill = (held: number) =>
  held < FLOOR ? held * PER_MEETING : SETUP + held * PER_MEETING;

const scenarios = [0, 2, 4, 5, 10, 15];

const included = [
  "ICP, signals and target list built with you",
  "Sending domains and inboxes set up for the pilot, separate from your main domain",
  "LinkedIn and email outreach, copy approved by you before launch",
  "Replies triaged and meetings booked onto your calendar",
  "Weekly numbers: accounts reached, replies, meetings held",
];

const counts = [
  "The prospect attended the call",
  "The company matches the ICP we agreed in writing before launch",
  "The attendee is at or above the seniority we agreed",
  "It is logged with a calendar record you can see",
];

const doesNotCount = [
  "No-shows, and reschedules until the call takes place",
  "Existing customers, open deals and anyone on your exclusion list",
  "A second meeting at the same company",
  "Anything outside the ICP: flag it within 5 business days and it is not billed",
];

const steps: [string, string, string][] = [
  ["Day 0", "Fit call", "Free. We agree the ICP, the deal size and exactly what counts as a meeting."],
  ["Days 1–10", "Build", "Target list, signals, sending setup and copy. Nothing goes out until you approve it."],
  ["Days 11–45", "Live", "Meetings land on your calendar. You get the numbers every week."],
  ["Day 45", "Next step", "Buy the engine for $3,000 or move to Partnership."],
];

const compare: [string, string, string, string][] = [
  ["Upfront", `${usd(SETUP)}, refundable`, "$3,000", "$2,500 / mo"],
  ["Per held meeting", `${usd(PER_MEETING)} SMB · $350 mid-market · enterprise on a call`, "None", "None"],
  ["Who carries the risk", "Shared", "You, with the Sprint guarantee", "You, month to month"],
  ["Where it runs", "Our accounts during the pilot", "Your accounts from day one", "Your accounts from day one"],
  ["Owning the engine", "Buy it at day 45 for $3,000", "Included", "Included"],
  ["Term", "45-day pilot", "One-time", "Cancel any month"],
  ["Best for", "Testing outbound or a new market", "Teams that want to own and run it", "Teams that want it run for them"],
];

const fit = [
  "You have paying customers and can name who buys",
  "A new customer is worth $5,000 a year or more",
  "One market and one ICP for the 45 days",
  "A named person takes every meeting within 48 hours",
];

const notFit = [
  "Pre-revenue, or still working out the offer",
  "Deal size under $2,000 a year",
  "Three markets at once",
  "Nobody free to take the calls",
];

const models: [string, string, string][] = [
  ["SaaS", "You buy the software", "Seats and credits are billed whether or not a meeting lands. Your team still has to run it."],
  ["Agency retainer", "You buy their time", "A monthly fee for effort. If the pipeline does not show up, the invoice still does."],
  ["Results as a Service", "You buy the outcome", "We build and run the engine. You are billed for meetings prospects actually attend."],
];

const pilotFaqs: [string, string][] = [
  [
    "What is Results as a Service (RaaS)?",
    "A pricing model where you pay for the result, not the tool or the hours. Here the result is a held sales meeting with a buyer who fits the ICP you agreed in writing. SaaS charges for access and agencies charge for time; RaaS charges when the outcome happens.",
  ],
  [
    "What happens if you book fewer than five meetings?",
    `The ${usd(SETUP)} setup is refunded in full within 7 days of day 45. You pay ${usd(PER_MEETING)} only for the meetings that took place.`,
  ],
  [
    "Why is there a setup fee at all?",
    "Domains, inboxes and data cost money before the first meeting exists, and a pilot works better when both sides have committed something. If we miss the floor, it comes back.",
  ],
  [
    "What does it cost for enterprise targets?",
    "Enterprise pricing is set on a call, because sales cycles, buying committees and meeting definitions vary. Book an AI GTM strategy call and you get a fixed per-meeting price before anything starts.",
  ],
  [
    "What if a meeting is a poor fit?",
    "Flag it within 5 business days. If it falls outside the ICP we agreed in writing, it is not billed.",
  ],
  [
    "Who owns the system?",
    "During the pilot it runs in our accounts. For $3,000 at day 45 the agents, prompts, schema and workflows move to your GitHub and your accounts. Or we keep running it for you on Partnership.",
  ],
  [
    "Do you send from our domain?",
    "No. The pilot uses separate sending domains, so your main domain's reputation is not touched.",
  ],
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pilotFaqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function ResultsAsAServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="px-3 pt-6 pb-10 md:px-5 md:pt-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-soft px-5 py-16 text-center md:px-12 md:py-20">
          <MotionBg />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mono-label mb-4 text-accent">Results as a Service · RaaS</p>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.05]">
              Don&apos;t buy software or hours.{" "}
              <span className="text-accent">Buy meetings.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
              Outbound sold as a result, not a subscription. A 45-day RaaS
              pilot: {usd(SETUP)} to set up,{" "}
              <strong className="font-semibold text-ink">
                refunded if it produces fewer than five held meetings
              </strong>
              , then {usd(PER_MEETING)} for each meeting a prospect actually
              attends.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Cta href="/#audit" size="lg">
                Book a RaaS fit call
              </Cta>
              <Cta href="#counted" variant="ghost" size="lg" showArrow={false}>
                How a meeting is counted
              </Cta>
            </div>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-soft">
              {["Setup refunded under 5 meetings", "$350 for mid-market", "Buy the engine at day 45"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-teal" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-3 pb-10 md:px-5">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {models.map(([name, buys, body], i) => {
              const raas = i === models.length - 1;
              return (
                <div
                  key={name}
                  className={
                    raas
                      ? "rounded-3xl border-2 border-accent bg-surface p-6"
                      : "card rounded-3xl p-6"
                  }
                >
                  <p className={`mono-label ${raas ? "text-accent" : "text-ink-faint"}`}>{name}</p>
                  <h2 className="font-display mt-2 text-lg font-semibold">{buys}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative flex h-full flex-col rounded-3xl bg-ink p-7 text-white shadow-[0_30px_60px_-30px_rgba(22,21,26,0.6)] md:p-8">
              <span
                className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                style={{ background: "var(--color-accent)" }}
              >
                Start here
              </span>
              <h2 className="font-display text-xl font-bold">RaaS Pilot</h2>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-display text-3xl font-bold">{usd(SETUP)}</span>
                <span className="text-xs text-white/55">refundable setup</span>
                <span className="font-display text-3xl font-bold">+ {usd(PER_MEETING)}</span>
                <span className="text-xs text-white/55">per held meeting</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                We build and run the outbound for 45 days. You pay mostly when
                a prospect shows up. $350 per meeting for mid-market targets.
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {included.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-amber" />
                    <span className="text-white/85">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-white/45">
                Three pilots run at a time. The founder builds each one.
              </p>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-5 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
              >
                Book a RaaS fit call
              </a>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-center text-xs font-semibold text-white/75 underline-offset-2 hover:underline"
              >
                Enterprise? Book an AI GTM strategy call for pricing
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card flex h-full flex-col rounded-3xl p-7 md:p-8">
              <p className="mono-label mb-3 text-accent">What you actually pay</p>
              <h2 className="font-display text-2xl font-bold">
                Every outcome, priced before you start.
              </h2>
              <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
                <table className="w-full text-sm">
                  <thead className="bg-surface-soft">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-ink-soft">Meetings held</th>
                      <th className="px-4 py-3 text-left font-medium text-ink-soft">You pay</th>
                      <th className="px-4 py-3 text-left font-medium text-ink-soft">Per meeting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((n) => (
                      <tr key={n} className="border-t border-line">
                        <td className="px-4 py-3 font-medium text-ink">
                          {n}
                        </td>
                        <td className="px-4 py-3 text-ink-soft">
                          {usd(bill(n))}
                          {n < FLOOR && (
                            <span className="ml-2 text-xs text-teal">setup refunded</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-ink-muted">
                          {n === 0 ? "n/a" : usd(Math.round(bill(n) / n))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-ink-faint">
                SMB rate shown. For comparison, an in-house SDR runs $900–$1,500
                per held meeting, assuming a fully loaded cost near $96k a year
                and 8–12 held meetings a month.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="counted" className="scroll-mt-24 px-3 py-10 md:px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-2 text-center text-3xl font-bold">
            How a held meeting is counted
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-ink-muted">
            Pay-per-meeting only works when both sides agree what a meeting is.
            This is written into the pilot before anything is sent.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card rounded-3xl p-7 md:p-8">
              <p className="mono-label mb-4 text-teal">Counts</p>
              <ul className="space-y-3">
                {counts.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card rounded-3xl p-7 md:p-8">
              <p className="mono-label mb-4 text-coral">Does not count</p>
              <ul className="space-y-3">
                {doesNotCount.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-ink-soft">
                    <X className="mt-0.5 size-4 shrink-0 text-coral" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-10 md:px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-8 text-center text-3xl font-bold">
            The 45 days
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([when, title, body], i) => (
              <Reveal key={when} delay={i * 0.06}>
                <div className="card h-full rounded-3xl p-6">
                  <p className="mono-label text-accent">{when}</p>
                  <h3 className="font-display mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-10 md:px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-2 text-center text-3xl font-bold">
            Three ways to start
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-ink-muted">
            RaaS is the low-risk way in. The Sprint and the Partnership are
            still there for teams that want to own the engine from day one.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-ink-soft">&nbsp;</th>
                  <th className="px-4 py-3 text-left font-medium text-accent">RaaS Pilot</th>
                  <th className="px-4 py-3 text-left font-medium text-ink-soft">AI GTM Sprint</th>
                  <th className="px-4 py-3 text-left font-medium text-ink-soft">GTM Partnership</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([k, a, b, c]) => (
                  <tr key={k} className="border-t border-line">
                    <td className="px-4 py-3 font-medium text-ink">{k}</td>
                    <td className="px-4 py-3 text-ink-soft">{a}</td>
                    <td className="px-4 py-3 text-ink-muted">{b}</td>
                    <td className="px-4 py-3 text-ink-muted">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-center text-xs text-ink-faint">
            Need all eight agents or a portfolio rollout? See{" "}
            <Link href="/pricing" className="text-accent hover:underline">
              Full Stack and Portfolio
            </Link>
            . Selling into the US from India? The{" "}
            <Link href="/us-market-entry-gtm" className="text-accent hover:underline">
              US market entry page
            </Link>{" "}
            has the plan.
          </p>
        </div>
      </section>

      <section className="px-3 py-10 md:px-5">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="card rounded-3xl p-7 md:p-8">
            <p className="mono-label mb-4 text-teal">A pilot fits if</p>
            <ul className="space-y-3">
              {fit.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="card rounded-3xl p-7 md:p-8">
            <p className="mono-label mb-4 text-coral">Not yet, if</p>
            <ul className="space-y-3">
              {notFit.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-ink-soft">
                  <X className="mt-0.5 size-4 shrink-0 text-coral" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <h2 className="font-display mb-9 text-center text-3xl font-bold">
          Questions before you book?
        </h2>
        <div className="space-y-3">
          {pilotFaqs.map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-medium text-ink">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Cta href="/#audit" size="lg">
            Book a RaaS fit call
          </Cta>
          <p className="mt-3 text-xs text-ink-faint">
            Free. If the pilot is not a fit, you will hear that on the call.
          </p>
        </div>
      </section>
    </>
  );
}
