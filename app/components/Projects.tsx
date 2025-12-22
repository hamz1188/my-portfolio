'use client';

import { portfolioData } from '../data/portfolio';

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-32 px-6 md:px-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/4">
          <span className="font-mono text-4xl md:text-6xl text-gray-800">03</span>
        </div>

        <div className="md:w-3/4">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-16 tracking-tight">
            Experience
          </h2>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group border-t border-white/10 py-12 transition-all hover:bg-white/5"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold uppercase mb-2 group-hover:translate-x-4 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 text-gray-500 font-mono text-sm group-hover:translate-x-4 transition-transform duration-300 delay-75">
                      {project.tags.map((tag, i) => (
                        <span key={tag}>
                          {tag} {i < project.tags.length - 1 && '/'}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="max-w-md text-gray-400 group-hover:text-white transition-colors">
                    <p className="mb-4">{project.description}</p>
                    <div className="flex gap-6 uppercase font-bold text-sm tracking-widest">
                      {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {project.demoLabel || 'Live Demo'} ↗
                        </a>
                      )}
                      {project.codeLink && (
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Code ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
