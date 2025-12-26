'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import type { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
  size?: 'large' | 'medium' | 'small';
}

export function ProjectCard({ project, index, size = 'medium' }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const image = card.querySelector('.project-image');
    const content = card.querySelector('.project-content');

    // Hover animations
    const onEnter = () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.6,
        ease: 'power2.out',
      });
      gsap.to(content, {
        y: -8,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const onLeave = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      });
      gsap.to(content, {
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);

    return () => {
      card.removeEventListener('mouseenter', onEnter);
      card.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-1',
    small: 'md:col-span-1 md:row-span-1',
  };

  const heightClasses = {
    large: 'aspect-[4/3] md:aspect-auto md:h-full min-h-[400px] md:min-h-[500px]',
    medium: 'aspect-[4/3] min-h-[300px]',
    small: 'aspect-[4/3] min-h-[250px]',
  };

  return (
    <a
      ref={cardRef}
      href={project.demoLink || project.codeLink}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      data-cursor-text="View"
      className={`group relative block overflow-hidden rounded-2xl md:rounded-3xl bg-[var(--color-background-elevated)] ${sizeClasses[size]} ${heightClasses[size]}`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Project image */}
      {project.image && (
        <div className="project-image absolute inset-0 origin-center">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            sizes={size === 'large' ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/60 to-transparent" />
        </div>
      )}

      {/* Fallback gradient for projects without images */}
      {!project.image && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-display text-[var(--color-foreground)]/5">
            0{index + 1}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="project-content absolute bottom-0 left-0 right-0 p-6 md:p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-[var(--color-foreground)]/10 backdrop-blur-sm rounded-full text-[var(--color-foreground)]/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`${size === 'large' ? 'text-title' : 'text-subtitle'} text-[var(--color-foreground)] mb-2`}>
          {project.title}
        </h3>

        {/* Description - only show on large cards */}
        {size === 'large' && (
          <p className="text-body text-[var(--color-foreground-muted)] max-w-md mb-4 line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Arrow */}
        <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-medium">
          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            View Project
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      {/* Border on hover */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-transparent group-hover:border-[var(--color-accent)]/30 transition-colors duration-500 pointer-events-none" />
    </a>
  );
}
