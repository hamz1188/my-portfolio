'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  opacity?: number;
  start?: string;
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  duration = 1,
  y = 60,
  x = 0,
  scale = 1,
  opacity = 0,
  start = 'top 85%',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        y,
        x,
        scale: scale !== 1 ? 0.95 : 1,
        opacity,
      },
      {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          once: true,
        },
      }
    );
  }, [delay, duration, y, x, scale, opacity, start]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
