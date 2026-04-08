import type { Metadata } from "next";
import { Inter, Playfair_Display, Afacad } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const afacad = Afacad({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

import { RevealProvider } from "@/context/RevealContext";

export const metadata: Metadata = {
  title: "S.A.S.A. | Seguridad, Salud y Accesibilidad Inmobiliaria",
  description: "Consultoría técnica de élite para el mercado inmobiliario. Auditamos y certificamos la seguridad eléctrica, habitabilidad y accesibilidad de activos para acelerar su venta con el Sello S.A.S.A.",
  keywords: ["auditoria inmobiliaria", "seguridad edílica", "certificación sasa", "vicios ocultos", "peritaje técnico", "real estate argentina"],
  authors: [{ name: "Equipo S.A.S.A." }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "S.A.S.A. | Tu Ventaja Técnica en Cada Cierre",
    description: "Eliminamos la incertidumbre técnica de las propiedades. Certificación pericial independiente para el mercado inmobiliario de prestigio.",
    url: "https://sasa-inspecciones.com.ar",
    siteName: "S.A.S.A.",
    images: [
      {
        url: "/images/service-1.png",
        width: 1200,
        height: 630,
        alt: "S.A.S.A. Inspecciones Técnicas",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S.A.S.A. | Blindaje Técnico Inmobiliario",
    description: "Transformamos la incertidumbre en rentabilidad inmediata mediante auditorías técnicas exhaustivas.",
    images: ["/images/service-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", afacad.variable)}>
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-green-vibrant/30 font-semibold`}>
        {children}
      </body>
    </html>
  );
}
