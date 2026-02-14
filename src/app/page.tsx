import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CeoSection } from "@/components/sections/CeoSection";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { PremiumCursor } from "@/components/ui/PremiumCursor";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg font-medium"
      >
        Skip to main content
      </a>
      <PremiumCursor />
      <LoadingScreen />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <CeoSection />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
