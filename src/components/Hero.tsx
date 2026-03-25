"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Crosshair } from "@phosphor-icons/react";
import Image from "next/image";
import { useReveal } from "@/context/RevealContext";
import { HERO_TIMINGS, AMDOCS_EASE } from "@/constants/animations";
import { Particles } from "@/components/ui/particles";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isReady } = useReveal();

  return (
    <div id="inicio" ref={containerRef} className="relative h-screen bg-[#0a0a0a]">
      <motion.section
        className="h-full w-full pt-20 overflow-hidden flex items-center"
      >
        {/* ── Background ambiance (Amdocs Curved Horizon - SASA Palette) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: HERO_TIMINGS.revealDuration, delay: HERO_TIMINGS.revealDelay, ease: "easeInOut" }}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          {/* Base dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#0d0d0d]" />
          
          {/* Green Particles layer */}
          <Particles
            className="absolute inset-0 z-10"
            quantity={100}
            staticity={30}
            ease={50}
            size={0.6}
            color="#66cc33" // SASA Green
            refresh
          />

          {/* Blue Particles layer */}
          <Particles
            className="absolute inset-0 z-10"
            quantity={80}
            staticity={40}
            ease={70}
            size={0.5}
            color="#2a7ee6" // SASA Blue
            refresh
          />
          
          {/* Grid overlay for texture - very subtle */}
          <div className="absolute inset-0 bg-grid opacity-[0.03] mix-blend-overlay z-20" />
          
          {/* Bottom center warm light leak (matched to SASA blue) */}
          <div className="absolute bottom-0 right-[20%] w-[40vw] h-[30vh] 
            bg-blue-light/20 blur-[130px] rounded-full pointer-events-none z-20" />
        </motion.div>

        {/* ── Content grid ── */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-10 lg:pt-0">
          {/* LEFT: Text */}
          <div className="flex flex-col items-start justify-center pt-20 lg:pt-0">
            <div className="flex flex-col mb-6">
              {/* ── Subtitle: "presentando SASA" (Blanco) ── */}
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={isReady ? { y: 0 } : { y: "100%" }}
                  transition={{ 
                    duration: HERO_TIMINGS.duration, 
                    delay: HERO_TIMINGS.subtitleDelay, 
                    ease: AMDOCS_EASE
                  }}
                  className="text-[21px] font-light text-white mb-2 tracking-normal"
                >
                  presentando SASA
                </motion.h2>
              </div>

              {/* ── "Tu ventaja comprobada en cada cierre." (Combined, White, Bold) ── */}
              <div className="overflow-hidden pb-4">
                <motion.h1
                  initial={{ y: "150%" }}
                  animate={isReady ? { y: 0 } : { y: "150%" }}
                  transition={{ 
                    duration: HERO_TIMINGS.duration, 
                    delay: HERO_TIMINGS.headingDelay, 
                    ease: AMDOCS_EASE 
                  }}
                  className="text-[45px] font-bold text-white leading-[1.1] tracking-tighter"
                >
                  tu ventaja comprobada en cada cierre.
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ 
                duration: HERO_TIMINGS.revealDuration, 
                delay: HERO_TIMINGS.revealDelay, 
                ease: "easeInOut" 
              }}
            >
              <p className="text-[21px] text-text-main max-w-[45rem] leading-[1.4] font-light mb-10 mt-2 opacity-90">
                Auditorías técnicas exhaustivas donde la seguridad y legalidad se integran en la operación inmobiliaria, para acelerar estrategias de venta. Funcionando sobre cualquier propiedad, SASA eleva las garantías, destraba negociaciones y asegura valor de mercado inmediato.
              </p>

              <button className="px-6 py-3 bg-green-vibrant text-bg-main font-semibold text-[14px] rounded-[4px] hover:bg-green-vibrant/90 transition-colors tracking-wide">
                Descubrir más
              </button>
            </motion.div>
          </div>

          {/* RIGHT: SASA Logo Area (Matching "aOS" visual proportions) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: HERO_TIMINGS.revealDuration, delay: HERO_TIMINGS.revealDelay, ease: "easeInOut" }}
            className="hidden lg:flex flex-col justify-center items-center relative h-full mt-4 ml-auto lg:mr-10"
          >
            <div className="flex items-center justify-center">
              <div className="w-[55px] flex justify-center mr-2">
                <span className="text-[160px] font-bold text-text-main leading-none tracking-tighter">S</span>
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
                <span className="text-[160px] font-bold text-text-main leading-none tracking-tighter">A</span>
              </div>
            </div>
            
            {/* Sub-label under logo like "Agentic Operating System for Telco" */}
            <div className="flex items-center gap-3 mt-4 ml-4 whitespace-nowrap">
              <span className="text-[1.3rem] text-text-main font-normal tracking-title opacity-90">Garantías invisibles</span>
              <span className="px-1.5 py-0 bg-text-main text-bg-main font-bold text-[1.3rem] rounded-[2px]">para ventas tangibles</span>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
