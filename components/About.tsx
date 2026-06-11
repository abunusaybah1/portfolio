"use client";

import { aboutDetails, personalInfo } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import { BiLink } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

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
              I&apos;m <strong className="text-[#F0F4FF]">Abdulmatiin</strong>,
              a frontend developer based in Lagos. I build with{" "}
              <strong className="text-[#F0F4FF]">
                React, Next.js, and TypeScript
              </strong>
              ... not just names, but tools I work with every day.
            </p>
            <p className="text-[#8892A4] leading-[1.9]">
              I work at the intersection of UI and product: how something looks,
              how fast it gets there, and whether the code behind it still makes
              sense months later. Design and engineering aren&apos;t separate
              concerns to me... they go hand-in-hand.
            </p>
            <p className="text-[#8892A4] leading-[1.9]">
              I&apos;ve contributed to real products in team settings, taken on
              leadership in frontend work, and I have projects in the pipeline.
              I&apos;m early in my career and building deliberately.
            </p>

            <div className="flex gap-3 flex-wrap pt-2">
              {[
                {
                  label: "GitHub",
                  href: personalInfo.github,
                  icon: <GrGithub />,
                },
                {
                  label: "Live Portfolio",
                  href: personalInfo.live,
                  icon: <BiLink />,
                },
                {
                  label: "Resume",
                  href: "/files/Abdulmatiin-Ismail-Resume.pdf",

                  icon: <FaDownload />,
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[0.78rem] text-[#8892A4] border border-[rgba(0,229,255,0.15)] px-3 py-2 rounded-sm transition-all hover:text-[#00E5FF] hover:border-[#00E5FF]"
                >
                  {l.icon} {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="reveal bg-[#0D1421] border border-[rgba(0,229,255,0.15)] rounded-lg p-8">
            {aboutDetails.map((row, i) => (
              <div
                key={i}
                className={`flex justify-between items-center py-3 ${
                  i < aboutDetails.length - 1
                    ? "border-b border-[rgba(255,255,255,0.05)]"
                    : ""
                }`}
              >
                <span className="font-mono text-[0.8rem] text-[#8892A4] f-1 w-[35%]">
                  {row.label}
                </span>
                <span className="text-[0.85rem] text-[#F0F4FF] text-right w-[65%]">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
