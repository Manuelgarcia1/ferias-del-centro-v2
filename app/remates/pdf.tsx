// pdf.tsx
"use client";
import { jsPDF } from "jspdf";

export const handleDownloadPDF = () => {
  const pdf = new jsPDF();
  const img = new Image();
  img.src = "/images/flyer.jpg";

  img.onload = () => {
    const width = pdf.internal.pageSize.getWidth();
    const height = (img.height * width) / img.width;
    pdf.addImage(img, "JPEG", 0, 0, width, height);
    pdf.save("catalogo-remate.pdf");
  };
};
