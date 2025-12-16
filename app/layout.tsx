import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ahmed Ali - Software Developer',
  description: 'Software Developer building cross-platform applications with AI-assisted development tools. Based in Abu Dhabi, UAE.',
  keywords: ['Software Developer', 'Next.js', 'React Native', 'Flutter', 'TypeScript', 'AI Development'],
  authors: [{ name: 'Ahmed Ali' }],
  openGraph: {
    title: 'Ahmed Ali - Software Developer',
    description: 'Building cross-platform apps with AI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
