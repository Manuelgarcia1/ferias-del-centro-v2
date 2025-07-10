"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { RemateCardProps } from "./types";

export function RemateCard({ remate, isInView }: RemateCardProps) {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-4xl mx-auto"
    >
      <Link
        href="/remates"
        className="block w-full h-full cursor-pointer group"
        style={{ display: "block", width: "100%" }}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 w-full h-full overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Imagen */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden rounded-tl-2xl rounded-tr-2xl md:rounded-br-none md:rounded-tr-none md:rounded-tl-2xl md:rounded-bl-2xl">
              <Image
                src={remate.image || "/placeholder.svg"}
                alt={remate.imageAlt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Overlay con información */}
              <div className="absolute bottom-0 inset-x-0 flex flex-col items-center justify-end text-center pb-4">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white leading-none">
                  {remate.animalCount}
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white/90">
                  {remate.animalType}
                </h3>
                <span className="sm:mt-2 inline-block bg-customGreen text-white rounded-full px-1 py-0.5 text-[0.375rem] sm:text-[0.625rem] md:text-[0.75rem] font-body">
                  {remate.category}
                </span>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1 p-6 flex flex-col justify-between relative z-10 cursor-pointer">
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Header del remate */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-customGreen">
                        {remate.title}
                      </h3>
                      <p className="text-base sm:text-lg text-customAccent italic font-medium">
                        {remate.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                      <Calendar className="h-4 w-4 text-customGreen mr-2" />
                      <span className="font-bold text-xs sm:text-sm">
                        {remate.date}
                      </span>
                    </div>
                  </div>

                  {/* Información de ubicación y hora */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-customGreen mr-2" />
                      <span className="text-gray-700 text-xs sm:text-sm">
                        {remate.location}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-customGreen mr-2" />
                      <span className="text-gray-700 text-xs sm:text-sm">
                        {remate.time}
                      </span>
                    </div>
                  </div>

                  {/* Destacados */}
                  <div className="bg-gray-100 border-l-4 border-customAccent p-4 rounded-lg mb-4 shadow-sm">
                    <p className="text-customAccent-dark text-sm sm:text-base font-semibold uppercase mb-2">
                      Destacamos:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs sm:text-sm">
                      {remate.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botón */}
                <Button className="bg-customGreen hover:bg-customGreen/90 text-white group w-full md:w-auto py-2 sm:py-3 px-4 text-sm sm:text-base rounded-md flex items-center justify-center">
                  Ver estadísticas y próximos remates
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
