type SectionDividerProps = {
  id?: string;
  label: string;
};

export function SectionDivider({ id, label }: SectionDividerProps) {
  return (
    <div id={id} className="section-shell py-10">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border" />
        <h2 className="relative bg-background px-4 text-sm font-medium uppercase tracking-[0.25em] text-muted">
          {label}
        </h2>
      </div>
    </div>
  );
}
