"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { MobileNavProps } from "./types";

export function MobileNav({ navItems, isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-customGreen-dark border-t border-white/10 w-full overflow-hidden relative z-40"
        >
          <div className="absolute inset-0 opacity-5 bg-hero-pattern"></div>
          <div className="container relative z-10 mx-auto px-6 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white font-medium py-2 hover:text-customAccent transition-colors border-b border-white/10 last:border-0"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="bg-white text-customGreen hover:bg-customGreen hover:text-white font-medium w-full mt-2 shadow-md hover:shadow-lg transition"
              asChild
            >
              <Link href="/#contacto" onClick={onClose}>
                Contactar
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
