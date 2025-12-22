'use client';

interface MarqueeSectionProps {
  text: string;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export function MarqueeSection({
  text,
  speed = 30,
  reverse = false,
  className = '',
}: MarqueeSectionProps) {
  const items = Array(6).fill(text);

  return (
    <section className={`py-12 overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[clamp(3rem,10vw,8rem)] font-serif whitespace-nowrap px-8 text-[var(--color-foreground-muted)]/20"
          >
            {item}
            <span className="mx-8 text-[var(--color-accent)]">&bull;</span>
          </span>
        ))}
        {items.map((item, i) => (
          <span
            key={`dup-${i}`}
            className="text-[clamp(3rem,10vw,8rem)] font-serif whitespace-nowrap px-8 text-[var(--color-foreground-muted)]/20"
          >
            {item}
            <span className="mx-8 text-[var(--color-accent)]">&bull;</span>
          </span>
        ))}
      </div>
    </section>
  );
}
