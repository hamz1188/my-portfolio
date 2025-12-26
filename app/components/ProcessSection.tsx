'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: '01',
    title: 'Talk',
    description:
      'We hop on a call. You tell me what you need, I ask the right questions. No fancy proposals—just a real conversation about your project.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'I sketch ideas, you give feedback, we iterate until it clicks. Quick mockups, not month-long design phases.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'I write clean code that runs fast. Regular updates, not radio silence. You see progress, not just promises.',
  },
  {
    number: '04',
    title: 'Ship',
    description:
      'We launch together. I stick around to make sure everything works perfectly. Your success is my reputation.',
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        '.process-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animate each step
      const steps = sectionRef.current?.querySelectorAll('.process-step');
      steps?.forEach((step, index) => {
        const isEven = index % 2 === 0;

        // Animate the giant number
        gsap.fromTo(
          step.querySelector('.process-number'),
          { opacity: 0, x: isEven ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
            },
          }
        );

        // Animate the content
        gsap.fromTo(
          step.querySelector('.process-content'),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 75%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding container-padding bg-[var(--color-background)]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="process-header max-w-3xl mb-24 md:mb-32">
          <span className="text-label text-[var(--color-accent)] block mb-6">
            How It Works
          </span>
          <h2 className="text-section">
            Simple process.
            <br />
            <span className="text-[var(--color-foreground-muted)]">Real results.</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-24 md:space-y-32">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`process-step grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              {/* Giant number - alternating position */}
              <div
                className={`process-number md:col-span-5 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <span
                  className="text-display text-[var(--color-accent)]/10 block leading-none"
                  style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 0" }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div
                className={`process-content md:col-span-7 ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <h3 className="text-title mb-4">
                  {step.title}
                </h3>
                <p className="text-body-lg text-[var(--color-foreground-muted)] max-w-lg leading-relaxed">
                  {step.description}
                </p>

                {/* Progress indicator */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex gap-2">
                    {processSteps.map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-1 rounded-full transition-colors ${
                          i <= index
                            ? 'bg-[var(--color-accent)]'
                            : 'bg-[var(--color-border)]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-caption text-[var(--color-foreground-subtle)]">
                    Step {index + 1} of {processSteps.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
