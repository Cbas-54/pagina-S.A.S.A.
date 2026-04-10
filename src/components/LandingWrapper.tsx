"use client";

import React, { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechnicalGrid from "@/components/ui/TechnicalGrid";

// Dinámicamente cargados para optimizar el bundle inicial (Code Splitting)
const VideoDemo = dynamic(() => import("@/components/VideoDemo"));
const SasaDifference = dynamic(() => import("@/components/SasaDifference"));
const ServiceGallery = dynamic(() => import("@/components/ServiceGallery"));
const Pilares = dynamic(() => import("@/components/Pilares"));
const SelloSASA = dynamic(() => import("@/components/SelloSASA"));
const Stats = dynamic(() => import("@/components/Stats")); // Objetivos Estratégicos
const IdentidadEquipo = dynamic(() => import("@/components/IdentidadEquipo"));
const Cierre = dynamic(() => import("@/components/Cierre"));

export default function LandingWrapper() {
  return (
    <>
      <Navbar />

      {/* ── UNIFIED MONOLITHIC CANVAS (Hero & Stats) ── */}
      <div className="relative bg-white overflow-hidden transition-colors duration-1000">
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
        {/* 3. El Concepto / La Diferencia */}
        <SasaDifference />

        {/* 4. El Detalle del Producto (Ecosistema) - Simplificado */}
        <ServiceGallery />

        {/* 5. La Filosofía y el Sello (Fondo Oscuro Estático) */}
        <div 
          className="relative z-10 bg-[#0A0A0A] -mt-px"
        >
          {/* Transition Gradient from White (Previous Section) to Dark */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F4F4F5] to-transparent pointer-events-none z-20" />

          <section id="pilares" className="relative z-30 overflow-hidden pt-32">
            <Pilares 
              isDarkTheme={true}
            />
          </section>

          <section id="sello" className="relative z-30 overflow-hidden">
            <SelloSASA />
          </section>

          {/* 6. Video Demostrativo - Reubicado después de La Síntesis */}
          <VideoDemo />

          {/* 6. Identidad de Equipo - Ahora dentro del flujo oscuro estático */}
          <IdentidadEquipo />

          {/* 7. Cierre Final Maestro - Ahora dentro del flujo oscuro estático */}
          <Cierre />
        </div>
      </Suspense>
    </>
  );
}
