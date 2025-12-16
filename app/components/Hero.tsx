'use client';

import { portfolioData } from '../data/portfolio';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const { personalInfo } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#00000000_70%,var(--color-background)_100%)]"></div>
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-primary)]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-secondary)] border border-[var(--color-muted)] mb-8 animate-[fade-in-up_0.8s_ease-out]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-[var(--color-muted-foreground)]">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-[fade-in-up_0.8s_ease-out_0.2s_both]">
          <span className="text-[var(--color-foreground)]">I'm {personalInfo.name},</span>
          <br />
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-purple-600 bg-clip-text text-transparent">
            {personalInfo.roleSubtitle}
          </span>
        </h1>

        <p className="text-xl text-[var(--color-muted-foreground)] mb-12 max-w-2xl mx-auto leading-relaxed animate-[fade-in-up_0.8s_ease-out_0.4s_both]">
          {personalInfo.bio[0]}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fade-in-up_0.8s_ease-out_0.6s_both]">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] font-medium rounded-full hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-1"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-[var(--color-background)] border border-[var(--color-muted-foreground)]/20 text-[var(--color-foreground)] font-medium rounded-full hover:bg-[var(--color-secondary)] transition-all hover:border-[var(--color-muted-foreground)]/40"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-muted-foreground)] rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[var(--color-muted-foreground)] rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
