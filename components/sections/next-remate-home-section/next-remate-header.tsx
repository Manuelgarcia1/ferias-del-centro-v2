"use client";

import { motion } from "framer-motion";
import type { NextRemateHeaderProps } from "./types";

export function NextRemateHeader({ isInView }: NextRemateHeaderProps) {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-10 max-w-3xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <h2 className="text-xl font-medium text-customAccent uppercase tracking-wider">
          Remates mensuales
        </h2>
      </motion.div>

      <h3 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
        Optimiza tus negociaciones con{" "}
        <span className="text-customAccent">remates</span> profesionales
      </h3>

      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Organizamos remates mensuales con las mejores condiciones del mercado.
      </p>
    </motion.div>
  );
}
