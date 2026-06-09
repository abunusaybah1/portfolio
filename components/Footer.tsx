import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 py-10 border-t border-[rgba(0,229,255,0.15)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[0.85rem] text-[#00E5FF]">
          {personalInfo.handle}
        </div>
        <div className="text-[0.8rem] text-[#8892A4]">
          © {year} Ismail Abdulmatiin · Built with Next.js + Tailwind
        </div>
        <div className="flex gap-6">
          {[
            { label: "Top", href: "#home" },
            { label: "GitHub", href: personalInfo.github, external: true },
            { label: "Live", href: personalInfo.live, external: true },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="text-[0.8rem] text-[#8892A4] transition-colors hover:text-[#00E5FF]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
