const pillars = [
  {
    title: 'Artificial Intelligence',
    body: 'AI and machine intelligence that turns complex information into clear, usable insight.',
  },
  {
    title: 'Data & Automation',
    body: 'Systems that reduce manual work and keep decisions grounded in real, current data.',
  },
  {
    title: 'Decision Support',
    body: 'Tools built for the moment a founder, institution, or government has to decide.',
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              About IQLink
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Broader than a software house.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              IQLink Technologies Private Limited is an AI-driven technology and intelligence
              company developing digital platforms, decision-support systems, software products,
              and technology solutions for businesses, founders, institutions, governments, and
              individuals.
            </p>
            <p>
              We focus on using artificial intelligence, data, automation, and intelligent systems
              to simplify complex decisions, improve productivity, and enable informed growth —
              across startup and founder intelligence, business compliance and financial
              management, personal finance, education technology, government decision-support,
              enterprise software, and emerging digital technologies.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card p-8">
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
