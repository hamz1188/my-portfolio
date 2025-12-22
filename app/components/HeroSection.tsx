'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from './SplitText';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Parallax effect on hero content
    gsap.to('.hero-title', {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Fade out scroll indicator
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '20% top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center container-padding pt-32 pb-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Eyebrow text */}
        <div className="mb-8 overflow-hidden">
          <SplitText
            className="text-label text-[var(--color-foreground-muted)]"
            type="chars"
            delay={0.5}
            stagger={0.02}
            trigger={false}
          >
            Developer + Designer
          </SplitText>
        </div>

        {/* Main headline */}
        <div className="hero-title mb-12">
          <h1 className="text-hero">
            <SplitText type="words" delay={0.8} stagger={0.08} trigger={false}>
              I build things
            </SplitText>
          </h1>
          <h1 className="text-hero text-[var(--color-accent)]">
            <SplitText type="words" delay={1.2} stagger={0.08} trigger={false}>
              for the web
            </SplitText>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="max-w-2xl">
          <SplitText
            className="text-body-lg text-[var(--color-foreground-muted)]"
            type="words"
            delay={1.6}
            stagger={0.03}
            trigger={false}
          >
            Apps, websites, and everything in between. Currently in Abu Dhabi.
          </SplitText>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 mt-16">
          <a
            href="#work"
            className="group px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-[var(--color-accent)] hover:text-black transition-all duration-300"
          >
            See my work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300"
          >
            Say hello
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-label text-[var(--color-foreground-muted)]">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
