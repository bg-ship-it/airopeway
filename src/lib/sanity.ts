import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "q7oqmxr6",
  dataset: "production",
  apiVersion: "2024-06-01",
  useCdn: true,
});

export function imageUrl(ref: string): string {
  const [, id, dimensions, format] = ref.split("-");
  return `https://cdn.sanity.io/images/q7oqmxr6/production/${id}-${dimensions}.${format}`;
}
