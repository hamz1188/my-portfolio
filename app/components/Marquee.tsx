'use client';

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
}

export function Marquee({ text, speed = 25, className = '' }: MarqueeProps) {
  const repeatedText = Array(4).fill(text).join(' \u2022 ');

  return (
    <div className={`marquee-container ${className}`}>
      <div
        className="marquee-content"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <span className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-gradient-accent pr-8">
          {repeatedText}
        </span>
        <span className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-gradient-accent pr-8">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
