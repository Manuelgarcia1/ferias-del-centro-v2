"use client";

import { motion } from "framer-motion";
import type { StatsHeaderProps } from "./types";

export function StatsHeader({ isInView }: StatsHeaderProps) {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <h2 className="text-xl font-medium text-customAccent-contrastSafe uppercase tracking-wider">
          Nuestros Números
        </h2>
      </motion.div>

      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Beneficios de Elegir{" "}
        <span className="text-customAccent-contrastSafe">
          Ferias del Centro
        </span>
      </h3>

      <p className="text-lg text-white/80 max-w-3xl mx-auto">
        Nuestra trayectoria y experiencia nos respaldan. Estos son algunos de
        los números que demuestran nuestro compromiso con la excelencia.
      </p>
    </motion.div>
  );
}
