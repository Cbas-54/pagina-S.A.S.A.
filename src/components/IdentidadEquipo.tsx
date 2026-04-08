"use client";

import React from "react";
import { motion } from "framer-motion";
import { UsersThree, Certificate, Medal } from "@phosphor-icons/react";

const IdentidadEquipo = () => {
  return (
    <section id="equipo" className="relative pt-32 md:pt-48 pb-0 px-6 bg-[#0A0A0A] overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-mid/5 rounded-full blur-[160px] opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-12"
        >
          <Medal size={20} className="text-gold-seal" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">Liderazgo & Experto</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-serif text-white font-bold mb-16 leading-[1.1] tracking-tight"
        >
          Más de <span className="text-gold-seal italic font-light">25 años</span> de <br />
          excelencia técnica y comercial.
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto items-center relative">
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative p-10 md:p-16 rounded-t-[3rem] rounded-b-none bg-white/[0.02] border-t border-x border-white/5 backdrop-blur-sm z-10"
           >
              <UsersThree size={60} weight="thin" className="text-gold-seal/40 mx-auto mb-10" />
              
              <p className="text-xl md:text-3xl text-white/70 font-serif leading-relaxed italic">
                "Somos un equipo especializado en optimizar entornos de trabajo, liderando la transformación de propiedades en productos de alto rendimiento comercial. Nuestra metodología integra el rigor técnico de la auditoría con una visión estratégica del mercado inmobiliario."
              </p>
              
              <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-12">
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl font-bold text-white tracking-tighter">25+</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Años de Trayectoria</span>
                 </div>
                 <div className="w-px h-12 bg-white/10 hidden md:block" />
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl font-bold text-white tracking-tighter">100%</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Eficacia Operativa</span>
                 </div>
                 <div className="w-px h-12 bg-white/10 hidden md:block" />
                 <div className="flex flex-col items-center gap-2">
                    <Certificate size={44} weight="thin" className="text-gold-seal" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Certificación Oficial</span>
                 </div>
              </div>
           </motion.div>

           {/* Inverted Corners (Solapa Effect) */}
           <div className="absolute -bottom-[1px] left-0 w-full h-12 pointer-events-none hidden md:block">
              {/* Left Inverted Corner */}
              <div 
                className="absolute left-[-48px] bottom-0 w-[48px] h-[48px] bg-white/[0.02] backdrop-blur-sm border-b border-r border-white/5" 
                style={{ 
                  maskImage: 'radial-gradient(circle at 0px 0px, transparent 48px, white 48px)',
                  WebkitMaskImage: 'radial-gradient(circle at 0px 0px, transparent 48px, white 48px)'
                }} 
              />
              {/* Right Inverted Corner */}
              <div 
                className="absolute right-[-48px] bottom-0 w-[48px] h-[48px] bg-white/[0.02] backdrop-blur-sm border-b border-l border-white/5"
                style={{ 
                  maskImage: 'radial-gradient(circle at 48px 0px, transparent 48px, white 48px)',
                  WebkitMaskImage: 'radial-gradient(circle at 48px 0px, transparent 48px, white 48px)'
                }} 
              />
           </div>
        </div>
      </div>
      
    </section>
  );
};

export default IdentidadEquipo;
