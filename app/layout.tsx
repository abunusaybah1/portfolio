import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe - Frontend Developer Portfolio",
  description:
    "Passionate frontend developer with 4+ years of experience building scalable web applications. Expertise in React, Next.js, and modern web technologies.",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "web development",
  ],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Frontend Developer Portfolio",
    description:
      "Passionate frontend developer with 4+ years of experience building scalable web applications.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900 overflow-x-hidden`}
      >
        <Header />
        <main className="flex-grow bg-white text-gray-900">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
