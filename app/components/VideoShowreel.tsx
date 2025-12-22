'use client';

import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export function VideoShowreel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="section-padding container-padding">
        <div className="container-wide">
          <RevealOnScroll>
            <div
              className="relative aspect-video rounded-3xl overflow-hidden bg-[var(--color-background-light)] cursor-pointer group"
              onClick={() => setIsOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-dark)]/10" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Corner labels */}
              <div className="absolute top-8 left-8 text-label text-[var(--color-accent)]">
                See It In Action
              </div>
              <div className="absolute bottom-8 right-8 text-label text-[var(--color-foreground-muted)]">
                Watch the reel
              </div>

              {/* Decorative text */}
              <div className="absolute bottom-8 left-8 text-[6rem] md:text-[10rem] font-serif text-[var(--color-foreground)]/5 leading-none">
                Play
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Video Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-8"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            aria-label="Close video"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="w-full max-w-5xl aspect-video bg-[var(--color-background-light)] rounded-2xl flex items-center justify-center">
            <p className="text-[var(--color-foreground-muted)]">
              Video content would go here
            </p>
          </div>
        </div>
      )}
    </>
  );
}
