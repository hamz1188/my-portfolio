import { ShieldHero } from './components/ShieldHero';
import { MarqueeSection } from './components/MarqueeSection';
import { HorizontalGallery } from './components/HorizontalGallery';
import { AboutSection } from './components/AboutSection';
import { FeatureCards } from './components/FeatureCards';
import { ProcessSection } from './components/ProcessSection';
import { VideoShowreel } from './components/VideoShowreel';
import { ClientLogos } from './components/ClientLogos';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <ShieldHero />
      <MarqueeSection text="Creative Developer" />
      <HorizontalGallery />
      <AboutSection />
      <FeatureCards />
      <MarqueeSection text="Design & Development" reverse />
      <ProcessSection />
      <VideoShowreel />
      <ClientLogos />
      <Footer />
    </>
  );
}
