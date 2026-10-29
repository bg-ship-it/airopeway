// The one canonical Person node for Bharat Gulati.
//
// There used to be two: #founder in app/layout.tsx and #bharat-gulati in
// app/founder/page.tsx. Both described the same human with different @ids, so
// /founder shipped two competing Person entities and a crawler had no way to
// know they were one person. That splits exactly the identity signal the site
// needs, and it matters here more than it would elsewhere: "AI Ropeway" already
// resolves to cable-car AI, so the entity graph has to be unambiguous.
//
// Now layout.tsx renders this node on every page, and the founder page augments
// it by @id (adding subjectOf, whose data lives on that page) instead of
// declaring a second person.
//
// Where the two old nodes disagreed, these are the canonical values:
//   jobTitle  "Founder & CEO"  (layout's; the founder page's longer
//             "Founder & AI GTM Engineer, AI Ropeway" stays as the visible
//             heading on /founder, which is page copy, not an entity claim)
//   alumniOf  CollegeOrUniversity "Indian Institute of Management Indore",
//             the full legal name rather than "IIM Indore", with sameAs to the
//             institute so it resolves to a known entity
// knowsAbout is the union of both lists.

export const SITE_URL = "https://www.airopeway.com";

export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const FOUNDER_NAME = "Bharat Gulati";
export const FOUNDER_URL = `${SITE_URL}/founder`;
export const FOUNDER_EMAIL = "bg@aiplacers.com";

/** Bharat's own profile. Only URLs that identify the person belong here. */
export const FOUNDER_LINKEDIN_URL =
  "https://www.linkedin.com/in/bharat-gulati9711315523/";

export const AI_PLACERS_URL = "https://www.aiplacers.com";

export const founderPerson = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: FOUNDER_NAME,
  givenName: "Bharat",
  familyName: "Gulati",
  jobTitle: "Founder & CEO",
  description:
    "Founder of AI Ropeway. Ex-VP Sales who scaled an AI automation platform's GTM from zero. IIM Indore AI/ML alum. 12+ years B2B enterprise sales. Ships AI GTM engines into client repos.",
  url: FOUNDER_URL,
  email: FOUNDER_EMAIL,
  sameAs: [FOUNDER_LINKEDIN_URL],
  worksFor: { "@id": ORGANIZATION_ID },
  founderOf: [
    { "@id": ORGANIZATION_ID },
    { "@type": "Organization", name: "AI Placers", url: AI_PLACERS_URL },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Management Indore",
    sameAs: "https://www.iimidr.ac.in",
  },
  knowsAbout: [
    "AI GTM engineering",
    "AI SDR systems",
    "signal-based outbound",
    "revenue operations automation",
    "B2B SaaS sales",
    "AI agent orchestration",
    "cold email deliverability",
    "CRM automation",
    "Enterprise sales",
    "AI automation",
    "Go-to-market strategy",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "AI GTM Engineer",
    skills: [
      "Claude",
      "Clay",
      "Apollo",
      "Make.com",
      "n8n",
      "HubSpot",
      "Salesforce",
      "Supabase",
      "Smartlead",
    ],
  },
};
