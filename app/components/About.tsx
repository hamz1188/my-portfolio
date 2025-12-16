'use client';

import { portfolioData } from '../data/portfolio';

export function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="py-32 px-6 md:px-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Section Number */}
        <div className="md:w-1/4">
          <span className="font-mono text-4xl md:text-6xl text-gray-800">01</span>
        </div>

        {/* Content */}
        <div className="md:w-3/4">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-16 tracking-tight">
            Manifesto
          </h2>
          
          <div className="space-y-8 text-xl md:text-3xl font-light leading-relaxed text-gray-300">
            <p>
              Adapting and changing constantly. Thinking outside the box to overcome every challenge.
            </p>
            <p>
              I combine software development skills with AI-assisted tools like <span className="text-white font-normal">Claude Code</span> and <span className="text-white font-normal">Cursor IDE</span>.
            </p>
            <p>
              Based in <span className="text-white font-normal">Abu Dhabi</span>, my pragmatism and the wealth of my environment 
              shape a distinct consciousness that is reflected in every line of code I write.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
