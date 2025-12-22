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

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.15,
        }
      );
    });

    // Animate handwritten underlines
    const underlines = cardsRef.current.querySelectorAll('.handwritten-underline');
    underlines.forEach((line) => {
      gsap.fromTo(
        line,
        { strokeDashoffset: 200 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const features = [
    {
      title: 'Clean Code',
      highlight: 'Clean',
      description: 'I write code that humans can read. Clear naming, logical structure, zero spaghetti.',
      color: 'bg-[var(--color-background)]',
      accentColor: 'var(--color-accent)',
    },
    {
      title: 'Fast Delivery',
      highlight: 'Fast',
      description: 'AI tools let me ship in days, not weeks. You get quality without the wait.',
      color: 'bg-[#2a1f5c]',
      accentColor: '#a78bfa',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding container-padding">
      <div className="container-wide">
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card ${feature.color} rounded-3xl p-10 md:p-14 relative overflow-hidden min-h-[400px] flex flex-col justify-between`}
            >
              {/* Background decoration */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
                style={{ background: feature.accentColor }}
              />

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-serif mb-6">
                  {feature.title.split(feature.highlight)[0]}
                  <span className="relative inline-block">
                    <span style={{ color: feature.accentColor }}>{feature.highlight}</span>
                    {/* Handwritten underline SVG */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 overflow-visible"
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                    >
                      <path
                        className="handwritten-underline"
                        d="M0 15 Q 25 5, 50 15 T 100 15"
                        fill="none"
                        stroke={feature.accentColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="200"
                        strokeDashoffset="200"
                      />
                    </svg>
                  </span>
                  {feature.title.split(feature.highlight)[1]}
                </h3>
                <p className="text-lg text-[var(--color-foreground-muted)] max-w-sm">
                  {feature.description}
                </p>
              </div>

              {/* Decorative number */}
              <div
                className="text-[10rem] font-serif leading-none opacity-5 absolute bottom-0 right-8"
                style={{ color: feature.accentColor }}
              >
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
