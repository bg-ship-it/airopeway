# Blog post field contract

Anything that writes a `post` document into Sanity — the daily blog engine, an
agent, a script, a Make scenario — must follow this. Getting it wrong does not
throw an error. The write succeeds, the post looks fine in the dataset, and it
silently fails to appear or renders without SEO metadata.

This happened. On 2026-08-09, nine AI Placers posts were found written with AI
Ropeway's field names. They were live at their URLs but missing from `/blog`,
and had no meta title or description. They had to be migrated by hand.

## The two projects use different field names

They are separate Sanity projects with separate schemas. Do not copy a payload
from one to the other.

| Meaning | AI Placers (`zbbmmste`) | AI Ropeway (`q7oqmxr6`) |
|---|---|---|
| Summary text | `description` | `excerpt` |
| SEO title | `metaTitle` | `seoTitle` |
| SEO description | `metaDescription` | `seoDescription` |
| Author | `authors` (array of refs) | `author` (single ref) |
| Cover image | `mainImage` + `mainImage.alt` | `mainImage` + `mainImage.alt` |
| Publish date | `publishedAt` | `publishedAt` |
| Visible on index | `published: true` | *(no such field)* |

`featured` and `readTime` exist on AI Ropeway only. Do not send them to AI Placers.

## AI Ropeway — required on every post

```
title            string
slug.current     string, lowercase-hyphenated
excerpt          string        <- NOT "description"
seoTitle         string
seoDescription   string
mainImage.asset  reference to an uploaded image asset
mainImage.alt    string describing the image
body             portable text blocks
publishedAt      ISO 8601 timestamp   <- posts without this sort last and render undated
```

There is no `published` flag here. `getAllPosts()` in `src/lib/blog.ts` orders by
`publishedAt desc` and returns everything, so a missing date means the post
renders with a blank date and sinks to the bottom of the index. Six posts were
left in that state until 2026-08-09.

## AI Placers — required on every post

```
title            string
slug.current     string, lowercase-hyphenated
description      string        <- NOT "excerpt"
metaTitle        string, max 60 chars
metaDescription  string, max 160 chars
mainImage.asset  reference to an uploaded image asset
mainImage.alt    string describing the image
body             portable text blocks
publishedAt      ISO 8601 timestamp
published        true          <- omitting this hides the post from /blog
```

## Images

An image field needs a real asset reference. Setting `mainImage.alt` alone
creates a half-built object with no picture — five AI Ropeway posts were left in
that state.

Upload the bytes first, then reference the returned asset id:

```
POST https://<projectId>.api.sanity.io/v2021-06-07/assets/images/production?filename=<slug>.png
Authorization: Bearer <write token>
Content-Type: image/png
<binary body>
```

The response contains `document._id`, e.g.
`image-eb42f364009c0860234e97272d6f4309e938829c-1344x768-png`. Use that as
`mainImage.asset._ref`. External URLs do not work — `imageUrl()` in
`src/lib/sanity.ts` parses the ref and builds a `cdn.sanity.io` URL from its parts.

## Check before you finish

```groq
*[_type == "post" && (
  !defined(publishedAt) ||
  !defined(mainImage.asset) ||
  !defined(mainImage.alt) ||
  defined(description) || defined(metaTitle) || defined(metaDescription)
)]{ "slug": slug.current }
```

This must return empty. Any result means a post was written with the wrong shape
and will not display correctly.

## Rebuilds

This site is statically generated. The blog index, post pages and sitemap
revalidate every 600 seconds (`export const revalidate = 600`). A new post takes
up to ten minutes to appear. Before that ISR was absent entirely and the site sat
frozen at its last deploy for three weeks, hiding seven posts.
