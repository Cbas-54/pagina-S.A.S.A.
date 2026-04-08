"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Cierre = React.memo(() => {
  return (
    <section className="relative pt-12 md:pt-16 pb-32 md:pb-40 px-6 overflow-hidden noise-overlay">
      {/* Dramatic gradients */}
      <div className="absolute inset-0 -z-10 bg-[#0A0A0A]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(0,51,102,0.4)_0%,transparent_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="w-full h-px bg-gradient-to-r from-transparent via-blue-mid/30 to-transparent mb-14 origin-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <blockquote className="text-3xl md:text-5xl font-serif font-light text-white leading-[1.3] italic mb-12">
            &ldquo;Somos tu <span className="text-gradient-green font-medium not-italic tracking-tight">aliado técnico</span>
            <br />
            que eleva tu propuesta
            <br />
            por encima de la <span className="text-gradient-gold font-medium not-italic">competencia</span>.&rdquo;
          </blockquote>

          {/* Slogans adicionales */}
          <div className="flex flex-col md:flex-row gap-6 mb-16 opacity-40">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white py-2 px-4 border border-white/10 rounded-full">
              SASA ES UN SISTEMA INNOVADOR PARA EL MERCADO INMOBILIARIO ACTUAL.
            </span>
          </div>

          {/* Authors / Technical Signatures */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Maximiliano */}
            <div className="flex items-center gap-4">
              <div className="text-left">
                <p className="text-white text-base font-bold leading-tight">Lic. Maximiliano Martín Ovelar</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black mt-1">Matrícula LHS-007462 PBA · Especialista SASA</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10" />

            {/* Juan Pablo Stock */}
            <div className="flex items-center gap-4">
              <div className="text-left">
                <p className="text-white text-base font-bold leading-tight">Tec. Juan Pablo Stock</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black mt-1">Matrícula THS - 011523 - PBA · Resp. Técnico</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16 origin-center"
        />
      </div>
    </section>
  );
});

Cierre.displayName = "Cierre";

export default Cierre;
