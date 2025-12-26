import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { BentoGrid } from './components/BentoGrid';
import { AboutSection } from './components/AboutSection';
import { FeatureCards } from './components/FeatureCards';
import { ProcessSection } from './components/ProcessSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection text="Creative Developer" />
      <BentoGrid />
      <AboutSection />
      <FeatureCards />
      <MarqueeSection text="Design & Development" reverse />
      <ProcessSection />
      <Footer />
    </>
  );
}
