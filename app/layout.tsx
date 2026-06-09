import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ismail Abdulmatiin — Frontend Developer",
  description:
    "Frontend Developer & UI Engineer building high-performance web experiences with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Ismail Abdulmatiin — Frontend Developer",
    description: "Building sharp, accessible, production-grade web experiences.",
    url: "https://abunusaybah.vercel.app",
    siteName: "IA.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080C14] text-[#F0F4FF] font-display antialiased">
        {children}
      </body>
    </html>
  );
}
