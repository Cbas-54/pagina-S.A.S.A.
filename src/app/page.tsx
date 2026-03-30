"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProblemSolution from "@/components/ProblemSolution";
import Pilares from "@/components/Pilares";
import AuditDetails from "@/components/AuditDetails";
import Beneficios from "@/components/Beneficios";
import SelloSASA from "@/components/SelloSASA";
import Estrategia from "@/components/Estrategia";
import Cierre from "@/components/Cierre";
// Se eliminó Slogan de las importaciones

function SectionDivider() {
  return <div className="section-divider w-full" />;
}

export default function Home() {
  return (
    <main className="bg-bg-main text-text-main font-sans min-h-screen">
      <Navbar />

      {/* ── SECTION 1: Dark Identity - Hero ── */}
      <div className="dark">
        <Hero />
      </div>

      {/* ── SECTION 2: The Technical Core (Uniform Dark Block) ── */}
      {/* This block establishes technical authority through metrics, risks, and process detail */}
      <div className="bg-[#050B1B] dark">
        <section id="metodologia">
          <Stats />
        </section>

        <section id="problema">
          <ProblemSolution />
        </section>

        <section id="auditoria">
          <AuditDetails />
        </section>
      </div>

      {/* ── SECTION 3: The Foundations (Light/Clear Transition) ── */}
      {/* Transition to clarity and structural pillars */}
      <section id="pilares" className="bg-slate-50">
        <Pilares />
      </section>

      <section id="sello" className="bg-bg-main">
        <SelloSASA />
      </section>

      {/* ── SECTION 4: Benefits & Implementation (Light / Action Oriented) ── */}
      <section id="beneficios" className="bg-slate-50">
        <Beneficios />
      </section>

      <section id="procesos" className="bg-bg-main">
        <Estrategia />
      </section>

      {/* ── SECTION 5: Dark Section: Final Message & Footer ── */}
      <div className="dark">
        <Cierre />
      </div>
    </main>
  );
}
