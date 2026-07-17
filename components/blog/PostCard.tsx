import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

type PostCardProps = {
  post: BlogPostMeta;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="sketch-card flex h-full flex-col p-6 transition hover:-translate-y-1">
      <p className="text-sm text-muted">
        {formatDate(post.date)} · {post.readingTime}
      </p>
      <h2 className="mt-3 text-2xl font-bold">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{post.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 text-sm font-semibold underline underline-offset-4"
      >
        Read article
      </Link>
    </article>
  );
}
