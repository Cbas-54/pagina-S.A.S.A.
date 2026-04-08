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
  const sealRef = useRef<HTMLDivElement>(null);
  
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
        {/* Introducción Visual */}
        <VideoDemo />

        {/* 3. El Concepto / La Diferencia */}
        <SasaDifference />

        {/* 4. El Detalle del Producto (Ecosistema) - Simplificado */}
        <ServiceGallery />

        {/* 5. La Filosofía y el Sello (Fondo Oscuro Estático) */}
        <div 
          ref={containerRef} 
          className="relative z-10 bg-[#0A0A0A] -mt-px"
        >
          {/* Transition Gradient from White (Previous Section) to Dark */}
          {/* Transition Gradient: Buffer reducido para una transición limpia sin solapamientos */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F4F4F5] to-transparent pointer-events-none z-20" />

          {/* Animated Beams (Configuradas para fondo oscuro) */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={card1Ref}
              toRef={sealRef}
              duration={5}
              delay={0}
              curvature={140}
              pathColor="rgba(201,169,110,0.25)"
              gradientStartColor="#C9A96E"
              gradientStopColor="#C9A96E"
              reverse={false}
              startYOffset={5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={card2Ref}
              toRef={sealRef}
              duration={5}
              delay={0}
              curvature={0}
              pathColor="rgba(201,169,110,0.25)"
              gradientStartColor="#C9A96E"
              gradientStopColor="#C9A96E"
              reverse={false}
              startYOffset={5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={card3Ref}
              toRef={sealRef}
              duration={5}
              delay={0}
              curvature={-140}
              pathColor="rgba(201,169,110,0.25)"
              gradientStartColor="#C9A96E"
              gradientStopColor="#C9A96E"
              reverse={false}
              startYOffset={5}
            />
          </div>

          <section id="pilares" className="relative z-30 overflow-hidden pt-32">
            <Pilares 
              card1Ref={card1Ref} 
              card2Ref={card2Ref} 
              card3Ref={card3Ref}
              isDarkTheme={true}
            />
          </section>

          <section id="sello" className="relative z-30 overflow-hidden">
            <SelloSASA 
              sealRef={sealRef}
            />
          </section>

          {/* 6. Identidad de Equipo - Ahora dentro del flujo oscuro estático */}
          <IdentidadEquipo />

          {/* 7. Cierre Final Maestro - Ahora dentro del flujo oscuro estático */}
          <Cierre />
        </div>
      </Suspense>
    </>
  );
}
