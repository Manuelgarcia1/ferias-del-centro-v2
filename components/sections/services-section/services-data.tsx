import { Calendar, ShoppingCart, LineChart } from "lucide-react";
import type { Service, WhatsAppConfig } from "./types";

export const whatsappConfig: WhatsAppConfig = {
  consultasNumber: "5492314619451",
  financiacionNumber: "542216151058",
};

export const servicesData: Service[] = [
  {
    icon: <Calendar className="h-8 w-8 text-customAccent" />,
    title: "Remates Ferias",
    description:
      "Organizamos remates ferias mensuales con las mejores condiciones del mercado.",
    image: "/images/services-section/cesar.jpg",
    phone: whatsappConfig.consultasNumber,
    text: (title: string) =>
      `Hola, me comunico de la página web. Quisiera más info sobre *${title}*`,
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-customAccent" />,
    title: "Compra y Venta Directa",
    description:
      "Facilitamos operaciones directas entre productores con total transparencia.",
    image: "/images/services-section/compraVenta.jpg",
    phone: whatsappConfig.consultasNumber,
    text: (title: string) =>
      `Hola, me comunico de la página web. Quisiera más info sobre *${title}*`,
  },
  {
    icon: <LineChart className="h-8 w-8 text-customAccent" />,
    title: "Asesoramiento",
    description:
      "Brindamos asesoramiento profesional para optimizar sus operaciones comerciales.",
    image: "/images/services-section/asesoramiento.jpg",
    phone: whatsappConfig.financiacionNumber,
    text: (title: string) =>
      `Hola, me comunico de la página web. Quisiera más info sobre *${title}*`,
  },
];
