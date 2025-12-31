export interface BlogPostDetail {
    slug: string;
    title: string;
    tag: string;
    date: string;
    readTime: string;
    heroImage: string;
    content: Array<{
        type: 'paragraph' | 'heading' | 'list' | 'quote' | 'image';
        text?: string;
        items?: string[];
        src?: string;
        alt?: string;
        caption?: string;
    }>;
}

export const blogPostDetails: Record<string, BlogPostDetail> = {
    "hybrid-commerce": {
        slug: "hybrid-commerce",
        title: "Hybrid Squads: Accelerating Commerce Rebuilds",
        tag: "Playbooks",
        date: "October 12, 2024",
        readTime: "8 min read",
        heroImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=2664",
        content: [
            {
                type: "paragraph",
                text: "In the high-stakes world of enterprise retail, the pressure to modernize legacy stacks is immense. Yet, the traditional 'rip and replace' timelines of 18-24 months are no longer acceptable. Market dynamics shift too fast. This is where the hybrid squad model is transforming how commerce leaders approach digital transformation."
            },
            {
                type: "heading",
                text: "The Velocity Gap"
            },
            {
                type: "paragraph",
                text: "Most organizations face a 'velocity gap' during rebuilds. Internal teams are bogged down by maintaining the legacy monolith, while external agencies often lack the deep domain context to make architectural decisions that stick. The result is a stalled roadmap."
            },
            {
                type: "paragraph",
                text: "Neumog’s hybrid model bridges this gap by embedding senior product leads who carry the context, alongside vetted specialist engineers who bring the execution firepower. It’s not staff augmentation; it’s outcome augmentation."
            },
            {
                type: "heading",
                text: "Case Study: Global Fashion Retailer"
            },
            {
                type: "paragraph",
                text: "We recently partnered with a Fortune 500 fashion retailer struggling to migrate to a composable MACH architecture. Their internal velocity was flatlining. By deploying two hybrid squads—each led by a Neumog Technical Program Manager and staffed with React Storefront experts—we achieved:"
            },
            {
                type: "list",
                items: [
                    "40% reduction in time-to-market for the new checkout flow.",
                    "Seamless integration with legacy ERPs via an anti-corruption layer.",
                    "Zero downtime during the transition phase."
                ]
            },
            {
                type: "quote",
                text: "The hybrid squad didn't just write code; they rewrote our engineering culture. They brought best practices that our team adopted immediately."
            },
            {
                type: "heading",
                text: "The Blueprint for Success"
            },
            {
                type: "paragraph",
                text: "Success in hybrid setups relies on three pillars: Shared Rituals, Transparent Metrics, and aligned Incentives. We ensure that our experts participate in the same standups, use the same Jira boards, and are measured by the same OKRs as your internal team. This eliminates the 'us vs. them' mentality and fosters a singular focus on shipping."
            },
            {
                type: "paragraph",
                text: "Ready to accelerate? Explore hybrid delivery frameworks at neumog.tech."
            }
        ]
    },
    "hospitality-experience": {
        slug: "hospitality-experience",
        title: "Elevating Hospitality with Seamless Digital Experiences",
        tag: "Hospitality",
        date: "November 05, 2024",
        readTime: "6 min read",
        heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2670",
        content: [
            {
                type: "paragraph",
                text: "Modern luxury hospitality extends far beyond the lobby. The guest journey begins months before arrival and continues long after checkout. In this digital era, the 'concierge' is often an app, and the 'front desk' is a mobile check-in flow. Brands that fail to unify these touchpoints risk losing the loyalty of the digital-first traveler."
            },
            {
                type: "heading",
                text: "The Disconnected Guest Journey"
            },
            {
                type: "paragraph",
                text: "Too often, hospitality tech stacks are fragmented. The booking engine, the loyalty app, and the on-property service portal don't talk to each other. This friction breaks the spell of luxury. A guest shouldn't have to re-enter their preferences three times."
            },
            {
                type: "paragraph",
                text: "At Neumog, we specialize in building the 'glue' layers—seamless integrations that unify these disparate systems into a single, elegant guest interface."
            },
            {
                type: "heading",
                text: "Orchestrating the Digital Concierge"
            },
            {
                type: "paragraph",
                text: "We worked with a boutique hotel chain to reimagine their guest app. The goal was ambitious: Keyless entry, room service ordering, and personalized itinerary planning, all in one fluid interface."
            },
            {
                type: "list",
                items: [
                    "Unified Identity Layer: Single sign-on across all properties and services.",
                    "Context-Aware UI: The app interface changes based on whether the guest is pre-arrival, on-property, or post-stay.",
                    "Real-time Service Bus: Instant synchronization between the app and the hotel's operations center."
                ]
            },
            {
                type: "quote",
                text: "Technology should be invisible. It should empower the staff to serve better, not replace the human touch."
            },
            {
                type: "paragraph",
                text: "The result was a 30% increase in ancillary revenue (spa and dining bookings) and a significant boost in Net Promoter Score (NPS). By removing digital friction, we allowed the hospitality team to focus on what they do best: delighting guests."
            },
            {
                type: "quote",
                text: "Neumog's role is architecting the invisible layer. Systems talk. Processes simplify. Guests smile."
            }
        ]
    },
    "rlhf-pods": {
        slug: "rlhf-pods",
        title: "Bootstrapping RLHF Programs for Enterprise AI",
        tag: "AI/ML",
        date: "December 01, 2024",
        readTime: "10 min read",
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2565",
        content: [
            {
                type: "paragraph",
                text: "As enterprises move from experimental LLM wrappers to fine-tuned proprietary models, the bottleneck shifts from compute to data quality. Specifically, Reinforcement Learning from Human Feedback (RLHF) has emerged as the critical differentiator in model performance and safety. But building a scalable RLHF program is operationally complex."
            },
            {
                type: "heading",
                text: "The Quality vs. Scale Dilemma"
            },
            {
                type: "paragraph",
                text: "Crowdsourced annotation platforms offer scale but often suffer from poor quality control and lack of domain expertise. For enterprise applications—legal, medical, financial—you cannot rely on generic labelers. You need experts."
            },
            {
                type: "paragraph",
                text: "Neumog is pioneering the 'Expert Pod' model for RLHF. We assemble small, highly qualified teams of domain experts (e.g., paralegals, junior doctors, financial analysts) managed by a central Data Quality Lead."
            },
            {
                type: "heading",
                text: "Operationalizing the Feedback Loop"
            },
            {
                type: "paragraph",
                text: "Launching an RLHF initiative requires more than just people; it requires a robust operational framework."
            },
            {
                type: "list",
                items: [
                    "Guideline Iteration: We treat annotation guidelines as a living product, iterating daily based on edge cases.",
                    "Inter-Annotator Agreement (IAA): Rigorous statistical monitoring to ensure consistency across the pod.",
                    "Golden Sets: Continuous testing against ground-truth data to prevent drift."
                ]
            },
            {
                type: "quote",
                text: "Data is the new code. The quality of your human feedback loop directly dictates the quality of your model's inference."
            },
            {
                type: "paragraph",
                text: "For a recent LegalTech client, our expert pod improved model accuracy on contract review tasks by 22% in just six weeks. By bootstrapping a high-fidelity RLHF loop, we helped them achieve regulatory compliance ahead of schedule."
            },
            {
                type: "paragraph",
                text: "Scale with confidence. See how RLHF fits your roadmap at neumog.tech."
            }
        ]
    },
    "legacy-to-lightning": {
        slug: "legacy-to-lightning",
        title: "From Legacy to Lightning: Modernizing Without Breaking Business",
        tag: "Engineering",
        date: "January 15, 2025",
        readTime: "7 min read",
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670",
        content: [
            {
                type: "paragraph",
                text: "Every CTO faces the same nightmare: the 'Big Bang' migration. Replacing a core legacy system in one go is fraught with risk—downtime, data loss, and business paralysis. Yet, sticking with outdated tech means slower features and security vulnerabilities."
            },
            {
                type: "heading",
                text: "The Strangler Fig Pattern"
            },
            {
                type: "paragraph",
                text: "We advocate for the 'Strangler Fig' pattern. Instead of rewriting the entire monolith, we peel off specific functionalities—like payments or user auth—and rebuild them as independent microservices. The legacy system continues to run the core until it's eventually thinned out and replaced."
            },
            {
                type: "heading",
                text: "Quiet Modernization"
            },
            {
                type: "paragraph",
                text: "By using an API gateway to route traffic between the old and new systems, users never notice the transition. We modernize quietly. Operations stay stable. Business continues as usual."
            },
            {
                type: "list",
                items: [
                    "Zero downtime deployments via canary releases.",
                    "Parallel running of old and new services to verify data integrity.",
                    "Incremental value delivery instead of a 2-year waiting game."
                ]
            },
            {
                type: "quote",
                text: "Modernization isn't a project; it's a process. We turn risky cliffs into manageable steps."
            },
            {
                type: "paragraph",
                text: "For a logistics client, we migrated their entire dispatch system while they were processing 50k orders a day. Not a single shipment was delayed. That's the power of strategic re-platforming."
            },
            {
                type: "paragraph",
                text: "Modernize without the panic. Talk to our architects at neumog.tech."
            }
        ]
    },
    "startup-scaling": {
        slug: "startup-scaling",
        title: "Why Startups Fail at Product Scaling (And How to Avoid the Iceberg)",
        tag: "Startups",
        date: "January 22, 2025",
        readTime: "6 min read",
        heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2670",
        content: [
            {
                type: "paragraph",
                text: "Scaling is the ultimate stress test. What works for 1,000 users often breaks at 100,000. Many startups fail not because they lack product-market fit, but because their technical debt interest payments become unmanageable right when they need to sprint."
            },
            {
                type: "heading",
                text: "The MVP Trap"
            },
            {
                type: "paragraph",
                text: "Founders love MVPs (Minimum Viable Products). But often, 'Viable' is interpreted as 'Barely Working'. Shortcuts taken in database design, security, and code structure accumulate. When the Series A funding hits and you need to scale, you're stuck refactoring instead of shipping."
            },
            {
                type: "heading",
                text: "Architecting for Growth"
            },
            {
                type: "paragraph",
                text: "At Neumog, we build 'MVPs with a view'. We write clean, modular code that respects scalability principles from Day 1. It doesn't take much longer, but it saves months of pain later."
            },
            {
                type: "list",
                items: [
                    "Database indexing strategies planned early.",
                    "Stateless API design for horizontal scaling.",
                    "Automated testing pipelines to prevent regression."
                ]
            },
            {
                type: "quote",
                text: "Tech debt is like financial debt. A little leverage is good, but too much will bankrupt your velocity."
            },
            {
                type: "paragraph",
                text: "Don't let your architecture allow your growth to stall. Build on solid ground with neumog.tech."
            }
        ]
    },
    "ai-teammate": {
        slug: "ai-teammate",
        title: "AI as a Teammate, Not a Tool: Building Copilots for Real Workflows",
        tag: "AI/ML",
        date: "February 05, 2025",
        readTime: "8 min read",
        heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2670",
        content: [
            {
                type: "paragraph",
                text: "The AI hype cycle is deafening. But beyond the chatbot demos, real value is being created by treating AI as an active teammate—a 'Copilot' that lives inside your operational workflows."
            },
            {
                type: "heading",
                text: "Beyond Simple Chat"
            },
            {
                type: "paragraph",
                text: "We don't just paste a GPT wrapper on your site. We integrate LLMs with your proprietary data and internal APIs. Imagine a Customer Support Copilot that doesn't just answer questions, but can actually process a refund or update a shipping address (with human approval)."
            },
            {
                type: "list",
                items: [
                    "Context-aware output using RAG (Retrieval-Augmented Generation).",
                    "Guardrails to ensure brand safety and compliance.",
                    "Action-oriented agents that can trigger webhooks."
                ]
            },
            {
                type: "heading",
                text: "Finance & Ops Usecases"
            },
            {
                type: "paragraph",
                text: "For a fintech client, we built a 'Reconciliation Copilot'. It scans thousands of transactions, identifies anomalies, and drafts an explanation report for the analyst to review. It turned a 4-hour daily task into a 15-minute review."
            },
            {
                type: "quote",
                text: "AI shouldn't replace your team; it should give them superpowers."
            },
            {
                type: "paragraph",
                text: "Turn AI into your most productive employee. See our use cases at neumog.tech."
            }
        ]
    },
    "design-revenue": {
        slug: "design-revenue",
        title: "Design That Sells: Why UX Is Becoming a Revenue Strategy",
        tag: "Design",
        date: "February 12, 2025",
        readTime: "8 min read",
        heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
        content: [
            {
                type: "paragraph",
                text: "In the digital economy, your user interface is your storefront, your salesperson, and your cashier. Yet, countless enterprises still treat User Experience (UX) as 'decoration'—a final coat of paint applied after the engineering is done. This approach is a massive revenue leak. In a world where competitors are just a tab switch away, design is not artistic preference; it is business strategy."
            },
            {
                type: "heading",
                text: "The Psychology of Friction"
            },
            {
                type: "paragraph",
                text: "Every interaction costs your user cognitive energy. Use 'Friction' as a metric. Every extra click, every confusing label, every slow loader is a micro-aggression that drains the user's 'will to buy'. Good design is fundamentally about the rigorous removal of these frictions."
            },
            {
                type: "paragraph",
                text: "Consider the checkout flow. A poorly designed form that asks for the same information twice, or fails to validate a field in real-time, can cause a 20% drop-off. That is not a 'design issue'; that is 20% of your revenue evaporating."
            },
            {
                type: "heading",
                text: "Accessibility is Market Expansion"
            },
            {
                type: "paragraph",
                text: "Inclusive design is often viewed as a compliance exercise. It shouldn't be. By designing for accessibility—clear contrast, screen reader compatibility, large touch targets—you are not just helping those with disabilities; you are improving the experience for everyone. A site that is easy to read for a visually impaired user is also easy to read for a commuter on a bumpy train."
            },
            {
                type: "heading",
                text: "Case Study: The 3-Step Booking"
            },
            {
                type: "paragraph",
                text: "We redesigned the complex booking flow for a travel platform, simplifying a 5-step process into 3 intuitive steps. We used progressive disclosure to show users only what they needed to see, when they needed to see it."
            },
            {
                type: "list",
                items: [
                    "Optimized Onboarding: Reduced drop-off by 30%.",
                    "Clear Visual Hierarchy: Guided users to the 'Buy' button using F-pattern layouts.",
                    "Mobile-First Interaction: Captured the 60% of traffic that isn't on desktop."
                ]
            },
            {
                type: "heading",
                text: "The ROI of Delight"
            },
            {
                type: "paragraph",
                text: "Emotion plays a critical role in retention. Micro-animations—like a subtle bounce when a task is completed—release dopamine. These 'moments of delight' build an emotional connection with the brand. Users don't just use the product; they enjoy it."
            },
            {
                type: "quote",
                text: "UX is not art. It is engineered empathy that drives business results."
            },
            {
                type: "paragraph",
                text: "Stop leaving money on the table. Audit your UX with neumog.tech."
            }
        ]
    },
    "mvp-playbook": {
        slug: "mvp-playbook",
        title: "Founders’ Playbook: Building MVPs That Actually Hit Market Fit",
        tag: "Product",
        date: "February 20, 2025",
        readTime: "9 min read",
        heroImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=2670",
        content: [
            {
                type: "paragraph",
                text: "Most MVPs fail. Not because the idea is bad, but because the execution is misaligned with the market reality. Founders often overbuild features nobody wants and under-invest in the core value proposition."
            },
            {
                type: "heading",
                text: "The 'Minimum' in MVP"
            },
            {
                type: "paragraph",
                text: "Minimum doesn't mean 'broken'. It means 'focused'. We help founders ruthlessly prioritize. What is the one thing this product must do 10x better than the alternative? Build that. Improve that. Ignore the rest."
            },
            {
                type: "heading",
                text: "Build-Measure-Learn Loop"
            },
            {
                type: "paragraph",
                text: "We set up analytics and feedback loops from Day 1. An MVP without metrics is just a guess. We need to know who is clicking, where they drop off, and why they return."
            },
            {
                type: "list",
                items: [
                    "Rapid Prototyping: Validate flows before writing code.",
                    "Weekly Sprint Reviews: Pivot fast based on user feedback.",
                    "Scalable Core: Ready for growth, but not over-engineered."
                ]
            },
            {
                type: "quote",
                text: "Neumog acts as your technical co-founder. We don't just take orders; we challenge assumptions to build a better product."
            },
            {
                type: "paragraph",
                text: "Got an idea? Let's validate and build it. Start your journey at neumog.tech."
            }
        ]
    },
    "data-decisions": {
        slug: "data-decisions",
        title: "Data-driven Decisions: Building Analytics Into Your Product DNA",
        tag: "Data",
        date: "March 01, 2025",
        readTime: "6 min read",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670",
        content: [
            {
                type: "paragraph",
                text: "In the age of information, gut feeling is a liability. The most successful products are those that listen to their data. But collecting data isn't enough; you need actionable insights."
            },
            {
                type: "heading",
                text: "Instrumentation from the Start"
            },
            {
                type: "paragraph",
                text: "Retrofitting analytics is painful. We bake event tracking (Segment, Mixpanel, GA4) into the codebase from the first commit. We define a 'Tracking Plan' alongside the feature specs."
            },
            {
                type: "list",
                items: [
                    "Funnel Analysis: Where are users dropping off?",
                    "Retention Cohorts: Do users from last month utilize the app more?",
                    "Feature Adoption: Is anyone actually clicking that new button?"
                ]
            },
            {
                type: "quote",
                text: "Products that measure, win. Products that guess, stall."
            },
            {
                type: "paragraph",
                text: "Turn your product into a data-generating asset. Learn more at neumog.tech."
            }
        ]
    },
    "automation-first": {
        slug: "automation-first",
        title: "Automation First: Letting Systems Do the Heavy Lifting",
        tag: "Automation",
        date: "March 10, 2025",
        readTime: "7 min read",
        heroImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=2000",
        content: [
            {
                type: "paragraph",
                text: "Your team is hired for their brains, not their ability to copy-paste rows in Excel. Yet, businesses lose thousands of hours to repetitive, manual tasks. The 'Automation First' mindset is not just about efficiency; it's about employee satisfaction and scaling without increasing headcount linearly."
            },
            {
                type: "heading",
                text: "Connecting the Silos with APIs"
            },
            {
                type: "paragraph",
                text: "Modern businesses run on a fragmented stack: Marketing uses HubSpot, Sales uses Salesforce, Finance uses Xero, and Support uses Zendesk. Often, these tools live in isolation, creating 'data silos'. We build custom middleware and orchestrators (using tools like Zapier, n8n, or custom Python scripts) that act as the connective tissue."
            },
            {
                type: "paragraph",
                text: "When a sale happens in Stripe, it shouldn't require a human to log it. It should trigger a cascade: update the CRM, notify the Slack #wins channel, grant the user access in the database, and draft an invoice in the accounting software. Seamless. Instant."
            },
            {
                type: "heading",
                text: "The Human-in-the-Loop"
            },
            {
                type: "paragraph",
                text: "Automation doesn't mean removing humans entirely. It means moving humans up the value chain. We design 'Human-in-the-Loop' (HITL) workflows where the AI or script handles the 80% standard cases, and flags the 20% complex anomalies for human review. This combines the speed of machines with the judgment of experts."
            },
            {
                type: "heading",
                text: "Real World Impact"
            },
            {
                type: "list",
                items: [
                    "HR Onboarding: Automated contract generation and device provisioning saved an HR team 15 hours per hire.",
                    "E-commerce Returns: An auto-approval bot for standard returns reduced support tickets by 40%.",
                    "Reporting: Automated weekly KPI dashboards eliminated the 'Monday morning spreadsheet scramble'."
                ]
            },
            {
                type: "quote",
                text: "If you do it more than three times a week, automate it."
            },
            {
                type: "paragraph",
                text: "Unshackle your team from manual work. Explore automation at neumog.tech."
            }
        ]
    },
    "security-design": {
        slug: "security-design",
        title: "Security by Design: Building Products That Scale Safely",
        tag: "Security",
        date: "March 18, 2025",
        readTime: "9 min read",
        heroImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2000",
        content: [
            {
                type: "paragraph",
                text: "In the enterprise world, features get you the meeting, but security gets you the contract. We often see startups scrambling to bolt on security features—SSO, audit logs, role-based access—right before a big deal closes. This is technical debt of the highest order. Security must be architectural, not additive."
            },
            {
                type: "heading",
                text: "Shift Left: Security in the Code"
            },
            {
                type: "paragraph",
                text: "We advocate for 'Shifting Left'—moving security considerations to the earliest stages of the SDLC (Software Development Life Cycle). This means automated dependency scanning, static code analysis in the CI/CD pipeline, and threat modeling during the design phase."
            },
            {
                type: "heading",
                text: "Zero Trust Architecture"
            },
            {
                type: "paragraph",
                text: "The traditional 'castle and moat' security model is dead. We build on Zero Trust principles. We assume the network is already breached. Every service must verify the identity of every other service. We implement strict 'Least Privilege' access controls, ensuring that a compromised microservice cannot bring down the entire system."
            },
            {
                type: "heading",
                text: "Compliance as a Culture"
            },
            {
                type: "paragraph",
                text: "For fintech and healthcare, compliance (SOC2, HIPAA, GDPR) is not optional. We build the necessary logging and audit trails natively into the application logic."
            },
            {
                type: "list",
                items: [
                    "Encryption at Rest & Transit: Standard practice, never optional.",
                    "Role-Based Access Control (RBAC): Granular permissions to ensure data isolation.",
                    "Audit Logging: Immutable logs of 'who did what, when' for forensic analysis."
                ]
            },
            {
                type: "quote",
                text: "Trust is hard to gain and easy to lose. We build systems that protect your reputation."
            },
            {
                type: "paragraph",
                text: "Build products that enterprise buyers trust. Secure your roadmap at neumog.tech."
            }
        ]
    },
    "discovery-culture": {
        slug: "discovery-culture",
        title: "Why Product Teams Fail Without a Discovery Culture",
        tag: "Product",
        date: "March 25, 2025",
        readTime: "6 min read",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2670",
        content: [
            {
                type: "paragraph",
                text: "The biggest waste in software engineering is building something nobody wants. 'Delivery' is getting code to production. 'Discovery' is figuring out what code to write. You need both."
            },
            {
                type: "heading",
                text: "Get Out of the Building"
            },
            {
                type: "paragraph",
                text: "We encourage direct engagement with users. Interviews, surveys, listening to support calls. We validate assumptions before a single line of code is committed."
            },
            {
                type: "heading",
                text: "Problem First, Solution Second"
            },
            {
                type: "paragraph",
                text: "Teams often fall in love with their solution. We train teams to fall in love with the user's problem. This shift in mindset prevents feature bloat and ensures every release moves the needle."
            },
            {
                type: "quote",
                text: "Shipping fast is useless if you're shipping the wrong thing."
            },
            {
                type: "paragraph",
                text: "Stop guessing. Start discovering. Partner with product experts at neumog.tech."
            }
        ]
    },
    "neumog-model": {
        slug: "neumog-model",
        title: "The Neumog Delivery Model: Transparent, Predictable, Outcome-Driven",
        tag: "Inside Neumog",
        date: "April 01, 2025",
        readTime: "5 min read",
        heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2670",
        content: [
            {
                type: "paragraph",
                text: "The agency model is broken. Misaligned incentives, black-box billing, and junior talent sold as seniors. Neumog was built to be the antidote."
            },
            {
                type: "heading",
                text: "Radical Transparency"
            },
            {
                type: "paragraph",
                text: "We believe you should know exactly who is working on your product and what they are doing. Shared Slack channels, open Jira boards, and transparent timesheets. No hiding."
            },
            {
                type: "heading",
                text: "Outcome over Output"
            },
            {
                type: "paragraph",
                text: "We don't bill for hours sat in a chair; we align on outcomes. Did the feature ship? Did the conversion rate improve? Our hybrid squads are incentivized by your success."
            },
            {
                type: "list",
                items: [
                    "Senior Engineering Leadership on every project.",
                    "Flexible scaling: Ramp up or down as needs change.",
                    "Architecture that lasts."
                ]
            },
            {
                type: "quote",
                text: "That’s how MNCs build brand trust. Predictability. Quality. Integrity."
            },
            {
                type: "paragraph",
                text: "Experience the difference. Build your next product with neumog.tech."
            }
        ]
    }
};
