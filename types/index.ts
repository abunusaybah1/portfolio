export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  overview: string;
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

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  updated_at: string;
}

export interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}
