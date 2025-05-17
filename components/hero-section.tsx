"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1605433974219-e46ccd9a163d?q=80&w=2070&auto=format&fit=crop",
    title: "Comercialización de Hacienda",
    subtitle: "San Carlos de Bolívar",
    description:
      "Somos una empresa con más de 40 años de trayectoria, buscando día a día ofrecer el mejor servicio de comercialización de hacienda.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516467716199-8b782a7f3f8d?q=80&w=2069&auto=format&fit=crop",
    title: "Experiencia y Confianza",
    subtitle: "Desde 1983",
    description:
      "Brindamos soluciones integrales para la comercialización de ganado con transparencia y profesionalismo.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1470072768013-bf9532016c10?q=80&w=2070&auto=format&fit=crop",
    title: "Remates y Ferias",
    subtitle: "Servicio Integral",
    description: "Ofrecemos un servicio completo para productores ganaderos con las mejores condiciones del mercado.",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16 bg-customGreen">
      <div className="absolute inset-0 bg-hero-pattern opacity-10 z-0"></div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <Badge className="bg-customAccent text-customGreen mb-4">Desde 1983</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Revolucionando la <span className="text-customAccent">Comercialización</span> de Hacienda
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl">
              Somos una empresa con más de 40 años de trayectoria, buscando día a día ofrecer el mejor servicio de
              comercialización de hacienda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-customAccent text-customGreen hover:bg-customAccent/90 group">
                Ver Remates
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contactar
              </Button>
            </div>

            <div className="flex items-center mt-12 space-x-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-customAccent flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-customGreen" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Ubicación</p>
                  <p className="font-medium">Bolívar</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-customAccent flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-customGreen"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/70">Experiencia</p>
                  <p className="font-medium">+40 años</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].image || "/placeholder.svg"}
                    alt={slides[current].title}
                    fill
                    priority
                    className="object-cover rounded-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white">{slides[current].title}</h3>
                <p className="text-white/80">{slides[current].subtitle}</p>
              </div>

              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/20 text-white hover:bg-black/40"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/20 text-white hover:bg-black/40"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="absolute bottom-24 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === current ? "bg-customAccent w-8" : "bg-white/50 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-customAccent flex items-center justify-center animate-float">
              <div className="text-center">
                <p className="text-xs font-bold text-customGreen">PRÓXIMO</p>
                <p className="text-lg font-bold text-customGreen">REMATE</p>
                <p className="text-xs text-customGreen">15 JUNIO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="custom-shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  )
}
