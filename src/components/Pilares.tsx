"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Wheelchair } from "@phosphor-icons/react";

const PILARES_DATA = [
  {
    title: "Seguridad",
    subtitle: "Antisiniestral",
    description: "Evaluación rigurosa de instalaciones eléctricas, sistemas contra incendios y riesgos estructurales ocultos.",
    bullets: ["Tableros eléctricos", "Red de incendio", "Riesgos estructurales"],
    icon: <ShieldCheck size={48} weight="duotone" />,
    accent: "border-[#C9A96E]/40",
    textColor: "text-[#C9A96E]",
  },
  {
    title: "Salud",
    subtitle: "Habitabilidad",
    description: "Control exhaustivo de humedad, ventilación cruzada y calidad del aire interior para un hogar sano.",
    bullets: ["Humedad y cimientos", "Ventilación cruzada", "Instalaciones de gas"],
    icon: <Heart size={48} weight="duotone" />,
    accent: "border-[#059669]/40",
    textColor: "text-[#059669]",
  },
  {
    title: "Accesibilidad",
    subtitle: "Inclusión real",
    description: "Análisis de rampas, ascensores y movilidad interna para ampliar el mercado potencial.",
    bullets: ["Rampas y accesos", "Ascensores y escaleras", "Señalización"],
    icon: <Wheelchair size={48} weight="duotone" />,
    accent: "border-[#2563eb]/40",
    textColor: "text-[#2563eb]",
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
}

const Pilares = React.memo(({ card1Ref, card2Ref, card3Ref }: PilaresProps) => {
  const refs = [card1Ref, card2Ref, card3Ref];

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[120px] fill-white">
          <path d="M0,0 L0,120 L1200,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-30 px-6">
        <div className="text-center mb-28">
          <motion.h2 className="text-6xl md:text-8xl font-bold font-serif text-white mb-8 tracking-tight">
            Nuestros Tres Pilares
          </motion.h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Garantizamos transparencia, seguridad y rentabilidad definitiva.
          </p>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-10">
          {PILARES_DATA.map((pilar, i) => (
            <motion.div
              key={pilar.title}
              variants={cardVariants}
              className={`relative bg-white p-12 border-t-[10px] ${pilar.accent} border-x border-b border-divider/5 rounded-3xl overflow-hidden shadow-2xl`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                   <h3 className="text-4xl font-serif font-bold text-text-main">{pilar.title}</h3>
                   <div ref={refs[i]} className={`${pilar.textColor} bg-white/50 p-2 rounded-xl`}>
                     {pilar.icon}
                   </div>
                </div>
                <p className="text-text-sec text-base mb-10 opacity-80">{pilar.description}</p>
                <ul className="space-y-3 mt-auto pt-6 border-t border-divider/10">
                  {pilar.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-text-main">
                      <span className={`${pilar.textColor} opacity-40 font-serif`}>0{idx + 1}</span>
                      {b}
                    </li>
                  ))}
                </ul>
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
