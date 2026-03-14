export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
  slug: string;
};

export type Skill = {
  category: string;
  name: string;
  level: number; // 1-5
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};
