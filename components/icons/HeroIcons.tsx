import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  active?: boolean;
};

export function BookIcon({ className = "h-14 w-14" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20c12-5 24-5 30 0v40c-6-4-18-4-30 0V20Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M40 20c6-4 18-4 30 0v40c-12-4-24-4-30 0V20Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M40 20v40" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M22 32h10M48 32h10M24 44h8M50 44h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M34 14v8M46 14v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrainIcon({ className = "h-24 w-24", active = false }: IconProps) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M36 22c-10 2-18 12-18 24 0 7 2 13 7 17-5 4-8 10-8 16 0 12 10 21 22 21 4 0 7-1 10-3 4 5 10 7 17 7 14 0 26-12 26-26 0-6-2-11-6-15 4-5 6-11 6-17 0-14-12-26-26-26-6 0-12 2-17 6-4-5-10-7-17-7-4 0-8 1-11 3"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M60 30v38M46 44h28M48 56h24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g className={cn("transition-opacity duration-300", active ? "opacity-100" : "opacity-90")}>
        <path
          d="M44 38c0-4 3-7 7-7 2 0 4 1 5 2 1-3 4-5 7-5 5 0 8 4 8 8 0 1 0 2-1 3 2 1 3 3 3 5 0 4-3 7-7 7h-1c-1 3-4 5-8 5-5 0-8-4-8-8 0-1 0-2 1-3-3-1-5-4-5-7Z"
          fill={active ? "#ffe600" : "#f7f7f7"}
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          x="70"
          y="50"
          fill={active ? "#111" : "currentColor"}
          fontSize="11"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Innovate
        </text>
      </g>
    </svg>
  );
}

export function ToolsIcon({ className = "h-14 w-14" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 56 40 32"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="m12 60 4-4M44 28l4-4"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M50 16c5 0 9 4 9 9 0 2-.9 4-2.4 5.2l-9.6 9.6-12-12 9.6-9.6C47 16.9 48.5 16 50 16Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M22 42 10 54l8 8 12-12"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PortraitIcon({ className = "h-52 w-52 md:h-64 md:w-64" }: IconProps) {
  return (
    <svg viewBox="0 0 220 260" fill="none" className={className} aria-hidden="true">
      <defs>
        <pattern id="portrait-grid" width="12" height="12" patternUnits="userSpaceOnUse">
          <path
            d="M12 0H0V12"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.18"
          />
        </pattern>
      </defs>
      <rect
        x="48"
        y="36"
        width="124"
        height="148"
        rx="4"
        fill="url(#portrait-grid)"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
      />
      <path
        d="M110 18c28 0 50 24 50 54 0 18-8 34-20 44 14 10 24 28 24 48v12H56v-12c0-20 10-38 24-48-12-10-20-26-20-44 0-30 22-54 50-54Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M78 62c6-10 18-16 32-16s26 6 32 16"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M72 74c8-18 24-28 38-28M148 74c-8-18-24-28-38-28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="88" cy="108" rx="5" ry="7" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="132" cy="108" rx="5" ry="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M84 98c6-8 14-12 26-12s20 4 26 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M88 126h44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M96 148c5 8 12 12 20 12s15-4 20-12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M58 78c-4 8-6 18-6 28M162 78c4 8 6 18 6 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M56 176c10 18 30 30 54 30s44-12 54-30"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
