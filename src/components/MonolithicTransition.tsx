"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * MonolithicTransition - Opción A: "The Monolithic Shift"
 * Este componente orquesta el desplazamiento espacial entre Servicios y Pilares.
 * Proporciona el "peso" visual y la profundidad necesaria para una marca premium.
 */
export default function MonolithicTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Suavizamos el progreso para un efecto más cinemático (60 FPS)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Movimiento lateral del destello de luz dorado
  const lightPosition = useTransform(smoothProgress, [0, 1], ["-100%", "200%"]);
  const lightOpacity = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[40vh] w-full overflow-hidden pointer-events-none"
      style={{ zIndex: 100 }}
    >
      {/* Línea de Luz Dorada (The Light Streak) */}
      <motion.div
        style={{
          left: lightPosition,
          opacity: lightOpacity,
        }}
        className="absolute top-0 h-[2px] w-[40vw] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent blur-[2px]"
      />
      
      {/* Etiqueta Técnica de Transición (Micro-detalle) */}
      <div className="absolute inset-0 flex items-center justify-between px-10 opacity-20 transition-opacity duration-1000 group-hover:opacity-40">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono tracking-widest text-[#C9A96E] uppercase">
            Receding Surface
          </span>
          <div className="h-[1px] w-20 bg-[#C9A96E]/30" />
        </div>
        
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-mono tracking-widest text-[#C9A96E] uppercase">
            Architectural Shift
          </span>
          <div className="h-[1px] w-20 bg-[#C9A96E]/30" />
        </div>
      </div>
      
      {/* Fondo de Transición (Sutil gradiente para suavizar el borde) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4F4F5]/0 via-[#020C1B]/10 to-[#020C1B]" />
    </div>
  );
}
