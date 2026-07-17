import { HeroPillarCard } from "@/components/hero/HeroPillarCard";
import { HeroPortraitStage } from "@/components/hero/HeroPortraitStage";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

const pillars = site.hero.pillars.map((pillar) => {
  if (pillar.label === "Learn") {
    return {
      ...pillar,
      src: "/hero/learn.svg",
      colorSrc: "/hero/color_learn.png",
      width: 96,
      height: 94,
    };
  }
  if (pillar.label === "Innovate") {
    return {
      ...pillar,
      src: "/hero/innovate.svg",
      colorSrc: "/hero/color_innovate.svg",
      width: 53,
      height: 101,
    };
  }
  return {
    ...pillar,
    src: "/hero/build.svg",
    colorSrc: "/hero/color_build.png",
    width: 85,
    height: 79,
  };
});

export function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-glow hero-glow-left" />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-12">
          <div className="max-w-xl">
            <p className="text-base text-muted md:text-lg">
              Hello! I&apos;m{" "}
              <span className="font-semibold text-accent">{site.name}</span>
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl xl:text-[3.5rem] xl:leading-[1.08]">
              Developer crafting clean digital products
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-muted md:text-[1.05rem] md:leading-8">
              {site.hero.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={`mailto:${site.email}`} variant="secondary">
                Discuss a project →
              </Button>
              <Button href="#portfolio" variant="primary">
                View my work
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroPortraitStage />
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">How I work</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {site.hero.pillars.map((pillar) => pillar.label).join(". ")}.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-right">
              Three principles behind every project — hover each card to see it come alive.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <HeroPillarCard key={pillar.label} {...pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
