import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { NextRemateSection } from "@/components/next-remate-home-section";
import { StatsSection } from "@/components/stats-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { CtaSection } from "@/components/cta-section";

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

      <FaqSection />
      <CtaSection />
      <div id="contacto">
        <ContactSection />
      </div>
    </>
  );
}
