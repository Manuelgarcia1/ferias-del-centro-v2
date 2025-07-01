"use client";

import { jsPDF } from "jspdf";

// Utilidad para forzar descarga en navegadores móviles
const downloadBlob = (blob: Blob, filename: string) => {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Descarga un PDF con una sola imagen (catálogo)
export const handleDownloadCatalogPDF = () => {
  const pdf = new jsPDF();
  const img = new Image();
  img.src = "/images/flyer.jpg";

  img.onload = () => {
    const maxWidth = pdf.internal.pageSize.getWidth();
    const maxHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
    const width = img.width * ratio;
    const height = img.height * ratio;
    const x = (maxWidth - width) / 2;
    const y = (maxHeight - height) / 2;

    pdf.addImage(img, "JPEG", x, y, width, height);
    // Generar blob y forzar descarga
    const blob = pdf.output("blob");
    downloadBlob(blob, "catalogo-remate.pdf");
  };

  img.onerror = (err) => console.error("Error al cargar catálogo:", err);
};

// Descarga un PDF con dos imágenes (catálogo + resultados de precios)
export const handleDownloadResultsPDF = () => {
  const pdf = new jsPDF();
  const imageSources = ["/images/flyer.jpg", "/images/precios.jpg"];

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
        const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
        const width = img.width * ratio;
        const height = img.height * ratio;
        const x = (maxWidth - width) / 2;
        const y = (maxHeight - height) / 2;

        pdf.addImage(img, "JPEG", x, y, width, height);
      });
      // Generar blob y forzar descarga
      const blob = pdf.output("blob");
      downloadBlob(blob, "resultados-precios.pdf");
    })
    .catch((error) => {
      console.error("Error al cargar imágenes para resultados:", error);
    });
};
