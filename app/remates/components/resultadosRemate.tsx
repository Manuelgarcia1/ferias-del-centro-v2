import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export function ResultadosRemate({ resultados }: { resultados: any }) {
  return (
    <section>
      <div className="flex items-center mb-8">
        <FileText className="h-6 w-6 text-customGreen mr-3" />
        <h2 className="text-2xl font-bold text-customGreen">
          Resultados del Último Remate
        </h2>
        <Badge className="ml-4 mt-1">{resultados.fecha}</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-customGreen mb-2">
              {resultados.totalVendidas}
            </div>
            <div className="text-sm text-gray-600">Cabezas Vendidas</div>
            <div className="text-xs text-gray-500">
              de {resultados.totalCabezas} totales
            </div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-customAccent mb-2">
              {resultados.porcentajeVenta}%
            </div>
            <div className="text-sm text-gray-600">Porcentaje de Venta</div>
            <div className="text-xs text-gray-500">Excelente resultado</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-customGreen mb-2">
              ${resultados.promedioGeneral}
            </div>
            <div className="text-sm text-gray-600">Promedio General</div>
            <div className="text-xs text-gray-500">por kilogramo</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-customAccent mb-2">
              ${resultados.mejorPrecio}
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
                {resultados.categorias.map((categoria: any, index: number) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
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
                      {((categoria.vendidos / categoria.total) * 100).toFixed(
                        1
                      )}
                      %
                    </td>
                    <td className="px-4 py-3 text-sm text-center font-medium">
                      ${categoria.promedio}
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
