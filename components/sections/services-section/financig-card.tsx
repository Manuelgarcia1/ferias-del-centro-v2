"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { createWhatsAppDirectLink } from "./utils/whatsapp";
import type { FinancingCardProps } from "./types";

export function FinancingCard({ phone, className }: FinancingCardProps) {
  const financingMessage =
    "Hola, me comunico de la pagina web. Quisiera más info sobre opciones de *financiación*";
  const whatsappLink = createWhatsAppDirectLink(phone, financingMessage);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={`bg-customGreen rounded-2xl overflow-hidden ${
        className || ""
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Contenido */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Financiación y Opciones de Pago Flexibles
          </h3>
          <p className="text-white/80 mb-6">
            Ofrecemos diversas opciones de financiación adaptadas a cada
            necesidad. Consulte por nuestros planes y facilidades de pago.
          </p>

          {/* Feature highlight */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-customAccent-contrastSafe flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-customGreen-dark" />
            </div>
            <div>
              <p className="text-white font-bold">Opciones Flexibles</p>
              <p className="text-white/70">Adaptadas a sus necesidades</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-customAccent-contrastSafe text-customGreen-dark hover:bg-customAccent-contrastSafe/90 self-start"
          >
            Consultar Opciones
          </a>
        </div>

        {/* Imagen */}
        <div className="relative h-80 lg:h-auto">
          <Image
            src="/images/financiacion.jpg"
            alt="Financiación"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
}
