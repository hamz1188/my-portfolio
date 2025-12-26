'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const { projects } = portfolioData;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        '.projects-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animate project cards with stagger
      const cards = sectionRef.current?.querySelectorAll('.project-card-wrapper');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Determine card sizes based on index
  const getCardSize = (index: number): 'large' | 'medium' | 'small' => {
    if (index === 0) return 'large';
    return 'medium';
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section-padding container-padding bg-[var(--color-background)]"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="projects-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="text-label text-[var(--color-accent)] block mb-4">
              Selected Work
            </span>
            <h2 className="text-section">
              Projects
            </h2>
          </div>
          <p className="text-body text-[var(--color-foreground-muted)] max-w-md md:text-right">
            A selection of projects I&apos;ve built, from mobile apps to web experiences.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card-wrapper ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <ProjectCard
                project={project}
                index={index}
                size={getCardSize(index)}
              />
            </div>
          ))}
        </div>

        {/* View more link */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <a
            href="https://github.com/hamz1188"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[var(--color-foreground-muted)] hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            <span className="text-body font-medium">
              View more on GitHub
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
