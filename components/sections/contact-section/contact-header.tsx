"use client";

import { motion } from "framer-motion";
import type { ContactHeaderProps } from "./types";

export function ContactHeader({ isInView }: ContactHeaderProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ y: 0, opacity: 1 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <h2 className="text-xl font-medium text-customAccent uppercase tracking-wider">
          Contacto
        </h2>
      </motion.div>

      <h3 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
        Estamos a tu <span className="text-customAccent">Disposición</span>
      </h3>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Contáctenos para obtener más información sobre nuestros servicios o para
        programar una consulta personalizada.
      </p>
    </motion.div>
  );
}
