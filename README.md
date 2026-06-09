portfolio/
├── app/
│   ├── globals.css       ← fonts, scrollbar, reveal animation
│   ├── layout.tsx        ← root layout + metadata
│   └── page.tsx          ← assembles all sections
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── data.ts           ← ALL your content lives here
│   └── useReveal.ts      ← scroll-reveal IntersectionObserver hook
├── tailwind.config.ts
└── package.json