import { Project, Skill, Experience } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Rezume",
    description:
      " A modern resume builder application that allows users to create and customize their resumes with ease. It features a user-friendly interface, real-time preview, and various templates to choose from.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/abunusaybah1/rezume",
    demo: "https://rezume-pi.vercel.app/",
    overview:
      " Rezume is a user-friendly resume builder that simplifies the process of creating professional resumes. With a variety of templates and real-time preview, users can easily customize their resumes to stand out to potential employers.",
    image: "/images/rezume.png",
    featured: true,
    slug: "rezume",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      " A collaborative task management application that allows teams to organize and track their work efficiently. It includes features like boards for organization,columns for tasks status and cards to hold task information.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/abunusaybah1/ckb",
    demo: "https://ckb-nine.vercel.app/",
    image: "/images/ckb.png",
    featured: true,
    slug: "ckb",
    overview:
      " CKB is a collaborative task management app designed to help teams organize and track their work efficiently. With features like boards, columns, and cards, CKB provides a flexible and intuitive way to manage projects and tasks, fostering better collaboration and productivity among team members.",
  },
  {
    id: "3",
    title: "Image tools",
    description:
      "A collection of image manipulation tools built with Next.js and Tailwind CSS. It includes features like image compression to desired size in KB and format conversion from jpeg to PNG, providing users with a simple and efficient way to edit their images online.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
    github: "https://github.com/abunusaybah1/im-convert",
    demo: "https://im-convert.vercel.app/",
    image: "/images/im-convert.png",
    featured: false,
    slug: "im-convert",
    overview:
      " A collection of image manipulation tools built with Next.js and Tailwind CSS. It includes features like image compression to desired size in KB and format conversion from jpeg to PNG, providing users with a simple and efficient way to edit their images online. The application leverages the Canvas API to perform image processing directly in the browser, ensuring a fast and seamless user experience without the need for server-side processing.",
  },
  {
    id: "4",
    title: "Clause clone",
    description:
      "A clone of the Clause legal document management platform, built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/abunusaybah1/clause-clone",
    demo: "https://clause-clone.vercel.app/",
    image: "/images/clause-clone.png",
    featured: false,
    slug: "clause-clone",
    overview:
      " A clone of the Clause legal document management platform, built with Next.js and Tailwind CSS. This project replicates key features of the original platform, such as document creation, editing, and collaboration tools, providing users with a seamless experience for managing their legal documents online.",
  },
];

export const skills: Skill[] = [
  { category: "Frontend", name: "React.js", level: 5 },
  { category: "Frontend", name: "Next.js", level: 5 },
  { category: "Frontend", name: "TypeScript", level: 5 },
  { category: "Frontend", name: "Tailwind CSS", level: 5 },
  { category: "Tools", name: "Git/GitHub", level: 5 },
  { category: "Frontend", name: "Sass", level: 3 },
  { category: "Tools", name: "Visual Studio Code", level: 5 },
  { category: "Tools", name: "Figma", level: 3 },
  { category: "Frontend", name: "React Native", level: 4 },
  { category: "Frontend", name: "Zustand", level: 3 },
];

export const experiences: Experience[] = [
  //   {
  //     id: "1",
  //     role: "Senior Frontend Developer",
  //     company: "Tech Corp",
  //     period: "2022 - Present",
  //     description:
  //       "Led development of multiple React applications, mentored junior developers, and implemented best practices for code quality and performance.",
  //     technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  //   },
  //   {
  //     id: "2",
  //     role: "Frontend Developer",
  //     company: "Startup Inc",
  //     period: "2020 - 2022",
  //     description:
  //       "Developed responsive web applications using modern JavaScript frameworks, collaborated with design teams, and optimized application performance.",
  //     technologies: ["React", "Vue.js", "Sass", "Webpack"],
  //   },
];

export const personalInfo = {
  name: "Abdulmatiin",
  role: "Frontend Developer",
  bio: "Passionate frontend developer with 3+ years of experience building scalable web applications. Expertise in React, Next.js, and modern web technologies.",
  email: "abdulmatiinismail@gmail.com",
  github: "https://github.com/abunusaybah1",
  linkedin: "https://www.linkedin.com/in/abdulmatiin--440aa7260/",
  resume: "files/Abdulmatiin resume.pdf",
};
