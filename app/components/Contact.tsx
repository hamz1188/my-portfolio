'use client';

import { portfolioData } from '../data/portfolio';
import { AnimatedSection } from './AnimatedSection';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="py-32 px-6 md:px-24 border-t border-[var(--color-accent)]/10 mb-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/4">
          <AnimatedSection>
            <span className="font-mono text-4xl md:text-6xl text-[var(--color-accent)]/30">04</span>
          </AnimatedSection>
        </div>

        <div className="md:w-3/4">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-bold uppercase mb-16 tracking-tight">
              Contact
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-2xl p-8">
                <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
                  From management to electrics | from pixels to lumens. This is what we love to do.
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xl md:text-3xl font-bold text-gradient-accent animated-underline"
                >
                  {personalInfo.email}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="text-sm font-mono text-[var(--color-accent)] uppercase tracking-widest mb-8">
                  Get in Touch
                </h3>

                <div className="flex flex-col gap-4">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold uppercase hover:text-[var(--color-accent)] transition-colors animated-underline inline-block"
                  >
                    GitHub &nearr;
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold uppercase hover:text-[var(--color-accent)] transition-colors animated-underline inline-block"
                  >
                    LinkedIn &nearr;
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-2xl md:text-3xl font-bold uppercase hover:text-[var(--color-accent)] transition-colors animated-underline inline-block"
                  >
                    Email &nearr;
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
