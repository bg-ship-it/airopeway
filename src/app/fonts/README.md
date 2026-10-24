# Self-hosted fonts

These are the latin-subset **variable** woff2 files from Google Fonts, committed
so the build never depends on a network fetch.

| File | Family | Axis range | Licence |
|---|---|---|---|
| `SpaceGrotesk-latin.woff2` | Space Grotesk | 300–700 | OFL-1.1 |
| `Inter-latin.woff2` | Inter | 100–900 | OFL-1.1 |
| `JetBrainsMono-latin.woff2` | JetBrains Mono | 100–800 | OFL-1.1 |

## Why

`next/font/google` downloads the font files during `next build`. When that
fetch fails the build fails outright:

```
Execution of <NextFontGoogleFontFileReplacer as ImportMappingReplacement>::result failed
Module not found: jetbrains_mono_<hash>.module.css
  Import trace: ./src/app/layout.tsx
```

That is what killed the production deploy of `830b3b0` on 23 Oct 2026 while the
preview build of identical code succeeded. Self-hosting removes the failure
mode entirely.

## Refreshing a file

Request the CSS with a modern browser user-agent so Google returns woff2, take
the `src: url(...)` from the block commented `/* latin */`, and download it:

```bash
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
curl -s -A "$UA" "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
```

Keep the axis range in `src/app/layout.tsx` matching the file you download. A
range wider than the font supports makes the browser synthesise weights.
