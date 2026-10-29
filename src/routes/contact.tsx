import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Info, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Section, SectionHeading } from "@/components/site/Section";
import { COMPANY, CONTACT_EMAIL, interestAreas } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact IQLink Technologies | Enquiries and partnerships" },
      {
        name: "description",
        content:
          "Contact IQLink Technologies Private Limited, Maharashtra, India. Enquiries about Foundyn, Firmyn, Capyn, public sector, EdTech, AI software, compute infrastructure and partnerships.",
      },
      { property: "og:title", content: "Contact IQLink Technologies" },
      {
        property: "og:description",
        content: "Enquiries, partnerships and design-partner interest.",
      },
      { property: "og:url", content: "https://iqlink.in/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Contact IQLink Technologies" },
      {
        name: "twitter:description",
        content: "Enquiries, partnerships and design-partner interest.",
      },
    ],
    links: [{ rel: "canonical", href: "https://iqlink.in/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [consent, setConsent] = useState(false);
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `IQLink enquiry — ${get("interest") || "General"} — ${get("organisation") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Organisation: ${get("organisation")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "—"}`,
      `Interest area: ${get("interest")}`,
      "",
      "Message:",
      get("message"),
      "",
      "Consent given to be contacted about this enquiry: yes",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <>
      <section className="surface-canvas border-b border-border">
        <div className="container-page py-20 sm:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Talk to us."
            description="Tell us about the decision, programme or platform you are working on. We read every enquiry and respond to those where we can genuinely help."
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-8 flex gap-3 rounded-xl border border-border bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
              <span>
                This site has no email backend configured. Submitting the form opens a pre-filled
                message in your own email client, addressed to {CONTACT_EMAIL}. Nothing is sent or
                stored by this website. You can also email us directly.
              </span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" autoComplete="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organisation">Organisation *</Label>
                  <Input
                    id="organisation"
                    name="organisation"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">Interest area *</Label>
                <select
                  id="interest"
                  name="interest"
                  required
                  defaultValue=""
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  {interestAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" rows={6} required />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                  required
                />
                <Label
                  htmlFor="consent"
                  className="text-sm font-normal leading-relaxed text-muted-foreground"
                >
                  I consent to IQLink Technologies Private Limited using the details above to
                  respond to this enquiry, in line with the Privacy Policy. *
                </Label>
              </div>

              <Button type="submit" variant="brand" size="lg" disabled={!consent}>
                <Mail /> Compose enquiry email
              </Button>

              {opened ? (
                <p role="status" className="text-sm text-muted-foreground">
                  Your email client should have opened with the message pre-filled. If it did not,
                  please email{" "}
                  <a className="font-medium text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>{" "}
                  directly.
                </p>
              ) : null}
            </form>
          </div>

          <aside className="h-fit space-y-6 rounded-2xl border border-border bg-surface p-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Direct
              </h2>
              <p className="mt-4 flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                {COMPANY.name}
                <br />
                {COMPANY.location}
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Good enquiries include
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>The decision or process you want to improve</li>
                <li>Who the users are and roughly how many</li>
                <li>Existing systems and data sources</li>
                <li>Timelines or constraints you are working within</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
