"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Juan Pérez",
    role: "Productor Ganadero",
    content:
      "Ferias del Centro ha sido un socio clave en la comercialización de mi hacienda. Su profesionalismo y transparencia son destacables.",
    rating: 5,
  },
  {
    name: "Carlos Gómez",
    role: "Inversor Agropecuario",
    content:
      "El equipo de Ferias del Centro siempre brinda un asesoramiento preciso y actualizado. Recomiendo ampliamente sus servicios.",
    rating: 5,
  },
  {
    name: "María López",
    role: "Productora Rural",
    content:
      "Desde que trabajo con Ferias del Centro, mis operaciones comerciales han mejorado notablemente. Excelente atención y resultados.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
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
            <h3 className="text-xl font-medium text-customAccent uppercase tracking-wider">
              Testimonios
            </h3>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
            Lo Que Dicen Nuestros{" "}
            <span className="text-customAccent">Clientes</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor orgullo.
            Conozca las experiencias de quienes confían en nuestros servicios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-lg card-hover">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-customAccent text-customAccent"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-customGreen flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-customGreen">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
