"use client";

import React, { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AnimatedBeam } from "@/components/ui/animated-beam";

// Dinámicamente cargados para optimizar el bundle inicial (Code Splitting)
const Stats = dynamic(() => import("@/components/Stats"));
const SasaDifference = dynamic(() => import("@/components/SasaDifference"));
const ServiceGallery = dynamic(() => import("@/components/ServiceGallery"));
const AuditDetails = dynamic(() => import("@/components/AuditDetails"));
const Pilares = dynamic(() => import("@/components/Pilares"));
const SelloSASA = dynamic(() => import("@/components/SelloSASA"));
const Estrategia = dynamic(() => import("@/components/Estrategia"));
const Cierre = dynamic(() => import("@/components/Cierre"));

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-bg-main text-text-main font-sans min-h-screen selection:bg-blue-mid/10 overflow-x-hidden">
      <Navbar />

      {/* ── SECTION 1: Hero ── */}
      <section id="inicio">
        <Hero />
      </section>

      {/* ── SECTION 2-7: Contenido Dinámico con Streaming ── */}
      <Suspense fallback={null}>
        <Stats />
        <SasaDifference />
        <ServiceGallery />
        <AuditDetails />
        
        {/* Contenedor Compartido para Animated Beams entre secciones */}
        <div ref={containerRef} className="relative">
          
          {/* Animated Beams (Movidos al padre para alineación perfecta) */}
          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
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

          <section id="pilares" className="relative z-10">
            <Pilares 
              card1Ref={card1Ref} 
              card2Ref={card2Ref} 
              card3Ref={card3Ref} 
            />
          </section>

          <section id="sello" className="relative z-10">
            <SelloSASA 
              sealRef={sealRef}
            />
          </section>
        </div>

        <section id="procesos">
          <Estrategia />
        </section>
        <Cierre />
      </Suspense>
    </main>
  );
}
