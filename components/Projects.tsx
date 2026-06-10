"use client";

import { projects, type Project } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="reveal bg-[#0D1421] border border-[rgba(0,229,255,0.15)] rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(0,229,255,0.4)] hover:shadow-[0_20px_60px_rgba(0,229,255,0.08)] flex flex-col">
      <div className="p-6 border-b border-[rgba(0,229,255,0.15)] flex-1">
        <div className="flex justify-between items-start mb-3">
          <span className="font-mono text-[0.75rem] text-[#00E5FF] opacity-50">
            {project.num}
          </span>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="font-mono text-[0.65rem] bg-[rgba(0,229,255,0.12)] text-[#00E5FF] px-2 py-0.5 rounded-[3px] border border-[rgba(0,229,255,0.3)]">
                Featured
              </span>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 border border-[rgba(0,229,255,0.15)] rounded-sm flex items-center justify-center text-[0.75rem] text-[#8892A4] transition-all hover:text-[#00E5FF] hover:border-[#00E5FF]"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 border border-[rgba(0,229,255,0.15)] rounded-sm flex items-center justify-center text-[0.75rem] text-[#8892A4] transition-all hover:text-[#00E5FF] hover:border-[#00E5FF]"
                aria-label="Live"
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        <div className="text-[1.05rem] font-semibold mb-2">{project.title}</div>
        <p className="text-[0.85rem] text-[#8892A4] leading-[1.7]">
          {project.description}
        </p>
      </div>

      <div className="px-6 py-3 flex gap-1.5 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.68rem] text-[#8892A4] bg-[rgba(255,255,255,0.04)] px-2 py-0.5 rounded-[3px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  useReveal();

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="reveal font-mono text-[0.72rem] text-[#00E5FF] tracking-[0.15em] uppercase mb-2">
          04 — Projects
        </p>
        <h2 className="reveal text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-0.02em] mb-4">
          Things I&apos;ve built
        </h2>
        <div className="reveal w-10 h-0.5 bg-[#00E5FF] mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.num} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
