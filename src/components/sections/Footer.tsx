import { Logo } from '@/components/Logo'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'What We Build', href: '#focus' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Foundyn', href: 'https://foundyn.in/' },
      { label: 'Firmyn', href: 'https://firmyn.in/' },
      { label: 'Capyn', href: '#portfolio' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <Logo showTag />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Connecting intelligence to action — for businesses, founders, institutions,
              governments, and individuals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith('http') ? '_blank' : undefined}
                        rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} IQLink Technologies Private Limited · CIN U62099PN2026PTC260024</span>
          <span>Intelligence for what comes next.</span>
        </div>
      </div>
    </footer>
  )
}
