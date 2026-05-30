import { env } from "../config/env";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  exploreLink: string;
}

export interface ProjectItem {
  title: string;
  category: "Web/App Dev" | "DevOps" | "SEO";
  metric: string;
  image: string;
  alt: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  metric?: string;
  image?: string;
}

export interface TeamMemberItem {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  badge: string;
  links: {
    github?: string;
    linkedin?: string;
    website?: string;
    resume?: string;
  };
}

export const SITE_METADATA = {
  name: "QuadOps",
  email: env.companyEmail,
  location: "Mohali, Punjab, India",
  phone: env.companyPhone,
  address: "969, Sector 91, SAS Nagar, Mohali, Punjab 140307",
  hero: {
    titleLines: ["High-end Web/Apps.", "Robust DevOps.", "Targeted SEO."],
    badge: "Launching Careers",
    description:
      "We are a fresh, hungry freelance collective of developers, infrastructure builders, and optimization specialists. We bring modern tech stacks and 100% focused energy to kickstart your next digital product.",
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web_dev",
    title: "Web & Mobile App Development",
    description:
      "Custom high-performance web applications and native iOS/Android mobile apps. Crafted using Next.js, React, React Native, Node.js, and TypeScript for seamless user flow.",
    icon: "devices",
    badge: "Full Stack",
    exploreLink: "#portfolio",
  },
  {
    id: "devops",
    title: "DevOps & Cloud Automation",
    description:
      "Scale your systems with automated infrastructure, zero-downtime CI/CD pipelines, container orchestration, security auditing, and cloud configurations across AWS and GCP.",
    icon: "terminal",
    badge: "Infrastructure",
    exploreLink: "#portfolio",
  },
  {
    id: "seo",
    title: "Technical SEO & Speed Optimization",
    description:
      "Scale organic rankings and drive qualified traffic. We align semantic markup, schema configurations, performance optimization, and custom dashboards to dominate search results.",
    icon: "query_stats",
    badge: "Digital Growth",
    exploreLink: "#portfolio",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Lumina Banking Platform",
    category: "Web/App Dev",
    metric: "+140% User Growth",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKhT93ksbOLAKquKT1D2HFjC4nZCqxC6LZiK54-DFb-p-Cfl-ZBZ7GM61xVf813jXUGnujJbaxdrFUsX4j38fozUCZvNPap_FTizio1iu2wS8MSMnCD52v8OJijC3gv2C7_DE75Fi5RxYALJ9P3szS28pS0BxLqAkXc6ahxvqqIwU63wpjEhy8XZGn47Z1Z_sRnVNuSbnpfunI7yuYeMx6hWNHeTTAO2VBlBr7e4xDO01FnCiWg4bt1Wrp4X9RR0bjbaVxSvOjm70",
    alt: "Fintech App UI mockup",
  },
  {
    title: "Zenith Infrastructure Hub",
    category: "DevOps",
    metric: "40% Server Cost Saved",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiqrjKC7hpol-mKI2i4iDm6_es1XaVGpMgBzky9pSDtPG31OOEaiW7L-5Y6X3w0o9dsXzUpzCPHzDjZGn-8LikROIqz9E-kukFq3CUzGevQLDGn_IbSnX8HUts4koQk54JLeJ8yk_sLE4TsvL11flCXE4XM9GQmJcIoPDwpCX8I9esmTTyvHt5kpExB9x_348dkiayqolx7ncspgydIvUEUOvilorqIxGNjJ6QXPtM47EUsMbAwSDw4y4LTbQuEiXAjhP8HMdd6sU",
    alt: "Abstract 3D Cloud visualization",
  },
  {
    title: "Nordic E-Commerce SEO",
    category: "SEO",
    metric: "3.2x Organic Revenue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxLP3CvwfEc6__g1AJaJ7vlJri8_NuXTNiZ_t6g8rWKCinj-F2eNgRoU9-czdXxxmKAT2H-vXuEqyt5X34XPHx29-ysrDMcTzG6YGJBcsbTJ_6xdMgoD5XztQOCdKo6uCWM71JXPUwwIvvrjLCE6mTGSCuR6pWFAnwPdWkPl_Kj2QiNOxOWrdaBp_xCIryrax7Snq7A15BoNBlytlSdz44Zt-c5ZYQwpiL7vl2DKL0zB3V9T0NnqR6DmBX60IVldXK1REHIDmPuFE",
    alt: "Premium Furniture shop interface",
  },
  {
    title: "Pulse Health Analytics App",
    category: "Web/App Dev",
    metric: "99.9% Data Uptime",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUBm9VYVWotQWDgRQczDxhQYckD7ej_FrkoL9_FnU7j68GXDVRtCOPBqFPUi8SQbkUNB0tiAxQrhLfN6PF5GbrhtP47KPoce5BkycjV4Lthbi7xFrxVll1RiGDZWDzQHjGyGDbHPag8JqqNtkWQVXbpcgGM6NQGoaPzbVB2j6UzbTnaH97JXruTIgfXSqpsQbHNJ5Isw9RWEP4zj1Hp-T87XBrlbVskwII9c81bVQTtT176IbDYdongohVuqCrvIdlWBgsG1BYgUE",
    alt: "Healthcare data dashboard layout",
  },
  {
    title: "Scalable CI/CD Architecture",
    category: "DevOps",
    metric: "80% Faster Releases",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbfxN3laXhbbwVjlVgtsuzabFOyY_cBdDtJdnIW_W9dgDPbALqOKuAi42TUrvu4VyB0cFDNG1lxtt_XDwtRU5Npa4dE9HVZ-4iPKygVXGTJ8kbsSPIAEoFfv7QN-kmiblU1DnUXy_rPahxYSyphHKUGbmBjT4Ia4C8Dv7M1sFU5tBvpL6v7-1cmTm3gBwh_57iYf4jKu271AaqjsO2G6UiARovcUTFzPNZMiMDP9Dsc2rCXyduaJ806XiSr2s18LcZR1XS82jS6XY",
    alt: "Kubernetes monitoring dashboard visualization",
  },
  {
    title: "Speed Boost & Core Web Vitals",
    category: "SEO",
    metric: "Rank #1 for Target Terms",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOOHWTZ5conpgBfeb0_EieQBngFAloWP58Nn2bIRC_MiwAaX3I-HgHC78UHTT2D5EJLeznu6Ox9A0AHGOa40Hg1SpAZLlhxAuLV1goyHJ7VDY3d3RAvxpkbOe3aF91e2UhJI6v-iOMyae6Y5i4nCSiD9rG-6mLMmyzV217d38kOiiBuMJBKER5M828kmar7sh2xvTrlpeUgGkGNmZuPYa7svEuzzNtqzUnT4gO7l_jDTcKbarOEsQO9rCBxU2q_O8CWxnBTf10zSI",
    alt: "Analytics organic traffic boost curves",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Mark Thompson",
    role: "CEO",
    company: "TechFlow Systems",
    quote:
      "QuadOps exceeded our freelancing expectations. They built a custom dashboard and deployed an automated CI/CD pipeline on AWS. User retention surged by 8x, and deployment bottlenecks vanished.",
    metric: "8x User Retention Boost",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Product",
    company: "GlobalLogix Inc",
    quote:
      "Their precision in every pixel is remarkable. QuadOps developed our mobile application and streamlined our cloud instances. It's the cleanest code and interface our engineers have worked with.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOOHWTZ5conpgBfeb0_EieQBngFAloWP58Nn2bIRC_MiwAaX3I-HgHC78UHTT2D5EJLeznu6Ox9A0AHGOa40Hg1SpAZLlhxAuLV1goyHJ7VDY3d3RAvxpkbOe3aF91e2UhJI6v-iOMyae6Y5i4nCSiD9rG-6mLMmyzV217d38kOiiBuMJBKER5M828kmar7sh2xvTrlpeUgGkGNmZuPYa7svEuzzNtqzUnT4gO7l_jDTcKbarOEsQO9rCBxU2q_O8CWxnBTf10zSI",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder & CMO",
    company: "Elevate E-Retail",
    quote:
      "For our e-commerce relaunch, QuadOps did technical SEO audits, improved Core Web Vitals, and designed custom Next.js frontend components. Organic traffic grew by 240% in just two months!",
    metric: "+240% Search Traffic",
  },
];

export const TEAM: TeamMemberItem[] = [
  {
    name: "Sachin Bharbey",
    role: "Lead Fullstack & Mobile App Engineer",
    bio: "Custom mobile apps with React Native, high-performance web frontends, backend APIs, and database structures.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbfxN3laXhbbwVjlVgtsuzabFOyY_cBdDtJdnIW_W9dgDPbALqOKuAi42TUrvu4VyB0cFDNG1lxtt_XDwtRU5Npa4dE9HVZ-4iPKygVXGTJ8kbsSPIAEoFfv7QN-kmiblU1DnUXy_rPahxYSyphHKUGbmBjT4Ia4C8Dv7M1sFU5tBvpL6v7-1cmTm3gBwh_57iYf4jKu271AaqjsO2G6UiARovcUTFzPNZMiMDP9Dsc2rCXyduaJ806XiSr2s18LcZR1XS82jS6XY",
    badge: "Fullstack & App Dev",
    links: {
      github: "#",
      linkedin: "#",
      resume: "/resumes/Sachin_Bharbey_Resume.pdf",
    },
  },
  {
    name: "Abhishek Kumar",
    role: "Team Lead & DevOps Engineer",
    bio: "Founding Team Lead and lead infrastructure architect. Expert in automated deployments, Docker environments, Kubernetes orchestration, and cloud scale on AWS/GCP.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxLn9RJPGzr86HN1j-GCIrubffezz3SSHbbQMgm3NcWavK4bTOgawTR4aL4E_TwTfLplhUowDcxbW9nhOZPLzb4wWJTYXESVp7wqCLOGsO2D8z3hPXLkyprFT4zKmmofNVoEM-1uohcXn7l83nHDlOQYN2mdTh9Y_4L982LCWhQ5kbzJuSZIpVkMMrM2IX4oXo7DnfvtePDQKXGSQFncCsJABY4d-1Id7Sr9QZQmKO_P_dQPSMS2egHzAItrTej6PGx7tRvpDnrj0",
    badge: "Team Lead & DevOps",
    links: {
      resume: "/resumes/Sachin_Bharbey_Resume.pdf",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Arjun Singh",
    role: "Full Stack Engineer",
    bio: "Scalable Next.js applications, custom dashboard layouts, database orchestration, and dynamic user interfaces.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBT2U88IErZ8rl7diZ-_uoQSAi7jZCurfZdh1s6nOLSndjTqIiEnD8DkUmLCPZ2EBPeoV--h2LhUm9RVyHSAWisAmEJC79OS1vcm5IuL2rIfEgc2VEG9APjFug6zfH374dKn3X7ppc-p1nUfPz4FJPKeq6d979SssEyQap14B2d_dCo4QiZgKqHPMFgANruuynsnUJFiFJDxUSlW37LLyvQewDGV9UgbVlOxYhx7RibA9Xi0alEa2z8pXKwuqvrsDfbBrqWJ2w3LU",
    badge: "Fullstack Developer",
    links: {
      resume: "/resumes/Sachin_Bharbey_Resume.pdf",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Aashu Sindhu",
    role: "SEO & Growth Specialist",
    bio: "Search engines keyword planning, PageSpeed optimizations, metadata structure setups, and core web vitals auditing.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3o3v0BkRZlTOrUtrTzPaywTju4DHe-guZmJEySMgChP73n6OHPiN4CX39b-GEQj9QZ2Q3CS1A-hjF4ylv-rChh2kELGt9hD9olSy_KYIspU2wfoSpFhrTDYhuqfcIV_exdmYsXfy06_uynmsSUNlFoZTF-he6n-cup2v1fl7HCkyfijrTLMXuqljDMxx5_Nc5whNcRsx9QpJRJbt0G1G_7wqkTGTSaOY33BekBO6QjvzSEwVt5pBNt4GTPGrnh3C8KY56z7c00R0",
    badge: "SEO & Growth",
    links: {
      resume: "/resumes/Sachin_Bharbey_Resume.pdf",
      github: "#",
      linkedin: "#",
    },
  },
];
