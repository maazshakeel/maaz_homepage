import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="section-shell">
        <div className="grid gap-6 md:grid-cols-3">
          {site.projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <article className="sketch-card flex h-full flex-col p-6 transition hover:-translate-y-1">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-accent-soft via-surface to-border">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  ) : null}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-semibold underline underline-offset-4 transition hover:text-accent"
                  >
                    Details
                  </Link>
                  {project.href?.startsWith("http") ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-muted underline underline-offset-4 transition hover:text-ink"
                    >
                      View project
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-muted/70">View project — coming soon</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
