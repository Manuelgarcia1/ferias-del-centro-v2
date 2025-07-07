import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { AboutSection } from "@/components/sections/about-section/about-section";
import { ServicesSection } from "@/components/sections/services-section/services-section";
import { NextRemateSection } from "@/components/sections/next-remate-home-section/next-remate-section";
import { StatsSection } from "@/components/sections/stats-section/stats-section";
import { ContactSection } from "@/components/sections/contact-section/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="nosotros">
        <AboutSection />
      </div>
      <div id="remates">
        <NextRemateSection />
      </div>
      <div id="servicios">
        <ServicesSection />
      </div>
      <StatsSection />
      <div id="contacto">
        <ContactSection />
      </div>
    </>
  );
}
