export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "github";
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  highlights: string[];
  tags: string[];
  href?: string;
  image?: string;
  role?: string;
  year?: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};
export const site = {
  name: "Muhammad Maaz",
  title: "Muhammad Maaz — Software Engineer",
  description:
    "Full-stack software engineer building scalable web and mobile products with React, Next.js, Node.js, and TypeScript.",
  // Prefer NEXT_PUBLIC_SITE_URL in production (e.g. your Vercel domain). Falls back for local/dev.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "maaz.shakeel.bodla@gmail.com",
  resume: "/MaazResume.pdf",

  nav: [
    { label: "home", href: "/#home" },
    { label: "portfolio", href: "/#portfolio" },
    { label: "services", href: "/#services" },
    { label: "approach", href: "/#approach" },
    { label: "about", href: "/#about" },
    { label: "blog", href: "/blog" },
  ] satisfies NavLink[],

  socials: [
    {
      label: "Instagram",
      href: "https://instagram.com/1devmaaz",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/1maazdev",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/maazshakeel",
      icon: "github",
    },
  ] satisfies SocialLink[],

  hero: {
    intro:
      "Software Engineer focused on building scalable full-stack applications while exploring AI, system design, networking, and cybersecurity.",

    developer:
      "I enjoy turning complex ideas into reliable software through clean architecture, thoughtful engineering, and continuous learning.",

    pillars: [
      {
        label: "Learn",
        description: "Master computer science fundamentals and never stop learning.",
      },
      {
        label: "Innovate",
        description: "Explore better ways to solve problems and improve products.",
      },
      {
        label: "Build",
        description: "Create scalable products that solve real-world problems.",
      },
    ],
  },

  services: [
    "Full-Stack Web Development",
    "Frontend Development",
    "Backend Development",
    "REST API Development",
    "Database Design",
    "System Design",
    "AI Integration",
    "Technical Consulting",
  ],

  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "REST APIs",
    "System Design",
    "Git",
  ],

  projects: [
    {
      slug: "complaint-management-system",
      title: "Complaint Management System",
      description:
        "A modern complaint management platform with authentication, role-based access control, and real-time complaint tracking.",
      overview:
        "A full-stack complaint management system built to help organizations collect, route, and resolve customer complaints efficiently. The platform supports role-based dashboards for admins and staff, structured complaint workflows, and a mobile-friendly experience for field teams.",
      highlights: [
        "Secure authentication with role-based access control",
        "Real-time complaint status tracking and updates",
        "Admin dashboard for monitoring and resolving issues",
        "Mobile app experience built with React Native",
        "REST API backend with structured database models",
      ],
      tags: ["React Native", "Express", "TypeScript", "Prisma"],
      href: "https://github.com/maazshakeel/complaint-software",
      role: "Full-stack developer",
      year: "2025",
      image: "/projects/complaint-system.webp",
    },
    {
      slug: "efficient-track",
      title: "Efficient Track",
      description:
        "A smart school management platform designed to simplify communication, attendance, analytics, and student management.",
      overview:
        "Efficient Track is a school operations platform that brings attendance, communication, analytics, and student records into one place. It was designed to reduce manual admin work and give staff a clearer view of school activity through a clean, responsive interface.",
      highlights: [
        "Centralized attendance and student management",
        "Communication tools for staff and administration",
        "Analytics views for school performance insights",
        "Responsive web interface for desktop and tablet use",
        "Modular architecture for future feature expansion",
      ],
      tags: ["React", "Node.js", "TypeScript"],
      role: "Full-stack developer",
      year: "2025",
      image: "/projects/efficient-track.webp",
    },
    {
      slug: "museum-jawa",
      title: "Museum Jawa",
      description:
        "An interactive website to explore and learn about Indonesian Java culture, with a beautiful and highly interactive user experience.",
      overview:
        "Museum Jawa is an interactive cultural website focused on the heritage, traditions, and stories of Java. The experience combines rich visuals, smooth navigation, and educational content to make Indonesian culture feel engaging and accessible to a global audience.",
      highlights: [
        "Immersive UI inspired by Javanese culture and storytelling",
        "Interactive sections for exploring traditions and history",
        "Responsive layout optimized for modern browsers",
        "Fast, lightweight frontend built with React and Tailwind CSS",
        "Deployed as a live production-ready web experience",
      ],
      tags: ["React.js", "JavaScript", "TailwindCSS"],
      href: "https://museumjava.vercel.app/",
      image: "/projects/museumjawa.webp",
      role: "Frontend developer",
      year: "2025",
    },
  ] satisfies Project[],

  approach: {
    title: "How I Work",
    steps: [
      {
        title: "Understand",
        description:
          "Start by understanding the problem, business goals, and technical constraints before designing a solution.",
      },
      {
        title: "Design",
        description:
          "Plan clean architecture, scalable systems, and maintainable code before implementation.",
      },
      {
        title: "Build",
        description:
          "Develop reliable software with modern technologies, testing, and performance in mind.",
      },
      {
        title: "Improve",
        description:
          "Continuously iterate based on feedback, analytics, and real-world usage.",
      },
    ],
    cta: "Let's build something meaningful.",
  },

  pricing: [
    {
      name: "Starter",
      price: "Contact",
      description: "Simple websites, landing pages, and personal portfolios.",
      features: [
        "Responsive Design",
        "SEO Ready",
        "Modern UI",
      ],
    },
    {
      name: "Professional",
      price: "Contact",
      description: "Full-stack web applications and business solutions.",
      features: [
        "Authentication",
        "Backend APIs",
        "Database",
        "Deployment",
      ],
      highlighted: true,
    },
    {
      name: "Custom",
      price: "Let's Talk",
      description: "Large-scale products, SaaS platforms, AI integrations, and long-term collaborations.",
      features: [
        "Custom Architecture",
        "Scalable Infrastructure",
        "Ongoing Support",
      ],
    },
  ] satisfies PricingPlan[],

  about: {
    title: "About Me",
    paragraphs: [
      "I'm Muhammad Maaz, a software engineer passionate about building reliable software and understanding the principles behind great systems. I spend most of my time developing full-stack applications while studying computer science fundamentals, system design, artificial intelligence, networking, and cybersecurity.",

      "Beyond programming, I'm passionate about entrepreneurship, content creation, and sharing what I learn. My goal is to build products that solve meaningful problems while continuously improving as an engineer and lifelong learner.",
    ],
  },

  faq: [
    {
      question: "What technologies do you work with?",
      answer:
        "I primarily work with TypeScript, React, Next.js, React Native, Node.js, Express, Prisma, SQL databases, and modern web technologies.",
    },
    {
      question: "What kinds of projects interest you?",
      answer:
        "I enjoy building SaaS platforms, full-stack applications, developer tools, AI-powered software, and scalable backend systems.",
    },
    {
      question: "Are you available for freelance work?",
      answer:
        "Yes. I'm open to freelance projects, long-term collaborations, and opportunities to work with startups and product teams.",
    },
    {
      question: "How can I contact you?",
      answer:
        "The fastest way is via email or LinkedIn. I'm always happy to connect with developers, founders, and anyone passionate about technology.",
    },
  ] satisfies FaqItem[],

  contact: {
    title: "Let's Build Together",
    description:
      "Whether you're building a startup, a web application, or an AI-powered product, I'd love to hear about it.",
    cta: "Get in Touch",
  },
} as const;
