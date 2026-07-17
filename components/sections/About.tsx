import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section id="about" title={site.about.title}>
      <Reveal>
        <div className="sketch-card grid gap-8 p-8 md:grid-cols-[0.65fr_1.35fr] md:items-stretch md:gap-10 md:p-10">
          <div className="relative mx-auto min-h-[320px] w-full max-w-[240px] md:mx-0 md:max-w-none md:min-h-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[1.75rem] border border-dashed border-ink/15"
            />
            <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-border bg-ink shadow-[4px_4px_0_var(--shadow)]">
              <Image
                src="/hero/maaz.png"
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="grid gap-8">
            <div>
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-base leading-7 text-muted last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-accent-soft/35 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Focus</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>Performance-first frontend engineering</li>
                <li>Accessible, responsive UI systems</li>
                <li>SEO-ready Next.js architecture</li>
                <li>Clean handoff and maintainable code</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
