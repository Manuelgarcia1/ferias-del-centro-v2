"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "40+",
    label: "Años de experiencia en el mercado",
    description: "Brindando servicios de calidad desde 1983",
  },
  {
    value: "500+",
    label: "Remates realizados con éxito",
    description: "Operaciones transparentes y eficientes",
  },
  {
    value: "1000+",
    label: "Clientes satisfechos",
    description: "Productores que confían en nuestros servicios",
  },
  {
    value: "10K+",
    label: "Cabezas comercializadas por año",
    description: "Volumen de operaciones en constante crecimiento",
  },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-customGreen text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h2 className="text-xl font-medium text-customAccent uppercase tracking-wider">
              Nuestros Números
            </h2>
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Beneficios de Elegir{" "}
            <span className="text-customAccent">Ferias del Centro</span>
          </h3>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Nuestra trayectoria y experiencia nos respaldan. Estos son algunos
            de los números que demuestran nuestro compromiso con la excelencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-customAccent mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-white/70">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
