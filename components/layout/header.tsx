"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Remates", href: "/#remates" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full h-[90px] py-4 `}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-customGreen-dark shadow-lg z-0">
        {/* Patrón sutil */}
        <div className="absolute inset-0 opacity-10 bg-hero-pattern"></div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16 max-w-full">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-white font-medium hover:text-customAccent transition-colors text-sm lg:text-base relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-customAccent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <Button
                className="bg-customGreen text-white hover:bg-customGreen/90 font-medium px-5 lg:px-7 text-sm lg:text-base ml-2 shadow-md hover:shadow-lg transition-all duration-300"
                size="sm"
                asChild
              >
                <Link href="/#contacto">Contactar</Link>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white p-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-white text-customGreen hover:bg-customGreen hover:text-white font-medium w-full mt-2 shadow-md hover:shadow-lg transition"
                asChild
              >
                <Link href="/#contacto" onClick={() => setIsOpen(false)}>
                  Contactar
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
