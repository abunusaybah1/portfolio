"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Avatar from "@/public/images/avatar.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(8,12,20,0.92)] backdrop-blur-md border-b border-[rgba(0,229,255,0.15)]"
            : "bg-transparent"
        }`}
      >
        <Image src={Avatar} alt="Abdulmatiin" width={40} height={40} />

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.82rem] text-[#8892A4] tracking-widest uppercase transition-colors hover:text-[#00E5FF]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block px-4 py-2 border border-[#00E5FF] text-[#00E5FF] font-mono text-[0.82rem] rounded-sm transition-all hover:bg-[#00E5FF] hover:text-black"
        >
          Hire me
        </a>
        <button
          className="md:hidden flex flex-col gap-1.25 p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#F0F4FF] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.75" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#F0F4FF] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#F0F4FF] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.75]" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080C14] flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium text-[#F0F4FF] hover:text-[#00E5FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3 border border-[#00E5FF] text-[#00E5FF] font-mono text-sm rounded hover:bg-[#00E5FF] hover:text-black transition-all"
          >
            Hire me
          </a>
        </div>
      )}
    </>
  );
}
