import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section id="contact" title={site.contact.title}>
      <Reveal>
        <div className="yellow-card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-foreground/85">{site.contact.description}</p>
          </div>
          <Button href={`mailto:${site.email}`} variant="primary">
            {site.contact.cta}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
