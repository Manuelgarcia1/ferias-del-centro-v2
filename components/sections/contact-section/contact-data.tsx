import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { ContactInfo } from "./types";

export const contactInfoData: ContactInfo[] = [
  {
    icon: <MapPin className="h-5 w-5 text-customAccent" />,
    title: "Dirección",
    details: "Av. Almte. Brown 361, San Carlos de Bolivar.",
  },
  {
    icon: <Phone className="h-5 w-5 text-customAccent" />,
    title: "Teléfono",
    details: "+5492314619451",
  },
  {
    icon: <Mail className="h-5 w-5 text-customAccent" />,
    title: "Email",
    details: "info@feriasdelcentro.com.ar",
  },
  {
    icon: <Clock className="h-5 w-5 text-customAccent" />,
    title: "Horario de Atención",
    details: "Lunes a Viernes: 7:30 - 15:00\nSábados: 7:30 - 12:00",
  },
];

export const mapConfig = {
  title: "Ubicación de Ferias del Centro",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.5086533759027!2d-61.11399992343833!3d-36.22713594504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bfe3aca4a8acff%3A0x7e445efeccd9b9a4!2sFerias%20del%20Centro!5e0!3m2!1ses!2sar!4v1749678785229!5m2!1ses!2sar",
};
