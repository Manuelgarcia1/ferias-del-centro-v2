import React from "react";
import { Award, Clock, Users } from "lucide-react";
import type { Feature } from "./types";

export const aboutFeatures: Feature[] = [
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

export const keyPoints: string[] = [
  "Transparencia en cada operación",
  "Asesoramiento profesional",
  "Mejores condiciones del mercado",
  "Atención personalizada",
];
