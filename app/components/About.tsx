'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { personalInfo } = portfolioData;

  return (
    <section
      id="about"
      className="py-24 bg-[var(--color-background)] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full opacity-80"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-lg text-[var(--color-muted-foreground)] leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>
                  {index === 0 ? (
                    <>
                      I'm a {personalInfo.role} based in <strong className="text-[var(--color-foreground)]">{personalInfo.location}</strong>, {paragraph.split(', ').slice(2).join(', ')}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            {/* Stats / Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[var(--color-secondary)] border border-[var(--color-muted)] hover:border-[var(--color-primary)]/30 transition-colors">
                <span className="text-4xl mb-2 block">🚀</span>
                <h3 className="font-bold text-[var(--color-foreground)] mb-1">Fast Delivery</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">Rapid prototyping and production-ready code.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--color-secondary)] border border-[var(--color-muted)] hover:border-[var(--color-primary)]/30 transition-colors">
                <span className="text-4xl mb-2 block">💡</span>
                <h3 className="font-bold text-[var(--color-foreground)] mb-1">Modern Tech</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">Using the latest frameworks and tools.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--color-secondary)] border border-[var(--color-muted)] hover:border-[var(--color-primary)]/30 transition-colors">
                <span className="text-4xl mb-2 block">✨</span>
                <h3 className="font-bold text-[var(--color-foreground)] mb-1">Clean Design</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">Focus on user experience and accessibility.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--color-secondary)] border border-[var(--color-muted)] hover:border-[var(--color-primary)]/30 transition-colors">
                <span className="text-4xl mb-2 block">🤖</span>
                <h3 className="font-bold text-[var(--color-foreground)] mb-1">AI Powered</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">Leveraging AI for smarter development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
