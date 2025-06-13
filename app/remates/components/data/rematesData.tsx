export type rematesDataType = {
  id: number;
  fecha: string;
  titulo: string;
  cantidad: string;
  descripcion: string;
  ubicacion: string;
  hora: string;
  destacados: string[];
  estado: "próximo" | "programado";
  imagen: string;
};

export const rematesData: rematesDataType[] = [
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
