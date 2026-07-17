import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/blog/MdxContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { buildArticle } from "@/lib/jsonld";
import { formatDate } from "@/lib/utils";
import { site } from "@/data/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <JsonLd data={buildArticle(post)} />
      <div className="section-shell max-w-3xl">
        <Link href="/blog" className="text-sm font-semibold underline underline-offset-4">
          Back to blog
        </Link>

        <header className="mt-8">
          <p className="text-sm text-muted">
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-base leading-7 text-muted">{post.description}</p>
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
        </header>

        <div className="mt-10 border-t border-border pt-10">
          <MdxContent source={post.content} />
        </div>

        <footer className="mt-12 border-t border-border pt-8 text-sm text-muted">
          <p>
            Enjoyed this? Reach out at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-foreground underline">
              {site.email}
            </a>
            .
          </p>
        </footer>
      </div>
    </article>
  );
}
