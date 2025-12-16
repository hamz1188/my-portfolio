'use client';

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Circle Outline */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
      
      {/* Rotating Square */}
      <div className="absolute bottom-1/4 left-[-5%] w-[300px] h-[300px] border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
      
      {/* Floating Triangle (CSS Clip Path) */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 opacity-20 blur-3xl animate-pulse" 
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
}

