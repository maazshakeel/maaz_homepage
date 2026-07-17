import Image from "next/image";
import { pillarGapClass, pillarIconClass, pillarLabelClass } from "@/components/hero/pillarStyles";

type HoverPillarProps = {
  label: string;
  src: string;
  colorSrc: string;
  alt: string;
  width: number;
  height: number;
  align: "start" | "end";
};

export function HoverPillar({ label, src, colorSrc, alt, width, height, align }: HoverPillarProps) {
  return (
    <div
      className={`group flex items-center ${
        align === "end" ? "justify-end" : "justify-start"
      } ${pillarGapClass}`}
    >
      <span className="relative inline-flex">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className={`${pillarIconClass} transition duration-300 group-hover:opacity-0`}
          draggable={false}
        />
        <Image
          src={colorSrc}
          alt=""
          width={width}
          height={height}
          priority
          aria-hidden="true"
          className={`${pillarIconClass} absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100`}
          draggable={false}
        />
      </span>
      <span className={`${pillarLabelClass} transition-colors duration-300 group-hover:text-accent`}>
        {label}
      </span>
    </div>
  );
}
