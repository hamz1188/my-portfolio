'use client';

import { portfolioData } from '../data/portfolio';

export function Skills() {
  const { skills } = portfolioData;

  // Group skills if needed, or just list them all
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-32 px-6 md:px-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/4">
          <span className="font-mono text-4xl md:text-6xl text-gray-800">02</span>
        </div>

        <div className="md:w-3/4">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-16 tracking-tight">
            Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="font-mono text-sm text-gray-500 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">
                  / {category}
                </h3>
                <ul className="space-y-2">
                  {skills.filter(s => s.category === category).map((skill) => (
                    <li key={skill.name} className="text-2xl md:text-3xl font-bold uppercase hover:text-gray-400 transition-colors cursor-default">
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
