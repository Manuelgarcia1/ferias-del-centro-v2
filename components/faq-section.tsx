"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo puedo participar en los remates?",
    answer:
      "Para participar en nuestros remates, puede asistir personalmente a las instalaciones de la Sociedad Rural de Bolívar en las fechas programadas o contactarnos previamente para recibir información detallada sobre el proceso de participación remota.",
  },
  {
    question: "¿Qué documentación necesito para vender mi hacienda?",
    answer:
      "Para vender su hacienda a través de nuestros servicios, necesitará presentar la documentación legal correspondiente: RENSPA actualizado, DTE (Documento de Tránsito Electrónico), certificados sanitarios vigentes y documentación que acredite la propiedad de los animales.",
  },
  {
    question: "¿Ofrecen financiación para las compras?",
    answer:
      "Sí, ofrecemos diversas opciones de financiación adaptadas a las necesidades de cada cliente. Contamos con planes de pago flexibles y alianzas con entidades financieras para facilitar sus operaciones comerciales.",
  },
  {
    question: "¿Realizan tasaciones de hacienda?",
    answer:
      "Sí, contamos con profesionales especializados que realizan tasaciones precisas de su hacienda. Este servicio puede solicitarse contactando a nuestras oficinas para coordinar una visita técnica a su establecimiento.",
  },
  {
    question: "¿Cómo puedo conocer las fechas de los próximos remates?",
    answer:
      "Las fechas de nuestros próximos remates se publican en nuestra página web, redes sociales y se envían por correo electrónico a nuestros clientes registrados. También puede comunicarse telefónicamente con nuestras oficinas para obtener esta información.",
  },
];

export function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-white" ref={ref}>
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
              Preguntas Frecuentes
            </h3>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
            Respuestas a sus{" "}
            <span className="text-customAccent">Consultas</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Encuentre respuestas a las preguntas más frecuentes sobre nuestros
            servicios y procesos.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left font-medium text-customGreen hover:text-customAccent py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
