// PreciosUltimoRemate.tsx

"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { handleDownloadResultsPDF } from "../pdf";

export function PreciosUltimoRemate({ precios }: { precios: any }) {
  return (
    <section id="precios-ultimo-remate">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        {/* Grupo izquierdo */}
        <div className="flex items-center gap-3 flex-wrap">
          <BarChart3 className="h-6 w-6 text-customGreen" />
          <h2 className="text-2xl md:text-3xl font-bold text-customGreen">
            Precios del Último Remate
          </h2>
          <Badge className="mt-1">{precios.fecha}</Badge>
        </div>

        {/* Grupo derecho: el botón */}
        <Button
          variant="outline"
          onClick={handleDownloadResultsPDF}
          className="px-3 py-1.5 text-xs sm:text-sm md:text-base border-customGreen text-customGreen hover:bg-customGreen hover:text-white"
        >
          <Download className="h-4 w-4 mr-2" />
          Descargar precios
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {["machos", "hembras"].map((tipo) => (
          <Card key={tipo}>
            <CardHeader className="bg-customGreen text-white">
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                {tipo.toUpperCase()}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        KG
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        $ MIN
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        $ MAX
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        $ PROM
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        CANTIDAD
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {precios[tipo].map((item: any, index: number) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 text-sm font-medium text-customGreen">
                          {item.categoria}
                        </td>
                        <td className="px-4 py-3 text-sm text-center">
                          {item.min}
                        </td>
                        <td className="px-4 py-3 text-sm text-center">
                          {item.max}
                        </td>
                        <td className="px-4 py-3 text-sm text-center font-medium">
                          {item.prom}
                        </td>
                        <td className="px-4 py-3 text-sm text-center">
                          {item.cantidad}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="bg-customGreen text-white">
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            VIENTRES
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    CATEGORÍA
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    $ MIN
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    $ MAX
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    PROMEDIO
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    CANTIDAD
                  </th>
                </tr>
              </thead>
              <tbody>
                {precios.vacas.map((item: any, index: number) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-customGreen">
                      {item.categoria}
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      {item.min}
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      {item.max}
                    </td>
                    <td className="px-4 py-3 text-sm text-center font-medium">
                      {item.promedio}
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      {item.cantidad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
