"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AtmosphericTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Lógica de "Slice" Técnico:
  // 1. Una línea de corte diagonal (Lead Line)
  // 2. Un clip-path que revela el color azul profundo
  const sliceProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Cálculo del polígono de clip-path para un corte diagonal limpio
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "polygon(0 0, 0 0, 0 0, 0 0)", // Oculto al inicio
      "polygon(0 0, 100% 0, 100% 100%, 0 100%)" // Totalmente revelado al final (con paso intermedio diagonal)
    ]
  );

  // Variante: Usamos una máscara que crece de arriba-izquierda a abajo-derecha
  const maskWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "200%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[30vh] md:h-[40vh] w-full overflow-hidden bg-[#F4F4F5]"
    >
      {/* Fondo de Referencia Técnica (Gris claro) */}
      <div className="absolute inset-0 bg-[#F4F4F5]" />

      {/* Capa de Revelado (Deep Blue) con Corte Diagonal */}
      <motion.div 
        style={{ 
          clipPath: useTransform(
            scrollYProgress,
            [0, 1],
            [
              "polygon(0 0, 0 0, 0 100%, 0 100%)",
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            ]
          ),
          width: "100%",
          height: "100%",
          willChange: "clip-path"
        }}
        className="absolute inset-0 bg-[#020C1B] z-10"
      />

      {/* Línea Guía de Precisión (Blueprint Lead) */}
      <motion.div
        style={{ 
          left: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          opacity: lineOpacity,
          willChange: "left, opacity"
        }}
        className="absolute top-0 bottom-0 w-[1px] bg-gold-seal z-20 shadow-[0_0_15px_rgba(201,169,110,0.5)]"
      />

      {/* Etiquetas de Auditoría (Technical Tags) */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 0.4]),
          y: useTransform(scrollYProgress, [0, 1], [20, -20])
        }}
        className="absolute top-1/2 left-12 -translate-y-1/2 z-30 pointer-events-none hidden md:block"
      >
        <div className="flex flex-col gap-2 font-mono text-[10px] text-white/40 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-2 h-[1px] bg-gold-seal/40" />
            <span>SEC_AUDIT_START_01</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-[1px] bg-gold-seal/40" />
            <span>TRANSITION_ACTIVE_45DEG</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0.4, 0.7], [0, 0.4]),
          y: useTransform(scrollYProgress, [0, 1], [-20, 20])
        }}
        className="absolute top-1/4 right-12 z-30 pointer-events-none hidden md:block"
      >
        <div className="flex flex-col gap-1 font-mono text-[9px] text-gold-seal/30 uppercase text-right">
          <span>COORDS: 42.11 / -58.22</span>
          <span>VAL_PRX: 0.992</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AtmosphericTransition;
