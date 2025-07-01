"use client";

import { jsPDF } from "jspdf";

// Calcula dimensiones escaladas para que la imagen encaje completa
const calculateScaledDimensions = (
  img: HTMLImageElement,
  maxWidth: number,
  maxHeight: number
) => {
  const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
  return {
    width: img.width * ratio,
    height: img.height * ratio,
  };
};

// Descarga un PDF con una sola imagen (catálogo)
export const handleDownloadCatalogPDF = () => {
  const pdf = new jsPDF();
  const src = "/images/flyer.jpg";
  const img = new Image();
  img.src = src;
  img.onload = () => {
    const width = pdf.internal.pageSize.getWidth();
    const height = (img.height * width) / img.width;
    pdf.addImage(img, "JPEG", 0, 0, width, height);
    pdf.save("catalogo-remate.pdf");
  };
  img.onerror = (err) => console.error("Error al cargar catálogo:", err);
};

// Descarga un PDF con dos imágenes (resultados + graficos)
export const handleDownloadResultsPDF = () => {
  const pdf = new jsPDF();
  const imageSources = ["/images/resultados.jpg", "/images/graficos.jpg"];

  const loadImage = (src: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });

  Promise.all(imageSources.map(loadImage))
    .then((images) => {
      images.forEach((img, idx) => {
        if (idx > 0) pdf.addPage();
        const maxWidth = pdf.internal.pageSize.getWidth();
        const maxHeight = pdf.internal.pageSize.getHeight();
        const { width, height } = calculateScaledDimensions(
          img,
          maxWidth,
          maxHeight
        );
        const x = (maxWidth - width) / 2;
        const y = (maxHeight - height) / 2;
        pdf.addImage(img, "JPEG", x, y, width, height);
      });
      pdf.save("resultados-precios.pdf");
    })
    .catch((error) => {
      console.error("Error al cargar imágenes para resultados:", error);
    });
};
