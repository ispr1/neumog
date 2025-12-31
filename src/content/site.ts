import type { FAQItem } from "@/content/types";

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Expert Collective", href: "/experts" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export const heroMain = {
  eyebrow: "Hybrid product teams, on demand",
  title: "Ship real products with Neumog's hybrid dev network",
  description:
    "Managed product delivery, not a marketplace. Experienced leaders and trusted experts across product, engineering, data science, and AI/ML focused on shipping real outcomes with speed.",
  primaryCta: { label: "Start a project", href: "/start-project" },
  secondaryCta: { label: "Talk to our team", href: "/contact" },
  image:
    "https://drive.google.com/uc?export=view&id=1yPz5u-5tz5I4EmPHpEtEcxI3D_xJboo7",
};

export const logoCloud = {
  heading: "Dozens of companies ship with Neumog",
  supportingText:
    "Operating as a trusted, confidential extension of product teams for high-growth ventures across e-commerce, hospitality, delivery, and AI/ML.",
  logos: ["A1 Care", "Check 360", "Aster Hospital", "Mealawe", "Rapoo", "Anvayaa"],
};

export const whyNeumog = {
  heading: "Why Neumog works",
  subheading: "A simple managed model that snaps into any product org without hand-holding.",
  features: [
    {
      title: "Managed delivery",
      body: "Internal product and architecture leads stay with you from intake to rollout.",
    },
    {
      title: "Vetted experts",
      body: "Experts from MNCs and unicorn product teams plug in only when needed.",
    },
    {
      title: "Flexible engagement",
      body: "Spin squads up or down by phase without losing context or velocity.",
    },
  ],
};

export const transparencySection = {
  title: "Project analytics & transparency",
  body: "Every engagement runs through a shared workspace: staffing mix, burndown, risks, RLHF prep, all visible in one dashboard.",
  bullets: [
    "Real-time staffing overview",
    "Timeline + deliverable tracking",
    "Secure client + expert comms",
  ],
  image: "https://drive.google.com/uc?export=view&id=1VeEaF4H47R9CakTrgNIcsptqbRQiIdgb",
};

export const industries = [
  {
    pill: "E-commerce",
    title: "Composable storefronts and marketplaces",
    body: "From D2C launches to multi-vendor marketplaces, we build the shoppers' stack.",
  },
  {
    pill: "Hospitality",
    title: "Guest experience platforms",
    body: "Booking flows, concierge apps, loyalty layers integrated with your PMS.",
  },
  {
    pill: "Delivery",
    title: "Food & grocery logistics",
    body: "Ordering, batching, and courier ops plus white-label consumer apps.",
  },
  {
    pill: "Local services",
    title: "Vendors and event services",
    body: "Marketplace infra for weddings, home services, and regional vendors.",
  },
  {
    pill: "AI/ML",
    title: "Gen AI, MLOps, and RLHF",
    body: "Model-enabled products, data science, MLOps, and structured RLHF/annotation pods for production workloads.",
  },
];

export const stats = {
  eyebrow: "Proof",
  heading: "Numbers that tell the story",
  description: "Proof from private deployments while we prep public case studies.",
  metrics: [
    { label: "Products shipped", value: "48" },
    { label: "Active experts", value: "160+" },
    { label: "Team assembly", value: "7 days avg" },
    { label: "Client NPS", value: "68" },
  ],
};

export const testimonials = {
  wallHeading: "Hybrid squads clients keep rebooking",
  quotes: [
    {
      quote:
        "Neumog plugged senior Android + product ops talent into our team inside a week and carried us through launch.",
      author: "Priya Ananth",
      role: "COO, stealth delivery startup",
    },
    {
      quote:
        "As part of the expert collective I get to work with Neumog's product leads who already have the answers stakeholders need.",
      author: "Vikram Aditya",
      role: "Senior Full-stack Engineer",
    },
    {
      quote:
        "They feel more like a partner than a vendor managed, opinionated, transparent.",
      author: "Anvesh Sharma",
      role: "CTO, hospitality chain",
    },
    // Adding more for the slider effect
    {
      quote:
        "The velocity we achieved with the hybrid squad was unmatched. It felt like they were part of our core team from day one.",
      author: "Sarah Jenkins",
      role: "VP of Engineering, FinTech Scaleup",
    },
    {
      quote:
        "Their vetted expert network meant we didn't have to compromise on quality even with a tight deadline.",
      author: "Michael Chen",
      role: "Founder, AI SaaS",
    },
    {
      quote:
        "Seamless integration with our internal processes. The transparency in billing and progress was refreshing.",
      author: "Elena Rodriguez",
      role: "Product Director, E-commerce Giant",
    },
  ],
  featured: {
    quote:
      "We needed deep domain expertise and Al-driven personalization. Neumog assembled a blended team faster than we could open reqs.",
    author: "Lakshmi Srinivas",
    role: "Head of Product, Check 360",
  },
};

export const processSteps = [
  {
    title: "Share your product goals",
    body: "We unpack desired outcomes, stack realities, and timeline pressure.",
  },
  {
    title: "Design the hybrid team",
    body: "Internal leads + the exact experts you need, mapped to delivery phases.",
  },
  {
    title: "Build, launch, evolve",
    body: "Ship increments with shared rituals, QA, and stakeholder demos.",
  },
  {
    title: "Run & optimize",
    body: "Keep core leads on retainer, rotate specialists as new needs emerge.",
  },
];

export const teamSection = {
  headline: "Lean core team, enormous extended network",
  subheading: "Your dedicated product leaders, plugged into every project.",
  roles: [
    {
      label: "Product Leadership",
      description: "Owns roadmap, prioritization, and product outcomes.",
    },
    {
      label: "Delivery Management",
      description: "Drives execution, timelines, and delivery quality.",
    },
    {
      label: "Design & Experience",
      description: "Shapes user flows, prototypes, and validation.",
    },
    {
      label: "Engineering Oversight",
      description: "Ensures architecture, code quality, and security.",
    },
  ],
};

export const blogPosts = [
  {
    title: "Hybrid Squads: Accelerating Commerce Rebuilds",
    excerpt:
      "Discover how enterprise retailers leverage hybrid teams combining internal leadership with vetted external experts to accelerate digital commerce transformation, reduce risk, and maintain velocity in high-stakes rebuilds.",
    href: "/blog/hybrid-commerce",
    tag: "Playbooks",
  },
  {
    title: "Elevating Hospitality with Seamless Digital Experiences",
    excerpt:
      "Explore strategies for mapping premium on-property guest experiences to intuitive digital interfaces, driving loyalty and operational efficiency for hospitality brands in a competitive landscape.",
    href: "/blog/hospitality-experience",
    tag: "Hospitality",
  },
  {
    title: "Bootstrapping RLHF Programs for Enterprise AI",
    excerpt:
      "A practical guide to rapidly launching Reinforcement Learning from Human Feedback (RLHF) initiatives, including best practices for assembling annotation pods, ensuring data quality, and preparing for scalable AI deployment.",
    href: "/blog/rlhf-pods",
    tag: "AI/ML",
  },
  {
    title: "From Legacy to Lightning: Modernizing Without Breaking Business",
    excerpt: "How forward-thinking CTOs upgrade critical systems while keeping operations stable. Neumog modernizes quietly and efficiently to eliminate downtime risks.",
    href: "/blog/legacy-to-lightning",
    tag: "Engineering",
  },
  {
    title: "Why Startups Fail at Product Scaling (And How to Avoid the Iceberg)",
    excerpt: "An honest look at architecture shortcuts and tech debt. Discover how scalable design decisions today save massive costs tomorrow.",
    href: "/blog/startup-scaling",
    tag: "Startups",
  },
  {
    title: "AI as a Teammate, Not a Tool: Building Copilots for Real Workflows",
    excerpt: "Moving beyond the hype: How customized AI copilots and automations are transforming day-to-day operations in finance and support.",
    href: "/blog/ai-teammate",
    tag: "AI/ML",
  },
  {
    title: "Design That Sells: Why UX Is Becoming a Revenue Strategy",
    excerpt: "UX isn't just decoration—it's a growth lever. We analyze how optimized onboarding flows and checkout clarity directly impact conversion.",
    href: "/blog/design-revenue",
    tag: "Design",
  },
  {
    title: "Founders’ Playbook: Building MVPs That Actually Hit Market Fit",
    excerpt: "A practical checklist for MVP planning and iteration. Learn why partnering with strategic product builders beats hiring just 'coders'.",
    href: "/blog/mvp-playbook",
    tag: "Product",
  },
  {
    title: "Data-driven Decisions: Building Analytics Into Your Product DNA",
    excerpt: "Products that measure, win. Products that guess, stall. How to embed event tracking and metrics culture from day one.",
    href: "/blog/data-decisions",
    tag: "Data",
  },
  {
    title: "Automation First: Letting Systems Do the Heavy Lifting",
    excerpt: "Save time by automating workflows in Ops, HR, and Marketing. See how businesses unlock productivity by delegating to code.",
    href: "/blog/automation-first",
    tag: "Automation",
  },
  {
    title: "Security by Design: Building Products That Scale Safely",
    excerpt: "Why security needs to be an architectural pillar, not an afterthought. Role-based access and compliance for enterprise trust.",
    href: "/blog/security-design",
    tag: "Security",
  },
  {
    title: "Why Product Teams Fail Without a Discovery Culture",
    excerpt: "Shipping fast is useless if you're shipping the wrong thing. How user research prevents costly misbuilds.",
    href: "/blog/discovery-culture",
    tag: "Product",
  },
  {
    title: "The Neumog Delivery Model: Transparent, Predictable, Outcome-Driven",
    excerpt: "How our values of transparency and execution discipline build trust with MNCs. A look inside our process.",
    href: "/blog/neumog-model",
    tag: "Inside Neumog",
  },
];

export const faqHeading = {
  eyebrow: "FAQ",
  title: "Questions we hear every week",
  description: "If you need more detail, email hello@neumog.com",
};

export const faqItems: FAQItem[] = [
  {
    question: "Is Neumog a gig marketplace?",
    answer:
      "No. We run managed product deliveries. Experts join curated squads led by Neumog product, design, and engineering leads.",
  },
  {
    question: "How fast can you start?",
    answer: "Discovery starts within 48 hours, and full squads are usually staffed within 7 business days.",
  },
  {
    question: "Do you support post-launch ops?",
    answer:
      "Yes. We offer run-and-optimize retainers with flexible specialized capacity across engineering, design, data, and RLHF soon.",
  },
];

export const contactInfo = {
  email: "hello@neumog.com",
  phone: "+91 83094 70360",
  whatsapp: "+91 89853 95260",
  address: "Distributed team across country, NA, EU, and APAC",
};

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  work: [
    { label: "Case studies", href: "/case-studies" },
    { label: "Start project", href: "/start-project" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "RLHF waitlist", href: "/rlhf-waitlist" },
    { label: "Experts", href: "/experts/apply" },
  ],
  legal: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
  ],
};

export const ctaStrip = {
  heading: "Start your next product with Neumog",
  body: "Tell us what you need to build and we will assemble the right hybrid squad in under a week.",
  primaryCta: { label: "Book a free call", href: "/start-project" },
  secondaryCta: { label: "Talk to our team", href: "/contact" },
};
