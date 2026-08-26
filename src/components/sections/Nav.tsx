import { useState } from 'react'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'

const links = [
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'What We Build' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="IQLink home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 5H16M2 13H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="w-full rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>Get in touch</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
