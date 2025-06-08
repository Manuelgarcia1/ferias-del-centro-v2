"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Award className="h-10 w-10 text-customGreen" />,
    title: "Experiencia",
    description:
      "Más de 40 años en el mercado ganadero nos respaldan, brindando confianza y seguridad a nuestros clientes.",
  },
  {
    icon: <Users className="h-10 w-10 text-customGreen" />,
    title: "Equipo Profesional",
    description:
      "Contamos con un equipo de profesionales altamente capacitados para brindar el mejor servicio y asesoramiento.",
  },
  {
    icon: <Clock className="h-10 w-10 text-customGreen" />,
    title: "Servicio Permanente",
    description:
      "Ofrecemos atención y servicio constante, adaptándonos a las necesidades de cada productor.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-white" ref={ref} id="about">
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h2 className="text-xl font-medium text-customAccent uppercase tracking-wider">
              Sobre Nosotros
            </h2>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
              Una Empresa con{" "}
              <span className="text-customAccent">Trayectoria</span> y
              Compromiso
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Somos una empresa con más de 40 años de trayectoria, buscando día
              a día ofrecer el mejor servicio de comercialización de hacienda.
              Nuestra experiencia nos permite brindar soluciones integrales
              adaptadas a las necesidades de cada productor.
            </p>
          </motion.div>
        </div>

        {/* Puntos clave */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Transparencia en cada operación",
              "Asesoramiento profesional",
              "Mejores condiciones del mercado",
              "Atención personalizada",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center"
              >
                <CheckCircle className="h-5 w-5 text-customAccent mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tarjetas de características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="rounded-full bg-customAccent/10 p-3 inline-flex mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-customGreen">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
