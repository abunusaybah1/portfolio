import type { IconType } from "react-icons";
import { FaCode, FaCss3Alt, FaFigma } from "react-icons/fa";
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const personalInfo = {
  name: "Ismail Abdulmatiin",
  role: "Frontend Developer & UI Engineer",
  tagline:
    "I build high-performance, accessible web experiences with React, Next.js, and TypeScript. Clean code. Sharp interfaces. Real impact.",
  email: "ayobamidolapo419@gmail.com",
  github: "https://github.com/abunusaybah1",
  linkedin: "https://www.linkedin.com/in/abdulmatiin-ismail-440aa7260",
  twitter: "https://x.com/aNameCanBeEmpty",
  live: "https://abunusaybah.vercel.app",
  location: "Lagos, Nigeria",
  locationLabel: "Lagos, Nigeria · Remote",
  available: true,
  stats: [
    { num: "3+", label: "Years Experience" },
    { num: "5+", label: "Projects Built" },
    { num: "7+", label: "Technologies" },
  ],
};

export const aboutDetails = [
  { label: "Speciality", value: "Frontend Dev." },
  { label: "Stack", value: "React.js · Next.js · TypeScript · Supabase" },
  { label: "Styling", value: "Tailwind · CSS" },
  { label: "Based in", value: "Lagos, Nigeria" },
  { label: "Languages", value: "English · Yoruba · Arabic" },
];

export interface Skill {
  name: string;
  icon: IconType;
  level: string;
  percent: number;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "Expert",
    percent: 93,
  },
  { name: "React", icon: SiReact, level: "Expert", percent: 92 },
  { name: "Next.js", icon: SiNextdotjs, level: "Advanced", percent: 88 },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: "Advanced",
    percent: 85,
  },
  { name: "CSS", icon: FaCss3Alt, level: "Expert", percent: 90 },
  { name: "Tailwind", icon: SiTailwindcss, level: "Expert", percent: 100 },
  { name: "Figma", icon: FaFigma, level: "Expert", percent: 95 },
  { name: "Git", icon: SiGit, level: "Expert", percent: 90 },
  {
    name: "Supabase",
    icon: SiSupabase,
    level: "Advanced",
    percent: 72,
  },
  { name: "REST API", icon: FaCode, level: "Advanced", percent: 82 },
  { name: "Node.js", icon: SiNodedotjs, level: "Beginner", percent: 20 },
  { name: "SEO", icon: FaCode, level: "Advanced", percent: 70 },
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
    period: "2026 — Present",
    title: "Frontend AI Engineering Intern",
    company: "Flyrank AI",
    description:
      " Working on AI-powered web applications, focusing on frontend development with React, Next.js, and TypeScript. Implementing responsive designs and integrating AI features into user interfaces.",
    tags: ["React", "Next.js", "TypeScript", "AI Integration"],
  },
  {
    period: "2024 — Present",
    title: "Frontend Developer",
    company: "Projects & Collaborations",
    description:
      "Working on real products both solo and in teams — covering UI implementation, component architecture, and frontend integration with backends. Stack has grown from React to Next.js, Tailwind, and Supabase.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    period: "2023 — Present",
    title: "Founder & Frontend Tutor",
    company: "Almattech Academy",
    description:
      "Started a frontend development training program, handling curriculum design and student mentorship. Teaching HTML, CSS, and JavaScript to beginners from scratch.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind",
      "Git",
      "GitHub",
      "React",
    ],
  },
  {
    period: "Oct 2025 — Feb 2026",
    title: "Frontend ProDev Program",
    company: "ALX Africa",
    description:
      "Completed an intensive frontend engineering track covering React, Next.js, and TypeScript. Built and shipped projects as part of the curriculum.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    period: "2020 — 2024",
    title: "Self-Taught — Foundation Years",
    company: "Properdot (Udemy), Tutorial Republic, YouTube, W3 Schools, etc",
    description:
      "Started learning on a phone in 2020 with HTML, CSS, Bootstrap, JavaScript, and jQuery. Got a laptop in 2024 and levelled up into React, Tailwind, and Git. Four years of building things before the tools got comfortable.",
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap"],
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
    num: "01",
    title: "Do-Am",
    description:
      "A civic tech platform for reporting and tracking social problems in Nigeria. Think GitHub for public issues.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/abunusaybah1/doam",
    status: "github",
  },
  {
    num: "02",
    title: "CKB",
    description:
      "Built as part of my frontend internship at Talenvo. This project is basically a Trello clone with features such as cards, columns, and boards creation and editing (CRUD). Live and deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://ckb-nine.vercel.app",
    status: "live",
  },
  {
    num: "03",
    title: "Clause Clone",
    description:
      "A pixel-accurate landing page clone of Clause. Built to practice implementing complex UI from Figma to code.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/abunusaybah1/clause-clone",
    live: "https://clause-clone.vercel.app",
    status: "live",
  },
  {
    num: "04",
    title: "Im-convert",
    description:
      "An image utility tool — compress images and convert between JPEG and PNG formats, all in the browser.",
    tags: ["Next.js", "TypeScript"],
    github: "https://github.com/abunusaybah1/im-convert",
    live: "https://im-convert.vercel.app",
    status: "live",
  },
  {
    num: "05",
    title: "Quant",
    description:
      "A WhatsApp-based academic assistant for students. Converting clean UI from Figma to a clean, responsive Landing page with well structured layout.",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/USEQUANT/usequant",
    status: "github",
    featured: true,
  },
  {
    num: "06",
    title: "Rezume",
    description:
      "A resume builder that generates a formatted resume from user inputs. Built as my ALX frontend capstone project.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/abunusaybah1/rezume",
    live: "https://rezume-app.vercel.app",
    status: "live",
    featured: false,
  },
  {
    num: "07",
    title: "Darsiy",
    description:
      "A student study guide and resource management app, currently in active development.",
    tags: ["Next.js", "TypeScript"],
    github: "https://github.com/abunusaybah1/darsiy",
    status: "github",
  },
];
