'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CountUp } from './CountUp';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the rotated label
      gsap.fromTo(
        '.about-label',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animate title
      gsap.fromTo(
        '.about-title',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Animate content blocks
      gsap.fromTo(
        '.about-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
          },
        }
      );

      // Animate stats
      gsap.fromTo(
        '.about-stat',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 85%',
          },
        }
      );

      // Animate decorative elements
      gsap.fromTo(
        '.about-decor',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 30, suffix: '+', label: 'Projects Shipped' },
    { number: 15, suffix: '+', label: 'Happy Clients' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding container-padding relative overflow-hidden bg-[var(--color-background-light)]"
    >
      {/* Rotated "About" label on the left edge */}
      <div className="about-label hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <span className="text-label text-[var(--color-accent)] tracking-[0.3em]">
          ABOUT
        </span>
      </div>

      {/* Large decorative number */}
      <div className="about-decor absolute -right-20 top-1/4 text-display text-[var(--color-foreground)]/[0.02] pointer-events-none select-none">
        02
      </div>

      <div className="max-w-[1400px] mx-auto lg:pl-16">
        {/* Asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left column - Title area */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span className="about-label-mobile lg:hidden text-label text-[var(--color-accent)] block mb-6">
              About
            </span>
            <h2 className="about-title text-section mb-8">
              I make ideas
              <br />
              <span className="text-[var(--color-accent)]">real</span>
            </h2>

            {/* Pull quote */}
            <div className="about-content hidden lg:block border-l-2 border-[var(--color-accent)]/30 pl-6 mt-12">
              <p className="text-subtitle text-[var(--color-foreground-muted)] italic" style={{ fontVariationSettings: "'SOFT' 100" }}>
                &ldquo;Building digital products that solve real problems, with speed and precision.&rdquo;
              </p>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-7 lg:pt-8">
            {/* Bio paragraphs */}
            <div className="space-y-6 mb-16">
              <p className="about-content text-body-lg text-[var(--color-foreground-muted)] leading-relaxed">
                I&apos;m Ahmed—a developer who designs and a designer who codes. Based in Abu Dhabi, I build apps and websites that look great and actually work.
              </p>
              <p className="about-content text-body-lg text-[var(--color-foreground-muted)] leading-relaxed">
                My edge? I combine solid development skills with AI-assisted tools like <span className="text-[var(--color-accent)]">Claude Code</span> and <span className="text-[var(--color-accent)]">Cursor IDE</span>. This lets me ship faster without cutting corners—delivering robust applications with exceptional speed and quality.
              </p>
              <p className="about-content text-body text-[var(--color-foreground-subtle)]">
                When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open source, or refining my craft to build better experiences.
              </p>
            </div>

            {/* Stats - Horizontal layout */}
            <div className="about-stats grid grid-cols-3 gap-6 pt-12 border-t border-[var(--color-border)]">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <div className="text-section text-[var(--color-accent)]">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-caption text-[var(--color-foreground-subtle)] mt-2 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills pills */}
            <div className="about-content mt-12">
              <span className="text-label text-[var(--color-foreground-subtle)] block mb-4">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'React Native', 'Swift', 'Tailwind', 'GSAP', 'Node.js'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-[var(--color-background)] rounded-full text-[var(--color-foreground-muted)] border border-[var(--color-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="about-decor absolute bottom-24 left-[20%] w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-40" />
      <div className="about-decor absolute top-32 right-[15%] w-px h-24 bg-gradient-to-b from-[var(--color-accent)]/30 to-transparent" />
    </section>
  );
}
