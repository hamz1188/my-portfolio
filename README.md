# My Portfolio

A modern, high-performance personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Designed to be clean, responsive, and easy to maintain.

**[Live Demo](https://my-portfolio-pta15p36a-duneswear.vercel.app)**

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Preview)

## 🚀 Key Features

- **Modern Design**: Minimalist aesthetic with a refined Slate & Indigo color palette, glassmorphism effects, and a clean grid background.
- **Centralized Content**: All text, projects, and skills are managed in a single file (`app/data/portfolio.ts`), making updates instant without touching React component code.
- **Responsive & Accessible**: Fully responsive layout that works perfectly on mobile, tablet, and desktop.
- **Functional Contact Form**: Integrated with [Formspree](https://formspree.io) for real-time email notifications.
- **Smooth Animations**: Custom scroll-triggered animations using a lightweight `useScrollAnimation` hook.
- **Type-Safe**: Built with TypeScript for robust and maintainable code.
- **Vercel Deployed**: Optimized for production with fast load times.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Forms**: [Formspree](https://formspree.io/)
- **Font**: Inter (Google Fonts)

## 📂 Project Structure

The project is organized for scalability and ease of use:

```text
├── app/
│   ├── components/    # UI Components (Hero, Navbar, Projects, etc.)
│   ├── data/          # ⭐️ CONTENT CENTER (Edit this file!)
│   │   └── portfolio.ts
│   ├── hooks/         # Custom React hooks (e.g., useScrollAnimation)
│   └── globals.css    # Global styles and Tailwind theme variables
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

## 📝 How to Customize

This portfolio is designed to be **data-driven**. You don't need to edit complex React components to change your content.

1. Open `app/data/portfolio.ts`.
2. **Personal Info**: Update the `personalInfo` object with your details (Name, Bio, Social Links).
3. **Skills**: Add or remove items in the `skills` array.
4. **Projects**: Add your own work to the `projects` array.

**Example: Adding a Project**
```typescript
{
  title: 'My New App',
  description: 'A brief description of what I built.',
  tags: ['Next.js', 'Supabase'],
  color: 'from-green-400 to-blue-500', // Tailwind gradient classes
  demoLink: 'https://...',
  codeLink: 'https://...'
}
```

## 🚀 Deployment

The project is configured for seamless deployment on Vercel:

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel deploy`
3. Follow the prompts!

## 🔮 Future Improvements

- [ ] Implement a blog section for technical writing.
- [ ] Add unit tests for utility functions and components.

---

Built with ❤️ by [Hamz](https://github.com/hamz1188)
