import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-customGreen text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo className="h-12 w-auto mb-4" />
            <p className="text-white/80 mt-4">
              Somos una empresa con más de 40 años de trayectoria en la comercialización de hacienda.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-customAccent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-customAccent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-customAccent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-customAccent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-white/80 hover:text-customAccent transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/remates" className="text-white/80 hover:text-customAccent transition-colors">
                  Remates
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-white/80 hover:text-customAccent transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-white/80 hover:text-customAccent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-customAccent transition-colors">
                  Remates Ferias
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-customAccent transition-colors">
                  Compra y Venta Directa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-customAccent transition-colors">
                  Asesoramiento
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-customAccent transition-colors">
                  Financiación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Suscríbase para recibir información sobre próximos remates y novedades.
            </p>
            <div className="flex space-x-2">
              <Input
                placeholder="Su email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-customAccent"
              />
              <Button className="bg-customAccent text-customGreen hover:bg-customAccent/90">Suscribir</Button>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-customAccent mr-2" />
                <span className="text-white/80">Av. San Martín 455, San Carlos de Bolívar</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-customAccent mr-2" />
                <span className="text-white/80">+54 2314 123456</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-customAccent mr-2" />
                <span className="text-white/80">info@feriasdelcentro.com.ar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60">
          <p>© {new Date().getFullYear()} Ferias del Centro S.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
