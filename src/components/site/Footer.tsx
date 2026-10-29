import { Link } from "@tanstack/react-router";

import { Wordmark } from "./Wordmark";
import { COMPANY, CONTACT_EMAIL, platforms } from "@/content/site";

const columns = [
  {
    title: "Company",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "What we build",
    links: [
      { to: "/platforms", label: "Platforms" },
      { to: "/solutions", label: "Solutions" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Use" },
    ],
  },
] as const;

const products = platforms.filter((p) => p.href);

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Wordmark size="lg" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              IQLink Technologies Private Limited builds connected intelligence systems for
              founders, businesses, finance and institutions.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {COMPANY.location}
              <br />
              <a
                className="font-medium text-foreground underline-offset-4 hover:underline"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <nav aria-label="Products">
            <h3 className="text-sm font-semibold text-foreground">Products</h3>
            <ul className="mt-4 space-y-3">
              {products.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 space-y-4 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Regulatory disclaimer: financial, compliance and investment-related tools offered or
            described by IQLink are technology, information and education services. They do not
            constitute legal, tax, accounting or investment advice, and certain features may be
            subject to applicable regulatory permissions in India. Products described as in
            development or coming soon are not yet commercially available.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 {COMPANY.name} · CIN {COMPANY.cin} · IQLink makes Foundyn and Firmyn.
          </p>
        </div>
      </div>
    </footer>
  );
}
