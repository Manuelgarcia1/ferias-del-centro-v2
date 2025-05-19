"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, MapPin, CreditCard, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NextRemateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/images/cow-icon.png"
              alt="Icono de vaca"
              width={40}
              height={40}
              className="mr-3"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-customGreen">
              Remates mensuales
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Organizamos remates ferias mensuales con las mejores condiciones del
            mercado.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/images/vacas4.jpg"
                alt="1000 Vacunos"
                fill
                quality={100}
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-7xl font-bold mb-2">1000</h2>
                <h3 className="text-4xl font-bold mb-1">Vacunos</h3>
                <p className="text-lg bg-customAccent/90 text-customGreen px-3 py-1 rounded-full inline-block">
                  • Gordo, invernada y cría •
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-customGreen">
                        REMATE FERIA
                      </h2>
                      <p className="text-2xl text-customAccent italic font-medium">
                        Mensual
                      </p>
                    </div>
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-customGreen mr-2" />
                      <span className="font-bold">21 de Mayo</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-gray-700 mb-4">
                    DESTACAMOS
                  </h3>

                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-xl font-bold text-customGreen mr-2">
                        700
                      </span>
                      <span className="text-gray-700">
                        TERNEROS/AS DE INVERNADA
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xl font-bold text-customGreen mr-2">
                        30
                      </span>
                      <span className="text-gray-700">
                        VACAS A.A 2DA Y 3RA PARICION PREÑADAS, MUY BUENA CALIDAD
                      </span>
                    </li>
                  </ul>

                  <div className="bg-gray-100 p-4 rounded-lg mb-6 flex items-start">
                    <Info className="h-5 w-5 text-customGreen mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm">
                      <span className="font-bold">IMPORTANTE:</span> la hacienda
                      de invernada con destino a feria deberán estar vacunadas
                      en su totalidad.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-customGreen mr-2" />
                      <span className="text-gray-700">Sociedad rural</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-customGreen mr-2" />
                      <span className="text-gray-700">13hs</span>
                    </div>
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-customGreen mr-2" />
                      <span className="text-gray-700">
                        Venta contado y plazo
                      </span>
                    </div>
                  </div>
                </div>

                <Link href="/remates">
                  <Button className="bg-customGreen hover:bg-customGreen/90 text-white w-full">
                    Ver remate
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
