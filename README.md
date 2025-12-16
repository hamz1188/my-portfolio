# My Portfolio

A modern, high-performance personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

Recently redesigned with an **Industrial Brutalist** aesthetic inspired by *G!theimagineers*.

**[Live Demo](https://my-portfolio-f0wrdwg71-duneswear.vercel.app)**

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Preview)

## 🚀 Key Features

- **Industrial Design**: A bold, high-contrast aesthetic featuring a fixed frame layout, sharp typography (`JetBrains Mono`), and a stark black-and-white theme.
- **Geometrical Animations**: Custom rotating wireframe shapes (SVG triangles, squares, circles) that float in the background to add technical depth.
- **Centralized Content**: All text, projects, and skills are managed in a single file (`app/data/portfolio.ts`), making updates instant.
- **Markdown Blog**: A built-in blog system that renders Markdown files from `app/posts/`.
- **Functional Contact Form**: Integrated with [Formspree](https://formspree.io) for real-time email notifications.
- **Responsive & Accessible**: Fully responsive layout that adapts to mobile while maintaining the "fixed frame" look.
- **RSS Feed**: Automatically generated XML feed for blog posts.
- **Type-Safe**: Built with TypeScript for robust code.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Forms**: [Formspree](https://formspree.io/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## 📂 Project Structure

```text
├── app/
│   ├── blog/          # Blog pages
│   ├── components/    # UI Components (Hero, FixedFrame, BackgroundShapes, etc.)
│   ├── data/          # ⭐️ CONTENT CENTER (Edit this file!)
│   │   └── portfolio.ts
│   ├── lib/           # Utility functions
│   ├── posts/         # 📝 BLOG POSTS (Add .md files here!)
│   └── globals.css    # Global styles (Tailwind theme & animations)
```

## ⚡️ Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hamz1188/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## 📝 How to Customize

### 1. Update Portfolio Content
Open `app/data/portfolio.ts` to edit:
- **Personal Info**: Name, Bio, Social Links.
- **Skills**: List of technical skills.
- **Projects**: Your work showcase.

### 2. Write a Blog Post
Create a new file in `app/posts/my-new-post.md`:

```markdown
---
title: "My New Post"
date: "2024-03-21"
excerpt: "This is a short summary."
tags: ["Design", "Brutalism"]
---

# Hello World
This is my post content.
```

## 🚀 Deployment

The project is configured for seamless deployment on Vercel:

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel deploy`

---

Built with ❤️ by [Hamz](https://github.com/hamz1188)
