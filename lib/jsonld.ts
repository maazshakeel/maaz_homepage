import { site } from "@/data/site";
import type { BlogPostMeta } from "@/lib/blog";
import type { Project } from "@/lib/projects";

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : site.url)
  );
}

function absoluteUrl(path: string, baseUrl: string) {
  if (path.startsWith("http")) {
    return path;
  }
  return new URL(path, baseUrl).toString();
}

export function buildPerson(baseUrl = getSiteUrl()) {
  return {
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: site.name,
    jobTitle: "Software Engineer",
    email: site.email,
    url: baseUrl,
    image: absoluteUrl("/hero/maaz.webp", baseUrl),
    sameAs: site.socials.map((social) => social.href),
  };
}

export function buildWebSite(baseUrl = getSiteUrl()) {
  const person = buildPerson(baseUrl);
  return {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: site.name,
    url: baseUrl,
    description: site.description,
    publisher: { "@id": person["@id"] },
  };
}

export function buildSiteGraph(baseUrl = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@graph": [buildPerson(baseUrl), buildWebSite(baseUrl)],
  };
}

export function buildArticle(
  post: BlogPostMeta,
  baseUrl = getSiteUrl(),
) {
  const person = buildPerson(baseUrl);
  const url = absoluteUrl(`/blog/${post.slug}`, baseUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@id": person["@id"] },
    url,
    mainEntityOfPage: url,
  };
}

export function buildCreativeWork(
  project: Project,
  baseUrl = getSiteUrl(),
) {
  const person = buildPerson(baseUrl);
  const url = absoluteUrl(`/projects/${project.slug}`, baseUrl);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url,
    ...(project.image
      ? { image: absoluteUrl(project.image, baseUrl) }
      : {}),
    keywords: project.tags.join(", "),
    creator: { "@id": person["@id"] },
  };
}
