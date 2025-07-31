import type { Slide } from "./types";
import Carousel1 from "@/public/images/hero-section/Carousel1.jpg";
import Carousel2 from "@/public/images/hero-section/Carousel2.jpg";
import Carousel3 from "@/public/images/hero-section/Carousel3.jpg";

export const heroSlides: Slide[] = [
  {
    id: 1,
    image: Carousel1,
    title: "Comercialización de Hacienda",
    subtitle: "San Carlos de Bolívar",
    description:
      "Impulsamos el movimiento de haciendas conectando productores, compradores y oportunidades reales de negocio.",
  },
  {
    id: 2,
    image: Carousel2,
    title: "Experiencia y Confianza",
    subtitle: "Desde 1983",
    description:
      "Brindamos soluciones integrales para la comercialización de ganado con transparencia y profesionalismo.",
  },
  {
    id: 3,
    image: Carousel3,
    title: "Remates y Ferias",
    subtitle: "Servicio Integral",
    description:
      "Ofrecemos un servicio completo para productores ganaderos con las mejores condiciones del mercado.",
  },
];
