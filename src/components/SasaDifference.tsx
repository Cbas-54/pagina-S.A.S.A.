"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lightning,
  Wind,
  Detective,
} from "@phosphor-icons/react";

// --- HOISTING estático de datos ---
const DIFFERENCES_DATA = [
  {
    category: "Módulo de Auditoría",
    title: "Transparencia Técnico-Legal",
    desc: "Diagnóstico honesto, control de documentación de instalación eléctrica, gas y auditoría de seguridad y salud activa. El Sello S.A.S.A. convierte la información técnica en una ventaja para cerrar operaciones.",
    outcome: "Eliminación de la Incertidumbre",
    icon: <Detective size={32} weight="duotone" className="text-green-vibrant" />
  },
  {
    category: "Celeridad de Cierre",
    title: "Acelerador de Ciclo Comercial",
    desc: "Acortamos considerablemente los plazos de venta al despejar todas las dudas técnicas del comprador potencial desde el primer contacto. Menos objeciones significan mayor velocidad y menor presión sobre el precio final.",
    outcome: "Optimización del Tiempo de Venta",
    icon: <Lightning size={32} weight="duotone" className="text-green-vibrant" />
  },
  {
    category: "Respuesta Preventiva",
    title: "Marco Técnico de Respuesta Comercial",
    desc: "Un reporte profesional que responde de forma preventiva a las inquietudes comunes sobre seguridad y habitabilidad. Anticipamos objeciones y fortalecemos la percepción del activo.",
    outcome: "Incremento del Valor Percibido",
    icon: <Wind size={32} weight="duotone" className="text-blue-mid" />
  },
  {
    category: "Certificado Preventa Multilateral",
    title: "La Credibilidad como Activo Compartido",
    desc: "Reporte oficial de situación del inmueble, para que el vendedor traslade certeza y confianza al futuro comprador de lo que está adquiriendo. S.A.S.A es un beneficio para el vendedor.",
    outcome: "POTENCIAL AUMENTO EN LA CARTERA DE CLIENTES",
    icon: <ShieldCheck size={32} weight="duotone" className="text-blue-mid" />
  }
];

// --- HOISTING estático de decoraciones ---
const BackgroundDecorations = React.memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Degrade Superior (Sombra de entrada) */}
    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#020C1B] to-transparent opacity-30 z-10" />

    {/* Degrade Inferior (Modo Espejo) */}
    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#020C1B] to-transparent opacity-30 z-10" />

    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1400px] h-[500px] bg-white opacity-80 blur-[130px]" />
    <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-mid/[0.03] rounded-full blur-[150px]" />
  </div>
));
BackgroundDecorations.displayName = "BackgroundDecorations";

const AnimatedDivider = React.memo(() => (
  <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2.5px] -translate-x-1/2 pointer-events-none z-20">
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{ originY: 0 }}
      className="w-full h-full bg-gradient-to-b from-green-vibrant via-blue-mid to-blue-mid shadow-[0_0_15px_rgba(34,197,94,0.3)]"
    />
  </div>
));
AnimatedDivider.displayName = "AnimatedDivider";

const StickyHeader = React.memo(() => (
  <div className="relative z-10">
    <div className="lg:sticky lg:top-40 lg:self-start pt-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-8xl font-serif text-text-main font-bold leading-[1.05] tracking-tight mb-8"
      >
        La Diferencia <br />
        <span className="font-light italic text-blue-mid/80 text-6xl md:text-7xl">S.A.S.A.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-text-sec text-xl font-medium leading-relaxed max-w-md opacity-80"
      >
        Transformamos tres conceptos técnicos — seguridad, salud y accesibilidad — en argumentos de venta de alto impacto.
      </motion.p>
    </div>
  </div>
));
StickyHeader.displayName = "StickyHeader";

// --- MEMOIZATION ---
interface DifferenceItemProps {
  item: typeof DIFFERENCES_DATA[0];
}
const DifferenceItem = React.memo(({ item }: DifferenceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-8 rounded-3xl bg-white/40 border border-white/20 hover:border-green-vibrant/30 transition-all duration-500 overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm border border-white/40">
          {item.icon}
        </div>
        <span className="text-[10px] font-bold text-blue-mid tracking-[0.2em] uppercase opacity-60">
          {item.category}
        </span>
      </div>

      <h3 className="text-2xl md:text-3xl font-serif text-text-main font-bold mb-4 tracking-tight">
        {item.title}
      </h3>

      <p className="text-text-sec text-lg leading-relaxed mb-6 opacity-80">
        {item.desc}
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <span className="px-5 py-2 rounded-lg bg-green-vibrant/[0.06] border border-green-vibrant/10 text-[11px] font-bold text-green-vibrant uppercase tracking-widest">
          Resultado: {item.outcome}
        </span>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-green-vibrant/5 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
});
DifferenceItem.displayName = "DifferenceItem";

const SasaDifference = React.memo(() => {
  return (
    <section
      id="la-diferencia"
      className="relative pt-12 pb-8 md:pt-20 md:pb-12 px-6 bg-[#E2E8F0]"
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative">
        <AnimatedDivider />
        <StickyHeader />

        <div className="space-y-12 lg:space-y-16 z-10 pt-8 lg:pt-0">
          {DIFFERENCES_DATA.map((item) => (
            <DifferenceItem key={item.title} item={item} />
          ))}
        </div>
      </div>

      <BackgroundDecorations />
    </section>
  );
});

SasaDifference.displayName = "SasaDifference";

export default SasaDifference;
