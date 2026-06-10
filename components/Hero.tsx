"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "@/lib/data";

const codeLines = [
  `<span class="text-purple-400">const</span> developer = {`,
  `  name: <span class="text-green-300">"Abdulmatiin"</span>,`,
  `  role: <span class="text-green-300">"Frontend Developer"</span>,`,
  `  stack: [<span class="text-green-300">"React"</span>, <span class="text-green-300">"Next.js"</span>, <span class="text-green-300">"Typescript"</span>, <span class="text-green-300">"Supabase"</span>, <span class="text-green-300">"Tailwind CSS"</span>],`,
  `  available: <span class="text-purple-400">true</span>,`,
  `  <span class="text-[#00E5FF]">build</span>() {`,
  `    <span class="text-purple-400">return</span> <span class="text-green-300">"amazing products"</span>;`,
  `  }`,
  `};`,
  `<span class="text-[#546E7A]">// Let's work together ↗</span>`,
];

export default function Hero() {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = codeRef.current;
    if (!el) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < codeLines.length) {
        const p = document.createElement("p");
        p.innerHTML = codeLines[i];
        p.className = "leading-relaxed";
        el.appendChild(p);
        i++;
      } else {
        clearInterval(timer);
        const cursor = document.createElement("p");
        cursor.innerHTML = `<span class="typing-cursor"></span>`;
        el.appendChild(cursor);
      }
    }, 180);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-8 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          <div className="flex-1">
            <h1 className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-3">
              Ismail
              <br />
              <span className="text-[#00E5FF]">Abdulmatiin</span>
            </h1>

            <div className="font-mono text-[clamp(0.9rem,2vw,1.1rem)] text-[#8892A4] mb-6">
              &#123;&#47;&#42; Frontend Developer &amp; Backend Enthusiast
              &#42;&#47;&#125;
            </div>

            <p className="text-[clamp(1rem,1.8vw,1.15rem)] text-[#8892A4] max-w-xl leading-[1.8] mb-10">
              {personalInfo.tagline}
            </p>

            <div className="flex gap-4 flex-wrap mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#00E5FF] text-black font-semibold text-[0.9rem] rounded-sm transition-all hover:bg-[#00c4d9] hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 border border-[rgba(0,229,255,0.15)] text-[#F0F4FF] text-[0.9rem] rounded-sm transition-all hover:border-[#00E5FF] hover:text-[#00E5FF]"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-10 flex-wrap">
              {personalInfo.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-[1.8rem] font-bold text-[#00E5FF] leading-none">
                    {s.num}
                  </div>
                  <div className="text-[0.75rem] text-[#8892A4] tracking-widest uppercase mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-85 shrink-0">
            <div className="bg-[#0D1421] border border-[rgba(0,229,255,0.15)] rounded-lg overflow-hidden">
              <div className="bg-[#111827] px-4 py-2.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-3 font-mono text-[0.7rem] text-[#8892A4]">
                  developer.ts
                </span>
              </div>
              <div
                ref={codeRef}
                className="p-5 font-mono text-[0.78rem] leading-[1.8] text-[#8892A4] min-h-55"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

