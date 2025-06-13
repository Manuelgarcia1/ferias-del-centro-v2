import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { rematesDataType } from "@/app/remates/components/data/rematesData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProximosRemates({ remates }: { remates: rematesDataType[] }) {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Calendar className="h-6 w-6 text-customGreen mr-3" />
        <h2 className="text-2xl font-bold text-customGreen">
          Próximos Remates
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {remates.map((remate) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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
                <span className="text-sm text-gray-500">{remate.fecha}</span>
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
  );
}
