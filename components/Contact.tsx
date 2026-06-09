"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

const contactItems = [
  { icon: "✉", label: "Email", value: "abdulmatiin@gmail.com" },
  { icon: "⌥", label: "GitHub", value: "github.com/abunusaybah1" },
  { icon: "◎", label: "Location", value: personalInfo.locationLabel },
  { icon: "◷", label: "Response Time", value: "Usually within 24 hours" },
];

export default function Contact() {
  useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-8 bg-[#0D1421]">
      <div className="max-w-6xl mx-auto">
        <p className="reveal font-mono text-[0.72rem] text-[#00E5FF] tracking-[0.15em] uppercase mb-2">
          05 — Contact
        </p>
        <h2 className="reveal text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-0.02em] mb-4">
          Let&apos;s build together
        </h2>
        <div className="reveal w-10 h-0.5 bg-[#00E5FF] mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal flex flex-col gap-4">
            {[
              { label: "YOUR NAME", type: "text", placeholder: "John Doe" },
              {
                label: "EMAIL ADDRESS",
                type: "email",
                placeholder: "john@company.com",
              },
              {
                label: "PROJECT TYPE",
                type: "text",
                placeholder: "Frontend Development / UI Design",
              },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <label className="font-mono text-[0.75rem] text-[#8892A4] tracking-widest">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="bg-[#080C14] border border-[rgba(0,229,255,0.15)] text-[#F0F4FF] px-4 py-3 rounded-[5px] font-display text-[0.9rem] outline-none transition-colors focus:border-[#00E5FF] placeholder:text-[#8892A4]"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.75rem] text-[#8892A4] tracking-widest">
                MESSAGE
              </label>
              <textarea
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="bg-[#080C14] border border-[rgba(0,229,255,0.15)] text-[#F0F4FF] px-4 py-3 rounded-[5px] font-display text-[0.9rem] outline-none transition-colors focus:border-[#00E5FF] placeholder:text-[#8892A4] resize-y"
              />
            </div>

            <button
              type="submit"
              className={`self-start inline-flex items-center gap-2 px-7 py-3 rounded-[4px] font-semibold text-[0.9rem] transition-all ${
                sent
                  ? "bg-[#00FF87] text-black"
                  : "bg-[#00E5FF] text-black hover:bg-[#00c4d9] hover:-translate-y-0.5"
              }`}
            >
              {sent ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>

          {/* Info */}
          <div className="reveal flex flex-col gap-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-5 bg-[#111827] border border-[rgba(0,229,255,0.15)] rounded-lg transition-colors hover:border-[#00E5FF]"
              >
                <div className="w-10 h-10 bg-[rgba(0,229,255,0.12)] rounded-[6px] flex items-center justify-center text-[#00E5FF] text-base flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[0.72rem] text-[#8892A4] uppercase tracking-widest">
                    {item.label}
                  </div>
                  <div className="text-[0.9rem] text-[#F0F4FF] mt-0.5">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="p-6 bg-[rgba(0,229,255,0.04)] border border-[rgba(0,229,255,0.15)] rounded-lg mt-1">
              <div className="font-mono text-[0.72rem] text-[#00E5FF] tracking-widest uppercase mb-2">
                Currently available for
              </div>
              <p className="text-[0.88rem] text-[#8892A4] leading-[1.8]">
                Freelance contracts · Full-time roles
                <br />
                Remote positions · Open source collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
