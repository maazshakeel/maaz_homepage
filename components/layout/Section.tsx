import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="section-shell">
        {(eyebrow || title) && (
          <header className="mb-10">
            {eyebrow ? (
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
