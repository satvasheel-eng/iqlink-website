import { Button } from '@/components/ui/button'
import { NodeField } from '@/components/NodeField'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(79,93,255,0.22),transparent)]" />
      <NodeField className="pointer-events-none absolute inset-x-0 top-0 h-[560px] w-full opacity-90" />

      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-28 text-center md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          AI-Powered Intelligence &amp; Technology
        </span>

        <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.05] md:text-7xl">
          Connecting <span className="text-gradient">Intelligence</span> to Action.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          IQLink Technologies is an AI-powered technology and intelligence company building
          smarter platforms, software, and decision-support systems for businesses, founders,
          institutions, governments, and individuals.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full px-7">
            <a href="#focus">Explore what we build</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <a href="#portfolio">See our products</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
