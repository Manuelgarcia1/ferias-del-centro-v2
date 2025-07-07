"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { DesktopNavProps } from "./types";

export function DesktopNav({ navItems }: DesktopNavProps) {
  return (
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
            className="text-white font-medium transition-colors text-sm lg:text-base relative group"
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
          className="bg-white text-customGreen-dark hover:bg-gray-100 border border-white font-semibold px-5 lg:px-6 text-sm lg:text-base transition-all duration-200"
          size="sm"
          asChild
        >
          <Link href="/#contacto">Contactar</Link>
        </Button>
      </motion.div>
    </nav>
  );
}
