import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { HistorySection } from "@/components/history-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HistorySection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
    </>
  )
}
