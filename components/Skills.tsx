"use client";

import { skills } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export default function Skills() {
  useReveal();

  return (
    <section id="skills" className="py-24 px-8 bg-[#0D1421]">
      <div className="max-w-6xl mx-auto">
        <p className="reveal font-mono text-[0.72rem] text-[#00E5FF] tracking-[0.15em] uppercase mb-2">
          02 — Skills
        </p>
        <h2 className="reveal text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-0.02em] mb-4">
          Technology I use
        </h2>
        <div className="reveal w-10 h-0.5 bg-[#00E5FF] mb-12" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="reveal bg-[#111827] border border-[rgba(0,229,255,0.15)] rounded-[6px] p-4 text-center transition-all duration-250 hover:border-[#00E5FF] hover:bg-[rgba(0,229,255,0.06)] hover:-translate-y-1 cursor-default group"
            >
              <div className="text-[1.6rem] mb-2">{skill.icon}</div>
              <div className="text-[0.82rem] font-medium text-[#F0F4FF]">
                {skill.name}
              </div>
              <div className="font-mono text-[0.68rem] text-[#8892A4] mt-0.5">
                {skill.level}
              </div>
              <div className="h-0.5 bg-[rgba(0,229,255,0.15)] rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-[#00E5FF] rounded-full transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
