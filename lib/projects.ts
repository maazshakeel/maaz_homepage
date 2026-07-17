import { site } from "@/data/site";

export type Project = (typeof site.projects)[number];

export function getAllProjects(): Project[] {
  return [...site.projects];
}

export function getAllProjectSlugs() {
  return site.projects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): Project | null {
  return site.projects.find((project) => project.slug === slug) ?? null;
}
