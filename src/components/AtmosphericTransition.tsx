"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AtmosphericTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Expansión radial del color oscuro
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 40]);
  
  // Movimiento sutil de texto fantasma
  const textX = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden bg-[#F4F4F5]"
    >
      {/* Capa de fondo que se funde */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#F4F4F5] via-[#020C1B] to-[#020C1B]"
      />

      {/* Luz Radial Expansiva (Efecto Inmersión B) */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-gradient-to-b from-blue-mid/20 via-[#020C1B] to-[#020C1B] blur-[100px] z-10"
      />

      {/* Texto Fantasma Atmosférico */}
      <motion.div
        style={{ x: textX, opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.1, 0]) }}
        className="absolute top-1/2 left-0 w-full text-center pointer-events-none z-20"
      >
        <span className="text-[15vw] font-serif font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">
          RIGOR TÉCNICO
        </span>
      </motion.div>

      {/* Capa de Desenfoque (Backdrop) */}
      <motion.div 
        style={{ backdropFilter: `blur(${blur}px)` }}
        className="absolute inset-0 z-30 pointer-events-none"
      />

      {/* Partículas de Luz (Light Leaks) */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-seal/20 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-1/3 w-px h-full bg-gradient-to-t from-transparent via-blue-400/10 to-transparent opacity-20" />
      </div>
      
      {/* Línea de Cota Técnica (Sutil) */}
      <motion.div 
        style={{ scaleY: scrollYProgress, originY: 0 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gold-seal/30 z-50"
      />
    </div>
  );
};

export default AtmosphericTransition;
