"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Wheelchair } from "@phosphor-icons/react";

const PILARES_DATA = [
  {
    title: "Seguridad",
    subtitle: "Rigor Pericial Certificado",
    description: "Auditoría de infraestructuras críticas y sistemas de protección activa bajo estándares internacionales de seguridad física e industrial (antisiniestral).",
    icon: <ShieldCheck size={48} weight="duotone" className="text-blue-400" />,
    accent: "border-blue-400/30",
    textColor: "text-blue-400",
    glow: "shadow-[0_0_40px_rgba(37,99,235,0.1)]"
  },
  {
    title: "Salud",
    subtitle: "Ambientes Saludables",
    description: "Garantía de salubridad estructural mediante la detección de patologías biológicas y vicios ocultos de habitabilidad.",
    icon: <Heart size={48} weight="duotone" className="text-green-vibrant" />,
    accent: "border-green-vibrant/30",
    textColor: "text-green-vibrant",
    glow: "shadow-[0_0_40px_rgba(34,197,94,0.1)]"
  },
  {
    title: "Accesibilidad",
    subtitle: "Inclusión & Movilidad",
    description: "Auditoría técnica para el entorno accesible e inclusivo, asegurando la movilidad segura de todas las personas.",
    icon: <Wheelchair size={48} weight="duotone" className="text-white/40" />,
    accent: "border-white/10",
    textColor: "text-white/40",
    glow: "shadow-[0_0_40px_rgba(255,255,255,0.02)]"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

interface PilaresProps {
  card1Ref?: React.RefObject<HTMLDivElement | null>;
  card2Ref?: React.RefObject<HTMLDivElement | null>;
  card3Ref?: React.RefObject<HTMLDivElement | null>;
  isDarkTheme?: boolean;
}

const Pilares = React.memo(({ card1Ref, card2Ref, card3Ref, isDarkTheme }: PilaresProps) => {
  const refs = [card1Ref, card2Ref, card3Ref];

  return (
    <section id="pilares" className="relative pb-12 md:pb-16 bg-transparent overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto relative z-30 px-6 pt-14">
        <div className="text-center mb-28">
          <motion.h2 
            className={`text-6xl md:text-8xl font-bold font-serif mb-8 tracking-tight transition-colors duration-700
                       ${isDarkTheme ? "text-gold-seal drop-shadow-[0_0_20px_rgba(201,169,110,0.3)]" : "text-black"}`}
          >
            Nuestros Tres Pilares
          </motion.h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto italic font-light transition-colors duration-700
                       ${isDarkTheme ? "text-white/50" : "text-black/60"}`}>
            Garantizamos transparencia profesional, seguridad y rentabilidad mediante tres dimensiones de rigor estructural.
          </p>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-10">
          {PILARES_DATA.map((pilar, i) => (
            <motion.div
              key={pilar.title}
              variants={cardVariants}
              className={`group relative backdrop-blur-xl p-12 border rounded-3xl overflow-hidden transition-all duration-700 
                         ${isDarkTheme 
                           ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.05] hover:border-gold-seal/20" 
                           : "bg-white/40 border-slate-200 hover:bg-white/60 hover:border-gold-seal/40"}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                   <h3 className={`text-4xl font-serif font-bold transition-colors duration-700
                                 ${isDarkTheme ? "text-gold-seal" : "text-black"}`}>
                     {pilar.title}
                   </h3>
                   <div className="p-0 transition-transform duration-500 group-hover:scale-110">
                      {pilar.icon}
                   </div>
                </div>
                
                <p className={`text-base mb-10 opacity-80 leading-relaxed font-medium italic border-l pl-6 transition-colors duration-700
                              ${isDarkTheme ? "text-white/60 border-white/10" : "text-black/70 border-slate-200"}`}>
                  {pilar.description}
                </p>

                <div className={`mt-auto pt-8 border-t transition-all duration-700
                               ${isDarkTheme ? "border-white/5" : "border-slate-200"}`}>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-700
                                   ${isDarkTheme ? "text-gold-seal" : "text-black/40"}`}>
                    Auditoría Verificada
                  </span>
                </div>
                
                {/* Punto de Conexión para AnimatedBeam */}
                <div ref={refs[i]} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Pilares.displayName = "Pilares";

export default Pilares;
