"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { createWhatsAppLink } from "./utils/whatsapp";
import type { ServiceCardProps } from "./types";

export function ServiceCard({ service, index }: ServiceCardProps) {
  const whatsappLink = createWhatsAppLink(
    service.phone,
    service.text(service.title)
  );

  const getImagePosition = (index: number): string => {
    return index === 1 ? "70% 50%" : "50% 45%";
  };

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden cursor-pointer group block hover-only-desktop"
    >
      {/* Imagen */}
      <div className="relative h-56 overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            priority
            className="object-cover transition-transform duration-300"
            style={{
              objectPosition: getImagePosition(index),
            }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-customGreen/80 to-transparent group-hover:from-customGreen/90 transition-all duration-300" />

        {/* Icono con animación */}
        <motion.div
          className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 },
          }}
        >
          {service.icon}
        </motion.div>

        {/* Indicador de hover */}
        <motion.div
          className="absolute top-4 right-4 bg-customAccent text-white p-2 rounded-full opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2 },
          }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <motion.h4
            className="text-xl font-bold text-customGreen mb-2 group-hover:text-customAccent transition-colors duration-300"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            {service.title}
          </motion.h4>
          <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
            {service.description}
          </p>
        </div>

        {/* Call to action mejorado */}
        <motion.div
          className="flex items-center justify-between mt-2"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-customAccent font-bold text-sm group-hover:text-customAccent/80 transition-colors duration-300">
            Contactar por WhatsApp
          </span>
          <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="h-4 w-4 text-customAccent" />
          </motion.div>
        </motion.div>
      </div>
    </motion.a>
  );
}
