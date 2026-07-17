import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-ink text-surface hover:bg-ink/90 border border-ink",
  secondary:
    "bg-accent text-ink hover:bg-accent-bright border border-ink/15",
  ghost: "bg-transparent text-foreground hover:bg-ink/5 border border-transparent",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
