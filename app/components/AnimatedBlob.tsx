'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AnimatedBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blobRef.current || !innerRef.current) return;

    // Initial floating animation
    gsap.to(blobRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Scroll-linked rotation
    gsap.to(innerRef.current, {
      rotateX: 30,
      rotateY: 180,
      rotateZ: 45,
      scale: 0.8,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Morph the blob shape on scroll
    gsap.to(innerRef.current, {
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      ref={blobRef}
      className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] pointer-events-none z-0"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={innerRef}
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
      >
        {/* Main blob */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-accent-dark)] opacity-80"
          style={{
            borderRadius: 'inherit',
            filter: 'blur(0px)',
            transform: 'translateZ(0)',
          }}
        />

        {/* Glow layer */}
        <div
          className="absolute inset-[-20%] bg-[var(--color-accent)] opacity-30"
          style={{
            borderRadius: 'inherit',
            filter: 'blur(60px)',
            transform: 'translateZ(-50px)',
          }}
        />

        {/* Inner highlight */}
        <div
          className="absolute inset-[20%] bg-gradient-to-br from-white/40 to-transparent opacity-60"
          style={{
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            transform: 'translateZ(20px) rotate(-30deg)',
          }}
        />

        {/* Shadow layer */}
        <div
          className="absolute inset-0 bg-black/20"
          style={{
            borderRadius: 'inherit',
            transform: 'translateZ(-30px) translateY(30px) scale(0.9)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-[var(--color-accent)]"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              opacity: 0.4 + i * 0.1,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
