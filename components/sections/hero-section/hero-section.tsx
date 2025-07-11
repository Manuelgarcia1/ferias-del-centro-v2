"use client";
import { HeroTextSection } from "./hero-text-section";
import { HeroCarousel } from "./hero-carousel";
import { heroSlides } from "./hero-data";

export function HeroSection() {
  return (
    <section className="w-full relative z-10 pt-24 lg:pt-32 pb-24 bg-customGreen h-auto lg:h-screen overflow-hidden">
      {" "}
      {/* z-index ajustado a z-10 */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10 z-0"></div>
      <div className="container mx-auto px-4 flex flex-col justify-start lg:justify-center lg:h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Sección de texto */}
          <HeroTextSection />
          {/* Carrusel */}
          <HeroCarousel slides={heroSlides} />
        </div>
      </div>
    </section>
  );
}
