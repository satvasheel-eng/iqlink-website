import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { platforms } from "@/content/site";

export const Route = createFileRoute("/platforms")({
  head: () => ({
    meta: [
      { title: "Platforms — Foundyn, Firmyn and Capyn | IQLink" },
      {
        name: "description",
        content:
          "IQLink's platform portfolio: Foundyn takes founders from idea to a fundable plan, Firmyn builds a startup's operating profile, compliance readiness and data room, and Capyn brings personal-finance decision support.",
      },
      { property: "og:title", content: "Platforms — Foundyn, Firmyn and Capyn | IQLink" },
      {
        property: "og:description",
        content:
          "Three platforms built on one intelligence spine: from idea to fundable plan, compliance readiness and data room, and personal-finance decision support.",
      },
      { property: "og:url", content: "https://iqlink.in/platforms" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Platforms — Foundyn, Firmyn and Capyn | IQLink" },
      {
        name: "twitter:description",
        content:
          "Three platforms built on one intelligence spine: from idea to fundable plan, compliance readiness and data room, and personal-finance decision support.",
      },
    ],
    links: [{ rel: "canonical", href: "https://iqlink.in/platforms" }],
  }),
  component: Platforms,
});

function Platforms() {
  return (
    <>
      <section className="surface-canvas border-b border-border">
        <div className="container-page py-20 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Platform portfolio"
            title="Three platforms. One intelligence spine."
            description="Foundyn, Firmyn and Capyn serve different decision-makers, but each is built on the same See → Understand → Decide → Act architecture. Foundyn is free to start, Firmyn is in closed beta and Capyn is coming soon."
          />
          <nav aria-label="Platforms" className="mt-10 flex flex-wrap gap-3">
            {platforms.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft transition-colors hover:border-primary/30"
              >
                {p.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {platforms.map((p, index) => (
        <Section key={p.slug} id={p.slug} tone={index % 2 === 1 ? "surface" : "default"}>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">{p.name}</h2>
                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-base font-medium text-teal">{p.tagline}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p.summary}</p>
              <p className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Built for: </span>
                {p.audience}
              </p>

              {p.href ? (
                <Button asChild variant="brand" className="mt-8">
                  <a href={p.href} target="_blank" rel="noreferrer">
                    Visit {p.href.replace("https://", "")} <ArrowUpRight />
                  </a>
                </Button>
              ) : null}

              {p.note ? (
                <p className="mt-8 flex gap-3 rounded-xl border border-border bg-card p-4 text-xs leading-relaxed text-muted-foreground">
                  <Info className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                  <span>{p.note}</span>
                </p>
              ) : null}
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {p.href ? "What it does" : "Planned capabilities"}
              </h3>
              <ul className="mt-6 space-y-4">
                {p.capabilities.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="ink">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_auto]">
          <div>
            <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Interested in early access or partnership?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
              We work with a small number of design partners across each platform. Tell us about
              your context and we will follow up.
            </p>
          </div>
          <Button asChild size="lg" variant="subtle">
            <Link to="/contact">
              Register interest <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
