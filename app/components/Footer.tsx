'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SplitText } from './SplitText';
import { RevealOnScroll } from './RevealOnScroll';
import { portfolioData } from '../data/portfolio';

export function Footer() {
  const [email, setEmail] = useState('');
  const { personalInfo } = portfolioData;

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Work', href: '#work' },
        { label: 'About', href: '#about' },
        { label: 'Process', href: '#process' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'GitHub', href: personalInfo.socials.github },
        { label: 'LinkedIn', href: personalInfo.socials.linkedin },
        { label: 'Twitter', href: '#' },
        { label: 'Dribbble', href: '#' },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-[var(--color-background-light)]">
      {/* CTA Section */}
      <div className="section-padding container-padding border-b border-[var(--color-border)]">
        <div className="container-wide text-center">
          <RevealOnScroll>
            <span className="text-label text-[var(--color-accent)]">
              Start a Project
            </span>
          </RevealOnScroll>

          <div className="mt-8 mb-6">
            <SplitText className="text-section" type="words" stagger={0.05}>
              Got an idea? Let&apos;s talk.
            </SplitText>
          </div>

          <RevealOnScroll delay={0.2}>
            <p className="text-[var(--color-foreground-muted)] mb-8 max-w-md mx-auto">
              Drop me an email. I reply within 24 hours—no forms, no bots, just a real conversation.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block text-2xl md:text-4xl font-serif text-[var(--color-accent)] link-underline"
            >
              {personalInfo.email}
            </a>
          </RevealOnScroll>
        </div>
      </div>

      {/* Footer content */}
      <div className="py-20 container-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <span className="text-3xl font-medium">
                  Ahmed<span className="text-[var(--color-accent)]">.</span>
                </span>
              </Link>
              <p className="mt-6 text-[var(--color-foreground-muted)] max-w-sm">
                Building apps and websites that people actually enjoy using.
              </p>

              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-sm text-[var(--color-foreground-muted)] mb-4">
                  Get updates on new projects
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEmail('');
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[var(--color-accent)] text-[#181717] rounded-lg text-sm font-medium hover:bg-[var(--color-accent-light)] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="text-label text-[var(--color-foreground-muted)] mb-6">
                  {column.title}
                </h4>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[var(--color-foreground-muted)] hover:text-white transition-colors link-underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--color-foreground-muted)]">
              &copy; {currentYear} Ahmed Ali. All rights reserved.
            </p>
            <p className="text-sm text-[var(--color-foreground-muted)]">
              Based in Abu Dhabi, UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
