import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { getPost, getAllSlugs } from "@/lib/blog";
import { imageUrl } from "@/lib/sanity";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt ?? "";
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.airopeway.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
    },
  };
}

const ptComponents = {
  types: {
    image: ({
      value,
    }: {
      value?: { asset?: { _ref?: string }; alt?: string };
    }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative my-8 h-64 w-full overflow-hidden rounded-xl md:h-80">
          <Image
            src={imageUrl(value.asset._ref)}
            alt={value.alt ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 672px"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display mt-10 text-2xl font-bold text-ink">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display mt-8 text-xl font-semibold text-ink">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mt-5 text-[17px] leading-[1.75] text-ink-soft">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-accent pl-5 text-ink-muted italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mt-5 space-y-2 pl-5 text-[17px] leading-[1.75] text-ink-soft list-disc">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mt-5 space-y-2 pl-5 text-[17px] leading-[1.75] text-ink-soft list-decimal">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href?: string };
      children?: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-2 hover:opacity-80"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt ?? "",
    author: {
      "@type": "Person",
      name: post.authorName ?? "Bharat Gulati",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Ropeway",
      url: "https://www.airopeway.com",
    },
    datePublished: post.publishedAt ?? undefined,
    url: `https://www.airopeway.com/blog/${slug}`,
  };

  return (
    <article className="mx-auto max-w-2xl px-5 py-32 md:py-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
      >
        <ArrowLeft className="size-3.5" /> All posts
      </Link>

      {post.categories?.length > 0 && (
        <p className="mono-label mb-4 text-accent">{post.categories[0]}</p>
      )}

      <h1 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] text-ink">
        {post.title}
      </h1>

      <div className="mt-4 flex items-center gap-3 text-sm text-ink-faint">
        <span>{post.authorName ?? "AI Ropeway"}</span>
        {post.publishedAt && (
          <>
            <span>·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </>
        )}
      </div>

      {post.imageRef && (
        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl md:h-80">
          <Image
            src={imageUrl(post.imageRef)}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, 672px"
          />
        </div>
      )}

      {post.excerpt && !post.body?.length && (
        <p className="mt-8 text-lg leading-relaxed text-ink-muted">
          {post.excerpt}
        </p>
      )}

      {post.body?.length > 0 && (
        <div className="mt-8">
          <PortableText value={post.body} components={ptComponents} />
        </div>
      )}

      <div className="mt-16 rounded-2xl border border-line bg-surface-soft px-6 py-8 text-center">
        <p className="font-display text-lg font-bold">
          Ready to put AI to work?
        </p>
        <p className="mt-1.5 text-sm text-ink-muted">
          Book a free AI audit — get a custom roadmap in 48 hours.
        </p>
        <Link
          href="/#audit"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas hover:opacity-80 transition-opacity"
        >
          Claim free audit
        </Link>
      </div>
    </article>
  );
}
