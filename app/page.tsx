import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { HorizontalGallery } from './components/HorizontalGallery';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { VideoShowreel } from './components/VideoShowreel';
import { ClientLogos } from './components/ClientLogos';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection text="Creative Developer" />
      <HorizontalGallery />
      <AboutSection />
      <MarqueeSection text="Design & Development" reverse />
      <ProcessSection />
      <VideoShowreel />
      <ClientLogos />
      <Footer />
    </>
  );
}
