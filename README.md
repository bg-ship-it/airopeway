# AI Ropeway — Cohere-inspired redesign

A [Next.js](https://nextjs.org) (App Router, Tailwind v4) rebuild of airopeway.com
with a Cohere-style design language (not a copy): an animated colorful gradient
blob background, a floating capsule navigation bar, techy typography (Space
Grotesk + Inter + JetBrains Mono), and a consistent rounded shape language across
buttons, cards, and form fields. All original site content is preserved.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `src/lib/content.ts` — all site copy (single source of truth)
- `src/app/globals.css` — design tokens, motion, component styles
- `src/components/` — nav, footer, logo, CTAs, motion background
- `src/components/sections/` — hero, marquee, edge, systems, industries, process, faq, audit
- `src/app/pricing/page.tsx` — pricing page
