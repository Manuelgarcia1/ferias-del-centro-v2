"use client";

import { motion } from "framer-motion";
import type { ContactInfoCardProps } from "./types";

export function ContactInfoCard({
  contactInfo,
  isInView,
}: ContactInfoCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 h-auto">
      <h3 className="text-2xl font-bold text-customGreen mb-6">
        Información de Contacto
      </h3>

      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
          >
            <div className="bg-customAccent/10 p-3 rounded-full mr-4 group-hover:bg-customAccent/20 transition-colors duration-200">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-customGreen group-hover:text-customAccent transition-colors duration-200">
                {item.title}
              </h4>
              <p className="text-gray-600 whitespace-pre-line">
                {item.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
