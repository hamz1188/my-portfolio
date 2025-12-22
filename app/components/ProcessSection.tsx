'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from './SplitText';
import { RevealOnScroll } from './RevealOnScroll';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: '01',
    title: 'Talk',
    description:
      'We hop on a call. You tell me what you need. I ask the right questions.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'I sketch ideas, you give feedback, we iterate until it feels right.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'I write clean code that runs fast. You get regular updates, not radio silence.',
  },
  {
    number: '04',
    title: 'Ship',
    description:
      'We launch together. I stick around to make sure everything works perfectly.',
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const steps = timelineRef.current.querySelectorAll('.process-step');

    steps.forEach((step, index) => {
      // Animate the line
      const line = step.querySelector('.process-line');
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: step,
              start: 'top 70%',
              end: 'bottom 70%',
              scrub: true,
            },
          }
        );
      }

      // Animate the dot
      const dot = step.querySelector('.process-dot');
      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: 'back.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding container-padding bg-[var(--color-background-light)]"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <RevealOnScroll>
            <span className="text-label text-[var(--color-accent)]">How It Works</span>
          </RevealOnScroll>
          <div className="mt-6">
            <SplitText className="text-section" type="words" stagger={0.05}>
              Simple process. Real results.
            </SplitText>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="process-step grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 pb-24 last:pb-0"
            >
              {/* Left - Number */}
              <div className="md:text-right">
                <RevealOnScroll x={-30} y={0}>
                  <span className="text-8xl md:text-9xl font-serif text-[var(--color-accent)]/20">
                    {step.number}
                  </span>
                </RevealOnScroll>
              </div>

              {/* Center - Timeline */}
              <div className="hidden md:flex flex-col items-center">
                <div className="process-dot w-4 h-4 rounded-full bg-[var(--color-accent)]" />
                {index < processSteps.length - 1 && (
                  <div className="process-line w-px h-full bg-[var(--color-accent)] origin-top" />
                )}
              </div>

              {/* Right - Content */}
              <div className="md:pt-2">
                <RevealOnScroll x={30} y={0}>
                  <h3 className="text-title mb-4">{step.title}</h3>
                  <p className="text-[var(--color-foreground-muted)] max-w-md">
                    {step.description}
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
