'use client';

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Purple Gradient Orb (Top Right) */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(124, 58, 237, 0.3) 40%, transparent 70%)',
        }}
      />

      {/* Purple Gradient Orb (Bottom Left) */}
      <div
        className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-25 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.5) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)',
        }}
      />

      {/* Subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 60%)',
        }}
      />

      {/* Rotating Triangle (Top Right) - SVG with purple tint */}
      <div className="absolute top-1/4 right-[-5%] w-[500px] h-[500px] animate-[spin_60s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Rotating Square (Bottom Left) - Purple tinted */}
      <div className="absolute bottom-1/4 left-[-5%] w-[300px] h-[300px] border border-[rgba(168,85,247,0.1)] animate-[spin_40s_linear_infinite_reverse]" />

      {/* Small floating accent shapes */}
      <div
        className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-40 animate-[float_8s_ease-in-out_infinite]"
      />
      <div
        className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-[var(--color-accent-light)] opacity-30 animate-[float_10s_ease-in-out_infinite_1s]"
      />
      <div
        className="absolute bottom-[30%] left-[40%] w-1.5 h-1.5 rounded-full bg-[var(--color-accent-dark)] opacity-50 animate-[float_6s_ease-in-out_infinite_2s]"
      />

      {/* Grid Pattern Overlay - Purple tinted */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
}
