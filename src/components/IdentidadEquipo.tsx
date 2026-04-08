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
    <section id="identidad" className="relative py-32 px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
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
                  <div key={i} className="text-center lg:text-left">
                    <p className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] via-transparent to-transparent z-10 opacity-60" />
              <img 
                src="https://images.unsplash.com/photo-1600607687940-4e200350-9a3d?auto=format&fit=crop&q=80" 
                alt="SASA Team Vision" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <p className="text-white font-serif text-3xl italic font-light">"Garantizamos la fe t&eacute;cnica."</p>
                <div className="w-20 h-[1px] bg-gold-seal mt-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentidadEquipo;
