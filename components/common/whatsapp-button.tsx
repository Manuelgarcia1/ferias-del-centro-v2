"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5491112345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 z-50 flex items-center gap-2 px-3 py-2 bg-green-500 rounded-lg shadow-lg text-white hover:bg-green-600 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-medium whitespace-nowrap">¿Podemos ayudarte?</span>
    </motion.a>
  );
}
