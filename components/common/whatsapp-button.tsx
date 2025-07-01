"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/+5492314619451"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className={`
        fixed bottom-4 right-4 z-50
        flex items-center justify-center
        w-12 h-12
        bg-green-500 rounded-full
        shadow-lg text-white
        hover:bg-green-600 transition-all

        /* A partir de md: vuelve a tamaño auto y muestra texto */
        md:w-auto md:h-auto md:px-3 md:py-2
        md:rounded-lg md:gap-2
      `}
    >
      <FaWhatsapp className="h-6 w-6" />
      <span className="hidden md:inline font-medium whitespace-nowrap">
        ¿Podemos ayudarte?
      </span>
    </motion.a>
  );
}
