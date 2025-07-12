"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HeroCarouselProps } from "./types";

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState<number>(0);
  const nextSlide = useCallback(
    () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1)),
    [slides.length]
  );
  const prevSlide = useCallback(
    () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1)),
    [slides.length]
  );
  return (
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
              src={slides[current].image || "/placeholder.svg"}
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
            className="rounded-full p-3 bg-black/40 hover:bg-white/30 transition"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </Button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full p-3 bg-black/40 hover:bg-white/30 transition"
            onClick={nextSlide}
            aria-label="Siguiente"
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
              aria-label={`Ir a slide ${index + 1}`}
              className={`h-4 w-4 md:h-4 md:w-4 rounded-full transition-all focus:outline-none ${
                index === current
                  ? "bg-customAccent-contrastSafe ring-2 ring-white"
                  : "bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Insignia flotante del próximo remate */}
      <div className="absolute -top-10 -right-2 w-28 h-28 rounded-full bg-gradient-to-br from-customAccent to-customAccent-contrastSafe flex items-center justify-center shadow-xl animate-float">
        <div className="text-center">
          <span className="block text-xs font-semibold uppercase tracking-wide text-white">
            Próximo
          </span>
          <span className="block text-2xl font-bold uppercase leading-none text-white drop-shadow-md">
            Remate
          </span>
          <span className="block text-sm font-medium uppercase tracking-wide text-white">
            24 Julio
          </span>
        </div>
      </div>
    </motion.div>
  );
}
