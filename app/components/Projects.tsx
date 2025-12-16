'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

export function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { projects, personalInfo } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
              <p className="text-[var(--color-muted-foreground)] text-lg max-w-xl">
                A selection of projects that showcase my expertise in building scalable applications.
              </p>
            </div>
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center font-medium text-[var(--color-primary)] hover:underline"
            >
              View Github &rarr;
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-full bg-[var(--color-secondary)]/30 rounded-3xl overflow-hidden border border-[var(--color-muted)] hover:border-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity relative p-6 flex flex-col justify-end`}>
                  <h3 className="text-2xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">{project.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-[var(--color-muted-foreground)] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-background)] border border-[var(--color-muted)] text-[var(--color-foreground)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    {project.demoLink && (
                      <a href={project.demoLink} className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                        Live Demo
                      </a>
                    )}
                    {project.codeLink && (
                      <a href={project.codeLink} className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <a 
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer" 
              className="font-medium text-[var(--color-primary)] hover:underline"
            >
              View all projects &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
