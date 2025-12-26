'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FeatureCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.feature-card');

    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
            rotateX: 10,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            delay: index * 0.2,
          }
        );
      });
    }, sectionRef);

    // 3D tilt effect on hover
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(cardElement, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cardElement, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      cardElement.addEventListener('mousemove', handleMouseMove);
      cardElement.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: 'Clean Code',
      highlight: 'Clean',
      description: 'I write code that humans can read. Clear naming, logical structure, zero spaghetti. Your future self will thank me.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: 'Fast Delivery',
      highlight: 'Fast',
      description: 'AI tools let me ship in days, not weeks. You get quality without the wait. Speed without sacrificing craft.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding container-padding bg-[var(--color-background-light)]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-label text-[var(--color-accent)] block mb-6">
            Why Work With Me
          </span>
          <h2 className="text-section max-w-2xl">
            What sets me
            <br />
            <span className="text-[var(--color-foreground-muted)]">apart</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          style={{ perspective: '1000px' }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card group relative bg-[var(--color-background)] rounded-2xl md:rounded-3xl p-8 md:p-12 min-h-[360px] flex flex-col cursor-default overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-colors duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, var(--color-accent) 0%, transparent 50%)`,
                  padding: '1px',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                }}
              />

              {/* Background glow */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 bg-[var(--color-accent)]"
              />

              {/* Icon */}
              <div className="text-[var(--color-accent)] mb-8 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h3 className="text-title mb-4">
                  <span className="text-[var(--color-foreground-muted)]">
                    {feature.title.split(feature.highlight)[0]}
                  </span>
                  <span className="text-[var(--color-accent)]">
                    {feature.highlight}
                  </span>
                  <span className="text-[var(--color-foreground-muted)]">
                    {feature.title.split(feature.highlight)[1]}
                  </span>
                </h3>
                <p className="text-body text-[var(--color-foreground-muted)] max-w-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative number */}
              <div
                className="absolute bottom-4 right-8 text-[8rem] md:text-[10rem] font-serif leading-none text-[var(--color-foreground)]/[0.03] pointer-events-none select-none"
                style={{ fontVariationSettings: "'SOFT' 100" }}
              >
                0{index + 1}
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[var(--color-accent)]"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
