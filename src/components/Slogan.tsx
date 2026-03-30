"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Slogan = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 35%"]
  });

  // Reveal effect: clip-path from left to right
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]);

  const text = "Transformamos incertidumbre técnica en rentabilidad inmediata.";

  return (
    <section ref={containerRef} className="relative z-20 py-60 px-6 bg-white overflow-hidden flex items-center justify-center">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-mid/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Background Text (Ultra subtle stroke/dimmed) */}
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif font-black text-divider/20 uppercase tracking-tighter leading-[0.95] pointer-events-none select-none">
          {text}
        </h2>
        
        {/* Foreground Text (Premium Gradient Reveal) */}
        <motion.h2 
          className="absolute inset-0 text-5xl md:text-7xl lg:text-9xl font-serif font-black uppercase tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-blue-mid via-green-vibrant to-gold-seal drop-shadow-sm select-none"
          style={{ clipPath }}
        >
          {text}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="w-32 h-1 bg-gradient-to-r from-blue-mid to-green-vibrant mx-auto mt-16 rounded-full"
        />
      </div>
    </section>
  );
};

export default Slogan;
