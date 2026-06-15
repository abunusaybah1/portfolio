"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";
import { MdMail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const contactItems = [
  {
    icon: <MdMail />,
    label: "Send an Email",
    link: personalInfo.email,
    text: personalInfo.email,
  },
  {
    icon: <FaGithub />,
    label: "Connect on GitHub",
    link: personalInfo.github,
    text: "@abunusaybah1",
  },
  {
    icon: <FaLinkedin />,
    label: "Connect on LinkedIn",
    link: personalInfo.linkedin,
    text: "Abdulmatiin Ayobami Ismail",
  },
  {
    icon: <BsTwitter />,
    label: "Connect on X (Twitter)",
    link: personalInfo.twitter,
    text: "@aNameCanBeEmpty",
  },
];

export default function Contact() {
  useReveal();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", projectType: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
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
          <form onSubmit={handleSubmit} className="reveal flex flex-col gap-4">
            {[
              {
                label: "YOUR NAME",
                type: "text",
                name: "name",
                placeholder: "Abdulmatiin Ismail",
              },
              {
                label: "EMAIL ADDRESS",
                type: "email",
                name: "email",
                placeholder: "info@abunusaybah.com.ng",
              },
              {
                label: "PROJECT TYPE/INQUIRY",
                type: "text",
                name: "projectType",
                placeholder: "E-Commerce Website, Portfolio, etc.",
              },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <label className="font-mono text-[0.75rem] text-[#8892A4] tracking-widest">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
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
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project/inquiry..."
                required
                rows={5}
                className="bg-[#080C14] border border-[rgba(0,229,255,0.15)] text-[#F0F4FF] px-4 py-3 rounded-[5px] font-display text-[0.9rem] outline-none transition-colors focus:border-[#00E5FF] placeholder:text-[#8892A4] resize-y"
              />
            </div>

            {error && (
              <p className="text-red-400 font-mono text-[0.75rem]">
                Something went wrong. Try emailing me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={loading || sent}
              className={`self-start inline-flex items-center gap-2 px-7 py-3 rounded-sm font-semibold text-[0.9rem] transition-all ${
                sent
                  ? "bg-[#00FF87] text-black"
                  : "bg-[#00E5FF] text-black hover:bg-[#00c4d9] hover:-translate-y-0.5"
              } disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {sent
                ? "✓ Message Sent!"
                : loading
                  ? "Sending..."
                  : "Send Message"}
            </button>
          </form>

          <div className="reveal flex flex-col gap-4">
            {contactItems.map((item) => (
              <Link
                href={item.link}
                key={item.label}
                className="flex items-center gap-4 p-5 bg-[#111827] border border-[rgba(0,229,255,0.15)] rounded-lg transition-colors hover:border-[#00E5FF]"
              >
                <div className="w-10 h-10 bg-[rgba(0,229,255,0.12)] rounded-md flex items-center justify-center text-[#00E5FF] text-base shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[0.72rem] text-[#8892A4] uppercase tracking-widest">
                    {item.label}
                  </div>
                  <p className="text-[0.9rem] text-[#00E5FF] mt-0.5">
                    {item.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
