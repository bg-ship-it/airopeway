// Self-check for the Portable Text serializer. No test framework in this repo,
// so it runs on node's own assert and type stripping:
//
//   npm run test:pt
//
// Covers the paths that real posts exercise rarely or not at all — image blocks,
// numbered lists, nested marks, escaping — so a change that breaks them fails
// here rather than in a crawler's copy of a post.

import assert from "node:assert/strict";
import { portableTextToMarkdown as md } from "./portable-text-to-markdown.ts";

const span = (text: string, marks: string[] = []) => ({
  _type: "span" as const,
  text,
  marks,
});
const block = (props: Record<string, unknown>) => ({ _type: "block", ...props });

// Headings and paragraphs
assert.equal(md([block({ style: "h2", children: [span("Title")] })]), "## Title");
assert.equal(md([block({ style: "h3", children: [span("Sub")] })]), "### Sub");
assert.equal(md([block({ style: "normal", children: [span("Body.")] })]), "Body.");
assert.equal(md([block({ children: [span("No style.")] })]), "No style.");
assert.equal(
  md([block({ style: "blockquote", children: [span("Quoted.")] })]),
  "> Quoted."
);

// Decorators
assert.equal(md([block({ children: [span("hi", ["strong"])] })]), "**hi**");
assert.equal(md([block({ children: [span("hi", ["em"])] })]), "_hi_");
assert.equal(md([block({ children: [span("hi", ["code"])] })]), "`hi`");
// An unknown decorator must not swallow the text.
assert.equal(md([block({ children: [span("hi", ["highlight"])] })]), "hi");

// Link annotations, and a link that is also bold: the annotation wraps the
// decorated text, not the other way round.
assert.equal(
  md([
    block({
      children: [span("site", ["k1"])],
      markDefs: [{ _key: "k1", _type: "link", href: "https://example.com" }],
    }),
  ]),
  "[site](https://example.com)"
);
assert.equal(
  md([
    block({
      children: [span("site", ["strong", "k1"])],
      markDefs: [{ _key: "k1", _type: "link", href: "https://example.com" }],
    }),
  ]),
  "[**site**](https://example.com)"
);
// A mark key with no matching markDef leaves the text intact.
assert.equal(md([block({ children: [span("orphan", ["nope"])] })]), "orphan");
// A link markDef with no href must not produce [text]().
assert.equal(
  md([block({ children: [span("x", ["k1"])], markDefs: [{ _key: "k1", _type: "link" }] })]),
  "x"
);

// Mixed spans join without inserted spaces.
assert.equal(
  md([block({ children: [span("Plain "), span("bold", ["strong"]), span(" tail.")] })]),
  "Plain **bold** tail."
);

// Bullet lists
assert.equal(
  md([
    block({ listItem: "bullet", children: [span("one")] }),
    block({ listItem: "bullet", children: [span("two")] }),
  ]),
  "- one\n\n- two"
);

// Numbered lists count up, and restart after a non-list block.
assert.equal(
  md([
    block({ listItem: "number", children: [span("first")] }),
    block({ listItem: "number", children: [span("second")] }),
    block({ listItem: "number", children: [span("third")] }),
  ]),
  "1. first\n\n2. second\n\n3. third"
);
assert.equal(
  md([
    block({ listItem: "number", children: [span("a")] }),
    block({ style: "h2", children: [span("Break")] }),
    block({ listItem: "number", children: [span("b")] }),
  ]),
  "1. a\n\n## Break\n\n1. b"
);

// Nesting indents by four spaces per level.
assert.equal(
  md([
    block({ listItem: "bullet", level: 1, children: [span("top")] }),
    block({ listItem: "bullet", level: 2, children: [span("nested")] }),
  ]),
  "- top\n\n    - nested"
);
assert.equal(
  md([block({ listItem: "number", level: 2, children: [span("deep")] })]),
  "    1. deep"
);

// Image blocks: no asset ref exists on them, so alt/caption become a figure note
// rather than a broken ![]().
assert.equal(
  md([{ _type: "image", alt: "A diagram", caption: "How it fits." }]),
  "_Figure: A diagram — How it fits._"
);
assert.equal(md([{ _type: "image", alt: "Just alt" }]), "_Figure: Just alt_");
assert.equal(md([{ _type: "image" }]), "");

// Escaping: Markdown syntax in prose must not become formatting.
assert.equal(
  md([block({ children: [span("Costs 5*3 and a_b plus [brackets]")] })]),
  "Costs 5\\*3 and a\\_b plus \\[brackets\\]"
);
// A line that would otherwise read as a heading or a list.
assert.equal(md([block({ children: [span("# not a heading")] })]), "\\# not a heading");
assert.equal(md([block({ children: [span("- not a bullet")] })]), "\\- not a bullet");
assert.equal(md([block({ children: [span("1. not a list")] })]), "1\\. not a list");

// Junk input must not throw.
assert.equal(md(null), "");
assert.equal(md(undefined), "");
assert.equal(md("not an array"), "");
assert.equal(md([]), "");
assert.equal(md([null, undefined, 42, { _type: "mystery" }]), "");
assert.equal(md([block({ children: [] })]), "");
assert.equal(md([block({ children: [span("   ")] })]), "");
assert.equal(md([block({ children: [{ _type: "notASpan", text: "x" }] })]), "");

console.log("portable-text-to-markdown: all checks passed");
