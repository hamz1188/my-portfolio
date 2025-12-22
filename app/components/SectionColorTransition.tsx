'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionColorTransitionProps {
  children: React.ReactNode;
}

// Define section colors
const sectionColors: Record<string, { bg: string; nav: string }> = {
  hero: { bg: '#181717', nav: 'transparent' },
  work: { bg: '#222121', nav: 'rgba(24, 23, 23, 0.9)' },
  about: { bg: '#181717', nav: 'rgba(24, 23, 23, 0.9)' },
  process: { bg: '#222121', nav: 'rgba(34, 33, 33, 0.9)' },
  contact: { bg: '#181717', nav: 'rgba(24, 23, 23, 0.9)' },
};

export function SectionColorTransition({ children }: SectionColorTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Get all sections with IDs
    const sections = containerRef.current.querySelectorAll('section[id]');

    sections.forEach((section) => {
      const id = section.getAttribute('id') || '';
      const colors = sectionColors[id];

      if (colors) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => {
            gsap.to(document.body, {
              backgroundColor: colors.bg,
              duration: 0.5,
              ease: 'power2.out',
            });
          },
          onEnterBack: () => {
            gsap.to(document.body, {
              backgroundColor: colors.bg,
              duration: 0.5,
              ease: 'power2.out',
            });
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
