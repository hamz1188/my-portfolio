'use client';

import { motion } from 'framer-motion';
import { Marquee } from './Marquee';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20">
      <motion.div
        className="max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8 font-mono text-[var(--color-accent)] tracking-widest"
          variants={itemVariants}
        >
          00 / INTRODUCTION
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.85] tracking-tighter mb-12"
          variants={itemVariants}
        >
          Building <br />
          <span className="text-gradient-accent">Digital</span> <br />
          Realities
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-start max-w-4xl"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
            Imagineering the future of web and mobile applications.
            Blending technical precision with{' '}
            <span className="text-[var(--color-accent)]">bold aesthetics</span>.
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="glass px-8 py-4 rounded-full btn-scale hover-glow font-bold uppercase tracking-widest text-sm group flex items-center gap-3"
            >
              <span>Explore Work</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee Section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-15 pointer-events-none">
        <Marquee text="Creative Developer" speed={30} />
      </div>
    </section>
  );
}
