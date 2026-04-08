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

          {/* Executive Profile Cards */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-5xl mx-auto">
            {[
              {
                name: "Lic. Maximiliano Martín Ovelar",
                role: "Especialista SASA",
                credential: "Matrícula LHS-007462 PBA",
                image: "/Maximiliano Gemini.png"
              },
              {
                name: "Tec. Juan Pablo Stock",
                role: "Resp. Técnico",
                credential: "Matrícula THS - 011523 - PBA",
                image: "/Juan Pablo Gemini.png"
              }
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                whileHover={{ y: -10 }}
                className="flex-1 group relative p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 hover:border-gold-seal/50 transition-all duration-700 overflow-visible"
              >
                {/* Permanent gold glow background */}
                <div className="absolute inset-0 bg-gold-seal/10 blur-[100px] -z-20 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="flex flex-col items-center gap-8 h-full">
                  {/* Avatar Container - Double Size */}
                  <div className="relative shrink-0">
                    {/* Ring glow */}
                    <div className="absolute inset-0 -m-4 bg-gold-seal/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/20 group-hover:border-gold-seal/50 transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-[#111] aspect-square isolate">
                      <Image 
                        src={person.image} 
                        alt={person.name} 
                        fill 
                        className="object-cover object-top rounded-full transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                    {/* Status dot */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-[#111] rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)] z-20" />
                  </div>

                  {/* Info Text - Centered to match big image */}
                  <div className="text-center space-y-4">
                    <h4 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                      {person.name}
                    </h4>
                    <div className="flex flex-col gap-2">
                      <span className="text-gold-seal text-[12px] font-black uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-gold-seal/10 border border-gold-seal/20 inline-block mx-auto">
                        {person.role}
                      </span>
                      <span className="text-white/40 text-[11px] font-medium tracking-widest leading-relaxed uppercase">
                        {person.credential}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
