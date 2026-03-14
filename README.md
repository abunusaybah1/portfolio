# Frontend Development Portfolio

A production-grade developer portfolio platform built with Next.js 16, TypeScript, and Tailwind CSS.

## ✨ Recent Updates

- **Flexbox Layouts**: Converted all CSS Grid layouts to modern flexbox
- **Simplified Theming**: Removed dark mode toggle for cleaner codebase
- **Updated Dependencies**: Latest Next.js 16.1.6 and React 19.2.3
- **Enhanced Responsiveness**: Improved mobile-first flexbox layouts

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS 4.x
- **Responsive Design**: Fully responsive across all devices with flexbox layouts
- **SEO Optimized**: Server-side rendering and optimized metadata
- **Performance Focused**: Image optimization, code splitting, and lazy loading
- **Accessibility**: Semantic HTML and ARIA compliance
- **Animations**: Smooth CSS animations and transitions
- **Project Showcase**: Featured projects and detailed project pages
- **GitHub Integration**: Display latest GitHub repositories
- **Contact Form**: Functional contact form with validation
- **Flexbox Layouts**: All layouts use modern flexbox instead of CSS Grid

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x with PostCSS
- **Runtime**: React 19.2.3
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Custom SVG icons
- **Layout**: Flexbox (no CSS Grid)
- **Build Tools**: ESLint, Babel Compiler
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── projects/       # Projects listing and detail pages
│   ├── layout.tsx      # Root layout with navigation
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Global styles and animations
│   └── favicon.ico     # Site favicon
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills showcase (flexbox layout)
│   ├── FeaturedProjects.tsx # Featured projects (flexbox layout)
│   ├── GitHubRepos.tsx # GitHub repositories (flexbox layout)
│   ├── Footer.tsx      # Site footer (flexbox layout)
│   ├── ThemeProvider.tsx # Theme context (currently unused)
│   └── ThemeToggle.tsx # Theme toggle component (currently unused)
├── lib/
│   └── data.ts         # Static data (projects, skills, etc.)
├── types/
│   └── index.ts        # TypeScript type definitions
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── postcss.config.mjs  # PostCSS configuration
├── eslint.config.mjs   # ESLint configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## 🏃‍♂️ Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

**Build for production:**

```bash
npm run build
```

**Start production server:**

```bash
npm start
```

**Deploy to Vercel:**

```bash
npm i -g vercel
vercel
```

## 🎨 Customization

### Personal Information

Update `lib/data.ts` with your personal information, projects, skills, and experience.

### Styling

- Modify Tailwind classes in components (all layouts use flexbox)
- Update color scheme in `globals.css`
- Add custom animations in `globals.css`
- Adjust flexbox responsive breakpoints as needed

### Layout System

This portfolio uses **flexbox exclusively** for all layouts:

- Mobile: `flex-col` (vertical stacking)
- Tablet+: `flex-row` with `flex-wrap` (horizontal with wrapping)
- Desktop: `justify-between` for even spacing

### Content

- Replace placeholder images with your project screenshots
- Update GitHub username in `GitHubRepos.tsx`
- Customize contact form submission logic

## 📱 Pages

- **/** - Homepage with hero, skills, featured projects, and GitHub repos
- **/projects** - All projects with filtering
- **/projects/[slug]** - Individual project details
- **/about** - About page with experience
- **/contact** - Contact form

## 🔧 Development

### Code Quality

- ESLint configuration for code linting
- TypeScript strict mode enabled
- Prettier for code formatting

### Layout System

- **Flexbox Only**: All layouts use flexbox instead of CSS Grid
- **Responsive Breakpoints**: Mobile-first approach with `md:` and `lg:` prefixes
- **Flex Utilities**: `flex-1`, `flex-wrap`, `justify-between` for layout control
- **Gap Spacing**: Consistent `gap-8` spacing between flex items

### Performance

- Next.js Image component for optimized images
- Static generation for better performance
- Code splitting and lazy loading

### Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

Feel free to reach out for questions or collaboration opportunities!
