"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AtmosphericTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Optimizaciones Ultra-Fluid:
  // 1. Eliminar filtros 'blur' por completo (sustituidos por gradientes radiales de múltiples pasos)
  // 2. Reducir altura para minimizar tiempo de renderización activa
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.95, 1.1]); 
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 1]);
  
  // Movimiento ultra-sutil para evitar re-calculos de pintura innecesarios
  const textX = useTransform(scrollYProgress, [0, 1], [30, -30]); 

  return (
    <div 
      ref={containerRef} 
      className="relative h-[30vh] md:h-[35vh] w-full overflow-hidden bg-[#F4F4F5]"
      style={{ transform: 'translateZ(0)' }} 
    >
      {/* Capa de fondo suave (Fusión de color nativa) */}
      <motion.div 
        style={{ opacity, willChange: 'opacity' }}
        className="absolute inset-0 bg-gradient-to-b from-[#F4F4F5] via-[#020C1B] to-[#020C1B]"
      />

      {/* Luz Radial Multi-pasos (Sustituye al blur) */}
      <motion.div
        style={{ 
          scale, 
          opacity, 
          willChange: 'transform, opacity',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(2,12,27,0.4) 40%, rgba(2,12,27,0.8) 70%, rgba(2,12,27,1) 100%)'
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full z-10"
      />

      {/* Texto Fantasma Atmosférico (Optimizado) */}
      <motion.div
        style={{ x: textX, opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.08, 0]), willChange: 'transform, opacity' }}
        className="absolute top-1/2 left-0 w-full text-center pointer-events-none z-20"
      >
        <span className="text-[10vw] font-serif font-black text-white uppercase tracking-[0.25em] whitespace-nowrap">
          RIGOR TÉCNICO
        </span>
      </motion.div>

      {/* Partículas de Luz Estáticas (Sin animación, costo cero) */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-[1px] h-full bg-white/5 opacity-10" />
      </div>
      
      {/* Línea de Cota Técnica (Costo mínimo de renderizado) */}
      <motion.div 
        style={{ scaleY: scrollYProgress, originY: 0, willChange: 'transform' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gold-seal/15 z-50"
      />
    </div>
  );
};

export default AtmosphericTransition;
