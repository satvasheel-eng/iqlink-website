export const SITE_URL = "https://iqlink.in";
/** For now the company inbox is managefirmyn@gmail.com; iqlink.in mail is being set up. */
export const CONTACT_EMAIL = "managefirmyn@gmail.com";

export const COMPANY = {
  name: "IQLink Technologies Private Limited",
  cin: "U62099PN2026PTC260024",
  location: "Kolhapur, Maharashtra, India",
} as const;

export type Platform = {
  slug: "foundyn" | "firmyn" | "capyn";
  name: string;
  status: string;
  tagline: string;
  summary: string;
  audience: string;
  capabilities: string[];
  /** The product's own site; absent while a product isn't available yet. */
  href?: string;
  note?: string;
};

export const platforms: Platform[] = [
  {
    slug: "foundyn",
    name: "Foundyn",
    status: "Free to start",
    tagline: "Know what's proven before you pitch",
    summary:
      "Foundyn takes Indian founders from idea to a fundable plan: customer interviews, assumptions to test, financials, matched government grants and an investor-ready pitch — with every claim marked as a guess, an estimate or proof.",
    audience: "Early-stage founders in India, and the incubators and programmes that support them",
    capabilities: [
      "Customer interviews that test the idea",
      "Assumptions to test, each marked as a guess, an estimate or proof",
      "Financials built from what the evidence supports",
      "Matched government grants and schemes",
      "An investor-ready pitch drawn from the evidence",
    ],
    href: "https://foundyn.in",
  },
  {
    slug: "firmyn",
    name: "Firmyn",
    status: "Closed beta",
    tagline: "Startup operating profile, compliance readiness and data room",
    summary:
      "Firmyn helps Indian startups build a verified operating profile from their CIN, GSTIN and documents, track compliance readiness, prepare a data room and share trusted data with investors and incubators.",
    audience: "Indian startups, their founders and finance teams",
    capabilities: [
      "A verified operating profile from CIN, GSTIN and documents",
      "Statutory deadlines and compliance readiness in one calendar",
      "Documents organised into an investor-ready data room",
      "Trusted data shared with investors and incubators",
      "Workflows for working alongside your own CA or CS",
    ],
    href: "https://firmyn.in",
    note: "Firmyn provides software, workflow and information tools. It does not provide legal, tax or accounting advice, and is not a substitute for a qualified professional.",
  },
  {
    slug: "capyn",
    name: "Capyn",
    status: "Coming soon",
    tagline: "Personal finance decision support",
    summary:
      "An AI-powered personal-finance and financial-decision-support platform for Indian users. Capyn focuses on clarity: understanding cash flow, setting realistic goals, learning the fundamentals and seeing your position in one place.",
    audience: "Individuals and households in India",
    capabilities: [
      "Budgeting and category-level spend visibility",
      "Goal planning and progress tracking",
      "Cash-flow visibility and forecasting views",
      "Financial education and explainer content",
      "Portfolio analytics and consolidated position views",
      "Intelligent, explainable financial insights",
    ],
    note: "Capyn is intended as a technology, information and education product. It does not provide investment advice or recommendations, and advisory features will only be offered where the appropriate regulatory permissions are held.",
  },
];

export type Solution = {
  title: string;
  summary: string;
  points: string[];
};

export const solutions: Solution[] = [
  {
    title: "Decision Intelligence",
    summary:
      "The core capability that runs through everything we build: turning scattered information into an understandable position and a defensible next step.",
    points: [
      "AI-assisted analysis and summarisation",
      "Scoring, ranking and prioritisation models",
      "Forecasting and scenario views",
      "Next-best-action recommendations with reasoning",
    ],
  },
  {
    title: "Founder & Startup Intelligence",
    summary:
      "Systems that help early-stage teams understand their options and allocate limited time to the opportunities that actually fit.",
    points: [
      "Opportunity discovery and relevance filtering",
      "Ecosystem, programme and policy intelligence",
      "Application pipeline and deadline management",
      "Growth and readiness diagnostics",
    ],
  },
  {
    title: "Business Operations Intelligence",
    summary:
      "Operational systems that keep obligations, finance workflows and organisational status visible to the people accountable for them.",
    points: [
      "Compliance calendars and workflow management",
      "Finance operations and document workflows",
      "Executive dashboards and status reporting",
      "Alerting, escalation and audit trails",
    ],
  },
  {
    title: "Financial Intelligence",
    summary:
      "Information, analytics and education tools that help people and organisations understand financial position and options.",
    points: [
      "Cash-flow, budgeting and goal analytics",
      "Portfolio and position consolidation views",
      "Financial literacy and explainer content",
      "Decision-support tooling, not advice",
    ],
  },
  {
    title: "Government & Public Sector",
    summary:
      "Evidence-based decision systems for departments, agencies and programme teams that need reliable visibility across delivery.",
    points: [
      "Programme management and delivery dashboards",
      "Planning, monitoring and evaluation systems",
      "Scheme and beneficiary information platforms",
      "Public-service platforms and citizen-facing tools",
    ],
  },
  {
    title: "Education & Skills",
    summary:
      "Learning platforms and assessment systems that build capability in technology, finance and employability.",
    points: [
      "EdTech platforms and short-course delivery",
      "Assessment, evaluation and interview preparation",
      "School learning tools and teacher dashboards",
      "Coding, AI and robotics learning pathways",
    ],
  },
  {
    title: "AI, Software & Infrastructure",
    summary:
      "The engineering layer beneath the platforms: the systems, data foundations and compute that intelligence products depend on.",
    points: [
      "Custom software and SaaS product engineering",
      "AI/ML systems, data platforms and pipelines",
      "Cloud architecture and high-performance / GPU compute",
      "Server, data-centre and infrastructure services",
      "Robotics and STEM kits where they support learning programmes",
    ],
  },
];

export const intelligenceLayer = [
  {
    step: "01",
    title: "See",
    body: "Connect fragmented sources into a single, current picture — obligations, opportunities, financials and operational signals.",
  },
  {
    step: "02",
    title: "Understand",
    body: "Add context. Structure, enrich and interpret the data so that what matters stands out from what is merely noisy.",
  },
  {
    step: "03",
    title: "Decide",
    body: "Compare options with clear reasoning, scoring and trade-offs, so decisions can be explained and defended later.",
  },
  {
    step: "04",
    title: "Act",
    body: "Turn the decision into a workflow: owners, deadlines, reminders and a record of what was done and why.",
  },
];

export const principles = [
  {
    title: "Useful intelligence",
    body: "Intelligence is only valuable if it changes a decision. We measure our systems by the clarity and action they produce, not by model complexity.",
  },
  {
    title: "Explainability",
    body: "Users should be able to see why a system reached a conclusion, what data informed it and where its confidence ends.",
  },
  {
    title: "Privacy",
    body: "Financial, compliance and personal data is handled with data minimisation, purpose limitation and clear user control.",
  },
  {
    title: "Human oversight",
    body: "Consequential decisions stay with people. Our systems recommend, structure and surface; they do not quietly decide.",
  },
  {
    title: "Responsible automation",
    body: "We automate the repetitive and the well-defined, and we are deliberate about where automation is inappropriate.",
  },
  {
    title: "Interoperability",
    body: "Platforms are designed to connect with existing systems and standards rather than trapping data in a silo.",
  },
];

export const whyIQLink = [
  {
    title: "Built around decisions, not dashboards",
    body: "Every product starts from a decision someone has to make, and works backwards to the information and workflow needed to make it well.",
  },
  {
    title: "A connected portfolio",
    body: "Foundyn takes a founder from idea to a fundable plan; Firmyn keeps the company that follows compliant and investor-ready. Each platform is built on the same four-stage spine.",
  },
  {
    title: "Designed for Indian context",
    body: "Compliance regimes, funding ecosystems and financial behaviour are local. We build for that reality first, with globally relevant architecture.",
  },
  {
    title: "Institutional-grade engineering",
    body: "Data platforms, cloud and compute practices suitable for organisations that need reliability, traceability and long horizons.",
  },
];

export const interestAreas = [
  "Foundyn",
  "Firmyn",
  "Capyn",
  "Government / Public Sector",
  "EdTech",
  "AI / Software",
  "Compute / Infrastructure",
  "Partnerships",
  "Other",
] as const;
