'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextProps {
  children: string;
  className?: string;
  highlightWords?: string[];
}

export function ScrollText({ children, className = '', highlightWords = [] }: ScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.scroll-word');

    // Create timeline for word reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: 1,
      },
    });

    words.forEach((word, index) => {
      tl.to(
        word,
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.5,
        },
        index * 0.1
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  const words = children.split(' ');

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some((hw) => word.toLowerCase().includes(hw.toLowerCase()));

        return (
          <span
            key={index}
            className={`scroll-word inline-block mr-[0.25em] opacity-20 ${
              isHighlighted ? 'scroll-word-highlight' : ''
            }`}
            style={{ filter: 'blur(4px)' }}
          >
            {isHighlighted ? (
              <span className="relative">
                <span className="relative z-10">{word}</span>
                <span className="absolute inset-0 -inset-x-2 bg-[var(--color-accent)]/20 rounded-lg -z-0" />
              </span>
            ) : (
              word
            )}
          </span>
        );
      })}
    </div>
  );
}
