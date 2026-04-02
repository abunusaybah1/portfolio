import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Abdulmatiin - Frontend Developer Portfolio",
  description:
    "Passionate frontend developer with 3+ years of experience building scalable web applications. Expertise in React, Next.js, and modern web technologies.",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "web development",
    "abdulmatiin",
    "ismail",
    "portfolio",
    "projects",
    "skills",
    "experience",
    "contact",
  ],
  authors: [{ name: " Abdulmatiin" }],
  openGraph: {
    title: " Abdulmatiin's Portfolio",
    description:
      "Passionate frontend developer with 3+ years of experience building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900 overflow-x-hidden ">
        <Header />
        <main className="grow bg-white text-gray-900">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
