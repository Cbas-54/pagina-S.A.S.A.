"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Check } from "@phosphor-icons/react";

interface SelloSASAProps {
  sealRef: React.RefObject<HTMLDivElement | null>;
  onThemeChange: (isDark: boolean) => void;
}

const SelloSASA = React.memo(({ sealRef, onThemeChange }: SelloSASAProps) => {
  const titleRef = React.useRef(null);
  
  // Detecta si el título ha asomado por la parte inferior
  // margin: "100% 0px 0px 0px" significa:
  // - Se activa en cuanto el elemento toca el borde inferior del viewport (0px)
  // - Permanece activo si el elemento sube por encima del viewport (100%)
  const isExcelenceActive = useInView(titleRef, {
    margin: "100% 0px 0px 0px" 
  });

  React.useEffect(() => {
    onThemeChange(isExcelenceActive);
  }, [isExcelenceActive, onThemeChange]);

  return (
    <section id="sello" className="relative pt-12 md:pt-16 pb-24 md:pb-32 px-6 bg-transparent overflow-hidden">
      {/* ── SEAMLESS MIDNIGHT TRANSITION (Melted Flow) ── */}
      <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b transition-colors duration-700 pointer-events-none z-10 
                      ${isExcelenceActive ? "from-[#0A0A0A]" : "from-white"}`} />

      <div className="max-w-7xl mx-auto relative z-30">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Visual: El Sello Nuclear (Logo Oficial) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative flex items-center justify-center lg:w-1/2"
            ref={sealRef}
          >
            {/* Ambient gold glow */}
            <div className="absolute inset-0 w-80 h-80 bg-gold-seal/10 rounded-full blur-[120px] -z-10" />
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border border-gold-seal/30 flex items-center justify-center bg-white/[0.03] shadow-2xl backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none invert" />
                
                <div className="w-[85%] h-[85%] rounded-full border border-gold-seal/20 flex items-center justify-center relative bg-gradient-to-br from-white/5 to-transparent">
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                    <Image 
                      src="/logo sasa borde blanco.png" 
                      alt="Logo Oficial SASA" 
                      width={280} 
                      height={280} 
                      className="object-contain drop-shadow-[0_0_30px_rgba(201,169,110,0.4)]"
                    />
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <motion.div 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0A0F1A] px-10 py-4 rounded-2xl border border-gold-seal/30 shadow-2xl flex items-center gap-4 w-max"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/90">Estatus: Certificado Oficial</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content: Autoridad Técnica */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 space-y-12"
          >
            <div className="space-y-6">
              <h2 
                ref={titleRef}
                className="text-5xl md:text-7xl font-bold font-serif text-white tracking-tight leading-tight"
              >
                La Síntesis de<br />
                <span className="text-gold-seal italic font-light uppercase tracking-wide">LA EXCELENCIA</span>
              </h2>
              <p className="text-white/60 text-xl leading-relaxed italic border-l-2 border-gold-seal/30 pl-8">
                El sello S.A.S.A. no es solo una marca, es la representación visual de que su propiedad ha superado la auditoría más distinguida del mercado.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                "Propiedad certificada con el Sello S.A.S.A.",
                "Apta para comercialización segura, saludable e inclusiva",
                "Cumple con estándares profesionales de calidad habitacional",
                "Aporta valor agregado verificable y auditable",
                "Minimiza la recurrencia de consultas técnicas"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold-seal/20 transition-all">
                   <div className="w-8 h-8 rounded-full bg-gold-seal/10 flex items-center justify-center text-gold-seal">
                     <Check size={16} weight="bold" />
                   </div>
                   <span className="text-white/70 font-medium">{text}</span>
                </div>
              ))}
            </div>
            
            <div className="p-8 rounded-3xl bg-gold-seal/[0.05] border border-gold-seal/10 flex items-center gap-6">
               <div>
                  <p className="text-[10px] font-black text-gold-seal uppercase tracking-widest mb-1">Validación por Auditoría</p>
                  <p className="text-white/40 text-sm italic">"Garantizamos la fe técnica en cada metro cuadrado."</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

SelloSASA.displayName = "SelloSASA";

export default SelloSASA;
