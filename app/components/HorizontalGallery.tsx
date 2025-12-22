'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

// iPhone Frame Component
function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: '220px', height: '450px' }}>
      {/* iPhone outer frame */}
      <div className="absolute inset-0 bg-[#1a1a1a] rounded-[40px] shadow-2xl">
        {/* Screen bezel */}
        <div className="absolute inset-[6px] bg-black rounded-[34px] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[25px] bg-black rounded-full z-10" />
          {/* Screen content */}
          <div className="absolute inset-0">
            {children}
          </div>
        </div>
      </div>
      {/* Side button */}
      <div className="absolute right-[-2px] top-[90px] w-[3px] h-[45px] bg-[#2a2a2a] rounded-r-sm" />
      {/* Volume buttons */}
      <div className="absolute left-[-2px] top-[75px] w-[3px] h-[22px] bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute left-[-2px] top-[105px] w-[3px] h-[38px] bg-[#2a2a2a] rounded-l-sm" />
    </div>
  );
}

export function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { projects } = portfolioData;

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth - window.innerWidth;
    const progressBar = sectionRef.current.querySelector('.progress-bar');

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: () => `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        gsap.set(track, { x: -totalWidth * self.progress });
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
        className="flex items-center h-full gap-12 pl-[var(--container-padding)] pt-20"
        style={{ width: 'max-content' }}
      >
        {projects.map((project, index) => (
          <article
            key={index}
            className="gallery-item flex-shrink-0 w-[80vw] max-w-[800px] h-[80vh] relative group"
          >
            <a
              href={project.demoLink || project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative overflow-hidden rounded-3xl bg-[var(--color-background)]"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

              {/* Image area - top portion */}
              <div className="absolute top-0 left-0 right-0 h-[60%] flex items-center justify-center p-6 overflow-visible">
                {project.type === 'mobile' && project.image ? (
                  <IPhoneFrame>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="220px"
                    />
                  </IPhoneFrame>
                ) : project.image ? (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 90vw, 60vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-dark)]/20 flex items-center justify-center">
                    <span className="text-[8rem] font-serif text-white/10">
                      0{index + 1}
                    </span>
                  </div>
                )}
              </div>

              {/* Content area - bottom portion with dark background */}
              <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/95 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex gap-3 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs bg-white/10 rounded-full backdrop-blur-sm text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-title text-[var(--color-foreground)]">{project.title}</h3>
                      <p className="text-sm text-[var(--color-foreground-muted)] mt-2 max-w-md">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="w-16 h-16 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-all duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[var(--color-foreground)] group-hover:text-[var(--color-background)]"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
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
