"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-customGreen text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Comercializar su{" "}
            <span className="text-customAccent">Hacienda</span>?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contáctenos hoy mismo y descubra cómo podemos ayudarle a optimizar
            sus operaciones comerciales con nuestros servicios profesionales.
          </p>
          <Button
            size="lg"
            className="bg-customAccent text-customGreen hover:bg-customAccent/90 group"
          >
            Solicitar Información
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
