'use client';

import { portfolioData } from '../data/portfolio';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="py-32 px-6 md:px-24 border-t border-white/10 mb-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/4">
          <span className="font-mono text-4xl md:text-6xl text-gray-800">04</span>
        </div>

        <div className="md:w-3/4">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-16 tracking-tight">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-2xl text-gray-400 mb-8 leading-relaxed">
                From management to electrics | from pixels to lumens. This is what we love to do.
              </p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-2xl md:text-4xl font-bold underline decoration-1 underline-offset-8 hover:text-gray-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-mono text-gray-500 uppercase tracking-widest mb-8">Get in Touch</h3>
              
              <div className="flex flex-col gap-6">
                <a 
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-bold uppercase hover:text-gray-400 transition-colors flex items-center gap-4"
                >
                  GitHub ↗
                </a>
                <a 
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-bold uppercase hover:text-gray-400 transition-colors flex items-center gap-4"
                >
                  LinkedIn ↗
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-3xl font-bold uppercase hover:text-gray-400 transition-colors flex items-center gap-4"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
