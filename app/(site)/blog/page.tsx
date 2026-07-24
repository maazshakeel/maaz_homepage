import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on development, design systems, and shipping polished web products.",
  openGraph: {
    title: `Blog | ${site.name}`,
    description: "Articles on development, design systems, and shipping polished web products.",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="py-16 md:py-24">
      <div className="section-shell">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Writing</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
          <p className="mt-4 text-base leading-7 text-muted">
            Notes on frontend craft, Next.js, and building products that feel great to use.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
