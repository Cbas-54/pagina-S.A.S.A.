"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Slogan = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 40%"]
  });

  // El clip-path va descubriendo el texto coloreado desde la izquierda (100% oculto en derecha a 0%)
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]);

  const text = "Transformamos incertidumbre técnica en rentabilidad inmediata.";

  return (
    <section ref={containerRef} className="relative z-20 py-40 px-6 bg-bg-main overflow-hidden flex items-center justify-center">
      {/* Background radial gradient to give it a premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-main via-bg-alt/50 to-bg-main" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Background Text (Dimmed / Stroke effect) */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-text-sec opacity-20 uppercase tracking-tighter leading-tight pointer-events-none">
          {text}
        </h2>
        
        {/* Foreground Text (Filled Gradient) */}
        <motion.h2 
          className="absolute top-0 left-0 w-full text-4xl md:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-light via-green-vibrant to-gold-seal drop-shadow-2xl"
          style={{ clipPath }}
        >
          {text}
        </motion.h2>
      </div>
    </section>
  );
};

export default Slogan;
