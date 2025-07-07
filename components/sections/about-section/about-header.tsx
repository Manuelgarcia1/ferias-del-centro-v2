"use client";

import { motion } from "framer-motion";
import type { AboutHeaderProps } from "./types";

export function AboutHeader({ isInView }: AboutHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <h2 className="text-xl font-medium text-customAccent uppercase tracking-wider">
          Sobre Nosotros
        </h2>
      </motion.div>

      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
          Una Empresa con <span className="text-customAccent">Trayectoria</span>{" "}
          y Compromiso
        </h3>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Somos una empresa con más de 40 años de trayectoria, buscando día a
          día ofrecer el mejor servicio de comercialización de hacienda. Nuestra
          experiencia nos permite brindar soluciones integrales adaptadas a las
          necesidades de cada productor.
        </p>
      </motion.div>
    </div>
  );
}
