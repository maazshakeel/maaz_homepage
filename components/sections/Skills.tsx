import { site } from "@/data/site";
import { SparkIcon } from "@/components/icons/HeroIcons";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="services" className="pb-16 md:pb-24">
      <div className="section-shell grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="sketch-card p-8">
            <h3 className="text-2xl font-bold">Services</h3>
            <ul className="mt-6 space-y-3 text-base text-muted">
              {site.services.map((service) => (
                <li key={service} className="border-b border-border/70 pb-3 last:border-b-0">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="yellow-card relative border-l-4 border-l-accent p-8">
            <div className="absolute right-6 top-6 rounded-full border border-foreground/20 p-2">
              <SparkIcon />
            </div>
            <h3 className="text-2xl font-bold">Fields</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {site.services.map((service) => (
                <li
                  key={service}
                  className="rounded-xl border border-foreground/12 bg-accent-soft/55 px-4 py-3 text-sm font-medium"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
