"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "/images/Carousel1.jpg",
    title: "Comercialización de Hacienda",
    subtitle: "San Carlos de Bolívar",
    description:
      "Somos una empresa con más de 40 años de trayectoria, buscando día a día ofrecer el mejor servicio de comercialización de hacienda.",
  },
  {
    id: 2,
    image: "/images/Carousel2.jpg",
    title: "Experiencia y Confianza",
    subtitle: "Desde 1983",
    description:
      "Brindamos soluciones integrales para la comercialización de ganado con transparencia y profesionalismo.",
  },
  {
    id: 3,
    image: "/images/Carousel3.jpg",
    title: "Remates y Ferias",
    subtitle: "Servicio Integral",
    description:
      "Ofrecemos un servicio completo para productores ganaderos con las mejores condiciones del mercado.",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Precarga de imágenes para mejorar el rendimiento
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = slides.map((slide) => {
          return new Promise<void>((resolve) => {
            const img = document.createElement("img");
            img.src = slide.image;
            img.crossOrigin = "anonymous";
            img.onload = () => {
              setLoadedImages((prev) => ({ ...prev, [slide.image]: true }));
              resolve();
            };
            img.onerror = () => {
              console.error(`Error loading image: ${slide.image}`);
              resolve();
            };
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        // Si hay error en la precarga, mostramos las imágenes de todos modos
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  }, []);

  // Determinar si la imagen actual está cargada
  const isCurrentImageLoaded = loadedImages[slides[current]?.image] || false;

  return (
    <section className="relative h-screen w-full overflow-hidden pt-32 bg-customGreen">
      <div className="absolute inset-0 bg-hero-pattern opacity-10 z-0"></div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Revolucionando la{" "}
              <span className="text-customAccent">Comercialización</span>
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
                className="bg-customAccent text-customGreen hover:bg-customAccent/90 group"
                asChild
              >
                <Link href="/remates">
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

            <div className="flex items-center mt-12 space-x-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-customAccent flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-customGreen" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Ubicación</p>
                  <p className="font-medium">San Carlos de Bolívar</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-customAccent flex items-center justify-center mr-3">
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
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/70">Experiencia</p>
                  <p className="font-medium">+40 años</p>
                </div>
              </div>
            </div>
          </motion.div>

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
              {/* Placeholder mientras se cargan las imágenes */}
              {!isCurrentImageLoaded && (
                <div className="absolute inset-0 bg-customGreen-dark flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-customAccent border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  whileInView={{ y: 0, opacity: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={slides[current].image || "/placeholder.svg"}
                      alt={slides[current].title}
                      fill
                      priority
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover rounded-2xl transition-opacity duration-300 ${
                        isCurrentImageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ objectPosition: "center center" }}
                      onLoadingComplete={() => {
                        setLoadedImages((prev) => ({
                          ...prev,
                          [slides[current].image]: true,
                        }));
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white">
                  {slides[current].title}
                </h3>
                <p className="text-white/80">{slides[current].subtitle}</p>
              </div>

              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/20 text-white hover:bg-black/40"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    prevSlide();
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/20 text-white hover:bg-black/40"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    nextSlide();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

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

            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-customAccent flex items-center justify-center animate-float">
              <div className="text-center">
                <p className="text-xs font-bold text-customGreen">PRÓXIMO</p>
                <p className="text-lg font-bold text-customGreen">REMATE</p>
                <p className="text-xs text-customGreen">21 MAYO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
