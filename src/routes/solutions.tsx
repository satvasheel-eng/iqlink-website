import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Dot } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { intelligenceLayer, solutions } from "@/content/site";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Intelligence systems | IQLink Technologies" },
      {
        name: "description",
        content:
          "Decision intelligence, founder and startup intelligence, business operations, financial intelligence, public sector, education, and AI software and infrastructure — under one intelligence systems umbrella.",
      },
      { property: "og:title", content: "Solutions — Intelligence systems | IQLink" },
      {
        property: "og:description",
        content:
          "Connected intelligence systems for business, finance, government, education and infrastructure.",
      },
      { property: "og:url", content: "https://iqlink.in/solutions" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Solutions — Intelligence systems | IQLink" },
      {
        name: "twitter:description",
        content:
          "Connected intelligence systems for business, finance, government, education and infrastructure.",
      },
    ],
    links: [{ rel: "canonical", href: "https://iqlink.in/solutions" }],
  }),
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <section className="surface-canvas border-b border-border">
        <div className="container-page py-20 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Intelligence systems"
            title="One umbrella: connected systems for better decisions."
            description="We are not a general services firm. Every capability below exists because it is required to build and operate connected intelligence systems — from the decision models at the top to the compute underneath."
          />
        </div>
      </section>

      <Section>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {intelligenceLayer.map((s) => (
            <li key={s.step} className="rounded-2xl border border-border bg-surface p-5">
              <span className="text-xs font-semibold tracking-[0.2em] text-teal">{s.step}</span>
              <h2 className="mt-2 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift"
            >
              <h2 className="font-display text-xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-1 text-sm text-foreground">
                    <Dot className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Engagements are scoped deliberately. Where a requirement sits outside what we can deliver
          responsibly — including anything requiring regulatory permissions we do not hold — we say
          so early.
        </p>
      </Section>

      <Section tone="ink">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_auto]">
          <div>
            <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Discuss a programme or platform requirement.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
              Share the decision, the data and the constraints. We will tell you what a connected
              system would realistically change.
            </p>
          </div>
          <Button asChild size="lg" variant="subtle">
            <Link to="/contact">
              Start a conversation <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
