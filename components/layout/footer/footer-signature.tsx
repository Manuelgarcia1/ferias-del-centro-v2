"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { FooterSignatureProps } from "./types";

export function FooterSignature({
  companyName,
  developerName,
  developerWhatsApp,
  developerGithub,
}: FooterSignatureProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-white/60">
      <p>
        © {currentYear} {companyName}
      </p>
      <p className="mt-4 md:mt-0 flex items-center space-x-2">
        <span>Diseño y desarrollo web por {developerName}</span>
        <Link
          href={`https://wa.me/${developerWhatsApp.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 bg-white/10 rounded hover:bg-white/20 transition flex items-center space-x-1"
        >
          <FaWhatsapp className="h-5 w-5 text-white" />
        </Link>
        <Link
          href={developerGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 bg-white/10 rounded hover:bg-white/20 transition"
        >
          <Github className="h-5 w-5 text-white" />
        </Link>
      </p>
    </div>
  );
}
