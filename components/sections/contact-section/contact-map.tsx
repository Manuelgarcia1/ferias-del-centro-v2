"use client";

import { motion } from "framer-motion";
import { mapConfig } from "./contact-data";
import type { ContactMapProps } from "./types";

export function ContactMap({ isInView }: ContactMapProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white p-8 rounded-2xl shadow-lg h-64 relative"
    >
      <h3 className="text-2xl font-bold text-customGreen mb-4">
        Nuestra Ubicación
      </h3>

      <div className="absolute inset-0 mt-20 bg-gray-200 rounded-b-2xl">
        <iframe
          title={mapConfig.title}
          src={mapConfig.embedUrl}
          className="w-full h-full border-0 rounded-b-2xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>
  );
}
