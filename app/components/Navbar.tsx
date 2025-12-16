'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (isHomePage) {
        const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (id: string) => {
    if (!isHomePage) {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About', type: 'scroll' },
    { id: 'projects', label: 'Projects', type: 'scroll' },
    { id: 'skills', label: 'Skills', type: 'scroll' },
    { id: 'contact', label: 'Contact', type: 'scroll' },
    { id: 'blog', label: 'Blog', type: 'link', href: '/blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || !isHomePage
          ? 'bg-[var(--color-background)]/80 backdrop-blur-xl border-[var(--color-muted)] shadow-sm'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[var(--color-primary)] to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Ahmed.dev
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-1 bg-[var(--color-secondary)]/50 p-1 rounded-full border border-[var(--color-muted)]/50 backdrop-blur-sm">
              {navLinks.map((link) => (
                link.type === 'link' ? (
                  <Link
                    key={link.id}
                    href={link.href!}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      pathname.startsWith(link.href!)
                        ? 'bg-[var(--color-background)] text-[var(--color-primary)] shadow-sm'
                        : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background)]/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isHomePage && activeSection === link.id
                        ? 'bg-[var(--color-background)] text-[var(--color-primary)] shadow-sm'
                        : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background)]/50'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
