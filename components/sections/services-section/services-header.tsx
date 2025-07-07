"use client";

import { motion } from "framer-motion";
import type { ServicesHeaderProps } from "./types";

export function ServicesHeader({ className }: ServicesHeaderProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className || ""}`}
    >
      <h2 className="text-xl font-medium text-customAccent uppercase">
        Nuestros Servicios
      </h2>
      <h3 className="text-3xl font-bold text-customGreen mt-2">
        Comercialización <span className="text-customAccent">Eficiente</span>
      </h3>
      <p className="text-gray-700 mt-2">
        Soluciones integrales para la comercialización de hacienda.
      </p>
    </motion.div>
  );
}
