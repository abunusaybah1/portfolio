# Frontend Development Portfolio

A production-grade developer portfolio platform built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Automatic dark mode support with manual toggle
- **SEO Optimized**: Server-side rendering and optimized metadata
- **Performance Focused**: Image optimization, code splitting, and lazy loading
- **Accessibility**: Semantic HTML and ARIA compliance
- **Animations**: Smooth CSS animations and transitions
- **Project Filtering**: Filter projects by technology stack
- **GitHub Integration**: Display latest GitHub repositories
- **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Custom SVG icons
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
│   └── globals.css     # Global styles and animations
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills showcase
│   ├── FeaturedProjects.tsx # Featured projects
│   ├── GitHubRepos.tsx # GitHub repositories
│   ├── Footer.tsx      # Site footer
│   └── ThemeToggle.tsx # Dark mode toggle
├── lib/
│   └── data.ts         # Static data (projects, skills, etc.)
├── types/
│   └── index.ts        # TypeScript type definitions
└── public/
    └── images/         # Static assets
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

- Modify Tailwind classes in components
- Update color scheme in `globals.css`
- Add custom animations in `globals.css`

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
