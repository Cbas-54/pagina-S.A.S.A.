import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S.A.S.A. - Seguridad, Salud y Accesibilidad Inmobiliaria",
  description: "Certificamos propiedades para transformarlas en productos irresistibles. Seguridad Antisiniestral, Salud y Accesibilidad para el mercado inmobiliario argentino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-accent/30`}>
        {children}
      </body>
    </html>
  );
}
