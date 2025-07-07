"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ContactHeader } from "./contact-header";
import { ContactForm } from "./contact-form";
import { ContactInfoCard } from "./contact-info-card";
import { ContactMap } from "./contact-map"; // Usando la versión lazy loading
import { contactInfoData } from "./contact-data";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <ContactHeader isInView={isInView} />

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Formulario */}
          <ContactForm isInView={isInView} />

          {/* Información y mapa */}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full flex flex-col justify-between"
          >
            <ContactInfoCard
              contactInfo={contactInfoData}
              isInView={isInView}
            />
            <ContactMap isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
