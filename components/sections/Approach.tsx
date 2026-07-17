import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";

export function Approach() {
  return (
    <Section id="approach" title={site.approach.title}>
      <Reveal>
        <div className="sketch-card overflow-hidden">
          <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
            {site.approach.steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-accent-soft/35 p-6"
              >
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-ink px-6 py-5 text-center text-lg font-semibold text-surface">
            {site.approach.cta}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
