'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { projects } = portfolioData;

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth - window.innerWidth;
    const progressBar = sectionRef.current.querySelector('.progress-bar');

    // Horizontal scroll animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: () => `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Animate the track
        gsap.set(track, { x: -totalWidth * self.progress });

        // Animate progress bar
        if (progressBar) {
          gsap.set(progressBar, { scaleX: self.progress });
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[var(--color-background-light)]"
    >
      {/* Section header */}
      <div className="absolute top-0 left-0 right-0 container-padding pt-12 z-10">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-label text-[var(--color-accent)]">Selected Work</span>
            <h2 className="text-section mt-2">Projects</h2>
          </div>
          <span className="text-label text-[var(--color-foreground-muted)]">
            {projects.length} Projects
          </span>
        </div>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex items-center h-full gap-8 pl-[var(--container-padding)] pt-32"
        style={{ width: 'max-content' }}
      >
        {projects.map((project, index) => (
          <article
            key={index}
            className="gallery-item flex-shrink-0 w-[70vw] max-w-[900px] h-[60vh] relative group"
          >
            <a
              href={project.demoLink || project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative overflow-hidden bg-[var(--color-muted)]"
              style={{
                clipPath: index % 2 === 0
                  ? 'polygon(0 5%, 5% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%)'
                  : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                borderRadius: '24px',
              }}
            >
              {/* Project image */}
              {project.image ? (
                <div className="gallery-image absolute inset-0 w-[120%] h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 90vw, 70vw"
                  />
                </div>
              ) : (
                <div className="gallery-image absolute inset-0 w-[120%] h-full bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-dark)]/20 flex items-center justify-center">
                  <span className="text-[8rem] font-serif text-white/10">
                    0{index + 1}
                  </span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex gap-3 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-white/10 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-title text-white">{project.title}</h3>
                    <p className="text-sm text-white/70 mt-2 max-w-md">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </article>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-[30vw]" />
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-12 left-0 right-0 container-padding">
        <div className="h-px bg-white/10">
          <div
            className="progress-bar h-full bg-[var(--color-accent)] origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </section>
  );
}
