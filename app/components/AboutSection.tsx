'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from './SplitText';
import { RevealOnScroll } from './RevealOnScroll';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    // Parallax on image
    gsap.to(imageRef.current, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  const stats = [
    { number: '5+', label: 'Years building' },
    { number: '30+', label: 'Projects shipped' },
    { number: '15+', label: 'Happy clients' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding container-padding"
    >
      <div className="container-wide">
        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-background-light)]">
            <div
              ref={imageRef}
              className="absolute inset-0 w-full h-[120%] bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-accent-dark)]/20"
            />
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 text-label text-[var(--color-accent)]">
              About
            </div>
            <div className="absolute bottom-8 right-8 text-9xl font-serif text-white/5">
              A
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <RevealOnScroll>
              <span className="text-label text-[var(--color-accent)]">About</span>
            </RevealOnScroll>

            <div className="mt-6">
              <SplitText className="text-section" type="words" stagger={0.05}>
                I make ideas real
              </SplitText>
            </div>

            <RevealOnScroll delay={0.2}>
              <div className="mt-8 space-y-6 text-body-lg text-[var(--color-foreground-muted)]">
                <p>
                  I&apos;m Ahmed—a developer who designs and a designer who codes. I build apps and websites that look great and actually work.
                </p>
                <p>
                  My secret weapon? AI-assisted tools like <span className="text-[var(--color-accent)]">Claude Code</span> and <span className="text-[var(--color-accent)]">Cursor</span> that let me ship faster without cutting corners. Based in <span className="text-[var(--color-foreground)]">Abu Dhabi</span>, working with clients everywhere.
                </p>
              </div>
            </RevealOnScroll>

            {/* Stats */}
            <RevealOnScroll delay={0.4}>
              <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl md:text-5xl font-serif text-[var(--color-accent)]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[var(--color-foreground-muted)] mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
