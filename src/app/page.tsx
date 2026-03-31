import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

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
  return (
    <main className="bg-bg-main text-text-main font-sans min-h-screen selection:bg-blue-mid/10">
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
        <section id="pilares">
          <Pilares />
        </section>
        <section id="sello">
          <SelloSASA />
        </section>
        <section id="procesos">
          <Estrategia />
        </section>
        <Cierre />
      </Suspense>
    </main>
  );
}
