import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  cover?: string | null;
};

export type BlogPost = BlogPostMeta & {
  // Markdoc AST node from Keystatic — rendered by MarkdocContent
  contentNode: unknown;
};

function collectText(node: unknown): string {
  if (!node || typeof node !== "object") {
    return "";
  }

  const record = node as {
    type?: string;
    attributes?: { content?: string };
    children?: unknown[];
  };

  if (record.type === "text" && typeof record.attributes?.content === "string") {
    return record.attributes.content;
  }

  if (!Array.isArray(record.children)) {
    return "";
  }

  return record.children.map(collectText).join(" ");
}

function getReadingTimeFromNode(node: unknown) {
  const words = collectText(node).trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function toMeta(
  slug: string,
  entry: {
    title: string;
    description: string;
    date: string | null;
    tags: readonly string[];
    cover?: string | null;
  },
  contentNode: unknown,
): BlogPostMeta {
  return {
    slug,
    title: entry.title,
    description: entry.description,
    date: entry.date ?? new Date().toISOString().slice(0, 10),
    readingTime: getReadingTimeFromNode(contentNode),
    tags: [...entry.tags],
    cover: entry.cover ?? null,
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const posts = await reader.collections.posts.all();

  const withMeta = await Promise.all(
    posts.map(async (post) => {
      const { node } = await post.entry.content();
      return toMeta(post.slug, post.entry, node);
    }),
  );

  return withMeta.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    return null;
  }

  const { node } = await post.content();
  const meta = toMeta(slug, post, node);

  return {
    ...meta,
    contentNode: node,
  };
}

export async function getAllPostSlugs() {
  return reader.collections.posts.list();
}
