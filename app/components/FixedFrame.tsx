'use client';

import Link from 'next/link';

export function FixedFrame() {
  return (
    <>
      {/* Top Left: Logo with glassmorphism pill */}
      <div className="fixed top-0 left-0 p-4 md:p-6 z-50 mix-blend-difference">
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/"
            className="text-lg md:text-xl font-bold tracking-widest uppercase animated-underline hover:text-[var(--color-accent)] transition-colors"
          >
            AHMED.DEV
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm font-mono text-gray-400 hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider animated-underline"
            >
              / Blog
            </Link>
          </nav>
        </div>
      </div>

      {/* Top Right: Role (Hidden on mobile) */}
      <div className="fixed top-0 right-0 p-4 md:p-6 z-50 mix-blend-difference hidden md:block text-right">
        <div className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-widest">Role</div>
        <div className="text-sm font-bold uppercase">Creative Software Developer</div>
      </div>

      {/* Bottom Left: Email */}
      <div className="fixed bottom-0 left-0 p-4 md:p-6 z-50 mix-blend-difference flex gap-4 md:gap-6 items-center">
        <a
          href="mailto:ah1188x@gmail.com"
          className="text-xs md:text-sm font-mono text-gray-400 hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider animated-underline"
        >
          ah1188x@gmail.com
        </a>

        {/* Mobile Blog Link */}
        <Link
          href="/blog"
          className="md:hidden text-xs font-mono text-gray-400 hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider"
        >
          / Blog
        </Link>
      </div>

      {/* Bottom Right: Location/Year */}
      <div className="fixed bottom-0 right-0 p-4 md:p-6 z-50 mix-blend-difference text-right">
        <div className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-widest">Abu Dhabi, UAE</div>
        <div className="text-sm font-mono">&copy; {new Date().getFullYear()}</div>
      </div>

      {/* Decorative Lines with purple accent gradient */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent z-40" />
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent z-40" />
      <div className="fixed top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--color-accent)]/20 to-transparent z-40 hidden md:block" />
      <div className="fixed top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--color-accent)]/20 to-transparent z-40 hidden md:block" />
    </>
  );
}
