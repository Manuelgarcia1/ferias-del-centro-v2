import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ferias del Centro - Desde 1983",
  description:
    "Somos una empresa con más de 40 años de trayectoria, buscando día a día ofrecer el mejor servicio de comercialización de hacienda.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Eliminar preload para evitar errores 404 si las imágenes no existen */}
        {/* <link rel="preload" href="/images/carousel1.jpg" as="image" crossOrigin="anonymous" />
        <link rel="preload" href="/images/carousel2.jpg" as="image" crossOrigin="anonymous" />
        <link rel="preload" href="/images/carousel3.jpg" as="image" crossOrigin="anonymous" /> */}
        <link
          rel="preload"
          href="/images/cattle-group.jpg"
          as="image"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/images/cow-icon.png"
          as="image"
          crossOrigin="anonymous"
        />
        {/* viewport para móviles */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Tus preload existentes */}
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
