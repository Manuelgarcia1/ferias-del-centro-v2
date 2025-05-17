"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Award, Clock, Users, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
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
    description: "Ofrecemos atención y servicio constante, adaptándonos a las necesidades de cada productor.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560013689-95f0c34b7ebb?q=80&w=2070&auto=format&fit=crop"
                alt="Sobre Ferias del Centro"
                width={600}
                height={700}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-customGreen/80 to-transparent opacity-60"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-customAccent/20 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-customAccent">40</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Años de</p>
                  <p className="font-bold text-customGreen">Experiencia</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Desde 1983 brindando el mejor servicio de comercialización de hacienda.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="bg-customAccent text-customGreen mb-4">Sobre Nosotros</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-customGreen mb-6">
              Una Empresa con <span className="text-customAccent">Trayectoria</span> y Compromiso
            </h2>

            <p className="text-gray-700 mb-6">
              Somos una empresa con más de 40 años de trayectoria, buscando día a día ofrecer el mejor servicio de
              comercialización de hacienda. Nuestra experiencia nos permite brindar soluciones integrales adaptadas a
              las necesidades de cada productor.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Transparencia en cada operación",
                "Asesoramiento profesional",
                "Mejores condiciones del mercado",
                "Atención personalizada",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-customAccent mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-md card-hover">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-customAccent/10 p-3 inline-flex mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-customGreen">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
