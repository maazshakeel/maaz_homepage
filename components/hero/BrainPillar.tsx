import Image from "next/image";
import { pillarGapClass, pillarIconClass, pillarLabelClass } from "@/components/hero/pillarStyles";

export function BrainPillar() {
  return (
    <div
      className="group relative w-[min(100%,260px)] sm:w-[300px] md:w-[420px]"
      style={{ aspectRatio: "587 / 289" }}
      role="img"
      aria-label="Innovate"
    >
      <Image
        src="/hero/brain.svg"
        alt=""
        fill
        sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 420px"
        aria-hidden="true"
        className="object-contain"
        draggable={false}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex max-w-[62%] translate-x-[-5%] translate-y-[7%] items-center sm:max-w-[58%] md:max-w-[54%] ${pillarGapClass}`}
        >
          <span className="relative inline-flex shrink-0">
            <span className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-28 -translate-x-[10%] -translate-y-1/2 rounded-full bg-accent-bright/35 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 md:h-24 md:w-36" />
            <Image
              src="/hero/innovate.svg"
              alt=""
              width={53}
              height={101}
              aria-hidden="true"
              className={`${pillarIconClass} w-auto object-contain transition duration-300 group-hover:opacity-0`}
              draggable={false}
            />
            <Image
              src="/hero/color_innovate.svg"
              alt=""
              width={53}
              height={101}
              aria-hidden="true"
              className={`${pillarIconClass} absolute inset-0 w-auto object-contain opacity-0 transition duration-300 group-hover:opacity-100`}
              draggable={false}
            />
          </span>
          <span className={`${pillarLabelClass} shrink-0 leading-none transition-colors duration-300 group-hover:text-accent`}>
            Innovate
          </span>
        </div>
      </div>
    </div>
  );
}
