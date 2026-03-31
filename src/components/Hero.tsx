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
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <Image
            src="/hero-opt-3.png"
            alt="SASA Clean Architectural Perspective"
            fill
            className="object-cover object-center"
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
                <h2 className="text-[21px] font-medium text-green-vibrant mb-2 tracking-normal">
                  presentando SASA
                </h2>
              </div>

              {/* ── "Tu ventaja comprobada en cada cierre." (Pure Black) ── */}
              <div className="overflow-hidden pb-4">
                <h1 className="text-[45px] font-bold text-black leading-[1.1] tracking-tighter">
                  tu ventaja comprobada en cada cierre.
                </h1>
              </div>
            </div>

            <div>
              <p className="text-[21px] text-black max-w-[45rem] leading-[1.4] font-light mb-10 mt-2 opacity-90">
                Auditorías técnicas exhaustivas donde la seguridad y legalidad se integran en la operación inmobiliaria, para acelerar estrategias de venta. Funcionando sobre cualquier propiedad, SASA eleva las garantías, destraba negociaciones y asegura valor de mercado inmediato.
              </p>

              <button className="px-6 py-3 bg-green-vibrant text-white font-semibold text-[14px] rounded-[4px] shadow-lg shadow-green-vibrant/10 hover:bg-green-vibrant/90 hover:scale-105 transition-all tracking-wide">
                Descubrir más
              </button>
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
              <span className="text-[1.3rem] text-black font-normal tracking-title">Garantías invisibles</span>
              <span className="px-1.5 py-0 bg-black text-white font-bold text-[1.3rem] rounded-[2px] shadow-sm">para ventas tangibles</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
