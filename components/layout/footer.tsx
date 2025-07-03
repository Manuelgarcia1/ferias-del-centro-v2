import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, Github } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-customGreen-dark to-customGreen text-white">
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* Top: Logo + social */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
          <div>
            <Logo className="h-12 w-auto mb-4" />
            <p className="text-white/80 max-w-sm">
              Somos una empresa con más de 40 años de trayectoria en la
              comercialización de hacienda.
            </p>
          </div>
          <div className="flex space-x-2">
            <a
              href="https://wa.me/+5492314619451"
              target="_blank"
              aria-label="WhatsApp de Ferias del Centro"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/ferias.del.centro.srl"
              target="_blank"
              aria-label="Instagram de Ferias del Centro"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://web.facebook.com/cesarabel.diez"
              target="_blank"
              aria-label="Facebook de Ferias del Centro"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        {/* …el resto del grid de enlaces y contacto tal como lo tenías… */}

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Signature */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60">
          <p>© {new Date().getFullYear()} Ferias del Centro S.R.L.</p>
          <p className="mt-4 md:mt-0 flex items-center space-x-2">
            <span>Diseñado y desarrollado por Manuel Alejandro García</span>
            <Link
              href="https://wa.me/+5492314464231"
              target="_blank"
              className="p-1 bg-white/10 rounded hover:bg-white/20 transition flex items-center space-x-1"
            >
              <FaWhatsapp className="h-5 w-5 text-white" />
            </Link>
            <Link
              href="https://github.com/Manuelgarcia1"
              target="_blank"
              className="p-1 bg-white/10 rounded hover:bg-white/20 transition"
            >
              <Github className="h-5 w-5 text-white" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
