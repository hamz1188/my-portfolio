# My Portfolio

A modern, high-performance personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Designed to be clean, responsive, and easy to maintain.

**[Live Demo](https://my-portfolio-pta15p36a-duneswear.vercel.app)**

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Preview)

## 🚀 Key Features

- **Modern Design**: Minimalist aesthetic with a refined Slate & Indigo color palette, glassmorphism effects, and a clean grid background.
- **Centralized Content**: All text, projects, and skills are managed in a single file (`app/data/portfolio.ts`), making updates instant without touching React component code.
- **Responsive & Accessible**: Fully responsive layout that works perfectly on mobile, tablet, and desktop.
- **Functional Contact Form**: Integrated with [Formspree](https://formspree.io) for real-time email notifications.
- **Markdown Blog**: A built-in blog system that renders Markdown files from `app/posts/`, making it easy to share technical insights.
- **Smooth Animations**: Custom scroll-triggered animations using a lightweight `useScrollAnimation` hook.
- **Type-Safe**: Built with TypeScript for robust and maintainable code.
- **Vercel Deployed**: Optimized for production with fast load times.
- **Unit Tested**: Includes comprehensive Jest and React Testing Library setup.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Forms**: [Formspree](https://formspree.io/)
- **Blog**: [React Markdown](https://github.com/remarkjs/react-markdown) & [Gray Matter](https://github.com/jonschlinkert/gray-matter)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **Font**: Inter (Google Fonts)

## 📂 Project Structure

The project is organized for scalability and ease of use:

```text
├── app/
│   ├── blog/          # Blog pages (list and single post)
│   ├── components/    # UI Components (Hero, Navbar, Projects, etc.)
│   ├── data/          # ⭐️ CONTENT CENTER (Edit this file!)
│   │   └── portfolio.ts
│   ├── lib/           # Utility functions (e.g., blog post fetching)
│   ├── posts/         # 📝 BLOG POSTS (Add .md files here!)
│   ├── hooks/         # Custom React hooks
│   └── globals.css    # Global styles and Tailwind theme variables
├── __tests__/         # Unit tests
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

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Running Tests

To run the unit tests:
```bash
npm test
```

## 📝 How to Customize

This portfolio is designed to be **data-driven**.

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
excerpt: "This is a short summary that appears on the blog list."
tags: ["Next.js", "Tutorial"]
---

# Hello World

This is the content of my blog post. You can use **markdown** here!
```

## 🚀 Deployment

The project is configured for seamless deployment on Vercel:

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel deploy`
3. Follow the prompts!

## 🔮 Future Improvements

- [ ] Add RSS feed for the blog.
- [ ] Implement dark mode toggle persistence.

---

Built with ❤️ by [Hamz](https://github.com/hamz1188)
