import Image from "next/image";

type HeroPillarCardProps = {
  label: string;
  description: string;
  src: string;
  colorSrc: string;
  width: number;
  height: number;
};

export function HeroPillarCard({
  label,
  description,
  src,
  colorSrc,
  width,
  height,
}: HeroPillarCardProps) {
  return (
    <article className="group sketch-card flex h-full flex-col gap-4 p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--shadow)] md:p-6">
      <div className="relative inline-flex self-start">
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          aria-hidden="true"
          className="h-14 w-auto object-contain transition duration-300 group-hover:opacity-0 md:h-16"
          draggable={false}
        />
        <Image
          src={colorSrc}
          alt=""
          width={width}
          height={height}
          aria-hidden="true"
          className="absolute inset-0 h-14 w-auto object-contain opacity-0 transition duration-300 group-hover:opacity-100 md:h-16"
          draggable={false}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
          {label}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}
