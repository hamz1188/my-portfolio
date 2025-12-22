# Ahmed Ali - Portfolio

A modern, animation-rich portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **GSAP**.

Inspired by [Wokine.com](https://wokine.com) with smooth scroll animations, horizontal galleries, and dynamic interactions.

**[Live Demo](https://my-portfolio-mocha-theta-79.vercel.app/)**

## Features

### Animations & Interactions
- **Smooth Scrolling**: Lenis-powered butter-smooth scroll
- **GSAP ScrollTrigger**: Scroll-linked animations throughout
- **Horizontal Gallery**: Pinned horizontal scroll for projects
- **Text Reveals**: Split-text animations with staggered word/character reveals
- **Count-Up Stats**: Animated number counters triggered on scroll
- **Floating Navigation**: Bottom pill nav with section-aware labels
- **3D Animated Blob**: Organic shape with scroll-linked rotation
- **Progress Indicators**: Visual scroll progress on horizontal sections

### Design
- **Color Palette**: Lime green (#dcf48d) on charcoal (#181717)
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Auto Dark/Light Mode**: Follows system preference
- **Glassmorphism**: Backdrop blur effects on cards and nav
- **Responsive**: Mobile-first design

### Content
- **Centralized Data**: All content in `app/data/portfolio.ts`
- **Markdown Blog**: Blog posts from `app/posts/`
- **RSS Feed**: Auto-generated XML feed

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [GSAP](https://greensock.com/gsap/) + ScrollTrigger |
| Smooth Scroll | [Lenis](https://lenis.studiofreight.com/) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |
| Deployment | [Vercel](https://vercel.com/) |

## Project Structure

```
app/
├── components/        # UI Components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── HorizontalGallery.tsx
│   ├── ProcessSection.tsx
│   ├── FloatingNav.tsx
│   ├── AnimatedBlob.tsx
│   ├── SplitText.tsx
│   ├── RevealOnScroll.tsx
│   ├── CountUp.tsx
│   ├── ScrollText.tsx
│   └── ...
├── data/
│   └── portfolio.ts   # All portfolio content
├── posts/             # Markdown blog posts
└── globals.css        # Global styles & animations
```

## Getting Started

```bash
# Clone
git clone https://github.com/hamz1188/my-portfolio.git
cd my-portfolio

# Install
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

### Portfolio Content
Edit `app/data/portfolio.ts`:
- Personal info (name, bio, socials)
- Projects (title, description, tags, links)
- Skills

### Blog Posts
Add markdown files to `app/posts/`:

```markdown
---
title: "Post Title"
date: "2024-03-21"
excerpt: "Short summary"
tags: ["Tag1", "Tag2"]
---

Post content here...
```

## Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

Built by [Ahmed Ali](https://github.com/hamz1188)
