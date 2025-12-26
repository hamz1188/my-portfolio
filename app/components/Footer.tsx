'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the giant CTA text
      gsap.fromTo(
        '.footer-cta-line',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.footer-cta',
            start: 'top 80%',
          },
        }
      );

      // Animate email link
      gsap.fromTo(
        '.footer-email',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.footer-cta',
            start: 'top 70%',
          },
        }
      );

      // Animate social icons
      gsap.fromTo(
        '.footer-social',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.footer-socials',
            start: 'top 90%',
          },
        }
      );

      // Animate bottom bar
      gsap.fromTo(
        '.footer-bottom',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 60%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    {
      label: 'GitHub',
      href: personalInfo.socials.github,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: personalInfo.socials.linkedin,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative bg-[var(--color-background)] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient glow */}
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/5 rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Giant CTA Section */}
      <div className="footer-cta relative min-h-[60vh] flex flex-col items-center justify-center section-padding container-padding">
        <div className="text-center">
          {/* Small label */}
          <span className="footer-cta-line block text-label text-[var(--color-accent)] mb-8">
            Ready to start?
          </span>

          {/* Giant headline */}
          <h2 className="overflow-hidden mb-6">
            <span
              className="footer-cta-line block text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.9] text-[var(--color-foreground)]"
              style={{ fontVariationSettings: "'SOFT' 50, 'WONK' 1" }}
            >
              Let&apos;s build
            </span>
          </h2>
          <h2 className="overflow-hidden mb-12">
            <span
              className="footer-cta-line block text-[clamp(3rem,10vw,8rem)] font-serif leading-[0.9] text-[var(--color-accent)]"
              style={{ fontVariationSettings: "'SOFT' 50, 'WONK' 1" }}
            >
              something great
            </span>
          </h2>

          {/* Email link */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="footer-email group inline-flex items-center gap-3 text-xl md:text-2xl text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] transition-colors duration-300"
          >
            <span className="relative">
              {personalInfo.email}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-accent)] group-hover:w-full transition-all duration-500" />
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>

      {/* Social Links & Bottom Bar */}
      <div className="relative border-t border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto container-padding py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <Link href="/" className="group">
              <span className="text-2xl font-serif" style={{ fontVariationSettings: "'SOFT' 100" }}>
                Ahmed
                <span className="text-[var(--color-accent)] group-hover:text-[var(--color-foreground)] transition-colors">.</span>
              </span>
            </Link>

            {/* Social icons */}
            <div className="footer-socials flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="footer-social w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Location & Year */}
            <div className="footer-bottom flex items-center gap-6 text-sm text-[var(--color-foreground-subtle)]">
              <span>Abu Dhabi, UAE</span>
              <span className="w-1 h-1 rounded-full bg-[var(--color-foreground-subtle)]" />
              <span>&copy; {currentYear}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
    </footer>
  );
}
