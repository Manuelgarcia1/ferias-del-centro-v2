"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  LineChart,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const WA_NUMBER_CONSULTAS = "5492314619451";
const WA_NUMBER_FINANCIACION = "542216151058";

const services = [
  {
    icon: <Calendar className="h-8 w-8 text-customAccent" />,
    title: "Remates Ferias",
    description:
      "Organizamos remates ferias mensuales con las mejores condiciones del mercado.",
    image: "/images/cesar.jpg",
    phone: WA_NUMBER_CONSULTAS,
    text: (title: string) =>
      `Hola, me comunico de la página web. Quisiera más info sobre *${title}*`,
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-customAccent" />,
    title: "Compra y Venta Directa",
    description:
      "Facilitamos operaciones directas entre productores con total transparencia.",
    image: "/images/compraVenta.jpg",
    phone: WA_NUMBER_CONSULTAS,
    text: (title: string) =>
      `Hola, me comunico de la página web. Quisiera más info sobre *${title}*`,
  },
  {
    icon: <LineChart className="h-8 w-8 text-customAccent" />,
    title: "Asesoramiento",
    description:
      "Brindamos asesoramiento profesional para optimizar sus operaciones comerciales.",
    image: "/images/asesoramiento.jpg",
    phone: WA_NUMBER_FINANCIACION,
    text: (title: string) =>
      `Hola, me comunico de la página web. Quisiera más info sobre *${title}*`,
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabecera */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl font-medium text-customAccent uppercase">
            Nuestros Servicios
          </h2>
          <h3 className="text-3xl font-bold text-customGreen mt-2">
            Comercialización{" "}
            <span className="text-customAccent">Eficiente</span>
          </h3>
          <p className="text-gray-700 mt-2">
            Soluciones integrales para la comercialización de hacienda.
          </p>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const waLink = `https://api.whatsapp.com/send?phone=${
              svc.phone
            }&text=${encodeURIComponent(svc.text(svc.title))}`;

            return (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden"
              >
                {/* Imagen más alta y con objeto posicionado */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    priority
                    className="object-cover"
                    style={{
                      objectPosition: idx === 1 ? "70% 50%" : "50% 45%",
                    }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-customGreen/80 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full">
                    {svc.icon}
                  </div>
                </div>

                {/* Contenido + botón sutil */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-customGreen mb-2">
                      {svc.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{svc.description}</p>
                  </div>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 mb-4 text-customAccent font-bold hover:text-customAccent/80 text-sm"
                  >
                    Saber más <ArrowRight className="inline-block h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sección de financiación (igual que antes) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
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
                <div className="w-12 h-12 rounded-full bg-customAccent-contrastSafe flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-customGreen-dark" />
                </div>
                <div>
                  <p className="text-white font-bold">Opciones Flexibles</p>
                  <p className="text-white/70">Adaptadas a sus necesidades</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WA_NUMBER_FINANCIACION}?text=${encodeURIComponent(
                  "Hola, me comunico de la pagina web. Quisiera más info sobre opciones de *financiación*"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 mt-8 bg-customAccent-contrastSafe text-customGreen-dark hover:bg-customAccent-contrastSafe/90 self-start"
              >
                Consultar Opciones
              </a>
            </div>
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
      </div>
    </section>
  );
}
