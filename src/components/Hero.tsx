"use client";

import React, { useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="inicio" ref={containerRef} className="relative h-screen bg-white overflow-hidden">
      <section className="h-full w-full pt-20 overflow-hidden flex items-center">
        
        {/* ── Background: Architectural Facade ── */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {/* Escudo de Legibilidad: Gradiente horizontal mejorado */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/10 z-10" />
          <Image
            src="/hero-buildings.jpg"
            alt="SASA Clean Architectural Perspective"
            fill
            className="object-cover object-right-bottom"
            priority
            sizes="100vw"
          />
        </div>

        {/* ── Content grid ── */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-10 lg:pt-0">
          {/* LEFT: Text */}
          <div className="flex flex-col items-start justify-center pt-20 lg:pt-0">
            <div className="flex flex-col mb-6">
              {/* ── Subtitle: "presentando SASA" (Vibrant Green) ── */}
              <div className="overflow-hidden">
                <h2 className="text-[14px] font-black text-green-vibrant mb-2 tracking-[0.3em] uppercase">
                  S.A.S.A. Seguridad Antisiniestral, Salud y Accesibilidad
                </h2>
              </div>

              {/* ── "Tu ventaja comprobada en cada cierre." (Pure Black) ── */}
              <div className="overflow-hidden pb-4">
                <h1 className="text-[45px] font-bold text-black leading-[1.1] tracking-tighter uppercase">
                  El sistema que transforma propiedades en productos irresistibles.
                </h1>
              </div>
            </div>


          </div>

          {/* RIGHT: SASA Logo Area */}
          <div className="hidden lg:flex flex-col justify-center items-center relative h-full mt-4 ml-auto lg:mr-10">
            <div className="flex items-center justify-center">
              <div className="w-[55px] flex justify-center mr-2">
                <span className="text-[160px] font-bold text-black leading-none tracking-tighter">S</span>
              </div>
              <div className="relative w-[130px] h-[130px] flex items-center justify-center z-10">
                <Image
                  src="/logo-new.png"
                  alt="S.A.S.A. Logo shield"
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="w-[55px] flex justify-center ml-[-1px]">
                <span className="text-[160px] font-bold text-black leading-none tracking-tighter">A</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mt-4 ml-4 whitespace-nowrap">
              <span className="text-[1.1rem] text-black font-black tracking-widest uppercase opacity-40">Confianza Auditable</span>
              <span className="px-3 py-1 bg-black text-white font-bold text-[1.1rem] rounded-[2px] shadow-sm uppercase tracking-tighter">Cierres Garantizados</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
