import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { imageUrl } from "@/lib/sanity";
import { BlogCover } from "@/components/blog-cover";

const SITE_URL = "https://www.airopeway.com";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "AI insights, deployment playbooks, and GTM strategies from the AI Ropeway team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "AI Ropeway",
    title: "Blog | AI Ropeway",
    description:
      "AI insights, deployment playbooks, and GTM strategies from the AI Ropeway team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | AI Ropeway",
    description:
      "AI insights, deployment playbooks, and GTM strategies from the AI Ropeway team.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-5 py-32 md:py-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mb-14">
        <p className="mono-label mb-4 text-accent">AI Ropeway Blog</p>
        <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.06]">
          Insights &amp; playbooks
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink-muted">
          Real-world AI deployment stories, GTM strategies, and operational
          guides for teams ready to run at machine speed.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-ink-muted">No posts yet — check back soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(22,21,26,0.35)]"
            >
              {post.imageRef ? (
                <div className="relative h-48 w-full overflow-hidden bg-surface-soft">
                  <Image
                    src={imageUrl(post.imageRef)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <BlogCover
                  slug={post.slug}
                  title={post.title}
                  className="h-48 w-full transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                {post.categories?.length > 0 && (
                  <span className="mono-label mb-2 text-accent">
                    {post.categories[0]}
                  </span>
                )}
                <h2 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-ink-faint">
                  <span>{post.authorName ?? "AI Ropeway"}</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-20 rounded-3xl border border-line bg-surface-soft px-8 py-10 text-center">
        <p className="font-display text-xl font-bold">
          Want AI deployed in your business?
        </p>
        <p className="mt-2 text-ink-muted">
          Book a free AI audit and get a custom deployment plan in 48 hours.
        </p>
        <Link
          href="/#audit"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas hover:opacity-80 transition-opacity"
        >
          Claim free AI audit <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
