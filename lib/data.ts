import { Project, Skill, Experience } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/username/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    featured: true,
    slug: "ecommerce-platform",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
    ],
    github: "https://github.com/username/task-manager",
    demo: "https://taskmanager-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    featured: true,
    slug: "task-management-app",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current weather and forecasts using OpenWeatherMap API.",
    technologies: ["React", "Chart.js", "Axios", "CSS Modules"],
    github: "https://github.com/username/weather-dashboard",
    demo: "https://weather-demo.vercel.app",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    featured: false,
    slug: "weather-dashboard",
  },
  // Add more projects as needed
];

export const skills: Skill[] = [
  { category: "Frontend", name: "React", level: 5 },
  { category: "Frontend", name: "Next.js", level: 5 },
  { category: "Frontend", name: "TypeScript", level: 4 },
  { category: "Frontend", name: "Tailwind CSS", level: 5 },
  { category: "Backend", name: "Node.js", level: 4 },
  { category: "Backend", name: "Express", level: 4 },
  { category: "Database", name: "MongoDB", level: 4 },
  { category: "Database", name: "PostgreSQL", level: 3 },
  { category: "Tools", name: "Git", level: 5 },
  { category: "Tools", name: "Docker", level: 3 },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description:
      "Led development of multiple React applications, mentored junior developers, and implemented best practices for code quality and performance.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: "2",
    role: "Frontend Developer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications using modern JavaScript frameworks, collaborated with design teams, and optimized application performance.",
    technologies: ["React", "Vue.js", "Sass", "Webpack"],
  },
];

export const personalInfo = {
  name: "Ismail Abdulmatiin",
  role: "Frontend Developer",
  bio: "Passionate frontend developer with ~1 year of experience building scalable web applications. Expertise in React, Next.js, and modern web technologies.",
  email: "ayobamidolapo419@gmail.com",
  github: "https://github.com/abunusaybah1",
  linkedin:
    "https://www.linkedin.com/in/abdulmatiin-ismail-440aa7260/",
  resume:
    "https://drive.google.com/file/d/12u6eE8Rh_-mRpCKIjPd8yPkNMpLwQ9xo/view?usp=drive_link",
};
