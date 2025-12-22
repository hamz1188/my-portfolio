'use client';

import { RevealOnScroll } from './RevealOnScroll';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Flutter',
  'Swift',
  'Python',
  'PostgreSQL',
];

export function ClientLogos() {
  return (
    <section className="section-padding container-padding border-t border-white/10">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-label text-[var(--color-foreground-muted)]">
              Tools I Use
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <RevealOnScroll key={tech} delay={index * 0.1}>
              <div className="flex items-center justify-center h-24 rounded-xl border border-white/10 hover:border-[var(--color-accent)]/30 hover:bg-white/5 transition-all duration-300 group">
                <span className="text-xl md:text-2xl font-medium text-[var(--color-foreground-muted)] group-hover:text-white transition-colors">
                  {tech}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
