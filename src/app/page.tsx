import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Pilares from "@/components/Pilares";
import Beneficios from "@/components/Beneficios";
import AuditDetails from "@/components/AuditDetails";
import SelloSASA from "@/components/SelloSASA";
import Estrategia from "@/components/Estrategia";
import ModeloNegocio from "@/components/ModeloNegocio";
import Cierre from "@/components/Cierre";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-bg-main text-text-main font-sans min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Pilares />
      <Beneficios />
      <AuditDetails />
      <SelloSASA />
      <Estrategia />
      <ModeloNegocio />
      <Cierre />
      <Contact />
      
      <footer className="py-8 text-center text-text-sec text-sm border-t border-divider">
        <p>© {new Date().getFullYear()} S.A.S.A. - Seguridad Antisiniestral, Salud y Accesibilidad.</p>
      </footer>
    </main>
  );
}
