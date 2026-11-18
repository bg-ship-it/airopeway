// Plan cards shared by /pricing and the homepage pricing section, so the two
// cannot drift apart again (the homepage once showed Full Stack at $5,000 while
// /pricing said $4,000).
import { BOOK_URL } from "@/lib/content";

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  cta: string;
  featured?: boolean;
  /** Per-held-meeting price for structured data, when the tier has one. */
  perMeeting?: string;
  more?: { label: string; href: string; external?: boolean }[];
  features: string[];
  outcomes: string[];
  target: string;
};

export const tiers: Tier[] = [
  {
    name: "Results as a Service",
    price: "$200",
    cadence: "per held meeting · 45-day pilot",
    blurb:
      "We build and run the outbound. You pay when a prospect actually shows up. $1,000 setup, refunded in full if the pilot books fewer than three held meetings.",
    cta: "Book a RaaS fit call",
    featured: true,
    perMeeting: "200-300",
    more: [
      { label: "Enterprise? Book an AI GTM strategy call for pricing", href: BOOK_URL, external: true },
      { label: "Full RaaS terms", href: "/results-as-a-service" },
    ],
    target: "Teams that want results before commitment",
    features: [
      "$200 per held meeting, $300 for mid-market targets",
      "$1,000 setup, refunded under 3 held meetings",
      "Buy the engine at day 45 for $3,000",
    ],
    outcomes: [
      "First held meetings from week 3",
      "Weekly numbers: reached, replied, held",
      "Three pilots run at a time",
    ],
  },
  {
    name: "AI GTM Sprint",
    price: "$3,000",
    cadence: "one-time · no term",
    blurb:
      "1 AI SDR engine, built and deployed into your accounts in 14 days. Signal detection + enrichment + personalized outreach. Full system handoff.",
    cta: "Scope a Sprint",
    target: "Founders testing AI GTM",
    features: [
      "1 engine shipped in 14 days",
      "Runs in your accounts from day one",
      "ICP & signal config included",
      "3 months bug-fix support",
      "Free 60-min AI GTM audit first",
    ],
    outcomes: [
      "1,500 prospects sourced",
      "80–150 signal-qualified accounts",
      "4–8 held meetings in the first 30 days live",
    ],
  },
  {
    name: "GTM Partnership",
    price: "$2,500",
    cadence: "/mo · month to month",
    blurb:
      "Dedicated AI GTM engineer. 1 new agent every month. Continuous optimization. Weekly check-ins.",
    cta: "Start Partnership",
    target: "Growing B2B SaaS teams",
    features: [
      "Dedicated AI GTM engineer",
      "Ship a new agent every month",
      "Weekly optimization cycles",
      "Slack channel access",
      "Cancel any month",
    ],
    outcomes: [
      "3,000 prospects sourced / month",
      "150–300 signal-qualified accounts / month",
      "8–15 held meetings / month",
      "$170–$310 per held meeting",
    ],
  },
  {
    name: "Full Stack & Portfolio",
    price: "Custom",
    cadence: "from $4,000/mo · scoped on the audit",
    blurb:
      "All eight agents in production, or one engine per company across a fund or multi-brand group. Scoped after RaaS or a Sprint has proven the motion.",
    cta: "Talk to Founder",
    target: "Scaling companies, PE/VC portfolios",
    features: [
      "All 8 agents in production",
      "Per-meeting pricing available on top of the base",
      "Bi-weekly strategy calls, 2 engineers",
      "Central pipeline reporting across companies",
      "Voice AI add-on (via AI Placers)",
    ],
    outcomes: [
      "15–30 held meetings / month per company",
      "Fund-level pipeline view from month two",
    ],
  },
];
