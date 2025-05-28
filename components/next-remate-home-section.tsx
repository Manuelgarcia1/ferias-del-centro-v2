"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NextRemateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h3 className="text-xl font-medium text-customAccent uppercase tracking-wider">
              Remates mensuales
            </h3>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
            Optimiza tus negociaciones con{" "}
            <span className="text-customAccent">remates</span> profesionales
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Organizamos remates mensuales con las mejores condiciones del
            mercado.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/remates" className="block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src="/images/vacas4.jpg"
                    alt="1000 Vacunos"
                    fill
                    priority // <-- aquí
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* Overlay anclado abajo */}
                  <div className="absolute bottom-0 inset-x-0 flex flex-col items-center justify-end text-center pb-4">
                    {/* Número un poco más grande */}
                    <h2 className="text-6xl md:text-7xl font-semibold text-white leading-none">
                      1000
                    </h2>
                    {/* “Vacunos” también en Playfair */}
                    <h3 className="text-3xl md:text-4xl font-semibold text-white/90">
                      Vacunos
                    </h3>
                    {/* Pill descriptiva mucho más pequeña */}
                    <span className="mt-2 inline-block bg-customGreen text-white rounded-full px-3 py-1 text-[0.5rem] md:text-[0.625rem] font-body">
                      Gordo, invernada y cría
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-customGreen">
                            REMATE FERIA
                          </h3>
                          <p className="text-xl text-customAccent italic font-medium">
                            Mensual
                          </p>
                        </div>
                        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                          <Calendar className="h-4 w-4 text-customGreen mr-2" />
                          <span className="font-bold text-sm">21 de Mayo</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-customGreen mr-2" />
                          <span className="text-gray-700 text-sm">
                            Sociedad rural
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-customGreen mr-2" />
                          <span className="text-gray-700 text-sm">13hs</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg mb-4">
                        <p className="text-gray-700 text-sm font-medium">
                          DESTACAMOS:
                        </p>
                        <ul className="text-sm text-gray-600 mt-1">
                          <li>• 700 TERNEROS/AS DE INVERNADA</li>
                          <li>• 30 VACAS A.A 2DA Y 3RA PARICION PREÑADAS</li>
                        </ul>
                      </div>
                    </div>

                    <Button className="bg-customGreen hover:bg-customGreen/90 text-white group w-full">
                      Ver detalles completos
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
