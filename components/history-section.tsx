"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { History, BarChart, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HistorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeTab, setActiveTab] = useState("historia")

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-customAccent text-customGreen mb-4">Nuestra Trayectoria</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-customGreen mb-6">
              Identificando los <span className="text-customAccent">Pilares</span> de Nuestra Historia
            </h2>

            <Tabs defaultValue="historia" onValueChange={setActiveTab} className="mt-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                <TabsTrigger
                  value="historia"
                  className="data-[state=active]:bg-customGreen data-[state=active]:text-white"
                >
                  <History className="mr-2 h-4 w-4" />
                  Nuestra Historia
                </TabsTrigger>
                <TabsTrigger
                  value="actualidad"
                  className="data-[state=active]:bg-customGreen data-[state=active]:text-white"
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Actualidad
                </TabsTrigger>
              </TabsList>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <TabsContent value="historia" className="mt-0">
                  <h3 className="text-2xl font-bold text-customGreen mb-4">Nuestra Historia</h3>
                  <p className="text-gray-700 mb-4">
                    En el año 1982, en una charla entre amigos y compañeros de trabajo, surge la idea de fundar una casa
                    consignataria de hacienda, sabiendo que su capital más grande no era el económico, sino que
                    posiblemente era su juventud, sus ganas de emprender y la pasión que compartían por la actividad.
                  </p>
                  <p className="text-gray-700 mb-4">
                    De esta manera, el 15 de Marzo de 1983 se realiza el primer remate feria de Ferias del Centro S.R.L.
                    en las instalaciones de la Sociedad Rural de Bolívar.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Desde entonces, hemos crecido constantemente, manteniendo siempre los valores de transparencia,
                    honestidad y profesionalismo que nos caracterizan desde nuestros inicios.
                  </p>

                  <Button variant="link" className="p-0 text-customAccent hover:text-customAccent/80 group">
                    Conocer más sobre nuestra historia
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </TabsContent>

                <TabsContent value="actualidad" className="mt-0">
                  <h3 className="text-2xl font-bold text-customGreen mb-4">Actualidad</h3>
                  <p className="text-gray-700 mb-4">
                    Hoy, Ferias del Centro S.R.L. se ha consolidado como una empresa líder en la comercialización de
                    hacienda en la región centro de la provincia de Buenos Aires.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Contamos con un equipo de profesionales altamente capacitados y comprometidos con brindar el mejor
                    servicio a nuestros clientes, adaptándonos constantemente a las nuevas tecnologías y cambios del
                    mercado.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Realizamos remates mensuales en las instalaciones de la Sociedad Rural de Bolívar y ofrecemos
                    servicios de compra y venta directa, asesoramiento integral y financiación para productores
                    ganaderos.
                  </p>

                  <Button variant="link" className="p-0 text-customAccent hover:text-customAccent/80 group">
                    Ver próximos remates
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </TabsContent>
              </motion.div>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={
                  activeTab === "historia"
                    ? "https://images.unsplash.com/photo-1533497374533-d74d9e719a7c?q=80&w=2070&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1560013689-95f0c34b7ebb?q=80&w=2070&auto=format&fit=crop"
                }
                alt={activeTab === "historia" ? "Historia de Ferias del Centro" : "Actualidad de Ferias del Centro"}
                width={600}
                height={700}
                className="w-full h-[500px] object-cover rounded-2xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-customGreen/50 to-transparent opacity-60"></div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-customAccent/20 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-customAccent">1983</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Año de</p>
                  <p className="font-bold text-customGreen">Fundación</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Primer remate feria realizado el 15 de Marzo de 1983 en la Sociedad Rural de Bolívar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
