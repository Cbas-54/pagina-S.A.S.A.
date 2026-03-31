"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SasaDifference from "@/components/SasaDifference";
import ServiceGallery from "@/components/ServiceGallery";
import AuditDetails from "@/components/AuditDetails";
import Pilares from "@/components/Pilares";
import SelloSASA from "@/components/SelloSASA";
import Estrategia from "@/components/Estrategia";
import Cierre from "@/components/Cierre";

export default function Home() {
  return (
    <main className="bg-bg-main text-text-main font-sans min-h-screen selection:bg-blue-mid/10">
      <Navbar />

      {/* ── SECTION 1: Hero ── */}
      <section id="inicio">
        <Hero />
      </section>

      {/* ── SECTION 2: Authority Metrics ── */}
      <Stats />

      {/* ── SECTION 3: The Lewis Difference (Sticky Scroll) ── */}
      <SasaDifference />

      {/* ── SECTION 4: Service Gallery (Hill Home Style) ── */}
      <ServiceGallery />

      {/* ── SECTION 5: Audit Portfolio (Conor Style) ── */}
      <AuditDetails />

      {/* ── SECTION 6: Foundations & Strategy ── */}
      <section id="pilares">
        <Pilares />
      </section>

      <section id="sello">
        <SelloSASA />
      </section>

      <section id="procesos">
        <Estrategia />
      </section>

      {/* ── SECTION 7: Footer & Closing ── */}
      <Cierre />
    </main>
  );
}
