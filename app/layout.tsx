import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// 1️⃣ Exportamos viewport de forma dedicada:
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ferias del Centro - Desde 1983",
  description:
    "Ferias del Centro es una empresa con más de 40 años de trayectoria, especializada en la comercialización de hacienda en San Carlos de Bolívar.",
  keywords: [
    "ferias de ganado",
    "remates",
    "comercialización de hacienda",
    "San Carlos de Bolívar",
    "ferias del centro",
    "ganadería Argentina",
  ],
  authors: [{ name: "Ferias del Centro SRL" }],
  creator: "Ferias del Centro",
  publisher: "Ferias del Centro SRL",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="images/favicon-final.png"
          type="image/png"
          sizes="64x64"
        />
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
            <Toaster position="bottom-center" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
