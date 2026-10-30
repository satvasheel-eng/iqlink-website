import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/site/LegalPage";
import { COMPANY, CONTACT_EMAIL } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | IQLink Technologies Private Limited" },
      {
        name: "description",
        content:
          "Privacy Policy for the IQLink Technologies corporate website, covering what information we collect, how it is used and your rights under Indian data protection law.",
      },
      { property: "og:title", content: "Privacy Policy | IQLink Technologies" },
      {
        property: "og:description",
        content: "How IQLink Technologies handles information collected through this website.",
      },
      { property: "og:url", content: "https://www.iqlink.in/privacy" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://www.iqlink.in/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Last updated: 29 October 2026"
      intro="This Privacy Policy explains how IQLink Technologies Private Limited (&ldquo;IQLink&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information in connection with this corporate website."
    >
      <LegalSection title="1. Scope">
        <p>
          This policy applies to the IQLink corporate website only. Foundyn and Firmyn have their
          own privacy notices on their websites, and Capyn will have one when it becomes available.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <ul>
          <li>
            <strong>Information you send us.</strong> If you use the enquiry form, it opens a
            message in your own email client. Any details you choose to send — such as name,
            organisation, email address, phone number, interest area and message — reach us by
            email. This website does not itself collect, transmit or store form submissions.
          </li>
          <li>
            <strong>Technical information.</strong> Our hosting provider may process standard
            server and request information, such as IP address, browser type and pages requested,
            for security and reliability purposes.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How we use information">
        <p>We use information you send us to:</p>
        <ul>
          <li>respond to your enquiry and correspond with you about it;</li>
          <li>assess potential partnerships, design-partner participation or engagements;</li>
          <li>maintain the security, availability and integrity of this website;</li>
          <li>comply with applicable legal or regulatory obligations.</li>
        </ul>
        <p>
          We do not sell personal information, and we do not use enquiry details for unrelated
          marketing without your consent.
        </p>
      </LegalSection>

      <LegalSection title="4. Legal basis and consent">
        <p>
          Where you submit an enquiry, we rely on your consent and on our legitimate interest in
          responding to business correspondence. You may withdraw consent at any time by writing to
          us at {CONTACT_EMAIL}.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies and analytics">
        <p>
          This website does not set advertising or cross-site tracking cookies. If analytics or
          other measurement tools are introduced in future, this policy will be updated and, where
          required, consent will be obtained.
        </p>
      </LegalSection>

      <LegalSection title="6. Sharing and processors">
        <p>
          We may share information with service providers who support our operations, such as
          hosting and email providers, under appropriate confidentiality and data-protection terms.
          We may also disclose information where required by law or by a competent authority.
        </p>
      </LegalSection>

      <LegalSection title="7. Retention">
        <p>
          Enquiry correspondence is retained only for as long as necessary for the purpose it was
          provided, or as required by applicable law, after which it is deleted or archived
          securely.
        </p>
      </LegalSection>

      <LegalSection title="8. Security">
        <p>
          We apply reasonable technical and organisational measures appropriate to the sensitivity
          of the information we hold. No method of transmission or storage is completely secure, and
          we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="9. Your rights">
        <p>
          Subject to applicable Indian data protection law, you may request access to, correction
          of, or erasure of personal information we hold about you, and you may raise a grievance
          about how your information has been handled. Requests can be sent to {CONTACT_EMAIL}.
        </p>
      </LegalSection>

      <LegalSection title="10. Children">
        <p>
          This website is intended for a business audience and is not directed at children. Where
          IQLink builds education products used by school-age learners, product-specific safeguards
          and notices will apply.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes">
        <p>
          We may update this policy from time to time. The version published on this page is the
          current version, and the date above indicates when it was last revised.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          {COMPANY.name}, {COMPANY.location}.
          <br />
          Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
