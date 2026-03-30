"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Warning, 
  Lightning, 
  Wind, 
  ChartLineUp, 
  Handshake, 
  Detective,
  SealCheck,
  Buildings
} from "@phosphor-icons/react";

const ProblemSolution = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const risks = [
    {
      id: "BT-101",
      title: "Instalaciones de Riesgo",
      desc: "Cableados sin certificación y tableros fuera de norma ocultos tras el revoque.",
      solution: "Protocolo de auditoría eléctrica integral con sello de ingeniería.",
      icon: <Lightning size={28} weight="duotone" className="text-blue-glow" />,
      grid: "col-span-12 md:col-span-8",
      color: "blue"
    },
    {
      id: "BT-102",
      title: "Habitabilidad",
      desc: "Vicios de ventilación y humedad no declarados que invalidan la habitabilidad.",
      solution: "Checklist de estado real para blindaje jurídico inmediato.",
      icon: <Wind size={28} weight="duotone" className="text-green-vibrant" />,
      grid: "col-span-12 md:col-span-4",
      color: "green"
    },
    {
      id: "BT-103",
      title: "Miedo Transaccional",
      desc: "El comprador paraliza el cierre por temor a vicios ocultos.",
      solution: "Eliminación de fricción mediante certificación técnica de terceros.",
      icon: <Detective size={28} weight="duotone" className="text-gold-seal" />,
      grid: "col-span-12 md:col-span-5",
      color: "gold"
    },
    {
      id: "BT-104",
      title: "Integridad del Precio",
      desc: "Regateos del 15% basados en supuestas deficiencias técnicas.",
      solution: "Defensa del valor real del activo mediante evidencia técnica.",
      icon: <ChartLineUp size={28} weight="duotone" className="text-blue-light" />,
      grid: "col-span-12 md:col-span-7",
      color: "blue"
    }
  ];

  return (
    <section id="problema" className="relative py-32 md:py-48 px-6 bg-[#050B1B] dark overflow-hidden selection:bg-blue-glow/30">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B1B] via-transparent to-[#050B1B] pointer-events-none" />
      
      {/* Decorative Radiance Blobs */}
      <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-blue-mid/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-green-subtle/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-blue-glow" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-blue-glow/80 font-bold">
              Risk Matrix Protocol
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-serif text-white font-light leading-[1.05] tracking-tight mb-10"
          >
            Donde otros ven dudas, <br />
            <span className="font-bold italic text-gradient-blue">nosotros vemos certezas.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-sec text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            Documentamos, auditamos y certificamos cada metro cuadrado para que el cierre sea inevitable.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {risks.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`${item.grid} relative group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden p-8 md:p-10 card-hover`}
            >
              {/* Dynamic Aura on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-glow/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Technical Scan Animation (Láser) */}
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.div
                    initial={{ top: "-100%" }}
                    animate={{ top: "100%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-glow/40 to-transparent z-40 pointer-events-none shadow-[0_0_15px_rgba(46,139,255,0.4)]"
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className={`p-4 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-${item.color}-vibrant/20 transition-colors`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-white/20 tracking-widest font-black uppercase">
                    {item.id}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-serif text-white font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-text-sec text-sm md:text-base leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-3">
                    <SealCheck size={20} className="text-green-vibrant shrink-0" weight="fill" />
                    <p className="text-sm font-mono text-white/90 group-hover:text-white transition-colors">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Special Action/Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-12 relative rounded-2xl border border-divider-strong bg-gradient-to-br from-blue-mid/20 to-green-mid/10 backdrop-blur-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                <Buildings size={32} className="text-white" weight="duotone" />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-white font-bold">¿Dudas con un activo específico?</h4>
                <p className="text-text-sec text-sm">Realizamos diagnósticos preliminares en menos de 48hs.</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 px-8 py-3.5 bg-blue-glow text-white font-bold rounded-full shadow-[0_0_20px_rgba(46,139,255,0.4)] hover:shadow-[0_0_35px_rgba(46,139,255,0.6)] transition-all"
            >
              Agendar Auditoría Ref.
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
