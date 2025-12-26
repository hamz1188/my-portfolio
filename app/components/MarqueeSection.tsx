'use client';

interface MarqueeSectionProps {
  text: string;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export function MarqueeSection({
  text,
  speed = 25,
  reverse = false,
  className = '',
}: MarqueeSectionProps) {
  const items = Array(6).fill(text);

  return (
    <section className={`py-16 md:py-24 overflow-hidden relative ${className}`}>
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none" />

      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[clamp(4rem,12vw,10rem)] font-serif whitespace-nowrap px-6 text-[var(--color-foreground)]/[0.06] select-none"
            style={{ fontVariationSettings: "'SOFT' 80, 'WONK' 0" }}
          >
            {item}
            <span className="mx-6 text-[var(--color-accent)]/30">/</span>
          </span>
        ))}
        {items.map((item, i) => (
          <span
            key={`dup-${i}`}
            className="text-[clamp(4rem,12vw,10rem)] font-serif whitespace-nowrap px-6 text-[var(--color-foreground)]/[0.06] select-none"
            style={{ fontVariationSettings: "'SOFT' 80, 'WONK' 0" }}
          >
            {item}
            <span className="mx-6 text-[var(--color-accent)]/30">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
