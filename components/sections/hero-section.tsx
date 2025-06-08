"use client";

import { useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import estático de imágenes para optimizar la carga
import Carousel1 from "@/public/images/Carousel1.jpg";
import Carousel2 from "@/public/images/Carousel2.jpg";
import Carousel3 from "@/public/images/Carousel3.jpg";

// Definición de slides usando StaticImageData importada
const slides: {
  id: number;
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
}[] = [
  {
    id: 1,
    image: Carousel1,
    title: "Comercialización de Hacienda",
    subtitle: "San Carlos de Bolívar",
    description:
      "Somos una empresa con más de 40 años de trayectoria, buscando día a día ofrecer el mejor servicio de comercialización de hacienda.",
  },
  {
    id: 2,
    image: Carousel2,
    title: "Experiencia y Confianza",
    subtitle: "Desde 1983",
    description:
      "Brindamos soluciones integrales para la comercialización de ganado con transparencia y profesionalismo.",
  },
  {
    id: 3,
    image: Carousel3,
    title: "Remates y Ferias",
    subtitle: "Servicio Integral",
    description:
      "Ofrecemos un servicio completo para productores ganaderos con las mejores condiciones del mercado.",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = useCallback(
    () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1)),
    []
  );
  const prevSlide = useCallback(
    () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1)),
    []
  );

  return (
    <section className="relative w-full overflow-hidden pt-32 bg-customGreen h-auto lg:h-screen">
      <div className="absolute inset-0 bg-hero-pattern opacity-10 z-0"></div>

      <div className="container mx-auto px-4 flex flex-col justify-start lg:justify-center lg:h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Sección de texto */}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Revolucionando la{" "}
              <span className="text-customAccent-contrastSafe">
                Comercialización
              </span>
              <br />
              de Hacienda
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl">
              Somos una empresa con más de 40 años de trayectoria, buscando día
              a día ofrecer el mejor servicio de comercialización de hacienda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-customAccent-contrastSafe text-customGreen hover:bg-customAccent-contrastSafe/90 group"
                asChild
              >
                <Link href="#remates">
                  Ver Remates
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white/20 font-medium"
                asChild
              >
                <Link href="#contacto">Contactar</Link>
              </Button>
            </div>
            <div className="flex items-center mt-10 mb-10 space-x-6">
              {/* Ubicación */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-customAccent-contrastSafe flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-customGreen" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Ubicación</p>
                  <p className="font-medium">San Carlos de Bolívar</p>
                </div>
              </div>

              {/* Experiencia */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-customAccent-contrastSafe flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-customGreen"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/70">Experiencia</p>
                  <p className="font-medium">+40 años</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Carrusel */}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-gray-100/30"
              style={{ paddingBottom: "60%" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].image}
                    alt={slides[current].title}
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-2xl"
                    style={{ objectPosition: "center center" }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Texto informativo dinámico */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${current}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 bg-customGreen-dark/60 backdrop-blur-sm text-center text-white text-base font-medium px-3 py-2 rounded-lg shadow-md"
                >
                  {slides[current].description}
                </motion.div>
              </AnimatePresence>

              {/* Flechas */}
              <div className="absolute inset-y-0 left-4 flex items-center z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full p-3 bg-black/20 hover:bg-white/20 transition"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-4 flex items-center z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full p-3 bg-black/20 hover:bg-white/20 transition"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </Button>
              </div>

              {/* Indicadores */}
              <div className="absolute bottom-24 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === current
                        ? "bg-customAccent w-8"
                        : "bg-white/50 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -top-10 -right-2 w-28 h-28 rounded-full bg-gradient-to-br from-customAccent to-customGreen flex items-center justify-center shadow-xl animate-float">
              <div className="text-center">
                <span className="block text-xs font-semibold uppercase tracking-wide text-white">
                  Próximo
                </span>
                <span className="block text-2xl font-bold uppercase leading-none text-white drop-shadow-md">
                  Remate
                </span>
                <span className="block text-sm font-medium uppercase tracking-wide text-white">
                  21 Mayo
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
