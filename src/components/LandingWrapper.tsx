"use client";

import React, { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import TechnicalGrid from "@/components/ui/TechnicalGrid";

// Dinámicamente cargados para optimizar el bundle inicial (Code Splitting)
const VideoDemo = dynamic(() => import("@/components/VideoDemo"));
const SasaDifference = dynamic(() => import("@/components/SasaDifference"));
const ServiceGallery = dynamic(() => import("@/components/ServiceGallery"));
const GradientTransition = dynamic(() => import("@/components/GradientTransition"));
const Pilares = dynamic(() => import("@/components/Pilares"));
const SelloSASA = dynamic(() => import("@/components/SelloSASA"));
const Stats = dynamic(() => import("@/components/Stats")); // Objetivos Estratégicos
const IdentidadEquipo = dynamic(() => import("@/components/IdentidadEquipo"));
const Cierre = dynamic(() => import("@/components/Cierre"));

export default function LandingWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  
  // Estado para el efecto "Lights Off" (Apagón)
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <>
      <Navbar />

      {/* ── UNIFIED MONOLITHIC CANVAS (Hero & Stats) ── */}
      <div className="relative bg-white overflow-hidden">
        <TechnicalGrid />
        
        <section id="inicio" className="relative z-10">
          <Hero />
        </section>

        {/* Resultados y Objetivos Estratégicos */}
        <section className="relative z-10">
          <Stats />
        </section>
      </div>

      {/* ── SECTION 3-7: Contenido Dinámico Restante ── */}
      <Suspense fallback={null}>
        {/* Introducción Visual */}
        <VideoDemo />

        {/* 3. El Concepto / La Diferencia */}
        <SasaDifference />

        {/* 4. El Detalle del Producto (Ecosistema) - Simplificado */}
        <ServiceGallery />

        {/* 5. La Filosofía y el Sello (Conexión Visual) */}
        <div 
          ref={containerRef} 
          className={`relative z-10 transition-colors duration-700 ease-in-out ${isDarkTheme ? "bg-[#0A0A0A]" : "bg-white"}`}
        >
          


          <section id="pilares" className="relative z-10 overflow-hidden">
            <Pilares 
              card1Ref={card1Ref} 
              card2Ref={card2Ref} 
              card3Ref={card3Ref}
              isDarkTheme={isDarkTheme}
            />
          </section>

          <section id="sello" className="relative z-10 overflow-hidden">
            <SelloSASA 
              onThemeChange={setIsDarkTheme}
            />
          </section>

          {/* 6. Identidad de Equipo - Ahora dentro del flujo oscuro */}
          <IdentidadEquipo />

          {/* 7. Cierre Final Maestro - Ahora dentro del flujo oscuro */}
          <Cierre />
        </div>
      </Suspense>
    </>
  );
}
