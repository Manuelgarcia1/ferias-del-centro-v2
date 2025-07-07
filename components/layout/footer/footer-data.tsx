import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
  {
    href: "https://wa.me/+5492314619451",
    icon: <FaWhatsapp className="h-5 w-5" />,
    label: "WhatsApp de Ferias del Centro",
  },
  {
    href: "https://instagram.com/ferias.del.centro.srl",
    icon: <Instagram className="h-5 w-5 text-white" />,
    label: "Instagram de Ferias del Centro",
  },
  {
    href: "https://web.facebook.com/cesarabel.diez",
    icon: <Facebook className="h-5 w-5 text-white" />,
    label: "Facebook de Ferias del Centro",
  },
];

export const companyInfo = {
  name: "Ferias del Centro S.R.L.",
  description:
    "Somos una empresa con más de 40 años de trayectoria en la comercialización de hacienda.",
};

export const developerInfo = {
  name: "Manuel Alejandro García",
  whatsapp: "+5492314464231",
  github: "https://github.com/Manuelgarcia1",
};
