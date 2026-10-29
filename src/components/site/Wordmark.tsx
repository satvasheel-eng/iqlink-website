import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * The IQLink mark: an "I" and a "Q" whose tail leads forward, with a dot at
 * the centre of the Q for insight. The I takes the current text colour, so
 * the mark works on light and dark backgrounds.
 */
export function IQLinkMark({ className }: { className?: string }) {
  const gradient = useId();

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient
          id={gradient}
          gradientUnits="userSpaceOnUse"
          x1="18"
          y1="11"
          x2="61"
          y2="54"
        >
          <stop offset="0" stopColor="#3A3D8F" />
          <stop offset="0.55" stopColor="#3F5FB0" />
          <stop offset="1" stopColor="#2FA6B3" />
        </linearGradient>
      </defs>
      <rect x="6" y="11" width="8" height="42" rx="4" fill="currentColor" />
      <circle cx="37" cy="30" r="15" fill="none" stroke={`url(#${gradient})`} strokeWidth="8" />
      <path
        d="M47.6 40.6 57 50"
        fill="none"
        stroke={`url(#${gradient})`}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="37" cy="30" r="5.5" fill="#2FA6B3" />
    </svg>
  );
}

export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { text: "text-lg", mark: "size-7" },
    md: { text: "text-xl", mark: "size-8" },
    lg: { text: "text-2xl", mark: "size-10" },
  } as const;

  return (
    <span className={cn("inline-flex items-center gap-2 select-none", className)}>
      <IQLinkMark className={cn("text-ink", sizes[size].mark)} />
      <span
        className={cn(
          "font-display font-semibold tracking-tight leading-none",
          sizes[size].text,
        )}
      >
        <span className="text-ink">IQ</span>
        <span className="text-gradient-brand">Link</span>
      </span>
    </span>
  );
}
