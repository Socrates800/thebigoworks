export type ServiceIconName =
  | "mobile"
  | "web"
  | "cloud"
  | "design"
  | "saas"
  | "ai"
  | "support"
  | "custom";

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  icon: ServiceIconName;
  longDescription: string;
  features: string[];
  techStack: string[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "iOS & Android apps built with React Native, Flutter, and native stacks.",
    icon: "mobile",
    longDescription:
      "We build native and cross-platform mobile applications that perform beautifully on iOS and Android. From consumer apps to enterprise solutions, we use React Native, Flutter, and native Swift/Kotlin to deliver apps that scale with your business and meet the highest quality standards for global clients.",
    features: [
      "Cross-platform (React Native, Flutter) and native iOS/Android",
      "App Store and Play Store submission and compliance",
      "Offline-first and real-time sync architecture",
      "Push notifications, analytics, and crash reporting",
      "CI/CD and automated testing for mobile",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription: "React, Next.js, PHP, WordPress — modern and legacy web solutions.",
    icon: "web",
    longDescription:
      "Full-stack web development for modern and legacy systems. We build fast, accessible, and SEO-friendly websites and web applications using React, Next.js, and Node.js, as well as PHP and WordPress when the project demands. From marketing sites to complex web apps, we deliver production-ready code.",
    features: [
      "React, Next.js, and TypeScript for modern apps",
      "WordPress and PHP for content-driven and legacy projects",
      "Serverless and edge deployment (Vercel, AWS)",
      "Headless CMS and API-first architecture",
      "Performance, SEO, and accessibility audits",
    ],
    techStack: ["React", "Next.js", "TypeScript", "PHP", "WordPress", "Node.js"],
  },
  {
    slug: "devops-cloud",
    title: "DevOps & Cloud",
    shortDescription: "AWS, CI/CD, Docker, Kubernetes. Scale with confidence.",
    icon: "cloud",
    longDescription:
      "Infrastructure as code, continuous integration and delivery, and cloud architecture that scales. We design and implement AWS, GCP, and Azure solutions with Docker and Kubernetes, so your applications are reliable, secure, and cost-effective from day one.",
    features: [
      "CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)",
      "Containers and orchestration (Docker, Kubernetes)",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Monitoring, logging, and alerting (Datadog, Prometheus)",
      "Security and compliance best practices",
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Premium interfaces and user experiences that convert.",
    icon: "design",
    longDescription:
      "User-centred design that balances aesthetics with usability. We create wireframes, prototypes, and high-fidelity interfaces that align with your brand and drive conversion. Our design process is collaborative and data-informed, so the final product feels premium and performs in the market.",
    features: [
      "Discovery and user research",
      "Wireframing, prototyping, and design systems",
      "High-fidelity UI for web and mobile",
      "Usability testing and iteration",
      "Handoff to development with design tokens",
    ],
    techStack: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "Accessibility"],
  },
  {
    slug: "saas-platforms",
    title: "SaaS Platforms",
    shortDescription: "Multi-tenant, scalable SaaS products from MVP to enterprise.",
    icon: "saas",
    longDescription:
      "We design and build multi-tenant SaaS products that scale from MVP to enterprise. From subscription billing and role-based access to analytics and integrations, we handle the complexity so you can focus on your product and customers.",
    features: [
      "Multi-tenancy and role-based access control",
      "Subscription billing (Stripe, Paddle) and usage metering",
      "Onboarding, dashboards, and self-serve admin",
      "API design and third-party integrations",
      "Scalable data and caching strategies",
    ],
    techStack: ["Next.js", "PostgreSQL", "Stripe", "Redis", "REST/GraphQL"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortDescription: "Integrate AI, ML, and workflow automation into your products.",
    icon: "ai",
    longDescription:
      "We integrate AI and machine learning into your products and workflows. From LLM-powered features and custom models to process automation and intelligent dashboards, we help you leverage AI in a secure, scalable way.",
    features: [
      "LLM integration (OpenAI, Claude, open-source models)",
      "Custom ML models and data pipelines",
      "Workflow automation and RPA",
      "Chatbots, search, and content generation",
      "Ethical AI and data governance",
    ],
    techStack: ["Python", "OpenAI", "LangChain", "TensorFlow", "GCP/AWS ML"],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription: "Ongoing updates, monitoring, and long-term technical support.",
    icon: "support",
    longDescription:
      "Keep your applications secure, up to date, and performing at their best. We offer retainer-based maintenance and support: security patches, dependency updates, monitoring, and incident response so you can focus on growth while we keep the lights on.",
    features: [
      "Security updates and dependency management",
      "24/7 monitoring and alerting",
      "Incident response and on-call support",
      "Performance tuning and optimisation",
      "Documentation and knowledge transfer",
    ],
    techStack: ["Monitoring", "CI/CD", "Logging", "Backups", "Documentation"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    shortDescription: "Bespoke solutions tailored to your business logic.",
    icon: "custom",
    longDescription:
      "When off-the-shelf tools don’t fit, we build custom software tailored to your processes and goals. From internal tools and workflows to customer-facing applications, we deliver scalable, maintainable solutions that become a competitive advantage.",
    features: [
      "Requirements discovery and technical design",
      "Custom APIs, integrations, and data pipelines",
      "Internal tools and admin panels",
      "Legacy modernisation and refactoring",
      "Ongoing evolution and feature development",
    ],
    techStack: ["Full-stack", "APIs", "Databases", "Integrations", "Your stack"],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}
