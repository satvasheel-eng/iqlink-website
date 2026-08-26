import { LogoMark } from '@/components/Logo'

export function Philosophy() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-card/40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(51,224,200,0.08),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
        <LogoMark size={30} className="mx-auto opacity-90" />
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Our philosophy
        </p>
        <p className="mt-5 text-balance font-display text-3xl font-medium leading-snug md:text-5xl">
          Connect intelligence to <span className="text-gradient">better decisions.</span>
        </p>
      </div>
    </section>
  )
}
