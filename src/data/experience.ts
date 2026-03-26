export interface Role {
  company: string;
  title: string;
  period: string;
  description: string;
  accomplishments: string[];
  tech: string[];
  accent: "primary" | "secondary";
}

export const experience: Role[] = [
  {
    company: "Red Ventures",
    title: "Software Engineer",
    period: "2024 \u2013 Present",
    description:
      "Driving high-scale engineering at Coverage.com. Leading cross-functional initiatives in telephony migration, AI adoption, and partner API development.",
    accomplishments: [
      "Spearheaded FastTrack, delivering 3.8x revenue per session and ~2x policy binds",
      "Selected for tiger team migrating ~90 Twilio numbers with zero incidents",
      "Built Agency Admin (Next.js + SSE + RBAC) as single source of truth for agency ops",
      "Shipped SMS integration achieving 21% conversion rate, growing to 20% of all binds",
      "Led R&D on Coverage SDK \u2014 composable Lit web components for partner API embedding",
      "Built AI-powered ticket quality gate and drove AI adoption across the engineering org",
    ],
    tech: ["Next.js", "TypeScript", "Twilio", "Lit", "SSE", "AWS", "PostgreSQL"],
    accent: "primary",
  },
  {
    company: "Belk",
    title: "Software Engineer",
    period: "2023 \u2013 2024",
    description:
      "Took ownership of a proprietary Vue web component framework, stabilizing the platform and driving accessibility compliance.",
    accomplishments: [
      "Overhauled linting, patterns, and architecture to stabilize the component framework",
      "Rewrote the product display page with container/presentational patterns",
      "Led accessibility compliance using Axe and UsableNet's AQA platform",
      "Led technical demos and training sessions on Vue.js patterns and scalability",
    ],
    tech: ["Vue.js", "Vuex", "Node.js", "Sass", "Axe"],
    accent: "secondary",
  },
  {
    company: "Retail Architects",
    title: "Lead Software Engineer",
    period: "2017 \u2013 2023",
    description:
      "Led the multi-year transition from Adobe Flash to a modern Vue.js application, architecting the component system from the ground up.",
    accomplishments: [
      "Architected the Flash-to-Vue.js migration \u2014 component system, routing, and state management",
      "Built a JSON Schema-driven component library rendering up to 70% of routes dynamically",
      "Achieved 55% improvement in core component performance through render optimization",
      "Designed and built a mobile point-of-sale app in Ember.js with payment processor integration",
    ],
    tech: ["Vue.js", "Ember.js", "D3.js", "Webpack", "PostCSS"],
    accent: "primary",
  },
];

export const education = {
  school: "Winthrop University",
  degree: "BS Digital Information Design",
  year: "2017",
};
