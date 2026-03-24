import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProblemSolution from "@/components/ProblemSolution";
import Pilares from "@/components/Pilares";
import Beneficios from "@/components/Beneficios";
import AuditDetails from "@/components/AuditDetails";
import SelloSASA from "@/components/SelloSASA";
import Estrategia from "@/components/Estrategia";
import ModeloNegocio from "@/components/ModeloNegocio";
import Cierre from "@/components/Cierre";
import Contact from "@/components/Contact";
import Slogan from "@/components/Slogan";

function SectionDivider() {
  return <div className="section-divider w-full" />;
}

export default function Home() {
  return (
    <main className="bg-bg-main text-text-main font-sans min-h-screen">
      <Navbar />
      <Hero />
      {/* Post-hero content slides OVER the blurred hero (Amdocs depth effect) */}
      <div className="relative z-10 bg-bg-main">
        <SectionDivider />
        <Stats />
        <SectionDivider />
        <Slogan />
        <SectionDivider />
        <ProblemSolution />
        <SectionDivider />
        <Pilares />
        <SectionDivider />
        <AuditDetails />
        <SectionDivider />
        <SelloSASA />
        <SectionDivider />
        <Beneficios />
        <SectionDivider />
        <Estrategia />
        <SectionDivider />
        <ModeloNegocio />
        <SectionDivider />
        <Cierre />
        <SectionDivider />
        <Contact />
      </div>

      <footer className="py-12 px-6 bg-bg-main border-t border-divider/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-green-vibrant/10 border border-green-vibrant/15 flex items-center justify-center">
                <span className="text-green-vibrant font-black text-xs font-serif">
                  S
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black tracking-[0.2em] text-text-main">
                  S.A.S.A.
                </span>
                <span className="text-[8px] text-text-ter tracking-[0.1em] mt-0.5">
                  Seguridad · Salud · Accesibilidad
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-text-ter text-xs">
              <a href="#inicio" className="hover:text-text-sec transition-colors">
                Inicio
              </a>
              <a href="#pilares" className="hover:text-text-sec transition-colors">
                Pilares
              </a>
              <a
                href="#auditoria"
                className="hover:text-text-sec transition-colors"
              >
                Auditoría
              </a>
              <a
                href="#contacto"
                className="hover:text-text-sec transition-colors"
              >
                Contacto
              </a>
            </div>

            {/* Credits */}
            <div className="flex flex-col items-start lg:items-end gap-1 text-xs text-text-ter">
              <p>
                © {new Date().getFullYear()} S.A.S.A. Todos los derechos
                reservados.
              </p>
              <p className="text-[10px]">
                Lic. Franco Fandiño · COPIME IN-04710
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
