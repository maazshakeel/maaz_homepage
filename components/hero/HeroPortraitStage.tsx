import Image from "next/image";
import { site } from "@/data/site";

export function HeroPortraitStage() {
  return (
    <div className="hero-portrait-stage">
      <div className="hero-portrait-glow" aria-hidden="true" />

      <svg
        className="hero-portrait-ring"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="168"
          stroke="url(#heroRingGrad)"
          strokeWidth="42"
          strokeDasharray="430 95"
          strokeDashoffset="48"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="heroRingGrad" x1="40" y1="40" x2="360" y2="360">
            <stop offset="0%" stopColor="var(--accent-bright)" />
            <stop offset="55%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="color-mix(in srgb, var(--accent) 75%, #8a6a28)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="hero-portrait-photo">
        <Image
          src="/hero/maaz.webp"
          alt={`Portrait of ${site.name}`}
          width={1023}
          height={1537}
          priority
          className="h-full w-full object-cover object-[center_12%]"
        />
      </div>
    </div>
  );
}
