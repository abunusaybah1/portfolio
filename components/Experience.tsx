"use client";

import { experience } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export default function Experience() {
  useReveal();

  return (
    <section id="experience" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="reveal font-mono text-[0.72rem] text-[#00E5FF] tracking-[0.15em] uppercase mb-2">
          03 — Experience
        </p>
        <h2 className="reveal text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-0.02em] mb-4">
          Where I&apos;ve worked
        </h2>
        <div className="reveal w-10 h-0.5 bg-[#00E5FF] mb-12" />

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(0,229,255,0.15)]" />

          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.period} className="reveal pl-8 relative">
                {/* Dot */}
                <div className="absolute left-[-4px] top-1.5 w-[9px] h-[9px] bg-[#00E5FF] rounded-full border-2 border-[#080C14]" />

                <div className="font-mono text-[0.72rem] text-[#00E5FF] tracking-[0.05em] mb-1.5">
                  {exp.period}
                </div>
                <div className="text-[1.15rem] font-semibold mb-1">
                  {exp.title}
                </div>
                <div className="text-[0.9rem] text-[#8892A4] mb-3">
                  {exp.company}
                </div>
                <p className="text-[0.9rem] text-[#8892A4] leading-[1.8]">
                  {exp.description}
                </p>
                <div className="flex gap-2 flex-wrap mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.68rem] bg-[rgba(0,229,255,0.06)] border border-[rgba(0,229,255,0.15)] text-[#00E5FF] px-2 py-0.5 rounded-[3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
