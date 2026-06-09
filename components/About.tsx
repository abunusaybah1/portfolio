"use client";

import { aboutDetails, personalInfo } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export default function About() {
  useReveal();

  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="reveal font-mono text-[0.72rem] text-[#00E5FF] tracking-[0.15em] uppercase mb-2">
          01 — About
        </p>
        <h2 className="reveal text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-0.02em] mb-4">
          The developer
          <br />
          behind the code
        </h2>
        <div className="reveal w-10 h-0.5 bg-[#00E5FF] mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="reveal space-y-5">
            <p className="text-[#8892A4] leading-[1.9]">
              Hey — I&apos;m{" "}
              <strong className="text-[#F0F4FF]">Ismail Abdulmatiin</strong>, a
              frontend developer who cares deeply about the craft of building
              for the web. I combine technical precision with an eye for design
              to ship products that look as good as they perform.
            </p>
            <p className="text-[#8892A4] leading-[1.9]">
              My stack is centered on{" "}
              <strong className="text-[#F0F4FF]">
                React, Next.js, TypeScript
              </strong>
              , and <strong className="text-[#F0F4FF]">Tailwind CSS</strong> —
              tools I use every day to build production-grade applications.
              I&apos;m comfortable from pixel-perfect UI to full-stack features.
            </p>
            <p className="text-[#8892A4] leading-[1.9]">
              I approach every project like I&apos;m building for a Fortune 500
              company: performance-first, accessibility-aware, and with code
              quality that scales.
            </p>

            <div className="flex gap-3 flex-wrap pt-2">
              {[
                { label: "GitHub", href: personalInfo.github, icon: "⌥" },
                { label: "Live Portfolio", href: personalInfo.live, icon: "↗" },
                { label: "Resume", href: "#contact", icon: "↓" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[0.78rem] text-[#8892A4] border border-[rgba(0,229,255,0.15)] px-3 py-2 rounded-[4px] transition-all hover:text-[#00E5FF] hover:border-[#00E5FF]"
                >
                  {l.icon} {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="reveal bg-[#0D1421] border border-[rgba(0,229,255,0.15)] rounded-lg p-8">
            {aboutDetails.map((row, i) => (
              <div
                key={row.label}
                className={`flex justify-between items-center py-3 ${
                  i < aboutDetails.length - 1
                    ? "border-b border-[rgba(255,255,255,0.05)]"
                    : ""
                }`}
              >
                <span className="font-mono text-[0.8rem] text-[#8892A4]">
                  {row.label}
                </span>
                {row.label === "Status" ? (
                  <span className="inline-flex items-center gap-1.5 bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.3)] px-3 py-1 rounded-[4px] font-mono text-[0.72rem] text-[#00E5FF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] pulse-dot" />
                    {row.value}
                  </span>
                ) : (
                  <span className="text-[0.85rem] text-[#F0F4FF] text-right">
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
