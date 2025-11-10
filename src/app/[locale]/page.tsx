import Hero from '@/components/layout/Hero';
import BentoGrid from '@/components/layout/BentoGrid';
import About from '@/components/layout/About';
import Footer from '@/components/layout/Footer';
import Events from '@/components/layout/Events';
import Founder from '@/components/layout/Founder';
import Contact from '@/components/layout/Contact';
import Donation from '@/components/layout/Donation';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <About />
      <Founder />
      <Events />
      <Donation />
      <Contact />
      <Footer />
    </main>
  );
}
