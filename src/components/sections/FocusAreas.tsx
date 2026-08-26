const areas = [
  {
    title: 'Startup & Founder Intelligence',
    body: 'Evidence-backed planning, idea validation, and readiness tools for founders building from zero.',
  },
  {
    title: 'Business Compliance & Finance',
    body: 'Automated compliance tracking, reconciliation, and financial visibility for growing companies.',
  },
  {
    title: 'Personal Finance',
    body: 'Intelligent tools that help individuals plan, track, and grow their financial position.',
  },
  {
    title: 'Education Technology',
    body: 'AI-enabled learning, assessment, and skill-building products for students and institutions.',
  },
  {
    title: 'Government Decision-Support',
    body: 'Data and intelligence systems that help public institutions make faster, better-informed decisions.',
  },
  {
    title: 'Enterprise Software',
    body: 'Custom platforms and SaaS products that streamline operations for businesses of any size.',
  },
  {
    title: 'Emerging Technology & R&D',
    body: 'AI research, computing infrastructure, and technology consulting for what comes next.',
  },
]

function Glyph({ index }: { index: number }) {
  const seed = index * 37
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="7" cy="7" r="2.4" fill="#7C87FF" />
      <circle cx="21" cy={7 + (seed % 5)} r="2.4" fill="#33E0C8" />
      <circle cx="14" cy="21" r="2.4" fill="#A26BFF" />
      <line x1="7" y1="7" x2="21" y2={7 + (seed % 5)} stroke="#4F5DFF" strokeOpacity="0.5" strokeWidth="1.3" />
      <line x1="21" y1={7 + (seed % 5)} x2="14" y2="21" stroke="#4F5DFF" strokeOpacity="0.5" strokeWidth="1.3" />
      <line x1="14" y1="21" x2="7" y2="7" stroke="#4F5DFF" strokeOpacity="0.5" strokeWidth="1.3" />
    </svg>
  )
}

export function FocusAreas() {
  return (
    <section id="focus" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            What We Build
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            One intelligence layer, many domains.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            IQLink develops and operates products across the following areas — and takes on
            AI research, SaaS development, and technology consulting alongside them.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <div
              key={a.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-indigo-soft/40"
            >
              <Glyph index={i} />
              <h3 className="mt-5 text-base font-semibold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
