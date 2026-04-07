"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * StructuralGridTransition - Opción 1: "The Structural Grid"
 * Una transición arquitectónica que visualiza el rigor técnico de SASA.
 * Utiliza un sistema de rejilla que se construye dinámicamente según el scroll.
 */
export default function StructuralGridTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Suavizado cinemático
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transformaciones para el dibujo de las líneas
  const lineWidth = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);
  const lineHeight = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);
  const nodeOpacity = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);
  const nodeScale = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);

  // Gradiente de fondo sutil durante el cambio
  const bgGradient = useTransform(
    smoothProgress,
    [0, 1],
    ["rgba(244, 244, 245, 1)", "rgba(2, 12, 27, 1)"]
  );

  return (
    <motion.div 
      ref={containerRef} 
      className="relative w-full h-64 md:h-[50vh] overflow-hidden pointer-events-none"
      style={{ backgroundColor: bgGradient }}
    >
      {/* Sistema de Rejilla: Líneas Verticales */}
      <div className="absolute inset-0 flex justify-evenly">
        {[...Array(6)].map((_, i) => (
          <div key={`v-${i}`} className="relative h-full w-[1px] bg-gold-seal/10">
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gold-seal/40"
            />
          </div>
        ))}
      </div>

      {/* Sistema de Rejilla: Líneas Horizontales */}
      <div className="absolute inset-0 flex flex-col justify-evenly">
        {[...Array(4)].map((_, i) => (
          <div key={`h-${i}`} className="relative w-full h-[1px] bg-gold-seal/10">
            <motion.div 
              style={{ width: lineWidth }}
              className="absolute top-0 left-0 h-full bg-gold-seal/40"
            />
          </div>
        ))}
      </div>

      {/* Nodos de Intersección (Detalle Técnico) */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <div key={`node-${i}`} className="relative flex items-center justify-center">
             <motion.div 
               style={{ opacity: nodeOpacity, scale: nodeScale }}
               className="w-1.5 h-1.5 rounded-full bg-gold-seal shadow-[0_0_10px_#C9A96E]"
             />
          </div>
        ))}
      </div>

      {/* Etiquetas Técnicas Flicker (Atmósfera Pro) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 0.3 }}
           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
           className="font-mono text-[8px] tracking-[0.5em] text-gold-seal uppercase"
        >
          Structural Audit In Progress // Verifying Foundation Integrity
        </motion.div>
      </div>
    </motion.div>
  );
}
