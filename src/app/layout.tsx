import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-green-vibrant/30`}>
        {children}
      </body>
    </html>
  );
}
