"use client";

import Head from "next/head";
import { VideoIntro } from "@/app/remates/components/videoIntro";
import { ProximosRemates } from "@/app/remates/components/proximosRemates";
import { PreciosUltimoRemate } from "@/app/remates/components/preciosUltimoRemate";
import { ResultadosRemate } from "@/app/remates/components/resultadosRemate";
import { rematesData } from "@/app/remates/components/data/rematesData";
import { preciosUltimoRemate } from "@/app/remates/components/data/preciosUltimoRemate";
import { resultadosUltimoRemate } from "@/app/remates/components/data/resultadosUltimoRemate";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function RematesPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-customGreen mb-2">
                Remates y Ferias
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                Información completa sobre nuestros remates mensuales
              </p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <a href="#precios-ultimo-remate">
                <Button
                  variant="outline"
                  className="px-3 py-1.5 text-xs sm:text-sm md:text-base border-customGreen text-customGreen hover:bg-customGreen hover:text-white"
                >
                  Ver Estadísticas
                </Button>
              </a>
              <Button
                variant="outline"
                className="px-3 py-1.5 text-xs sm:text-sm md:text-base border-customGreen text-customGreen hover:bg-customGreen hover:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Descargar Catálogo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        <Head>
          <link rel="preload" as="video" href="/video.mp4" type="video/mp4" />
        </Head>

        <VideoIntro />
        <ProximosRemates remates={rematesData} />
        <PreciosUltimoRemate precios={preciosUltimoRemate} />
        <ResultadosRemate resultados={resultadosUltimoRemate} />
      </div>
    </div>
  );
}
