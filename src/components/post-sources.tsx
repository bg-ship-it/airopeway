import { ExternalLink } from "lucide-react";

export type Source = {
  /** Publication or org, e.g. "Gartner" */
  publisher: string;
  /** Title of the cited work */
  title: string;
  /** Canonical URL of the source */
  url: string;
  /** What claim in the post this source backs */
  note?: string;
};

/**
 * Renders a "Sources" section at the foot of a blog post. Outbound links to
 * authoritative sources are an E-E-A-T / GEO authority signal — AI answer
 * engines weight citation density when deciding what to cite as primary.
 * Pair with `citation` JSON-LD on the post's BlogPosting node.
 */
export function PostSources({ items }: { items: Source[] }) {
  if (!items.length) return null;
  return (
    <section
      aria-labelledby="sources-heading"
      className="mt-16 rounded-3xl border border-line bg-surface-soft p-6 md:p-8"
    >
      <h2
        id="sources-heading"
        className="font-display mb-5 text-xl font-bold text-ink"
      >
        Sources &amp; further reading
      </h2>
      <ol className="space-y-4">
        {items.map((s, i) => (
          <li key={s.url} className="flex gap-3 text-[15px] leading-relaxed">
            <span className="font-mono text-xs text-ink-faint pt-1">
              [{i + 1}]
            </span>
            <div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
              >
                {s.publisher} — {s.title}
                <ExternalLink className="size-3.5" />
              </a>
              {s.note && (
                <p className="mt-1 text-sm text-ink-muted">{s.note}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Maps Source[] to schema.org citation CreativeWork nodes for JSON-LD. */
export function sourcesToCitations(items: Source[]) {
  return items.map((s) => ({
    "@type": "CreativeWork",
    name: s.title,
    url: s.url,
    publisher: { "@type": "Organization", name: s.publisher },
  }));
}
