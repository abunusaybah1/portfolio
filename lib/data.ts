export const personalInfo = {
  name: "Ismail Abdulmatiin",
  handle: "IA.dev",
  role: "Frontend Developer & UI Engineer",
  tagline:
    "I build high-performance, accessible web experiences with React, Next.js, and TypeScript. Clean code. Sharp interfaces. Real impact.",
  email: "abdulmatiin@gmail.com",
  github: "https://github.com/abunusaybah1",
  live: "https://abunusaybah.vercel.app",
  location: "Nigeria 🇳🇬",
  locationLabel: "Nigeria · Remote Worldwide",
  available: true,
  stats: [
    { num: "2+", label: "Years Experience" },
    { num: "15+", label: "Projects Built" },
    { num: "5+", label: "Technologies" },
  ],
};

export const aboutDetails = [
  { label: "Status", value: "Open to work" },
  { label: "Speciality", value: "Frontend / UI Engineering" },
  { label: "Stack", value: "React · Next.js · TypeScript" },
  { label: "Styling", value: "Tailwind · CSS · Framer" },
  { label: "Backend", value: "Node.js · REST · Firebase" },
  { label: "Based in", value: "Nigeria 🇳🇬" },
  { label: "Languages", value: "English · Arabic" },
];

export interface Skill {
  name: string;
  icon: string;
  level: string;
  percent: number;
}

export const skills: Skill[] = [
  { name: "React", icon: "⚛️", level: "Expert", percent: 92 },
  { name: "Next.js", icon: "▲", level: "Advanced", percent: 88 },
  { name: "TypeScript", icon: "🔷", level: "Advanced", percent: 85 },
  { name: "Tailwind", icon: "🌊", level: "Expert", percent: 95 },
  { name: "JavaScript", icon: "💛", level: "Expert", percent: 93 },
  { name: "CSS", icon: "🎨", level: "Expert", percent: 90 },
  { name: "Firebase", icon: "🔥", level: "Intermediate", percent: 72 },
  { name: "Node.js", icon: "🟢", level: "Intermediate", percent: 68 },
  { name: "Git", icon: "🐙", level: "Advanced", percent: 88 },
  { name: "Vite", icon: "⚡", level: "Advanced", percent: 85 },
  { name: "Framer", icon: "🎭", level: "Intermediate", percent: 70 },
  { name: "REST API", icon: "🗄️", level: "Advanced", percent: 82 },
];

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export const experience: Experience[] = [
  {
    period: "2024 — Present",
    title: "Frontend Developer",
    company: "Freelance / Contract",
    description:
      "Building production web applications for clients across Nigeria and internationally. Delivering high-quality React and Next.js solutions, from design system implementation to full-stack feature development.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    period: "2023 — 2024",
    title: "React Developer",
    company: "Personal Projects & Open Source",
    description:
      "Developed and shipped multiple portfolio and SaaS-style projects. Built production-grade React applications with a focus on performance, clean architecture, and modern UI patterns.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
  },
  {
    period: "2022 — 2023",
    title: "Frontend Engineering — Self-Taught Journey",
    company: "Continuous Learning",
    description:
      "Mastered the fundamentals of HTML, CSS, and JavaScript through intensive self-study, building projects at every stage. Progressed into React, TypeScript, and modern tooling.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export interface Project {
  num: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  status?: "live" | "github" | "wip";
}

export const projects: Project[] = [
  {
    num: "001",
    title: "Developer Portfolio Platform",
    description:
      "A production-grade portfolio platform built with Next.js 16, TypeScript, and Tailwind CSS 4. Features SSR, SEO optimization, GitHub integration, and flexbox-only layouts.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/abunusaybah1/portfolio",
    live: "https://abunusaybah.vercel.app",
    featured: true,
    status: "live",
  },
  {
    num: "002",
    title: "React Portfolio v1",
    description:
      "First iteration of the portfolio built with React and Vite. Clean component architecture with custom CSS animations and a modular design system.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/abunusaybah1/my-portfolio",
    status: "github",
  },
  {
    num: "003",
    title: "E-Commerce UI",
    description:
      "A modern storefront UI with product filtering, cart management, and checkout flow. Built with React, custom hooks, and a mobile-first design approach.",
    tags: ["React", "Context API", "Tailwind"],
    github: "#",
    live: "#",
    status: "live",
  },
  {
    num: "004",
    title: "Dashboard Analytics",
    description:
      "A data-rich analytics dashboard with charts, real-time stats, and filterable tables. TypeScript-first with a strong component API and responsive layout.",
    tags: ["TypeScript", "Recharts", "Next.js", "Tailwind"],
    github: "#",
    status: "github",
  },
  {
    num: "005",
    title: "Auth System",
    description:
      "A complete authentication system with JWT, protected routes, role-based access, and Firebase integration. Reusable auth hooks and context pattern.",
    tags: ["React", "Firebase", "TypeScript", "JWT"],
    github: "#",
    status: "github",
  },
  {
    num: "006",
    title: "Task Management App",
    description:
      "A full-featured task manager with drag-and-drop boards, priority labels, due dates, and real-time updates via Firebase. Built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    status: "live",
  },
];
