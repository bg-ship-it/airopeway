// Serializes a Sanity Portable Text body to Markdown, for the /blog/<slug>.md
// twins that AI crawlers read instead of parsing the rendered page.
//
// Deliberately narrow: it handles what the posts in this dataset actually use,
// which a survey of all 30 posts put at block styles h2/h3/normal, bullet and
// number lists, the `strong` decorator, `link` annotations, and image blocks.
// `em`, `code` and `blockquote` are handled too, cheaply, so a future post that
// introduces one does not silently lose its formatting. Anything else falls
// through as plain text rather than throwing — a .md twin missing a wrapper is a
// far better failure than a 500 on a crawler's request.

type Span = {
  _type: "span";
  _key?: string;
  text?: string;
  marks?: string[];
};

type MarkDef = { _key: string; _type: string; href?: string };

type Block = {
  _type: string;
  _key?: string;
  style?: string;
  listItem?: string;
  level?: number;
  children?: Span[];
  markDefs?: MarkDef[];
  // image blocks in this dataset carry alt/caption and no asset
  alt?: string;
  caption?: string;
};

const DECORATOR_WRAPPERS: Record<string, string> = {
  strong: "**",
  em: "_",
  code: "`",
};

/** Escapes the characters that would otherwise read as Markdown syntax. */
function escapeText(text: string): string {
  // Only the leaders that start a construct at the beginning of a line, plus
  // the inline pair characters. Escaping more than this makes prose unreadable.
  return text
    .replace(/([\\`*_[\]])/g, "\\$1")
    .replace(/^(\s*)([#>+-])/gm, "$1\\$2")
    .replace(/^(\s*)(\d+)\./gm, "$1$2\\.");
}

function renderSpan(span: Span, markDefs: MarkDef[]): string {
  if (span._type !== "span" || typeof span.text !== "string") return "";
  let out = escapeText(span.text);
  if (out === "") return "";

  const marks = span.marks ?? [];

  // Decorators wrap the text itself; an annotation wraps the decorated result,
  // so [**bold link**](url) comes out rather than **[bold link](url)**.
  for (const mark of marks) {
    const wrapper = DECORATOR_WRAPPERS[mark];
    if (wrapper) out = `${wrapper}${out}${wrapper}`;
  }

  for (const mark of marks) {
    if (DECORATOR_WRAPPERS[mark]) continue;
    const def = markDefs.find((d) => d._key === mark);
    if (def?._type === "link" && def.href) out = `[${out}](${def.href})`;
  }

  return out;
}

function renderChildren(block: Block): string {
  return (block.children ?? [])
    .map((c) => renderSpan(c, block.markDefs ?? []))
    .join("")
    .trim();
}

function renderImage(block: Block): string {
  // No asset ref exists on these blocks, so an ![alt](src) would point nowhere.
  // The alt and caption are the only real content, and they carry the meaning.
  const parts = [block.alt, block.caption].filter(
    (p): p is string => typeof p === "string" && p.trim() !== ""
  );
  if (parts.length === 0) return "";
  return `_Figure: ${parts.join(" — ")}_`;
}

export function portableTextToMarkdown(blocks: unknown): string {
  if (!Array.isArray(blocks)) return "";

  const out: string[] = [];
  // Numbered lists restart whenever a run of `number` items ends, so that two
  // separate ordered lists in one post both start at 1.
  let ordinal = 0;

  for (const raw of blocks) {
    const block = raw as Block;
    if (!block || typeof block !== "object") continue;

    if (block._type === "image") {
      ordinal = 0;
      const img = renderImage(block);
      if (img) out.push(img);
      continue;
    }

    if (block._type !== "block") {
      ordinal = 0;
      continue;
    }

    const text = renderChildren(block);
    if (text === "") {
      ordinal = 0;
      continue;
    }

    if (block.listItem === "number") {
      ordinal += 1;
      // level is 1-based in Portable Text; deeper levels indent by four spaces.
      const indent = "    ".repeat(Math.max(0, (block.level ?? 1) - 1));
      out.push(`${indent}${ordinal}. ${text}`);
      continue;
    }

    if (block.listItem) {
      ordinal = 0;
      const indent = "    ".repeat(Math.max(0, (block.level ?? 1) - 1));
      out.push(`${indent}- ${text}`);
      continue;
    }

    ordinal = 0;
    switch (block.style) {
      case "h1":
        out.push(`# ${text}`);
        break;
      case "h2":
        out.push(`## ${text}`);
        break;
      case "h3":
        out.push(`### ${text}`);
        break;
      case "h4":
        out.push(`#### ${text}`);
        break;
      case "blockquote":
        out.push(`> ${text}`);
        break;
      default:
        out.push(text);
    }
  }

  // A blank line between every block; consecutive list items read fine with one
  // and Markdown renderers treat them as the same list either way.
  return out.join("\n\n");
}
