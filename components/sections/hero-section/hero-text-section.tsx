"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HeroTextSectionProps } from "./types";

export function HeroTextSection({}: HeroTextSectionProps) {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Revolucionando la{" "}
        <span className="text-customAccent-contrastSafe">Comercialización</span>
        <br />
        de Hacienda
      </h1>

      <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl">
        Somos una empresa con más de 40 años de trayectoria, buscando día a día
        ofrecer el mejor servicio de comercialización de hacienda.
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
  );
}
