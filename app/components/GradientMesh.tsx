'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GradientMeshProps {
  className?: string;
}

export function GradientMesh({ className = '' }: GradientMeshProps) {
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    const orbs = meshRef.current.querySelectorAll('.gradient-orb');

    // Animate each orb with different timings
    orbs.forEach((orb, index) => {
      const duration = 15 + index * 5;
      const delay = index * 2;

      gsap.to(orb, {
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        scale: () => gsap.utils.random(0.8, 1.2),
        duration,
        delay,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <div
      ref={meshRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Primary accent orb - top right */}
      <div
        className="gradient-orb absolute -top-[30%] -right-[20%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle at center, var(--color-accent) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Secondary orb - bottom left */}
      <div
        className="gradient-orb absolute -bottom-[40%] -left-[30%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full opacity-10"
        style={{
          background:
            'radial-gradient(circle at center, var(--color-accent-dark) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Tertiary orb - center */}
      <div
        className="gradient-orb absolute top-[30%] left-[40%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-5"
        style={{
          background:
            'radial-gradient(circle at center, var(--color-foreground) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
}
