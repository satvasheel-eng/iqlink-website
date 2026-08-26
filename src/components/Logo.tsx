type MarkProps = {
  className?: string
  size?: number
}

/**
 * IQLink mark: five nodes linked into a ring (the "Q" loop / connected
 * intelligence), with one connection breaking outward into an accent
 * node — intelligence, connected, resolving into a single action.
 */
export function LogoMark({ className, size = 40 }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="IQLink"
    >
      <defs>
        <linearGradient id="iql-ring" x1="10" y1="10" x2="50" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C87FF" />
          <stop offset="100%" stopColor="#A26BFF" />
        </linearGradient>
        <linearGradient id="iql-tail" x1="36" y1="38" x2="55" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A26BFF" />
          <stop offset="100%" stopColor="#33E0C8" />
        </linearGradient>
      </defs>

      <path
        d="M30 13 L44.3 23.4 L38.8 40.1 L21.2 40.1 L15.7 23.4 Z"
        fill="none"
        stroke="url(#iql-ring)"
        strokeWidth="3.1"
        strokeLinejoin="round"
      />
      <line x1="38.8" y1="40.1" x2="54" y2="54" stroke="url(#iql-tail)" strokeWidth="3.1" strokeLinecap="round" />

      <circle cx="30" cy="13" r="3.4" fill="#7C87FF" />
      <circle cx="44.3" cy="23.4" r="3.4" fill="#8A8DFF" />
      <circle cx="38.8" cy="40.1" r="3.4" fill="#9A7BFF" />
      <circle cx="21.2" cy="40.1" r="3.4" fill="#A26BFF" />
      <circle cx="15.7" cy="23.4" r="3.4" fill="#8A79FF" />
      <circle cx="54" cy="54" r="4.4" fill="#33E0C8" />
    </svg>
  )
}

export function Logo({ className, showTag = false }: { className?: string; showTag?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark size={34} />
      <div className="flex flex-col leading-none">
        <span className="font-display text-[19px] font-semibold tracking-tight text-foreground">
          IQLink
        </span>
        {showTag && (
          <span className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Technologies
          </span>
        )}
      </div>
    </div>
  )
}
