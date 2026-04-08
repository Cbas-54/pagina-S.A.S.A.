"use client";

import React from "react";
import { motion } from "framer-motion";

const PILARES_DATA = [
  {
    title: "Seguridad",
    description: "Auditoria de sistema antisiniestral.",
    image: "/images/pilar_seguridad.png"
  },
  {
    title: "Salud",
    description: "Detección de vicios ocultos de habitibilidad.",
    image: "/images/pilar_salud.png"
  },
  {
    title: "Accesibilidad",
    description: "Auditoría técnica para el entorno accesible e inclusivo.",
    image: "/images/pilar_accesibilidad.png"
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
    <section id="pilares" className="relative pb-24 md:pb-32 bg-transparent overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto relative z-30 px-6 pt-20">
        <div className="text-center mb-20 md:mb-28">
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

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
          {PILARES_DATA.map((pilar, i) => (
            <motion.div
              key={pilar.title}
              variants={cardVariants}
              className="group relative flex flex-col h-full bg-white transition-all duration-500 overflow-hidden rounded-3xl"
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img 
                  src={pilar.image} 
                  alt={pilar.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Contenedor de Texto Pegado a la Imagen */}
              <div className="flex-grow p-8 md:p-10 bg-white transition-colors duration-500 group-hover:bg-blue-mid border-x border-b border-black/5 group-hover:border-transparent">
                <h3 className="text-3xl font-serif font-bold mb-4 text-black transition-colors duration-500 group-hover:text-green-vibrant">
                  {pilar.title}
                </h3>
                <p className="text-base leading-relaxed font-bold text-black/70 transition-colors duration-500 group-hover:text-white">
                  {pilar.description}
                </p>
              </div>
              
              {/* Punto de Conexión para AnimatedBeam */}
              <div ref={refs[i]} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Pilares.displayName = "Pilares";

export default Pilares;
