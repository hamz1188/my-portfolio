'use client';

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
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-24 pt-20">
      <div className="max-w-7xl w-full">
        <div className="mb-8 font-mono text-gray-500 tracking-widest animate-fade-in">
          00 / INTRODUCTION
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.85] tracking-tighter mb-12 animate-fade-in-up">
          Building <br />
          <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Digital</span> <br />
          Realities
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start max-w-4xl animate-fade-in-up delay-200">
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
            Imagineering the future of web and mobile applications. 
            Blending technical precision with brutalist aesthetics.
          </p>
          
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-sm"
            >
              Explore Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
