import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Gauge,
  LineChart,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { IntelligenceNetwork } from "@/components/site/IntelligenceNetwork";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { intelligenceLayer, platforms, principles, solutions, whyIQLink } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IQLink Technologies — Connected intelligence for better decisions" },
      {
        name: "description",
        content:
          "IQLink is an AI-powered intelligence platform company building decision, growth and management systems for founders, businesses, finance and institutions. Home of Foundyn, Firmyn and Capyn.",
      },
      { property: "og:title", content: "IQLink Technologies — Connected intelligence" },
      {
        property: "og:description",
        content:
          "AI-powered decision and growth intelligence for founders, businesses, finance and institutions.",
      },
      { property: "og:url", content: "https://www.iqlink.in/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "IQLink Technologies — Connected intelligence" },
      {
        name: "twitter:description",
        content:
          "AI-powered decision and growth intelligence for founders, businesses, finance and institutions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.iqlink.in/" }],
  }),
  component: Home,
});

const doesCards = [
  {
    icon: Network,
    title: "Connect fragmented information",
    body: "Obligations, opportunities, financials and operational signals usually live in different places. We bring them into one coherent view.",
  },
  {
    icon: Gauge,
    title: "Add context and priority",
    body: "Raw data is not intelligence. Our systems structure, score and interpret information so attention goes where it matters.",
  },
  {
    icon: Workflow,
    title: "Close the loop into action",
    body: "Every insight ends in a workflow — an owner, a deadline, a next step and a record of what was decided.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden surface-canvas">
        <div className="pointer-events-none absolute inset-0 grid-motif" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
              IQLink Technologies Private Limited · Maharashtra, India
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Connected intelligence for{" "}
              <span className="text-gradient-brand">better decisions.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              IQLink is an AI-powered intelligence platform company. We build decision, growth and
              management systems that connect data, judgement and action for founders, businesses,
              finance and institutions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link to="/platforms">
                  Explore our platforms <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="subtle" size="lg">
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "Platforms", v: "Foundyn · Firmyn · Capyn" },
                { k: "Focus", v: "Decision intelligence" },
                { k: "Base", v: "India, globally relevant" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {item.k}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-foreground">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
              <IntelligenceNetwork />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card/95 p-4 shadow-soft backdrop-blur sm:left-8 sm:right-8">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                The intelligence layer
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                See → Understand → Decide → Act
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What IQLink does */}
      <Section className="pt-28">
        <SectionHeading
          eyebrow="What IQLink does"
          title="We build intelligence systems, not isolated tools."
          description="Poor decisions are rarely caused by a lack of data. They are caused by data that is scattered, stale or stripped of context. IQLink builds platforms that reconnect the pieces."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {doesCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift"
            >
              <span
                className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground"
                aria-hidden="true"
              >
                <card.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Intelligence layer */}
      <Section tone="ink">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
            The intelligence layer
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
            One architecture across every platform we build.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">
            Foundyn, Firmyn and Capyn solve different problems for different people, but they share
            the same four-stage spine.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {intelligenceLayer.map((stage) => (
            <li
              key={stage.step}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-teal">{stage.step}</span>
              <h3 className="mt-3 text-xl font-semibold text-primary-foreground">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                {stage.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Platform portfolio */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Platform portfolio"
          title="Three platforms, one intelligence spine."
          description="Each platform is built for a specific decision-maker. Foundyn is free to start, Firmyn is in closed beta and Capyn is coming soon."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {platforms.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground">
                  {p.status}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-teal">{p.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Visit {p.href.replace("https://", "")} <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
                <Link
                  to="/platforms"
                  hash={p.slug}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Learn about {p.name} <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Solutions */}
      <Section>
        <SectionHeading
          eyebrow="Solutions"
          title="Intelligence systems for organisations that carry consequences."
          description="Our capability areas sit under a single umbrella: connected systems that help people see clearly and act well."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/25"
            >
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="subtle">
            <Link to="/solutions">
              See all solution areas <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Why IQLink */}
      <Section tone="surface">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Why IQLink"
            title="Credible systems for consequential decisions."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {whyIQLink.map((item) => (
              <div key={item.title} className="border-l-2 border-teal/50 pl-5">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Responsible AI */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Responsible AI & technology</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Intelligence people can question.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We work in domains where being wrong has real cost — compliance, funding and personal
              finance. That places limits on what responsible automation should do, and we design
              to those limits deliberately.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[ShieldCheck, LineChart, Compass].map((Icon, i) => (
                <span
                  key={i}
                  className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground"
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </span>
              ))}
            </div>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
                <dt className="text-base font-semibold">{p.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section tone="ink">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_auto]">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
              Let's talk about the decision you're trying to improve.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
              Whether you are a founder, a finance team, a department or an institution, we are
              happy to discuss where connected intelligence would genuinely help — and where it
              would not.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="subtle">
              <Link to="/contact">Contact IQLink</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
