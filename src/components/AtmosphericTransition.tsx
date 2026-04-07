"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AtmosphericTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Optimizaciones de rendimiento:
  // 1. Eliminar backdrop-filter (muy costoso para la GPU)
  // 2. Usar will-change: transform para aceleración por hardware
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1.2]); // Rango más controlado
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 1]);
  
  // Movimiento sutil de texto fantasma
  const textX = useTransform(scrollYProgress, [0, 1], [50, -50]); // Rango reducido

  return (
    <div 
      ref={containerRef} 
      className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-[#F4F4F5]"
      style={{ transform: 'translateZ(0)' }} // Forzar nueva capa de composición
    >
      {/* Capa de fondo que se funde (Gradiente puro, no blur) */}
      <motion.div 
        style={{ opacity, willChange: 'opacity' }}
        className="absolute inset-0 bg-gradient-to-b from-[#F4F4F5] via-[#020C1B] to-[#020C1B]"
      />

      {/* Luz Radial Expansiva (Optimizada) */}
      <motion.div
        style={{ scale, opacity, willChange: 'transform, opacity' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full bg-gradient-to-b from-blue-mid/10 via-[#020C1B] to-[#020C1B] blur-[60px] z-10"
      />

      {/* Texto Fantasma Atmosférico (Más nítido, menos lag) */}
      <motion.div
        style={{ x: textX, opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.08, 0]), willChange: 'transform, opacity' }}
        className="absolute top-1/2 left-0 w-full text-center pointer-events-none z-20"
      >
        <span className="text-[12vw] font-serif font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">
          RIGOR TÉCNICO
        </span>
      </motion.div>

      {/* Partículas de Luz (Light Leaks - Estáticas y ligeras) */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold-seal/10 to-transparent opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-[1px] h-full bg-gradient-to-t from-transparent via-blue-400/5 to-transparent opacity-10" />
      </div>
      
      {/* Línea de Cota Técnica (Pura transformación unitaria) */}
      <motion.div 
        style={{ scaleY: scrollYProgress, originY: 0, willChange: 'transform' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gold-seal/20 z-50"
      />
    </div>
  );
};

export default AtmosphericTransition;
