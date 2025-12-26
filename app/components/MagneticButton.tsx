'use client';

import { useRef, useCallback, ReactNode } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a' | 'div';
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.4,
  as: Component = 'button',
  href,
  onClick,
  target,
  rel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!buttonRef.current || !contentRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      // Move the button container
      gsap.to(buttonRef.current, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Move the content slightly more for a parallax effect
      gsap.to(contentRef.current, {
        x: deltaX * 0.3,
        y: deltaY * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!buttonRef.current || !contentRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });

    gsap.to(contentRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  }, []);

  const commonProps = {
    ref: buttonRef as React.RefObject<HTMLButtonElement & HTMLAnchorElement & HTMLDivElement>,
    className: `relative inline-block ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  const content = (
    <span ref={contentRef} className="inline-block">
      {children}
    </span>
  );

  if (Component === 'a' && href) {
    return (
      <a {...commonProps} href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  if (Component === 'div') {
    return <div {...commonProps}>{content}</div>;
  }

  return (
    <button {...commonProps} onClick={onClick} type="button">
      {content}
    </button>
  );
}

// Pre-styled magnetic button variant
interface MagneticCTAButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MagneticCTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: MagneticCTAButtonProps) {
  const variantStyles = {
    primary: 'bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-[var(--color-accent-light)]',
    secondary: 'bg-[var(--color-background-elevated)] text-[var(--color-foreground)] hover:bg-[var(--color-border)]',
    outline: 'border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseStyles = `
    rounded-full font-medium transition-colors duration-300
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (href) {
    return (
      <MagneticButton
        as="a"
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={baseStyles}
        strength={0.3}
      >
        {children}
      </MagneticButton>
    );
  }

  return (
    <MagneticButton onClick={onClick} className={baseStyles} strength={0.3}>
      {children}
    </MagneticButton>
  );
}

// Magnetic icon button for social links etc
interface MagneticIconButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  label: string;
}

export function MagneticIconButton({
  children,
  href,
  onClick,
  className = '',
  label,
}: MagneticIconButtonProps) {
  const baseStyles = `
    w-12 h-12 rounded-full border border-[var(--color-border)]
    flex items-center justify-center
    text-[var(--color-foreground-muted)]
    hover:text-[var(--color-accent)]
    hover:border-[var(--color-accent)]
    hover:bg-[var(--color-accent)]/10
    transition-all duration-300
    ${className}
  `;

  if (href) {
    return (
      <MagneticButton
        as="a"
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={baseStyles}
        strength={0.5}
      >
        <span className="sr-only">{label}</span>
        {children}
      </MagneticButton>
    );
  }

  return (
    <MagneticButton onClick={onClick} className={baseStyles} strength={0.5}>
      <span className="sr-only">{label}</span>
      {children}
    </MagneticButton>
  );
}
