// Regenerates public/llms-full.txt: the full text of the site's key pages in one
// document, for AI assistants that would otherwise fetch 30 pages to answer one
// question. public/llms.txt stays the short index.
//
// Content comes from what is already machine-readable in the source: each page's
// TITLE/DESCRIPTION constants (or its `export const metadata`), its PUBLISHED and
// MODIFIED dates, and its `faqs` array. Page bodies are JSX, so they are not
// included -- a page with no FAQs contributes its summary only.
//
// Run after editing any page's FAQs, metadata, or public/pricing.md:
//   npm run gen:llms-full

import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const APP = "src/app";
const LLMS = "public/llms.txt";
const PRICING = "public/pricing.md";
const OUT = "public/llms-full.txt";
const BASE = "https://www.airopeway.com";

function walk(d, out = []) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (e === "page.tsx") out.push(p);
  }
  return out;
}
// Pull a double-quoted or backticked string assigned to a const.
function constStr(src, name) {
  const m = src.match(new RegExp(`^const ${name}\\s*(?::[^=]*)?=\\s*\n?\\s*("(?:[^"\\\\]|\\\\.)*")`, "m"));
  return m ? JSON.parse(m[1]) : null;
}
// Scoped to the `export const metadata` block: a bare /title:/ search picks up
// link-card titles elsewhere in the file (that is how /founder came out holding
// the pillar post's headline).
function metaField(src, field) {
  const start = src.search(/^export const metadata\b/m);
  if (start < 0) return null;
  const slice = src.slice(start);
  const end = slice.search(/^};/m);
  const block = end < 0 ? slice : slice.slice(0, end);
  const m = block.match(new RegExp(`(?:^|[\\s{,])${field}:\\s*("(?:[^"\\\\]|\\\\.)*")`, "m"));
  return m ? JSON.parse(m[1]) : null;
}
// faqs: [{ q: "...", a: "..." }, ...]
function faqs(src) {
  const start = src.search(/^const (faqs|FAQS)\b/m);
  if (start < 0) return [];
  const slice = src.slice(start);
  const end = slice.search(/^\];/m);
  const body = end < 0 ? slice : slice.slice(0, end);
  const out = [];
  const re = /\bq:\s*("(?:[^"\\]|\\.)*")\s*,\s*\n?\s*a:\s*("(?:[^"\\]|\\.)*")/g;
  let m;
  while ((m = re.exec(body))) out.push({ q: JSON.parse(m[1]), a: JSON.parse(m[2]) });
  return out;
}

const rows = [];
for (const f of walk(APP).sort()) {
  const src = readFileSync(f, "utf8");
  const route = "/" + f.replace(`${APP}/`, "").replace(/\/page\.tsx$/, "").replace(/^page\.tsx$/, "");
  if (route.includes("[")) continue;
  rows.push({
    route: route === "/" ? "/" : route,
    title: constStr(src, "TITLE") ?? metaField(src, "title"),
    desc: constStr(src, "DESCRIPTION") ?? metaField(src, "description"),
    published: constStr(src, "PUBLISHED"),
    modified: constStr(src, "MODIFIED"),
    faqs: faqs(src),
  });
}

const llms = readFileSync(LLMS, "utf8");
const pricing = readFileSync(PRICING, "utf8");

const today = new Date().toISOString().slice(0, 10);

// Keep llms.txt's own intro + fact sections as the head of the full file, minus
// its "Resources"/"Tools" link lists: a full-text file inlines what they point at.
const head = llms.split(/^## (?:Resources|Tools)$/m)[0].trimEnd();

const byRoute = new Map(rows.map((r) => [r.route, r]));
const blog = rows.filter((r) => r.route.startsWith("/blog/"));
// The homepage declares its title/description in layout.tsx, not page.tsx, so the
// extractor finds none; llms.txt already opens with the same positioning.
const home = byRoute.get("/");
if (home && !home.title) {
  home.title = "AI GTM engines that book meetings";
  home.desc =
    "AI GTM engines for B2B founders. Signal detection, enrichment, personalized outreach, reply triage. Live in your stack in 14 days. Live demo on your data.";
}
const pages = rows.filter((r) => !r.route.startsWith("/blog/"));

const section = (r) => {
  const out = [`### ${r.title ?? r.route}`, "", `URL: ${BASE}${r.route}`];
  if (r.published) out.push(`Published: ${r.published.slice(0, 10)}`);
  if (r.modified && r.modified !== r.published) out.push(`Updated: ${r.modified.slice(0, 10)}`);
  out.push("");
  if (r.desc) out.push(r.desc, "");
  for (const f of r.faqs) out.push(`**${f.q}**`, f.a, "");
  return out.join("\n").trimEnd();
};

const doc = [
  head,
  "",
  `## About this file`,
  "",
  `Full text of airopeway.com's key pages in one document: each page's URL, summary,`,
  `and every question-and-answer pair published on it. ${rows.reduce((a, r) => a + r.faqs.length, 0)} answered questions`,
  `across ${rows.filter((r) => r.faqs.length).length} pages. Last generated ${today}.`,
  `The short index is at ${BASE}/llms.txt.`,
  "",
  "## Pricing, in full",
  "",
  // pricing.md is authored as a standalone doc, so its "## Tier" headings sit at
  // the same level as this file's own sections. Demote them one level.
  pricing.replace(/^# .*$/m, "").replace(/^## /gm, "### ").trim(),
  "",
  "## Pages",
  "",
  pages.map(section).join("\n\n"),
  "",
  "## Articles",
  "",
  blog.map(section).join("\n\n"),
  "",
].join("\n");

writeFileSync(OUT, doc.replace(/\n{3,}/g, "\n\n"));
console.log(`wrote ${OUT}: ${rows.filter((r) => r.faqs.length).length} pages, ${rows.reduce((a, r) => a + r.faqs.length, 0)} answered questions`);
