'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="py-24 bg-[var(--color-muted)]/30 border-y border-[var(--color-muted)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Skills & Tech Stack
            </h2>
            <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto text-lg">
              The tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group p-4 bg-[var(--color-background)] rounded-xl border border-[var(--color-muted)] hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:shadow-md flex items-center justify-between"
              >
                <span className="font-medium text-[var(--color-foreground)]">{skill.name}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] group-hover:bg-[var(--color-primary)]/10 group-hover:text-[var(--color-primary)] transition-colors">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
