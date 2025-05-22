"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  DollarSign,
  LineChart,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Calendar className="h-8 w-8 text-customAccent" />,
    title: "Remates Ferias",
    description:
      "Organizamos remates ferias mensuales con las mejores condiciones del mercado.",
    image:
      "https://images.unsplash.com/photo-1560013689-95f0c34b7ebb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-customAccent" />,
    title: "Compra y Venta Directa",
    description:
      "Facilitamos operaciones directas entre productores con total transparencia.",
    image:
      "https://images.unsplash.com/photo-1551651767-d5ffbdd04b83?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <LineChart className="h-8 w-8 text-customAccent" />,
    title: "Asesoramiento",
    description:
      "Brindamos asesoramiento profesional para optimizar sus operaciones comerciales.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h3 className="text-xl font-medium text-customAccent uppercase tracking-wider">
              Nuestros Servicios
            </h3>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
            Una Plataforma para Hacer la{" "}
            <span className="text-customAccent">Comercialización</span>{" "}
            Eficiente
          </h2>
          <p className="text-lg text-gray-700">
            Ofrecemos soluciones integrales para la comercialización de
            hacienda, adaptadas a las necesidades de cada productor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-customGreen/80 to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-customGreen">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="link"
                  className="p-0 text-customAccent hover:text-customAccent/80 group"
                >
                  Saber más
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-customGreen rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Financiación y Opciones de Pago Flexibles
              </h3>
              <p className="text-white/80 mb-6">
                Ofrecemos diversas opciones de financiación adaptadas a cada
                necesidad. Consulte por nuestros planes y facilidades de pago.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-customAccent flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-customGreen" />
                </div>
                <div>
                  <p className="text-white font-bold">Opciones Flexibles</p>
                  <p className="text-white/70">Adaptadas a sus necesidades</p>
                </div>
              </div>
              <Button className="mt-8 bg-customAccent text-customGreen hover:bg-customAccent/90 self-start">
                Consultar Opciones
              </Button>
            </div>
            <div className="relative h-80 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop"
                alt="Financiación"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
