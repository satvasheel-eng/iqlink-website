import { useId } from "react";

import { cn } from "@/lib/utils";

const inputs = [
  { x: 96, y: 128, r: 11, fill: "#38BDF8" },
  { x: 150, y: 214, r: 8, fill: "#7C5CE0" },
  { x: 84, y: 300, r: 12, fill: "#3F5FB0" },
  { x: 150, y: 386, r: 8, fill: "#2FA6B3" },
  { x: 96, y: 472, r: 11, fill: "#3A3D8F" },
];

const scatter = [
  [222, 96], [268, 520], [610, 120], [680, 470], [560, 540], [210, 300],
  [700, 190], [330, 70], [372, 548], [640, 84],
];

/**
 * Hero illustration: many signals on the left converge into the IQLink "eye"
 * (the Q with its insight dot) and leave as one forward arrow, the idea of
 * connecting intelligence to action.
 */
export function IntelligenceNetwork({ className }: { className?: string }) {
  const id = useId();
  const ring = `${id}-ring`;
  const bg = `${id}-bg`;
  const glow = `${id}-glow`;

  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Signals from many sources converging into one insight and leading to action"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5F7FE" />
          <stop offset="1" stopColor="#EAF6F8" />
        </linearGradient>
        <radialGradient id={glow} cx="0.53" cy="0.5" r="0.45">
          <stop offset="0" stopColor="#5B9BF2" stopOpacity="0.22" />
          <stop offset="1" stopColor="#5B9BF2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={ring} gradientUnits="userSpaceOnUse" x1="300" y1="180" x2="560" y2="440">
          <stop offset="0" stopColor="#3A3D8F" />
          <stop offset="0.55" stopColor="#3F5FB0" />
          <stop offset="1" stopColor="#2FA6B3" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill={`url(#${bg})`} />
      <g stroke="#3A3D8F" strokeOpacity="0.06" strokeWidth="1">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 64 + 16} y1="0" x2={i * 64 + 16} y2="600" />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 64 + 12} x2="800" y2={i * 64 + 12} />
        ))}
      </g>
      <rect width="800" height="600" fill={`url(#${glow})`} />

      <g fill="none" stroke="#3F5FB0" strokeOpacity="0.16" strokeDasharray="3 7">
        <circle cx="424" cy="300" r="150" />
        <circle cx="424" cy="300" r="196" />
      </g>

      <g fill="none" strokeWidth="2" strokeLinecap="round">
        {inputs.map((n) => (
          <path
            key={`${n.x}-${n.y}`}
            d={`M${n.x} ${n.y} C ${n.x + 120} ${n.y}, 250 300, 318 300`}
            stroke={n.fill}
            strokeOpacity="0.55"
          />
        ))}
      </g>

      <g fill="#3F5FB0" fillOpacity="0.28">
        {scatter.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" />
        ))}
      </g>

      {inputs.map((n) => (
        <g key={`node-${n.x}-${n.y}`}>
          <circle cx={n.x} cy={n.y} r={n.r + 7} fill={n.fill} fillOpacity="0.14" />
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.fill} />
        </g>
      ))}

      <circle cx="424" cy="300" r="94" fill="#FFFFFF" fillOpacity="0.75" />
      <circle cx="424" cy="300" r="94" fill="none" stroke={`url(#${ring})`} strokeWidth="30" />
      <circle cx="424" cy="300" r="34" fill="#3F5FB0" />
      <circle cx="424" cy="300" r="34" fill="#2FA6B3" fillOpacity="0.55" />
      <circle cx="411" cy="287" r="9" fill="#FFFFFF" fillOpacity="0.9" />
      <path
        d="M492 368 548 424"
        fill="none"
        stroke={`url(#${ring})`}
        strokeWidth="30"
        strokeLinecap="round"
      />

      <g fill="none" stroke="#2FA6B3" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
        <path d="M540 300H704" />
        <path d="M676 272 706 300 676 328" />
      </g>
    </svg>
  );
}
