"use client";

import { motion } from "framer-motion";
import type { StatCardProps } from "./types";

export function StatCard({ stat, index, isInView }: StatCardProps) {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 cursor-default group hover-only-desktop"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-customAccent-contrastSafe mb-2"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
      >
        {stat.value}
      </motion.div>

      <motion.h3
        className="text-xl font-bold group-hover:text-customAccent-contrastSafe transition-colors duration-300"
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
      >
        {stat.label}
      </motion.h3>
    </motion.div>
  );
}
