import Link from "next/link";
import Image from "next/image";
import { getLatestPosts } from "@/lib/blog";
import { imageUrl } from "@/lib/sanity";
import { BlogCover } from "@/components/blog-cover";
import { ArrowUpRight } from "lucide-react";

function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function BlogPreview() {
  const posts = await getLatestPosts(3);
  if (!posts?.length) return null;

  return (
    <section className="px-3 pb-16 md:px-5 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mono-label mb-2 text-accent">From the blog</p>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              AI insights &amp; playbooks
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-medium text-ink-muted transition-colors hover:text-ink md:flex"
          >
            All posts <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(22,21,26,0.35)]"
            >
              {post.imageRef ? (
                <div className="relative h-44 w-full overflow-hidden bg-surface-soft">
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
                  className="h-44 w-full transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
              <div className="flex flex-1 flex-col p-5">
                {post.categories?.length > 0 && (
                  <span className="mono-label mb-2 text-accent">
                    {post.categories[0]}
                  </span>
                )}
                <h3 className="font-display text-base font-semibold leading-snug text-ink group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between text-xs text-ink-faint">
                  <span>{post.authorName ?? "AI Ropeway"}</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink"
          >
            View all posts <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
