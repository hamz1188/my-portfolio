'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'scale-down'
  | 'blur'
  | 'rotate-left'
  | 'rotate-right'
  | 'flip-up'
  | 'slide-up'
  | 'slide-left'
  | 'slide-right'
  | 'custom';

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
  variant?: AnimationVariant;
  rotation?: number;
  once?: boolean;
}

const getVariantConfig = (variant: AnimationVariant) => {
  switch (variant) {
    case 'fade-up':
      return { y: 60, x: 0, scale: 1, rotation: 0, filter: 'none' };
    case 'fade-down':
      return { y: -60, x: 0, scale: 1, rotation: 0, filter: 'none' };
    case 'fade-left':
      return { y: 0, x: 60, scale: 1, rotation: 0, filter: 'none' };
    case 'fade-right':
      return { y: 0, x: -60, scale: 1, rotation: 0, filter: 'none' };
    case 'scale-up':
      return { y: 40, x: 0, scale: 0.9, rotation: 0, filter: 'none' };
    case 'scale-down':
      return { y: -20, x: 0, scale: 1.1, rotation: 0, filter: 'none' };
    case 'blur':
      return { y: 30, x: 0, scale: 1, rotation: 0, filter: 'blur(10px)' };
    case 'rotate-left':
      return { y: 40, x: 0, scale: 1, rotation: -5, filter: 'none' };
    case 'rotate-right':
      return { y: 40, x: 0, scale: 1, rotation: 5, filter: 'none' };
    case 'flip-up':
      return { y: 40, x: 0, scale: 1, rotation: 0, filter: 'none', rotateX: 15 };
    case 'slide-up':
      return { y: 100, x: 0, scale: 1, rotation: 0, filter: 'none' };
    case 'slide-left':
      return { y: 0, x: 100, scale: 1, rotation: 0, filter: 'none' };
    case 'slide-right':
      return { y: 0, x: -100, scale: 1, rotation: 0, filter: 'none' };
    default:
      return { y: 60, x: 0, scale: 1, rotation: 0, filter: 'none' };
  }
};

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  duration = 1,
  y,
  x,
  scale,
  opacity = 0,
  start = 'top 85%',
  variant = 'fade-up',
  rotation,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Get variant config or use custom values
    const variantConfig = variant === 'custom'
      ? { y: 60, x: 0, scale: 1, rotation: 0, filter: 'none' }
      : getVariantConfig(variant);

    // Allow custom overrides
    const fromConfig = {
      y: y ?? variantConfig.y,
      x: x ?? variantConfig.x,
      scale: scale ?? variantConfig.scale,
      rotation: rotation ?? variantConfig.rotation,
      opacity,
      filter: variantConfig.filter,
      ...('rotateX' in variantConfig && { rotateX: variantConfig.rotateX }),
    };

    const toConfig = {
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0,
      opacity: 1,
      filter: 'blur(0px)',
      rotateX: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start,
        once,
      },
    };

    gsap.fromTo(ref.current, fromConfig, toConfig);
  }, [delay, duration, y, x, scale, opacity, start, variant, rotation, once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        perspective: variant === 'flip-up' ? '1000px' : undefined,
      }}
    >
      {children}
    </div>
  );
}

// Staggered reveal for lists/grids
interface StaggeredRevealProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
  start?: string;
}

export function StaggeredReveal({
  children,
  className = '',
  itemClassName = '',
  stagger = 0.1,
  delay = 0,
  duration = 0.8,
  variant = 'fade-up',
  start = 'top 85%',
}: StaggeredRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.children;
    const variantConfig = getVariantConfig(variant);

    const fromConfig = {
      y: variantConfig.y,
      x: variantConfig.x,
      scale: variantConfig.scale,
      rotation: variantConfig.rotation,
      opacity: 0,
      filter: variantConfig.filter,
    };

    gsap.fromTo(
      items,
      fromConfig,
      {
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          once: true,
        },
      }
    );
  }, [stagger, delay, duration, variant, start]);

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div key={index} className={itemClassName} style={{ opacity: 0 }}>
          {child}
        </div>
      ))}
    </div>
  );
}

// Text line reveal (words slide up from below)
interface TextLineRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export function TextLineReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
  start = 'top 85%',
  as: Component = 'p',
}: TextLineRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.line');

    gsap.fromTo(
      lines,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          once: true,
        },
      }
    );
  }, [delay, duration, stagger, start]);

  // Split text by line breaks or spaces
  const lines = children.split('\n').filter(Boolean);

  return (
    <Component ref={containerRef as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>} className={className}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <span className="line block" style={{ transform: 'translateY(100%)', opacity: 0 }}>
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}
