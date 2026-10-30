import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/site/LegalPage";
import { COMPANY, CONTACT_EMAIL } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | IQLink Technologies Private Limited" },
      {
        name: "description",
        content:
          "Terms of Use governing access to the IQLink Technologies corporate website, including disclaimers, intellectual property and governing law.",
      },
      { property: "og:title", content: "Terms of Use | IQLink Technologies" },
      {
        property: "og:description",
        content: "Terms governing use of the IQLink Technologies corporate website.",
      },
      { property: "og:url", content: "https://www.iqlink.in/terms" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://www.iqlink.in/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="Last updated: 29 October 2026"
      intro="These Terms of Use govern your access to and use of the IQLink Technologies Private Limited corporate website."
    >
      <LegalSection title="1. Acceptance">
        <p>
          By accessing this website you agree to these Terms. If you do not agree, please do not use
          the website.
        </p>
      </LegalSection>

      <LegalSection title="2. Informational purpose">
        <p>
          The content on this website is provided for general information about IQLink and its
          platforms. It does not constitute an offer, a commitment to provide any product or
          service, or professional advice of any kind.
        </p>
      </LegalSection>

      <LegalSection title="3. Products and planned features">
        <p>
          Foundyn and Firmyn are offered on their own websites under their own terms. Capyn is
          described as coming soon, and descriptions of planned capabilities are forward-looking
          and may change. Nothing on this website should be read as a representation that any
          specific feature will be released.
        </p>
      </LegalSection>

      <LegalSection title="4. No professional or financial advice">
        <p>
          Content relating to compliance, finance or investment is technology, information and
          education content. It is not legal, tax, accounting, audit or investment advice, and it is
          not a recommendation to buy, sell or hold any financial product. Certain features may be
          subject to applicable regulatory permissions in India and will only be offered where such
          permissions are held. You should obtain independent professional advice before acting.
        </p>
      </LegalSection>

      <LegalSection title="5. Acceptable use">
        <ul>
          <li>Do not use this website for any unlawful purpose.</li>
          <li>
            Do not attempt to gain unauthorised access to the website, its systems or related
            infrastructure.
          </li>
          <li>
            Do not scrape, republish or exploit the content commercially without written permission.
          </li>
          <li>Do not interfere with the availability or integrity of the website.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Intellectual property">
        <p>
          All content on this website, including text, design, graphics, the IQLink logo and the
          Foundyn, Firmyn and Capyn names, is owned by or licensed to IQLink Technologies Private
          Limited and is protected by applicable intellectual property law. No licence is granted
          except as expressly stated.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-party links">
        <p>
          This website may link to third-party resources. We do not control and are not responsible
          for their content, accuracy or practices.
        </p>
      </LegalSection>

      <LegalSection title="8. Disclaimer and limitation of liability">
        <p>
          This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
          To the maximum extent permitted by law, IQLink disclaims all warranties, express or
          implied, and shall not be liable for any indirect, incidental or consequential loss
          arising from use of, or reliance on, this website.
        </p>
      </LegalSection>

      <LegalSection title="9. Privacy">
        <p>
          Our handling of information is described in the Privacy Policy, which forms part of these
          Terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes">
        <p>
          We may amend these Terms at any time. Continued use of the website after changes are
          published constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing law">
        <p>
          These Terms are governed by the laws of India, and the courts having jurisdiction in
          Maharashtra, India shall have exclusive jurisdiction over any dispute arising from them.
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
