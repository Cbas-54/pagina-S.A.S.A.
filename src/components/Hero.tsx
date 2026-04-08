"use client";

import React, { useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="inicio" ref={containerRef} className="relative min-h-[90vh] bg-transparent overflow-hidden">
      <section className="h-full w-full pt-32 pb-20 overflow-hidden flex items-center">
        
        {/* ── Background: Architectural Facade ── */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {/* Escudo de Legibilidad: Gradiente horizontal muy sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10" />
          
          {/* Máscara de Fusión Vertical: Minimalista para unir con Stats */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />

          <Image
            src="/hero-building.png"
            alt="SASA Architectural Perspective"
            fill
            className="object-cover object-right-bottom"
            priority
            sizes="100vw"
          />
        </div>

        {/* ── Content grid ── */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-24 xl:pl-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-10 lg:pt-0">
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
                  El sistema que transforma propiedades en ventas irresistibles.
                </h1>
              </div>
            </div>


          </div>

          {/* RIGHT: SASA Logo Area */}
          <div className="hidden lg:flex flex-col justify-center items-center relative h-full mt-4 ml-auto lg:mr-20">
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
              <span className="text-[1.1rem] text-black font-bold tracking-widest uppercase">Confianza auditable</span>
              <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
              <span className="text-black font-bold text-[1.1rem] uppercase tracking-tighter">cierre seguro</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
