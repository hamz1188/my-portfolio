import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Ahmed Ali - Creative Developer',
  description: 'Creative Developer crafting digital experiences that blend stunning aesthetics with seamless functionality.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScrollProvider>
            <CustomCursor />
            <Navigation />
            <main className="relative">
              {children}
            </main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
