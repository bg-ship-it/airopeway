// All copy preserved verbatim from the original airopeway.com.
// Only UI/UX is being redesigned — wording is unchanged.

export const nav = [
  { label: "18 Systems", href: "/#systems" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const hero = {
  eyebrow: "Premier AI Transformation Partner",
  // Original headline, restructured for the new type treatment
  headlineLines: ["Do 5× more.", "Run on half the team.", "Scale 50× faster —", "or get left behind."],
  subhead:
    "Your competitors are deploying AI right now. Every week you operate manually costs you market share, margin, and momentum. AI Ropeway deploys 18 battle-tested AI systems into your business — turning operations into a revenue engine that runs at machine speed.",
  primaryCta: "Claim Your Free AI Audit",
  secondaryCta: "See the 18 Systems",
  stats: [
    { val: "18+", label: "AI Systems Deployed" },
    { val: "16+", label: "Industries Served" },
    { val: "4.8��, label: "Average ROI" },
    { val: "60", label: "Days to Measurable Impact" },
  ],
};

export const marquee = [
  "AI Lead Qualification",
  "Churn Reduction",
  "Demand Forecasting",
  "AI Voice Agents",
  "Automated Onboarding",
  "Predictive Analytics",
  "AI Content Engine",
  "Smart Inventory",
  "Customer Retention AI",
];

export const edge = {
  label: "Your Competitive Edge",
  headline: ["Act now.", "Lead for decades."],
  paragraphs: [
    "AI adoption is not coming. It is already separating the top 10% of businesses from everyone else. The companies winning today aren't bigger — they're faster, leaner, and running AI in their operations.",
    "The cost of waiting isn't zero. It's compounding. Every manual process, every slow follow-up, every missed personalisation is a competitor's gain.",
    "We deploy. You grow. No excuses.",
  ],
  metrics: [
    { metric: "40%", desc: "of manual operations can be automated with current AI — starting this quarter" },
    { metric: "5×", desc: "faster customer response when AI handles first-touch support and qualification" },
    { metric: "22%", desc: "average increase in repeat purchase rate from AI-powered retention systems" },
    { metric: "70%", desc: "reduction in support ticket volume with intelligent AI deflection" },
  ],
};

export const systems = [
  { num: "01", name: "AI GTM Strategy Builder", desc: "Build a go-to-market AI strategy that drives pipeline from day one." },
  { num: "02", name: "AI Agent Management", desc: "Deploy, monitor, and optimise AI agents across your entire operation." },
  { num: "03", name: "Voice AI Solutions", desc: "Intelligent voice agents for inbound, outbound, and support at scale." },
  { num: "04", name: "AI Business Transformation", desc: "End-to-end AI integration across people, process, and technology." },
  { num: "05", name: "LinkedIn GTM Engine", desc: "AI-powered LinkedIn outreach that builds pipeline on autopilot." },
  { num: "06", name: "AI Enterprise Implementations", desc: "Large-scale AI rollouts designed for complex enterprise environments." },
  { num: "07", name: "AI Automation & Workflow", desc: "Eliminate manual work by automating repetitive tasks and workflows." },
  { num: "08", name: "AI SaaS Product Building", desc: "Build AI-native SaaS products from concept to launch, fast." },
  { num: "09", name: "Website & Mobile App Deployment", desc: "Deploy high-converting web and mobile experiences powered by AI." },
  { num: "10", name: "AI Consultation & Advisory", desc: "Strategic AI advisory to align technology with business outcomes." },
  { num: "11", name: "Sales Automation & RevOps", desc: "Automate your revenue operations and close more deals with less effort." },
  { num: "12", name: "AI Trainings & Workshops", desc: "Upskill your team with hands-on AI training built for real use cases." },
  { num: "13", name: "AI Security, Governance & Risk", desc: "Deploy AI safely with robust governance, compliance, and risk frameworks." },
  { num: "14", name: "AI Content, Media & Growth", desc: "Scale content production and growth with AI-powered media systems." },
  { num: "15", name: "AI Enablement & Change Management", desc: "Drive adoption and embed AI into your culture — not just your tools." },
  { num: "16", name: "AI Data Analysis", desc: "Turn raw data into strategic decisions with AI-powered analytics." },
  { num: "17", name: "AI Employees Deployment", desc: "Place AI-native digital workers that execute tasks 24/7 without fatigue." },
  { num: "18", name: "AI Business Intelligence", desc: "Real-time intelligence dashboards that make your data work for you." },
];

export type Industry = {
  id: string;
  name: string;
  icon: string;
  challenge: string;
  solution: string;
  workflow: string;
  impact: string[];
};

export const industries: Industry[] = [
  { id: "retail", name: "Retail", icon: "🛍️", challenge: "Inventory waste, poor personalization, high cart abandonment", solution: "AI demand forecasting, personalized recommendation engines, dynamic pricing", workflow: "Customer visits → AI profiles intent → Personalised offers shown → Dynamic checkout nudges → Post-purchase retention flow", impact: ["40% inventory waste eliminated", "22% increase in repeat purchase rate", "3.2x conversion lift on product pages"] },
  { id: "healthcare", name: "Healthcare", icon: "🏥", challenge: "Missed appointments, slow patient intake, manual documentation", solution: "AI scheduling agents, voice-to-notes, predictive patient outreach", workflow: "Patient inquiry → AI triage → Auto-scheduling → Pre-visit reminders → Post-care follow-up sequences", impact: ["35% reduction in no-shows", "60% faster patient intake", "2.5hrs saved per doctor per day"] },
  { id: "finance", name: "Finance", icon: "💰", challenge: "Manual compliance, slow onboarding, high support volume", solution: "AI KYC automation, intelligent chatbots, fraud pattern detection", workflow: "Lead inquiry → AI qualification → Automated KYC → Risk scoring → Personalised product recommendation", impact: ["70% faster KYC processing", "45% support ticket deflection", "4.8x ROI on AI deployment"] },
  { id: "ecommerce", name: "E-commerce", icon: "🛒", challenge: "High CAC, low LTV, poor product discovery", solution: "AI-powered search, smart bundling, churn prediction models", workflow: "Session start → Intent detection → Smart product surfacing → Upsell engine → Loyalty trigger post-purchase", impact: ["28% improvement in AOV", "4.8x ROI on loyalty campaigns", "19% reduction in returns"] },
  { id: "logistics", name: "Logistics", icon: "🚚", challenge: "Route inefficiency, delayed deliveries, poor tracking visibility", solution: "AI route optimization, predictive ETAs, automated exception handling", workflow: "Order placed → AI route planned → Driver assigned → Real-time anomaly detection → Customer auto-notification", impact: ["23% fuel cost reduction", "91% on-time delivery rate", "50% fewer manual dispatch decisions"] },
  { id: "saas", name: "SaaS", icon: "💻", challenge: "High churn, poor onboarding completion, low feature adoption", solution: "AI onboarding flows, churn prediction, automated success touchpoints", workflow: "Trial signup → AI health scoring → Behaviour-triggered nudges → Success milestone alerts → Expansion offer timing", impact: ["34% churn reduction", "2.7x onboarding completion rate", "41% increase in feature adoption"] },
  { id: "realestate", name: "Real Estate", icon: "🏠", challenge: "Slow lead response, manual property matching, poor follow-up", solution: "AI lead scoring, instant property recommendation, automated follow-up sequences", workflow: "Lead enquiry → AI property match → Instant WhatsApp/email → Site visit booked → Drip nurture until conversion", impact: ["5-minute average lead response", "3x more qualified site visits", "27% higher close rate"] },
  { id: "education", name: "Education", icon: "📚", challenge: "High dropout, low engagement, poor counsellor efficiency", solution: "AI learning path personalisation, dropout prediction, automated counselling bots", workflow: "Student signup → Learning profile built → Personalised content served → At-risk alerts triggered → Intervention automated", impact: ["41% improvement in course completion", "60% fewer counsellor hours needed", "3x more enrolments per rep"] },
  { id: "franchise", name: "Franchise", icon: "🏪", challenge: "Inconsistent brand experience, poor franchise performance visibility", solution: "AI performance dashboards, standardised AI playbooks per location", workflow: "Customer visit → Standard AI journey activated → Location-specific context applied → HQ analytics updated → Coaching triggered", impact: ["52% improvement in lead-to-conversion", "Unified brand experience across locations", "Real-time performance benchmarking"] },
  { id: "hospitality", name: "Hospitality", icon: "🏨", challenge: "Manual booking, poor upsell, low repeat visits", solution: "AI concierge, personalised upsell triggers, review sentiment monitoring", workflow: "Booking → Pre-stay AI personalisation → Check-in upsell → In-stay needs prediction → Post-stay review automation", impact: ["22% increase in RevPAR", "38% more upsell conversions", "4.6 avg review score achieved"] },
  { id: "manufacturing", name: "Manufacturing", icon: "🏭", challenge: "Equipment downtime, manual quality checks, supply chain disruptions", solution: "Predictive maintenance AI, computer vision QA, smart procurement", workflow: "Sensor data → Anomaly detection → Maintenance alert → Auto-vendor notification → RCA logged automatically", impact: ["40% reduction in unplanned downtime", "89% defect detection accuracy", "18% procurement cost savings"] },
  { id: "foodtech", name: "Food Tech", icon: "🍕", challenge: "High cancellation rate, inefficient kitchen ops, poor retention", solution: "AI demand prediction, smart kitchen routing, loyalty AI", workflow: "Order placed → Kitchen load balanced by AI → Delivery route optimised → Customer retention score updated → Winback triggered", impact: ["31% fewer cancellations", "25% faster kitchen throughput", "4.8x ROI on loyalty campaigns"] },
  { id: "d2c", name: "D2C Brands", icon: "📦", challenge: "Rising Meta/Google CAC, low subscription retention, poor LTV", solution: "AI creative testing, subscription churn models, personalised reorder nudges", workflow: "Ad click → AI landing page variant served → Purchase → Subscription offer personalised → Reorder predicted and triggered", impact: ["37% lower blended CAC", "29% subscription retention lift", "2.1x LTV improvement in 90 days"] },
  { id: "legal", name: "Legal", icon: "⚖️", challenge: "Document overload, slow intake, poor client communication", solution: "AI contract review, automated intake forms, client status bots", workflow: "Client inquiry → AI intake form → Matter classification → Document AI review → Status updates automated", impact: ["75% faster document review", "50% reduction in intake time", "3x more clients handled per attorney"] },
  { id: "travel", name: "Travel", icon: "✈️", challenge: "Low conversion on searches, high cancellation, poor post-booking engagement", solution: "AI itinerary builder, dynamic pricing alerts, post-booking upsell flows", workflow: "Search → AI intent profiling → Personalised itinerary → Dynamic price shown → Upsell sequence post-booking", impact: ["34% increase in booking conversion", "26% reduction in cancellations", "19% increase in package add-ons"] },
  { id: "agriculture", name: "Agriculture", icon: "🌾", challenge: "Yield uncertainty, delayed pest detection, poor market price timing", solution: "AI crop advisory, computer vision disease detection, market price prediction", workflow: "Field data → Satellite + sensor AI → Crop health scored → Advisory pushed to farmer → Market timing recommended", impact: ["21% yield improvement", "Early disease detection saves 30% crop loss", "15% better market price realisation"] },
];

export const process = [
  { step: "01", title: "Free AI Audit", desc: "We map your operations, identify automation wins, and quantify the revenue and cost opportunity — in 60 minutes." },
  { step: "02", title: "Strategy Blueprint", desc: "You receive a custom AI deployment roadmap prioritised by ROI, implementation complexity, and business impact." },
  { step: "03", title: "Deployment Sprint", desc: "Our team deploys the right AI systems into your existing stack — no disruption, no months-long projects." },
  { step: "04", title: "Optimise & Scale", desc: "We monitor performance, optimise weekly, and expand as your business grows. Ongoing partnership, not a one-time job." },
];

export const about = {
  label: "AI Ropeway × AI Placers",
  headline: "Two companies. One mission.",
  body: "AI Ropeway handles the systems and deployment — embedding AI into how you operate, sell, support, and grow. AI Placers handles the workforce side — placing AI-native talent into businesses ready to scale.",
  points: [
    "Premier AI deployment partner for modern businesses",
    "Operating across India, Australia, UK, and North America",
    "18 proprietary AI systems ready to deploy",
    "ROI-first, not strategy-deck-first",
  ],
};

export const faqs = [
  { q: "Do I need a tech team to implement this?", a: "No. We handle all deployment, integration, and setup. You get working AI systems without hiring developers." },
  { q: "How quickly can we see results?", a: "Most clients see measurable impact within 30–60 days of deployment. Some systems like AI lead qualification show ROI in week one." },
  { q: "Which industries do you work with?", a: "We work across 18+ industries including retail, healthcare, finance, SaaS, D2C, logistics, education, real estate, and more." },
  { q: "What does the free AI audit include?", a: "A 60-minute deep-dive into your operations. We identify top 3–5 AI opportunities, estimate ROI, and give you a deployment priority list — no strings attached." },
  { q: "How is AI Ropeway different from a typical agency?", a: "We don't do strategy decks. We deploy working AI systems that generate measurable outcomes. Implementation is our product." },
  { q: "What tools and platforms do you work with?", a: "We integrate with your existing CRM, helpdesk, e-commerce platform, and marketing tools. No rip-and-replace required." },
];

export const auditBenefits = [
  { icon: "🎯", text: "60-minute deep-dive into your operations" },
  { icon: "📊", text: "Top 3–5 AI opportunities, ranked by ROI" },
  { icon: "🗺️", text: "Custom deployment roadmap, built for your stack" },
  { icon: "✅", text: "No commitment. No spam. Just clarity." },
];

export const founderQuote = {
  quote:
    "We identify where AI can save time, reduce cost, and increase revenue — then we deploy it. No fluff, no decks, just working systems.",
  attribution: "— Bharat Gulati, Founder, AI Ropeway",
};

export const footer = {
  lines: [
    "Founded by Bharat Gulati · IIM Indore Alumnus · Also founder of AI Placers",
    "Serving India · Australia · UK · North America",
  ],
  email: "bg@aiplacers.com",
};
