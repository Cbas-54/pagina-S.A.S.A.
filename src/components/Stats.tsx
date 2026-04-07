"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendUp, Timer, CurrencyDollar, CheckCircle, ShieldWarning } from "@phosphor-icons/react";

// --- HOISTING estático de datos ---
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

// --- HOISTING de JSX Estático Decorativo (Background Waves & Glows) ---
const TopWaves = () => (
  <div className="absolute top-0 left-0 w-full z-[100] pointer-events-none translate-y-[-99.5%] overflow-visible">
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[220px] fill-black/10">
      <path d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,250.7C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[180px] fill-black/30">
      <path d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,245.3C672,245,768,171,864,154.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[140px] fill-black">
      <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
);

const BottomWaves = () => (
  <div className="absolute bottom-0 left-0 w-full z-[100] pointer-events-none translate-y-[98%] overflow-visible rotate-180">
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[100px] fill-black/10">
      <path d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,250.7C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[70px] fill-black/30">
      <path d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,245.3C672,245,768,171,864,154.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[40px] fill-black">
      <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
);

const BackgroundGlows = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
    <div 
      className="absolute top-[-10%] left-[-10%] w-full h-full opacity-[0.08]"
      style={{
        background: `radial-gradient(circle at 20% 30%, var(--gold-seal) 0%, transparent 50%)`
      }}
    />
    <div 
      className="absolute bottom-[-20%] right-[-10%] w-full h-full opacity-[0.05]"
      style={{
        background: `radial-gradient(circle at 80% 70%, var(--green-vibrant) 0%, transparent 50%)`
      }}
    />
  </div>
);

// --- MEMOIZATION de los items ---
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
      className="group relative flex flex-col items-start text-left p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-gold-seal/30 transition-all duration-700 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] cursor-default overflow-hidden"
    >
      <div className={`${stat.color} mb-6 p-4 rounded-2xl bg-white/[0.04] border border-white/5 group-hover:scale-110 group-hover:bg-gold-seal/10 transition-all duration-700 relative`}>
        <div className="absolute inset-0 bg-gold-seal/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
        <div className="relative z-10">{stat.icon}</div>
      </div>
      
      <h4 className="text-gold-seal font-bold text-[10px] uppercase tracking-widest mb-2 opacity-60">
        {stat.label}
      </h4>
      
      <h3 className="text-xl md:text-2xl font-bold font-serif text-white leading-tight mb-4 tracking-tight group-hover:text-gold-seal transition-colors duration-500 min-h-[3rem]">
        {stat.title}
      </h3>
      
      <div className="space-y-4 w-full">
        <p className="text-white/50 text-[13px] leading-relaxed font-light italic group-hover:text-white/80 transition-colors duration-500">
          {stat.sublabel}
        </p>
        <div className="pt-4 border-t border-white/5">
          <span className="text-[11px] font-bold text-white/30 uppercase tracking-tighter group-hover:text-gold-seal/60 transition-colors duration-500">
            {stat.outcome}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold-seal/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
});
StatCard.displayName = "StatCard";

const Stats = React.memo(() => {
  return (
    // Aplicamos content-visibility: auto para mejorar el rendimiento de inicialización
    <section 
      id="stats" 
      className="relative z-20 pt-12 pb-8 px-6 bg-black"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }}
    >
      <TopWaves />
      <BottomWaves />
      <BackgroundGlows />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16 cursor-default"
        >
          <h2 className="text-gold-seal font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Objetivos Estratégicos
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif font-light leading-[1.3] opacity-95">
            S.A.S.A. es un sistema profesional de certificación <span className="text-gold-seal italic underline decoration-gold-seal/30 underline-offset-8">pre venta</span> para viviendas multifamiliares, complejos de viviendas, complejos comerciales o de oficinas.
          </p>
          <p className="text-white/50 text-base md:text-lg mt-8 leading-relaxed max-w-3xl font-medium border-l-2 border-gold-seal/30 pl-8 italic">
            "Aportamos la transparencia técnica que el mercado inmobiliario exige, transformando la seguridad en un activo comercial."
          </p>
        </motion.div>

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
