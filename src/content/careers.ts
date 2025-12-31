export interface JobPost {
    slug: string;
    title: string;
    department: "Engineering" | "Product" | "Design" | "Operations";
    location: string;
    type: "Full-time" | "Contract" | "Part-time";
    experience: string;
    shortDescription: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
}

export const jobOpenings: JobPost[] = [
    {
        slug: "senior-full-stack-engineer",
        title: "Senior Full Stack Engineer",
        department: "Engineering",
        location: "Remote (Global)",
        type: "Full-time",
        experience: "5+ years",
        shortDescription: "Join our core product team to build scalable, high-performance web applications using Next.js and Node.js.",
        description: "We are looking for a Senior Full Stack Engineer who is passionate about building products that users love. You will play a key role in architecting and developing our core platform, working closely with product managers and designers to deliver high-quality software.",
        responsibilities: [
            "Architect and build scalable web applications using Next.js, React, and Node.js.",
            "Collaborate with cross-functional teams to define, design, and ship new features.",
            "Ensure code quality through code reviews, testing, and best practices.",
            "Optimize applications for maximum speed and scalability.",
            "Mentor junior engineers and contribute to engineering culture."
        ],
        requirements: [
            "5+ years of experience in software development.",
            "Strong proficiency in JavaScript/TypeScript, React, and Node.js.",
            "Experience with modern frontend tools (Tailwind CSS, Next.js).",
            "Solid understanding of RESTful APIs and GraphQL.",
            "Experience with cloud platforms (AWS/GCP/Vercel) is a plus."
        ],
        benefits: [
            "Competitive salary and equity package.",
            "100% remote-first culture.",
            "Flexible working hours.",
            "Health insurance and wellness stipend.",
            "Annual learning and development budget."
        ]
    },
    {
        slug: "product-designer",
        title: "Product Designer",
        department: "Design",
        location: "Remote (Europe/US East)",
        type: "Full-time",
        experience: "3+ years",
        shortDescription: "Shape the user experience of Neumog's platform. We value clean aesthetics and intuitive interfaces.",
        description: "As a Product Designer at Neumog, you will drive the design of our digital products from concept to launch. You have a keen eye for detail and a deep understanding of user-centered design principles.",
        responsibilities: [
            "Design intuitive and beautiful user interfaces for web and mobile applications.",
            "Create wireframes, prototypes, and high-fidelity mockups.",
            "Conduct user research and usability testing to iterate on designs.",
            "Maintain and evolve our design system.",
            "Work closely with engineers to ensure design implementation accuracy."
        ],
        requirements: [
            "3+ years of experience in product or UI/UX design.",
            "Strong portfolio showcasing web and mobile design work.",
            "Proficiency in Figma and prototyping tools.",
            "Experience working with design systems.",
            "Basic understanding of HTML/CSS is a plus."
        ],
        benefits: [
            "Competitive compensation.",
            "Remote-friendly environment.",
            "Latest hardware (MacBook Pro + Monitor).",
            "Unlimited PTO policy.",
            "Team retreats twice a year."
        ]
    },
    {
        slug: "ai-engineer",
        title: "AI Engineer (LLM/GenAI)",
        department: "Engineering",
        location: "Hybrid (London)",
        type: "Full-time",
        experience: "4+ years",
        shortDescription: "Lead our initiatives in generative AI, building agents that help automate software delivery.",
        description: "Neumog is pushing the boundaries of what's possible with AI in software development. We are seeking an AI Engineer to help us build intelligent agents that can assist in coding, testing, and deployment workflows.",
        responsibilities: [
            "Develop and fine-tune LLM models for specific coding tasks.",
            "Build AI agents using frameworks like LangChain or custom solutions.",
            "Integrate AI capabilities into our existing platform.",
            "Stay up-to-date with the latest advancements in GenAI and MLOps.",
            "Collaborate with the product team to identify high-impact AI use cases."
        ],
        requirements: [
            "Strong background in Machine Learning and Python.",
            "Experience working with LLMs (OpenAI, Anthropic, Llama).",
            "Familiarity with vector databases (Pinecone, Weaviate).",
            "Understanding of prompt engineering and RAG architectures.",
            "Experience deploying ML models to production."
        ],
        benefits: [
            "Top-tier salary and significant equity.",
            "Hybrid work setup in our central London office.",
            "Comprehensive healthcare coverage.",
            "Conference and travel budget.",
            "Free lunch and snacks in the office."
        ]
    }
];
