"use client";

import React from "react";
import { motion } from "framer-motion";

const IdentidadEquipo = () => {
  const stats = [
    { label: "Años de Trayectoria", value: "25+", color: "text-gold-seal" },
    { label: "Proyectos Auditados", value: "500+", color: "text-white" },
    { label: "Eficacia Operativa", value: "100%", color: "text-gold-seal" },
  ];

  return (
    <section id="identidad" className="relative py-24 px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.05)_0%,transparent_70%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-10 relative z-10">
            <div className="space-y-4">
              <h3 className="text-gold-seal font-black uppercase tracking-[0.3em] text-sm">Identidad & Propósito</h3>
              <h2 className="text-5xl md:text-7xl font-bold font-serif text-white tracking-tight leading-tight">
                Más que un equipo,<br />
                <span className="italic font-light">una garantía.</span>
              </h2>
            </div>
            
            <p className="text-white/60 text-xl leading-relaxed font-light">
              En S.A.S.A., fusionamos décadas de experiencia técnica en arquitectura e ingeniería con una visión humana y social. No solo inspeccionamos estructuras; validamos la calidad de vida de quienes las habitan.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 opacity-50">
             <p className="text-white font-serif text-2xl italic font-light">"Garantizamos la fe técnica."</p>
             <div className="w-20 h-[1px] bg-gold-seal mt-4 mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IdentidadEquipo;
