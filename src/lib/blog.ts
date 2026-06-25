import { sanityClient } from "./sanity";

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string | null;
  imageRef: string | null;
  authorName: string | null;
  categories: string[];
};

export type BlogPostFull = BlogPost & {
  seoTitle: string | null;
  seoDescription: string | null;
  updatedAt: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
};

const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "imageRef": mainImage.asset->_id,
  "authorName": author->name,
  "categories": categories[]->title
`;

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...$limit] { ${POST_FIELDS} }`,
    { limit }
  );
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`
  );
}

export async function getPost(slug: string): Promise<BlogPostFull | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      ${POST_FIELDS},
      seoTitle,
      seoDescription,
      "updatedAt": _updatedAt,
      body
    }`,
    { slug }
  );
}

export async function getAllSlugs(): Promise<string[]> {
  const results = await sanityClient.fetch<{ slug: string }[]>(
    `*[_type == "post"]{ "slug": slug.current }`
  );
  return results.map((r) => r.slug);
}
