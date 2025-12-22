'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ShieldHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !shieldRef.current) return;

    const shield = shieldRef.current;
    const sparkle = shield.querySelector('.sparkle');

    // Initial load animation
    const tl = gsap.timeline();

    tl.fromTo(
      shield,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    if (sparkle) {
      tl.fromTo(
        sparkle,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out' },
        '-=0.3'
      );
    }

    // Scroll animation - shield shrinks and fades
    gsap.to(shield, {
      scale: 0.6,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '300px top',
        scrub: 1,
      },
    });

    // Background color transition on scroll
    gsap.to(sectionRef.current, {
      backgroundColor: 'var(--color-background-light)',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '300px top',
        scrub: 1,
      },
    });

    // Content fades in as shield fades out
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '150px top',
            end: '400px top',
            scrub: 1,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Generate random background shields
  const backgroundShields = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    top: `${10 + Math.random() * 70}%`,
    left: `${5 + Math.random() * 85}%`,
    rotation: -15 + Math.random() * 30,
    opacity: 0.03 + Math.random() * 0.05,
    scale: 0.3 + Math.random() * 0.4,
  }));

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[200vh] bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background scattered shields */}
      <div className="absolute inset-0 pointer-events-none">
        {backgroundShields.map((s) => (
          <div
            key={s.id}
            className="absolute"
            style={{
              top: s.top,
              left: s.left,
              transform: `rotate(${s.rotation}deg) scale(${s.scale})`,
              opacity: s.opacity,
            }}
          >
            <ShieldShape className="w-40 h-48 text-white" />
          </div>
        ))}
      </div>

      {/* Main shield - fixed position */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div
          ref={shieldRef}
          className="shield-wrapper relative"
        >
          {/* Holographic border glow */}
          <div className="absolute inset-[-8px] rounded-[inherit] holographic-glow opacity-60 blur-xl" />

          {/* Holographic animated border */}
          <div className="holographic-border p-[4px] relative">
            {/* Shield inner */}
            <div className="shield-inner relative flex items-center justify-center">
              {/* Metallic gradient background */}
              <ShieldShape className="w-[30vw] max-w-[300px] min-w-[200px] h-auto text-[#1a1a1a]" gradient />

              {/* Logo letter */}
              <span className="absolute text-[8vw] max-text-[80px] min-text-[50px] font-serif text-white/90 select-none"
                style={{ fontSize: 'clamp(50px, 8vw, 80px)' }}>
                A
              </span>

              {/* Sparkle */}
              <div className="sparkle absolute bottom-[25%] left-1/2 -translate-x-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
                    fill="url(#sparkle-gradient)"
                  />
                  <defs>
                    <linearGradient id="sparkle-gradient" x1="0" y1="0" x2="24" y2="24">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#888" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content that appears after scroll */}
      <div
        ref={contentRef}
        className="absolute top-[100vh] left-0 right-0 min-h-screen flex flex-col justify-center container-padding opacity-0"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <span className="text-label text-[var(--color-accent)] mb-4 block">
            Developer + Designer
          </span>
          <h1 className="text-hero mb-6">
            I build things<br />
            <span className="text-[var(--color-accent)]">for the web</span>
          </h1>
          <p className="text-body-lg text-[var(--color-foreground-muted)] max-w-xl mb-12">
            Apps, websites, and everything in between. Currently in Abu Dhabi.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#work"
              className="group px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-[var(--color-accent)] transition-colors"
            >
              See my work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Say hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Shield SVG shape component
function ShieldShape({ className, gradient }: { className?: string; gradient?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {gradient && (
          <linearGradient id="shield-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="30%" stopColor="#1a1a1a" />
            <stop offset="50%" stopColor="#2a2a2a" />
            <stop offset="70%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </linearGradient>
        )}
      </defs>
      <path
        d="M50 0 L100 15 L100 70 Q100 95 50 120 Q0 95 0 70 L0 15 Z"
        fill={gradient ? 'url(#shield-metallic)' : 'currentColor'}
      />
    </svg>
  );
}
