"use client";

import React, { Suspense, useRef, useState } from "react";
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
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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

        {/* 5. La Filosofía y el Sello (Conexión Visual) */}
        <div 
          ref={containerRef} 
          className={`relative z-10 transition-colors duration-1000 ${isDarkTheme ? "bg-[#0A0A0A]" : "bg-white"}`}
        >
          {/* Animated Beams (Conexión entre Pilares y Sello) */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={card1Ref}
              toRef={sealRef}
              duration={5}
              delay={0}
              curvature={140}
              pathColor={isDarkTheme ? "rgba(201,169,110,0.25)" : "rgba(15,23,42,0.15)"}
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
              pathColor={isDarkTheme ? "rgba(201,169,110,0.25)" : "rgba(15,23,42,0.15)"}
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
              pathColor={isDarkTheme ? "rgba(201,169,110,0.25)" : "rgba(15,23,42,0.15)"}
              gradientStartColor="#C9A96E"
              gradientStopColor="#C9A96E"
              reverse={false}
              startYOffset={5}
            />
          </div>

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
              sealRef={sealRef}
              onThemeChange={setIsDarkTheme}
            />
          </section>

          {/* 6. Identidad de Equipo - Ahora dentro del flujo dinámico */}
          <IdentidadEquipo />

          {/* 7. Cierre Final Maestro - Ahora dentro del flujo dinámico */}
          <Cierre />
        </div>
      </Suspense>
    </>
  );
}
