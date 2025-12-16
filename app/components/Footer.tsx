import { portfolioData } from '../data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = portfolioData;

  return (
    <footer className="py-12 bg-[var(--color-background)] border-t border-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-[var(--color-muted-foreground)] font-medium">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors">Twitter</a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors">LinkedIn</a>
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
