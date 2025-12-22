'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  type?: 'chars' | 'words' | 'lines';
  delay?: number;
  stagger?: number;
  trigger?: boolean;
}

export function SplitText({
  children,
  className = '',
  type = 'words',
  delay = 0,
  stagger = 0.05,
  trigger = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll('.split-inner');

    if (trigger) {
      gsap.fromTo(
        elements,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            once: true,
          },
        }
      );
    } else {
      gsap.fromTo(
        elements,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: stagger,
          delay: delay,
        }
      );
    }

    hasAnimated.current = true;
  }, [delay, stagger, trigger]);

  const renderContent = () => {
    if (type === 'chars') {
      return children.split('').map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="split-inner inline-block">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ));
    }

    if (type === 'words') {
      return children.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span className="split-inner inline-block">{word}</span>
        </span>
      ));
    }

    return children;
  };

  return (
    <div ref={containerRef} className={className}>
      {renderContent()}
    </div>
  );
}
