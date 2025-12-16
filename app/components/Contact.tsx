'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="py-24 bg-[var(--color-secondary)]/30">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="bg-[var(--color-background)] rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-900/5 border border-[var(--color-muted)] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to start a project?
            </h2>
            <p className="text-[var(--color-muted-foreground)] text-lg mb-10 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership opportunities.
            </p>

            <form className="max-w-md mx-auto space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-secondary)] border-transparent focus:border-[var(--color-primary)] focus:bg-[var(--color-background)] focus:ring-0 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-secondary)] border-transparent focus:border-[var(--color-primary)] focus:bg-[var(--color-background)] focus:ring-0 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-secondary)] border-transparent focus:border-[var(--color-primary)] focus:bg-[var(--color-background)] focus:ring-0 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
