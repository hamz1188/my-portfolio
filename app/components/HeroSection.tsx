'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GradientMesh } from './GradientMesh';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Initial load animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate label
      tl.fromTo(
        '.hero-label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      // Animate name lines with stagger
      tl.fromTo(
        '.hero-name-line',
        { opacity: 0, y: 80, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '-=0.4'
      );

      // Animate description
      tl.fromTo(
        '.hero-description',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );

      // Animate CTA buttons
      tl.fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      );

      // Animate floating elements
      tl.fromTo(
        '.floating-element',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: 'back.out(1.5)' },
        '-=0.8'
      );

      // Animate scroll indicator
      tl.fromTo(
        '.scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.4'
      );

      // Parallax on scroll
      gsap.to('.hero-name-line', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Fade out scroll indicator on scroll
      gsap.to('.scroll-indicator', {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '15% top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient mesh background */}
      <GradientMesh />

      {/* Floating decorative elements */}
      <div className="floating-element absolute top-[15%] right-[10%] w-3 h-3 rounded-full bg-[var(--color-accent)] opacity-60" />
      <div className="floating-element absolute top-[35%] right-[25%] w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-40" />
      <div className="floating-element absolute bottom-[25%] left-[15%] w-4 h-4 rounded-full border border-[var(--color-accent)] opacity-30" />
      <div className="floating-element absolute top-[60%] right-[8%] w-px h-24 bg-gradient-to-b from-[var(--color-accent)]/50 to-transparent" />
      <div className="floating-element absolute top-[20%] left-[8%] w-16 h-px bg-gradient-to-r from-[var(--color-accent)]/50 to-transparent" />

      {/* Main content */}
      <div ref={contentRef} className="relative z-10 container-padding w-full">
        <div className="max-w-[1600px] mx-auto">
          {/* Label */}
          <div className="hero-label mb-8 md:mb-12">
            <span className="text-label text-[var(--color-accent)]">
              Creative Developer
            </span>
          </div>

          {/* Name - Stacked typography */}
          <div className="mb-12 md:mb-16 perspective-1000">
            <h1 className="hero-name-line text-hero origin-left">
              Ahmed
            </h1>
            <h1 className="hero-name-line text-hero text-[var(--color-accent)] origin-left">
              Ali
            </h1>
          </div>

          {/* Description and CTA */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-end max-w-5xl">
            <div className="hero-description">
              <p className="text-subtitle text-[var(--color-foreground-muted)] leading-relaxed">
                I craft digital experiences that blend stunning aesthetics with seamless functionality.
                Apps, websites, and everything in between.
              </p>
              <p className="text-body text-[var(--color-foreground-subtle)] mt-4">
                Based in Abu Dhabi, UAE
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="hero-cta group relative px-8 py-4 bg-[var(--color-accent)] text-[var(--color-background)] rounded-full text-sm font-medium overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="hero-cta px-8 py-4 border border-[var(--color-border-strong)] rounded-full text-sm font-medium hover:bg-[var(--color-foreground)]/5 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-caption text-[var(--color-foreground-subtle)] tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-foreground-muted)] to-transparent" />
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent pointer-events-none" />
    </section>
  );
}
