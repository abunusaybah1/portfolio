import type { Metadata, Viewport } from "next";
import "./globals.css";

// ─── Viewport (extracted per Next.js 14+ requirement) ────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080C14" },
    { media: "(prefers-color-scheme: light)", color: "#080C14" },
  ],
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
const BASE_URL = "https://abunusaybah.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "Abdulmatiin — Frontend Developer",
    template: "%s | Abdulmatiin",
  },
  description:
    "Frontend Developer specialising in React, Next.js, and TypeScript. Building high-performance, accessible, production-grade web experiences.",
  keywords: [
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Tailwind CSS",
    "web developer Nigeria",
    "Lagos developer",
    "Abdulmatiin",
    "Ismail Abdulmatiin",
  ],
  authors: [{ name: "Abdulmatiin Ayobami", url: BASE_URL }],
  creator: "Abdulmatiin Ayobami",
  publisher: "Abdulmatiin Ayobami",

  // ── Canonical + Alternate ─────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Abdulmatiin — Frontend Developer",
    title: "Abdulmatiin — Frontend Developer",
    description:
      "Building sharp, accessible, production-grade web experiences with React, Next.js, and TypeScript.",
    images: [
      {
        url: "/images/og-image.png", // 1200×630px — create this
        width: 1200,
        height: 630,
        alt: "Abdulmatiin — Frontend Developer",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Abdulmatiin — Frontend Developer",
    description:
      "Building sharp, accessible, production-grade web experiences with React, Next.js, and TypeScript.",
    images: ["/images/og-image.png"],
    // creator: "@your_handle", // add when you have a Twitter/X account
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/images/avatar.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }, // fallback
    ],
    apple: "/images/apple-touch-icon.png", // 180×180px — create this
    shortcut: "/favicon.ico",
  },

  // ── Verification (fill in after submitting to Search Console) ────────────
  verification: {
    google: "npJtCvtfBNkGDsPC5O-dOF-6MwHh18NbC0MF_rz7FSs",
  },
};

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdulmatiin Ayobami",
  url: BASE_URL,
  jobTitle: "Frontend Developer",
  description:
    "Frontend Developer specialising in React, Next.js, and TypeScript. Building high-performance, accessible web experiences.",
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://github.com/abunusaybah1",
    "https://www.linkedin.com/in/abdulmatiin-ismail-440aa7260/",
    "https://www.facebook.com/ayobami.dolapo.123456/",
    "https://x.com/aNameCanBeEmpty",
  ],
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080C14] text-[#F0F4FF] font-display antialiased">
        {children}
      </body>
    </html>
  );
}
