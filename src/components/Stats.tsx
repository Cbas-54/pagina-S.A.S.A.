"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendUp, Timer, CurrencyDollar, CheckCircle, ShieldWarning } from "@phosphor-icons/react";

const STATS_DATA = [
  {
    label: "Confianza",
    sublabel: "Aumentar la confianza del comprador.",
    icon: <CheckCircle size={32} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    label: "Eficacia",
    sublabel: "Reducir objeciones y acelerar la venta.",
    icon: <Timer size={32} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    label: "Reputación",
    sublabel: "Elevar el profesionalismo de la inmobiliaria.",
    icon: <TrendUp size={32} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    label: "Exclusividad",
    sublabel: "Generar exclusividad en la cartera.",
    icon: <CurrencyDollar size={32} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    label: "Valor Premium",
    sublabel: "Convertir cada propiedad en un producto de alta gama.",
    icon: <ShieldWarning size={32} weight="duotone" />,
    color: "text-gold-seal",
  },
];

const Stats = React.memo(() => {
  return (
    <section id="stats" className="relative z-20 pt-40 pb-48 px-6 bg-[#020C1B] overflow-hidden">
      {/* ── Top Transition: Smooth Gradient (Hero to Stats) ── */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      {/* ── Bottom Transition: Smooth Gradient (Stats to SasaDifference) ── */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      {/* Subtle Gradient Glows (Enhanced for Hierarchy) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-seal/10 rounded-full blur-[140px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-mid/10 rounded-full blur-[180px] translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-green-vibrant/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Intro Text alineado al documento oficial */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24 cursor-default"
        >
          <h2 className="text-gold-seal font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Objetivos Estratégicos
          </h2>
          <p className="text-2xl md:text-4xl text-white font-serif font-light leading-[1.3] opacity-95">
            S.A.S.A. es un sistema profesional de certificación <span className="text-gold-seal italic underline decoration-gold-seal/30 underline-offset-8">pre venta</span> para viviendas multifamiliares, complejos de viviendas, complejos comerciales o de oficinas.
          </p>
          <p className="text-white/50 text-base md:text-lg mt-8 leading-relaxed max-w-3xl font-medium border-l-2 border-gold-seal/30 pl-8 italic">
            "Aportamos la transparencia técnica que el mercado inmobiliario exige, transformando la seguridad en un activo comercial."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center text-center p-10 lg:p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 hover:border-gold-seal/40 transition-all duration-700 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] cursor-default overflow-hidden"
            >
              <div className={`${stat.color} mb-12 p-8 rounded-3xl bg-white/[0.05] border border-white/5 group-hover:scale-110 group-hover:bg-gold-seal/10 group-hover:border-gold-seal/20 transition-all duration-700 relative`}>
                <div className="absolute inset-0 bg-gold-seal/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                <div className="relative z-10">{stat.icon}</div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold font-serif text-white leading-none mb-10 tracking-tighter group-hover:text-gold-seal transition-colors duration-500">
                {stat.label}
              </h3>
              
              <div className="space-y-5">
                <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-[200px] font-medium italic group-hover:text-white/70 transition-colors duration-500 border-t border-white/5 pt-6">
                  {stat.sublabel}
                </p>
              </div>

              {/* Decorative Glass Light Leak */}
              <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-br from-gold-seal/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Stats.displayName = "Stats";

export default Stats;
