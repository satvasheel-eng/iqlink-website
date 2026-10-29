import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { COMPANY, CONTACT_EMAIL, principles } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IQLink — Our thesis and principles | IQLink Technologies" },
      {
        name: "description",
        content:
          "IQLink Technologies Private Limited is an India-incorporated company building a portfolio of connected intelligence platforms across technology, entrepreneurship, finance, education and public systems.",
      },
      { property: "og:title", content: "About IQLink Technologies" },
      {
        property: "og:description",
        content:
          "Fragmented information creates poor decisions. IQLink builds connected intelligence systems that bring information, context and next actions together.",
      },
      { property: "og:url", content: "https://iqlink.in/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "About IQLink Technologies" },
      {
        name: "twitter:description",
        content:
          "Fragmented information creates poor decisions. IQLink builds connected intelligence systems.",
      },
    ],
    links: [{ rel: "canonical", href: "https://iqlink.in/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="surface-canvas border-b border-border">
        <div className="container-page py-20 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="About IQLink"
            title="Fragmented information creates poor decisions."
            description="IQLink Technologies Private Limited is incorporated in India and headquartered in Maharashtra. We are building a portfolio of digital platforms around a single idea: intelligence is what happens when information, context and the next action sit together."
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr]">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <h2 className="font-display text-2xl font-semibold text-foreground">Our thesis</h2>
            <p>
              Most organisations are not short of data. They are short of connection. A founder
              tracking compliance in a spreadsheet, funding opportunities in a browser tab and
              finances in an accountant's inbox is making decisions from three disconnected
              fragments — each partially true, none complete.
            </p>
            <p>
              The cost shows up quietly: a missed deadline, an unclaimed grant, a decision made on
              stale numbers. These are not intelligence failures. They are architecture failures.
            </p>
            <p>
              IQLink builds connected intelligence systems that close those gaps. We start from the
              decision a person actually has to make, then work backwards through the context they
              need, the information that supplies it and the workflow that turns the decision into
              action — with a record of why.
            </p>
            <p>
              The same architecture runs beneath every platform in our portfolio, which is why
              capability built for one compounds across the rest.
            </p>

            <h2 className="pt-6 font-display text-2xl font-semibold text-foreground">
              Where we come from
            </h2>
            <p>
              IQLink is built at the intersection of technology, entrepreneurship, finance,
              education and public systems. That combination is deliberate: compliance regimes,
              funding ecosystems, learning pathways and public programmes each carry their own
              logic, and building credible systems for them requires understanding the domain, not
              just the data.
            </p>
            <p>
              We build for the Indian context first — its regulatory reality, its startup ecosystem
              and its financial behaviour — with an architecture that remains globally relevant.
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Company
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              {[
                { k: "Legal name", v: COMPANY.name },
                { k: "CIN", v: COMPANY.cin },
                { k: "Registered office", v: COMPANY.location },
                { k: "Portfolio", v: "Foundyn, Firmyn, Capyn" },
                {
                  k: "Stage",
                  v: "Foundyn free to start · Firmyn in closed beta · Capyn coming soon",
                },
                { k: "Contact", v: CONTACT_EMAIL },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {row.k}
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">{row.v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Principles"
          title="How we build."
          description="These are working constraints, not marketing copy. They shape what we ship and what we decline to automate."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <article key={p.title} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_auto]">
          <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Work with IQLink.
          </h2>
          <Button asChild size="lg" variant="subtle">
            <Link to="/contact">
              Get in touch <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
