import { Badge } from '@/components/ui/badge'

const products = [
  {
    name: 'Foundyn',
    status: 'Live',
    tagline: 'Turn your startup idea into an evidence-backed plan.',
    body: 'Idea validation and structured, data-driven planning for early-stage founders — bridging the gap between a concept and a fundable strategy.',
    href: 'https://foundyn.firmyn.in/',
    accent: '#7C87FF',
  },
  {
    name: 'Firmyn',
    status: 'Live',
    tagline: 'Startup operating profile, compliance readiness & data room.',
    body: 'Runs a startup’s compliance, money, and funding automatically — event-driven filings, reconciled finances, and investor-ready data rooms.',
    href: 'https://firmyn.in/',
    accent: '#33E0C8',
  },
  {
    name: 'Capyn',
    status: 'In development',
    tagline: 'Personal finance, made intelligent.',
    body: 'An upcoming IQLink product for individual financial planning, tracking, and growth — extending the same intelligence layer to personal finance.',
    href: undefined,
    accent: '#A26BFF',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Products built on the IQLink layer.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            IQLink is the technology and intelligence company behind a growing portfolio of
            founder, business, and personal-finance products.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((p) => {
            const Card = (p.href ? 'a' : 'div') as React.ElementType
            const linkProps = p.href ? { href: p.href, target: '_blank', rel: 'noreferrer' } : {}
            return (
              <Card
                key={p.name}
                {...linkProps}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-display text-2xl font-semibold"
                    style={{ color: p.accent }}
                  >
                    {p.name}
                  </span>
                  <Badge
                    variant="outline"
                    className={
                      p.status === 'Live'
                        ? 'border-cyan/30 text-cyan'
                        : 'border-muted-foreground/30 text-muted-foreground'
                    }
                  >
                    {p.status}
                  </Badge>
                </div>
                <p className="mt-4 text-sm font-medium text-foreground">{p.tagline}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                {p.href && (
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Visit product
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </Card>
            )
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Plus future IQLink AI products across education, government decision-support, and
          enterprise software.
        </p>
      </div>
    </section>
  )
}
