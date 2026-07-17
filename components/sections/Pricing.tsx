import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <Section title="Pricing">
      <div className="grid gap-6 lg:grid-cols-3">
        {site.pricing.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 100}>
            <article
              className={`sketch-card flex h-full flex-col p-6 ${
                plan.highlighted
                  ? "border-accent/50 ring-1 ring-accent/25"
                  : ""
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                {plan.name}
              </p>
              <p className="mt-4 text-3xl font-bold">{plan.price}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href={`mailto:${site.email}?subject=${encodeURIComponent(`${plan.name} plan inquiry`)}`}
                variant={plan.highlighted ? "secondary" : "primary"}
                className="mt-8 w-full"
              >
                Get started
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
