export const SITE = {
  name: "The Big O Works",
  tagline: "Engineering Digital Excellence for Global Brands",
  description:
    "We build scalable apps, websites, and cloud systems for companies across Europe, UK & USA.",
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

export const WHY_CHOOSE = [
  { title: "International quality standards", icon: "globe" },
  { title: "Clean, scalable code", icon: "code" },
  { title: "Secure architecture", icon: "shield" },
  { title: "Fast delivery", icon: "speed" },
  { title: "Long-term support", icon: "support" },
  { title: "Transparent communication", icon: "chat" },
  { title: "DevOps-driven workflow", icon: "workflow" },
] as const;

export const PROCESS_STEPS = [
  "Discovery call",
  "Strategy & planning",
  "UI/UX design",
  "Development",
  "Testing",
  "Deployment",
  "Ongoing support",
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "", label: "Countries served" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    title: "Fintech Mobile App",
    region: "UK",
    tech: ["React Native", "Node.js", "AWS"],
    image: "/portfolio/fintech.jpg",
  },
  {
    title: "SaaS Dashboard",
    region: "USA",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    image: "/portfolio/saas.jpg",
  },
  {
    title: "E-commerce Platform",
    region: "Europe",
    tech: ["Shopify", "React", "Headless"],
    image: "/portfolio/ecommerce.jpg",
  },
  {
    title: "AI Automation System",
    region: "International",
    tech: ["Python", "OpenAI", "GCP"],
    image: "/portfolio/ai.jpg",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "James Mitchell",
    role: "CTO",
    company: "ScaleTech Ltd",
    country: "UK",
    flag: "🇬🇧",
    quote:
      "The Big O Works delivered our fintech app on time with exceptional quality. Their communication and technical depth are world-class.",
    rating: 5,
    image: "/testimonials/1.jpg",
  },
  {
    name: "Maria Santos",
    role: "Product Lead",
    company: "Nexus SaaS",
    country: "Portugal",
    flag: "🇵🇹",
    quote:
      "From discovery to deployment, the team was transparent and professional. Our dashboard is now the backbone of our US expansion.",
    rating: 5,
    image: "/testimonials/2.jpg",
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "Automate Inc",
    country: "USA",
    flag: "🇺🇸",
    quote:
      "We needed a premium agency that could handle scale. The Big O Works exceeded expectations. True Silicon Valley standards.",
    rating: 5,
    image: "/testimonials/3.jpg",
  },
] as const;
