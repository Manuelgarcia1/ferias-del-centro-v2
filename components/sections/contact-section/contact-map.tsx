"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mapConfig } from "./contact-data";
import type { ContactMapProps } from "./types";

export function ContactMap({ isInView }: ContactMapProps) {
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMap = () => {
    setIsLoading(true);
    setShowMap(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-lg h-64 overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 pb-3">
        <h3 className="text-2xl font-bold text-customGreen">
          Nuestra Ubicación
        </h3>
      </div>

      {/* Contenido del mapa */}
      <div className="px-6 pb-6 h-[calc(100%-4rem)] relative">
        {!showMap ? (
          // Placeholder
          <div className="h-full flex items-center justify-center">
            <motion.div
              className="text-center space-y-3 max-w-[280px] w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-customGreen/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-customGreen" />
              </div>

              <div className="space-y-1">
                <p className="text-customGreen font-semibold text-sm">
                  Av. Almte. Brown 361
                </p>
                <p className="text-gray-600 text-xs">San Carlos de Bolívar</p>
              </div>

              <div className="space-y-2">
                <Button
                  onClick={handleShowMap}
                  disabled={isLoading}
                  className="bg-customGreen hover:bg-customGreen/90 text-white text-xs h-8 w-full"
                  size="sm"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                      Cargando...
                    </>
                  ) : (
                    "Ver Mapa Interactivo"
                  )}
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-customGreen text-customGreen hover:bg-customGreen hover:text-white text-xs h-8 w-full bg-transparent"
                  size="sm"
                >
                  <a
                    href={mapConfig.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1"
                  >
                    Abrir en Google Maps
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        ) : (
          // Iframe
          <div className="h-full relative bg-gray-200 rounded-lg overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="text-center">
                  <Loader2 className="h-6 w-6 animate-spin text-customGreen mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Cargando mapa...</p>
                </div>
              </div>
            )}
            <motion.iframe
              title={mapConfig.title}
              src={mapConfig.embedUrl}
              className="w-full h-full border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsLoading(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0.5 : 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
