'use client';

export function FixedFrame() {
  return (
    <>
      {/* Top Left: Logo */}
      <div className="fixed top-0 left-0 p-6 z-50 mix-blend-difference">
        <a href="/" className="text-xl font-bold tracking-widest uppercase hover:opacity-70 transition-opacity">
          AHMED.DEV
        </a>
      </div>

      {/* Top Right: Role (Hidden on mobile) */}
      <div className="fixed top-0 right-0 p-6 z-50 mix-blend-difference hidden md:block text-right">
        <div className="text-xs font-mono text-gray-400">ROLE</div>
        <div className="text-sm font-bold uppercase">Creative Software Developer</div>
      </div>

      {/* Bottom Left: Email */}
      <div className="fixed bottom-0 left-0 p-6 z-50 mix-blend-difference">
        <a 
          href="mailto:ahmed@example.com" 
          className="text-sm font-mono hover:text-white text-gray-400 transition-colors uppercase tracking-wider"
        >
          ahmed@example.com
        </a>
      </div>

      {/* Bottom Right: Location/Year */}
      <div className="fixed bottom-0 right-0 p-6 z-50 mix-blend-difference text-right">
        <div className="text-xs font-mono text-gray-400">ABU DHABI, UAE</div>
        <div className="text-sm font-mono">© {new Date().getFullYear()}</div>
      </div>

      {/* Decorative Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-white/10 z-40" />
      <div className="fixed bottom-0 left-0 w-full h-px bg-white/10 z-40" />
      <div className="fixed top-0 left-0 h-full w-px bg-white/10 z-40 hidden md:block" />
      <div className="fixed top-0 right-0 h-full w-px bg-white/10 z-40 hidden md:block" />
    </>
  );
}

