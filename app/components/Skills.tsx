'use client';

import { portfolioData } from '../data/portfolio';
import { AnimatedSection } from './AnimatedSection';

export function Skills() {
  const { skills } = portfolioData;

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-32 px-6 md:px-24 border-t border-[var(--color-accent)]/10">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/4">
          <AnimatedSection>
            <span className="font-mono text-4xl md:text-6xl text-[var(--color-accent)]/30">02</span>
          </AnimatedSection>
        </div>

        <div className="md:w-3/4">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-bold uppercase mb-16 tracking-tight">
              Expertise
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {categories.map((category, catIndex) => (
              <AnimatedSection key={category} delay={0.1 * (catIndex + 1)}>
                <div>
                  <h3 className="font-mono text-sm text-[var(--color-accent)] mb-6 uppercase tracking-widest border-b border-[var(--color-accent)]/20 pb-2">
                    / {category}
                  </h3>
                  <ul className="space-y-3">
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill) => (
                        <li
                          key={skill.name}
                          className="group cursor-default"
                        >
                          <span className="text-xl md:text-2xl font-bold uppercase transition-all duration-300 hover:text-[var(--color-accent)] animated-underline">
                            {skill.name}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
