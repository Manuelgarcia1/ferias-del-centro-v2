"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  TrendingUp,
  BarChart3,
  FileText,
  Download,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

// Datos de ejemplo para los remates
const rematesData = [
  {
    id: 1,
    fecha: "21 de Mayo, 2025",
    titulo: "Remate Feria Mensual",
    cantidad: "1000 Vacunos",
    descripcion: "Gordo, invernada y cría",
    ubicacion: "Sociedad Rural de Bolívar",
    hora: "13:00 hs",
    destacados: [
      "700 TERNEROS/AS DE INVERNADA",
      "30 VACAS A.A 2DA Y 3RA PARICION PREÑADAS",
    ],
    estado: "próximo",
    imagen: "/images/cattle-group.jpg",
  },
  {
    id: 2,
    fecha: "18 de Junio, 2025",
    titulo: "Remate Feria Mensual",
    cantidad: "850 Vacunos",
    descripcion: "Especial terneros y terneras",
    ubicacion: "Sociedad Rural de Bolívar",
    hora: "13:00 hs",
    destacados: ["600 TERNEROS/AS ESPECIALES", "250 VAQUILLONAS DE PRIMERA"],
    estado: "programado",
    imagen: "/images/cattle-field.jpg",
  },
  {
    id: 3,
    fecha: "16 de Julio, 2025",
    titulo: "Remate Feria Mensual",
    cantidad: "1200 Vacunos",
    descripcion: "Vacas y vaquillonas",
    ubicacion: "Sociedad Rural de Bolívar",
    hora: "13:00 hs",
    destacados: ["800 VACAS DE CRÍA", "400 VAQUILLONAS PREÑADAS"],
    estado: "programado",
    imagen: "/images/cattle-auction.jpg",
  },
];

// Datos de precios del último remate
const preciosUltimoRemate = {
  fecha: "21/05/2025",
  machos: [
    {
      categoria: "- 160",
      kg: "160",
      min: "3.226",
      max: "4.345",
      prom: "3.977",
      cantidad: "74",
    },
    {
      categoria: "160 - 180",
      kg: "180",
      min: "3.671",
      max: "4.123",
      prom: "3.948",
      cantidad: "41",
    },
    {
      categoria: "180 - 200",
      kg: "200",
      min: "3.641",
      max: "3.954",
      prom: "3.859",
      cantidad: "66",
    },
    {
      categoria: "200 - 230",
      kg: "230",
      min: "3.491",
      max: "3.980",
      prom: "3.889",
      cantidad: "155",
    },
    {
      categoria: "230 - 260",
      kg: "260",
      min: "3.516",
      max: "3.651",
      prom: "3.632",
      cantidad: "82",
    },
    {
      categoria: "260 - 300",
      kg: "300",
      min: "2.882",
      max: "2.882",
      prom: "2.882",
      cantidad: "2",
    },
    {
      categoria: "+ 300",
      kg: "300+",
      min: "2.616",
      max: "2.843",
      prom: "2.694",
      cantidad: "19",
    },
  ],
  hembras: [
    {
      categoria: "- 150",
      kg: "150",
      min: "3.303",
      max: "3.700",
      prom: "3.488",
      cantidad: "56",
    },
    {
      categoria: "150 - 170",
      kg: "170",
      min: "3.423",
      max: "3.616",
      prom: "3.499",
      cantidad: "112",
    },
    {
      categoria: "170 - 190",
      kg: "190",
      min: "3.316",
      max: "3.644",
      prom: "3.424",
      cantidad: "114",
    },
    {
      categoria: "190 - 210",
      kg: "210",
      min: "3.238",
      max: "3.391",
      prom: "3.351",
      cantidad: "74",
    },
    {
      categoria: "210 - 250",
      kg: "250",
      min: "3.004",
      max: "3.256",
      prom: "3.154",
      cantidad: "65",
    },
    {
      categoria: "250 - 290",
      kg: "290",
      min: "2.759",
      max: "3.038",
      prom: "2.921",
      cantidad: "66",
    },
    {
      categoria: "+ 290",
      kg: "290+",
      min: "0",
      max: "0",
      prom: "0",
      cantidad: "0",
    },
  ],
  vacas: [
    {
      categoria: "VACAS NUEVAS C/GTIA DE PREÑEZ",
      precio: "1.400.000 - 1.500.000",
      promedio: "1.431.250",
      cantidad: "32",
    },
    {
      categoria: "VACAS MEDIO USO C/GTIA DE PREÑEZ",
      precio: "1.000.000 - 1.200.000",
      promedio: "1.089.516",
      cantidad: "62",
    },
    {
      categoria: "VACAS USADAS C/GTIA DE PREÑEZ",
      precio: "700.000 - 950.000",
      promedio: "921.500",
      cantidad: "20",
    },
  ],
};

// Datos de resultados del último remate
const resultadosUltimoRemate = {
  fecha: "21/05/2025",
  totalCabezas: 1000,
  totalVendidas: 987,
  porcentajeVenta: 98.7,
  promedioGeneral: 3.456,
  mejorPrecio: 4.345,
  categorias: [
    { tipo: "Terneros", vendidos: 685, total: 700, promedio: 3.889 },
    { tipo: "Terneras", vendidos: 108, total: 112, promedio: 3.499 },
    { tipo: "Vacas", vendidos: 114, total: 114, promedio: 1.167 },
    { tipo: "Vaquillonas", vendidos: 80, total: 74, promedio: 3.351 },
  ],
};

export default function RematesPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header de la página */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-customGreen mb-2">
                Remates y Ferias
              </h1>
              <p className="text-gray-600">
                Información completa sobre nuestros remates mensuales
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-customGreen text-customGreen hover:bg-customGreen hover:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Descargar Catálogo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Sección 1: Próximos Remates */}
        <section>
          <div className="flex items-center mb-8">
            <Calendar className="h-6 w-6 text-customGreen mr-3" />
            <h2 className="text-2xl font-bold text-customGreen">
              Próximos Remates
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {rematesData.map((remate) => (
              <Card
                key={remate.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={remate.imagen || "/placeholder.svg"}
                    alt={remate.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={
                        remate.estado === "próximo"
                          ? "bg-customAccent text-customGreen"
                          : "bg-gray-500"
                      }
                    >
                      {remate.estado === "próximo" ? "PRÓXIMO" : "PROGRAMADO"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{remate.cantidad}</h3>
                    <p className="text-sm opacity-90">{remate.descripcion}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-customGreen">
                      {remate.titulo}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {remate.fecha}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-customGreen" />
                      {remate.ubicacion}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-customGreen" />
                      {remate.hora}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      DESTACAMOS:
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {remate.destacados.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-customGreen mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-customGreen hover:bg-customGreen/90 group">
                    Ver Detalles Completos
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sección 2: Precios del Último Remate */}
        <section>
          <div className="flex items-center mb-8">
            <BarChart3 className="h-6 w-6 text-customGreen mr-3" />
            <h2 className="text-2xl font-bold text-customGreen">
              Precios del Último Remate
            </h2>
            <Badge className="ml-4 mt-1">{preciosUltimoRemate.fecha}</Badge>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            {/* Tabla de Machos */}
            <Card>
              <CardHeader className="bg-customGreen text-white">
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  MACHOS
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
                      {preciosUltimoRemate.machos.map((item, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
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

            {/* Tabla de Hembras */}
            <Card>
              <CardHeader className="bg-customGreen text-white">
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  HEMBRAS
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
                      {preciosUltimoRemate.hembras.map((item, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
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
          </div>

          {/* Tabla de Vacas */}
          <Card>
            <CardHeader className="bg-customGreen text-white">
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                VACAS CON GARANTÍA DE PREÑEZ
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
                        RANGO DE PRECIOS
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
                    {preciosUltimoRemate.vacas.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 text-sm font-medium text-customGreen">
                          {item.categoria}
                        </td>
                        <td className="px-4 py-3 text-sm text-center">
                          {item.precio}
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

        {/* Sección 3: Resultados del Último Remate */}
        <section>
          <div className="flex items-center mb-8">
            <FileText className="h-6 w-6 text-customGreen mr-3" />
            <h2 className="text-2xl font-bold text-customGreen">
              Resultados del Último Remate
            </h2>
            <Badge className="ml-4 mt-1">{resultadosUltimoRemate.fecha}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-customGreen mb-2">
                  {resultadosUltimoRemate.totalVendidas}
                </div>
                <div className="text-sm text-gray-600">Cabezas Vendidas</div>
                <div className="text-xs text-gray-500">
                  de {resultadosUltimoRemate.totalCabezas} totales
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-customAccent mb-2">
                  {resultadosUltimoRemate.porcentajeVenta}%
                </div>
                <div className="text-sm text-gray-600">Porcentaje de Venta</div>
                <div className="text-xs text-gray-500">Excelente resultado</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-customGreen mb-2">
                  ${resultadosUltimoRemate.promedioGeneral}
                </div>
                <div className="text-sm text-gray-600">Promedio General</div>
                <div className="text-xs text-gray-500">por kilogramo</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-customAccent mb-2">
                  ${resultadosUltimoRemate.mejorPrecio}
                </div>
                <div className="text-sm text-gray-600">Mejor Precio</div>
                <div className="text-xs text-gray-500">del remate</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Resultados por Categoría</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        CATEGORÍA
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        VENDIDOS
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        TOTAL
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        % VENTA
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        PROMEDIO
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultadosUltimoRemate.categorias.map(
                      (categoria, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-4 py-3 text-sm font-medium text-customGreen">
                            {categoria.tipo}
                          </td>
                          <td className="px-4 py-3 text-sm text-center">
                            {categoria.vendidos}
                          </td>
                          <td className="px-4 py-3 text-sm text-center">
                            {categoria.total}
                          </td>
                          <td className="px-4 py-3 text-sm text-center">
                            {(
                              (categoria.vendidos / categoria.total) *
                              100
                            ).toFixed(1)}
                            %
                          </td>
                          <td className="px-4 py-3 text-sm text-center font-medium">
                            ${categoria.promedio}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
