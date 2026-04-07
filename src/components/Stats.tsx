"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendUp, Timer, CurrencyDollar, CheckCircle, ShieldWarning } from "@phosphor-icons/react";

// --- Datos de Objetivos (Siguen iguales) ---
const STATS_DATA = [
  {
    label: "Confianza",
    title: "Transparencia Técnica",
    sublabel: "Reducción activa de la incertidumbre.",
    outcome: "Certeza técnica certificada.",
    icon: <CheckCircle size={28} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    label: "Eficacia",
    title: "Acelerador de Cierres",
    sublabel: "Menos objeciones, mayor velocidad.",
    outcome: "+ Tasa de éxito comercial.",
    icon: <Timer size={28} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    label: "Reputación",
    title: "Posicionamiento Elite",
    sublabel: "Innovación y diferencial profesional.",
    outcome: "Liderazgo de mercado.",
    icon: <TrendUp size={28} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    label: "Exclusividad",
    title: "Diferencial de Cartera",
    sublabel: "Posicionamiento único del inmueble.",
    outcome: "Captaciones exclusivas.",
    icon: <CurrencyDollar size={28} weight="duotone" />,
    color: "text-gold-seal",
  },
  {
    label: "Valor Premium",
    title: "Incremento de Valor",
    sublabel: "Convierte cada m² en un activo premium.",
    outcome: "Mayor valor percibido.",
    icon: <ShieldWarning size={28} weight="duotone" />,
    color: "text-gold-seal",
  },
];

// --- Fondo: Brillos sutiles para el modo claro ---
const BackgroundGlows = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
    <div 
      className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.05]"
      style={{
        background: `radial-gradient(circle at center, var(--gold-seal) 0%, transparent 70%)`
      }}
    />
  </div>
);

// --- StatCard: Rediseño Light Glass ---
interface StatCardProps {
  stat: typeof STATS_DATA[0];
  index: number;
}
const StatCard = React.memo(({ stat, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-start text-left p-8 rounded-[2rem] 
                 bg-white/40 backdrop-blur-md border border-white 
                 hover:border-gold-seal/30 transition-all duration-700 
                 hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.1)] cursor-default overflow-hidden"
    >
      {/* Icon Icon Container */}
      <div className={`${stat.color} mb-6 p-4 rounded-2xl bg-slate-100/50 border border-slate-200/50 
                      group-hover:scale-110 group-hover:bg-gold-seal/10 transition-all duration-700 relative`}>
        <div className="relative z-10">{stat.icon}</div>
      </div>
      
      <h4 className="text-gold-seal font-bold text-[10px] uppercase tracking-widest mb-2 opacity-80">
        {stat.label}
      </h4>
      
      <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900 leading-tight mb-4 tracking-tight group-hover:text-gold-seal transition-colors duration-500 min-h-[3rem]">
        {stat.title}
      </h3>
      
      <div className="space-y-4 w-full">
        <p className="text-slate-600/80 text-[13px] leading-relaxed font-light italic group-hover:text-slate-900 transition-colors duration-500">
          {stat.sublabel}
        </p>
        <div className="pt-4 border-t border-slate-200/50">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter group-hover:text-gold-seal/60 transition-colors duration-500">
            {stat.outcome}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold-seal/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
});
StatCard.displayName = "StatCard";

const Stats = React.memo(() => {
  return (
    <section 
      id="stats" 
      className="relative z-20 pt-16 pb-24 px-6 bg-transparent"
    >
      <BackgroundGlows />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16 cursor-default"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-gold-seal font-bold text-xs uppercase tracking-[0.4em]">
              Objetivos Estratégicos
            </h2>
            <div className="h-[1px] flex-grow bg-gold-seal/20" />
          </div>

          <p className="text-3xl md:text-4xl lg:text-5xl text-slate-900 font-serif font-light leading-[1.2] tracking-tight">
            S.A.S.A. es un sistema profesional de certificación <span className="text-gold-seal italic font-medium underline decoration-gold-seal/30 underline-offset-[12px]">PRE VENTA</span> para activos inmobiliarios de alta gama.
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl font-light italic border-l-4 border-gold-seal/40 pl-8">
              "Aportamos la transparencia técnica que el mercado inmobiliario exige, transformando la seguridad en un activo comercial de alto valor."
            </p>
          </div>
        </motion.div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-6">
          {STATS_DATA.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

Stats.displayName = "Stats";

export default Stats;
