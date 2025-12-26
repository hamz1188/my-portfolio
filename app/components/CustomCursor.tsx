'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'text' | 'view' | 'drag'>('default');

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const textElement = textRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth cursor follow with different speeds
      const cursorSpeed = cursorState === 'text' || cursorState === 'view' ? 0.12 : 0.2;
      const followerSpeed = cursorState === 'text' || cursorState === 'view' ? 0.06 : 0.1;

      cursorX += (mouseX - cursorX) * cursorSpeed;
      cursorY += (mouseY - cursorY) * cursorSpeed;
      followerX += (mouseX - followerX) * followerSpeed;
      followerY += (mouseY - followerY) * followerSpeed;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      requestAnimationFrame(animate);
    };

    // Handle hover states with more nuance
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const element = target.closest('[data-cursor]') as HTMLElement | null;

      if (element) {
        const cursorType = element.dataset.cursor as typeof cursorState;
        const text = element.dataset.cursorText || '';

        setCursorState(cursorType || 'hover');
        setCursorText(text);

        // Animate cursor based on type
        if (cursorType === 'text' || cursorType === 'view') {
          gsap.to(cursor, {
            scale: 3,
            duration: 0.3,
            ease: 'power2.out',
          });
          gsap.to(follower, {
            scale: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
          if (textElement) {
            gsap.to(textElement, {
              opacity: 1,
              duration: 0.2,
              delay: 0.1,
            });
          }
        } else if (cursorType === 'drag') {
          gsap.to(cursor, {
            scale: 2,
            duration: 0.3,
            ease: 'power2.out',
          });
          gsap.to(follower, {
            scale: 1.5,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
        return;
      }

      // Default link/button hover
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setCursorState('hover');
        gsap.to(cursor, {
          scale: 0.5,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(follower, {
          scale: 2,
          opacity: 0.5,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      setCursorState('default');
      setCursorText('');

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      if (textElement) {
        gsap.to(textElement, {
          opacity: 0,
          duration: 0.15,
        });
      }
    };

    // Handle click animation
    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: cursorState === 'text' || cursorState === 'view' ? 2.5 : 0.8,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const handleMouseUp = () => {
      const targetScale = cursorState === 'text' || cursorState === 'view' ? 3 :
                         cursorState === 'hover' ? 0.5 : 1;
      gsap.to(cursor, {
        scale: targetScale,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Event delegation for dynamic elements
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorState]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`
          cursor fixed pointer-events-none z-[10000] hidden md:flex
          items-center justify-center -translate-x-1/2 -translate-y-1/2
          w-3 h-3 rounded-full bg-[var(--color-accent)]
          mix-blend-difference transition-[width,height] duration-300
          ${cursorState === 'text' || cursorState === 'view' ? 'w-20 h-20 bg-[var(--color-foreground)]' : ''}
          ${cursorState === 'drag' ? 'w-16 h-16' : ''}
        `}
      >
        {/* Cursor text */}
        <span
          ref={textRef}
          className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-background)] opacity-0"
        >
          {cursorText}
        </span>
      </div>

      {/* Cursor follower ring */}
      <div
        ref={followerRef}
        className={`
          cursor-follower fixed pointer-events-none z-[9999] hidden md:block
          -translate-x-1/2 -translate-y-1/2
          w-10 h-10 rounded-full
          border border-[var(--color-accent)]/50
          transition-[width,height,border-color] duration-300
          ${cursorState === 'hover' ? 'border-[var(--color-accent)]' : ''}
          ${cursorState === 'text' || cursorState === 'view' ? 'w-0 h-0 border-transparent' : ''}
        `}
      />

      {/* Global styles for hiding default cursor */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
