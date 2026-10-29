import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Wordmark } from "./Wordmark";
import { Button } from "@/components/ui/button";
import { platforms } from "@/content/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/platforms", label: "Platforms" },
  { to: "/solutions", label: "Solutions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const products = platforms.filter((p) => p.href);

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2" aria-label="IQLink home">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-2 h-4 w-px bg-border" aria-hidden="true" />
          {products.map((p) => (
            <a
              key={p.slug}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {p.name}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="brand" size="sm">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-2">
              {products.map((p) => (
                <a
                  key={p.slug}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1 rounded-md px-2 py-3 text-sm font-medium text-foreground"
                >
                  {p.name}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <Button asChild variant="brand" className="mt-3">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Talk to us
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
