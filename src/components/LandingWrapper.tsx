"use client";

import React, { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AnimatedBeam } from "@/components/ui/animated-beam";

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

      {/* ── SECTION 1: Hero ── */}
      <section id="inicio">
        <Hero />
      </section>

      {/* ── SECTION 2-7: Contenido Dinámico con Streaming ── */}
      <Suspense fallback={null}>
        {/* 1. Introducción Visual */}
        <VideoDemo />

        {/* 2. El Concepto / La Diferencia */}
        <SasaDifference />

        {/* 3. El Detalle del Producto (Ecosistema) */}
        <ServiceGallery />

        {/* 4. La Filosofía y el Sello (Conexión Visual) */}
        <div ref={containerRef} className="relative transition-all duration-700">
          
          {/* Animated Beams */}
          <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={card1Ref}
              toRef={sealRef}
              duration={5}
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
              curvature={70}
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

          <section id="pilares" className="relative z-10 overflow-hidden">
            <Pilares 
              card1Ref={card1Ref} 
              card2Ref={card2Ref} 
              card3Ref={card3Ref} 
            />
          </section>

          <section id="sello" className="relative z-10 overflow-hidden">
            <SelloSASA 
              sealRef={sealRef}
            />
          </section>
        </div>

        {/* 5. Resultados y Objetivos Estratégicos */}
        <Stats />

        {/* 6. Identidad de Equipo */}
        <IdentidadEquipo />

        {/* 7. Cierre Final Maestro */}
        <Cierre />
      </Suspense>
    </>
  );
}
