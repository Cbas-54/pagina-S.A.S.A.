"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const Slogan = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 35%"]
  });

  const text = "Transformamos incertidumbre técnica en rentabilidad inmediata.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative z-20 py-48 md:py-64 px-6 overflow-hidden bg-bg-main">
      {/* Decorative background grid and elements */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.4]" />
      <div className="absolute top-0 right-0 p-8 text-[10px] font-mono text-blue-mid/30 tracking-[0.2em] uppercase select-none pointer-events-none hidden md:block">
        REF: SASA-TR-2024 / AUDIT-SEC
      </div>
      <div className="absolute bottom-0 left-0 p-8 text-[10px] font-mono text-blue-mid/30 tracking-[0.2em] uppercase select-none pointer-events-none hidden md:block">
        COORDS: 34.6037° S, 58.3816° W
      </div>

      <div className="max-w-6xl mx-auto relative group">
        {/* Subtle scanning line */}
        <motion.div 
          initial={{ top: "-10%", opacity: 0 }}
          whileInView={{ top: "110%", opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 3 }}
          className="absolute left-[-10%] right-[-10%] h-px bg-gradient-to-r from-transparent via-blue-mid/20 to-transparent z-0 pointer-events-none"
        />

        <div className="flex flex-col items-center">
          {/* Metadata tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1 rounded-full border border-blue-mid/10 bg-blue-mid/[0.02] mb-12"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-mid animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-mid/60">
              Technical Proposition
            </span>
          </motion.div>

          <h2 className="text-[2.8rem] md:text-[5.5rem] leading-[1.05] tracking-[-0.03em] font-serif font-light text-text-main text-center">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-[0.3em] overflow-hidden py-1">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: wordIndex * 0.08
                  }}
                  className={`inline-block ${
                    word.toLowerCase().includes("rentabilidad") || word.toLowerCase().includes("inmediata")
                      ? "text-blue-mid font-medium italic"
                      : "text-text-main"
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
            className="h-1 bg-gradient-to-r from-blue-mid/40 to-green-vibrant/40 mt-16 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-text-ter text-sm font-mono tracking-widest uppercase opacity-60"
          >
            Expertise Técnica & Seguridad Jurídica
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
