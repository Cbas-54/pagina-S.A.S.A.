"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Warning, CheckCircle, ShieldCheck, FileText, ClipboardText, Stamp } from "@phosphor-icons/react";

const ProblemSolution = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const riskMatrix = [
    {
      id: "R-01",
      risk: "Instalaciones eléctricas sin certificación — riesgo de incendio oculto.",
      resolution: "Certificación técnica firmada por profesional matriculado.",
      status: "Certificado"
    },
    {
      id: "R-02",
      risk: "Falta de ventilación: habitabilidad comprometida, nunca declarada.",
      resolution: "Checklist visual que el comprador puede leer y confiar.",
      status: "Validado"
    },
    {
      id: "R-03",
      risk: "Comprador teme cometer un error económico irreparable.",
      resolution: "Eliminación de objeciones mediante auditoría externa.",
      status: "Blindado"
    },
    {
      id: "R-04",
      risk: "Desconfianza hacia la inmobiliaria por falta de garantías.",
      resolution: "Posicionamiento como referente de calidad técnica.",
      status: "Garantizado"
    },
    {
      id: "R-05",
      risk: "Negociaciones que reducen el precio por inseguridad técnica.",
      resolution: "Cobro del precio justo — confianza absoluta del inversor.",
      status: "Efectivo"
    }
  ];

  return (
    <section id="problema" className="relative py-32 md:py-48 px-6 bg-slate-50 overflow-hidden">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.2]" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-blue-mid/20 bg-white mb-6 shadow-sm"
          >
            <ClipboardText size={14} className="text-blue-mid" />
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-blue-mid">
              Protocolo de Auditoría v2.1
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-text-main font-light leading-tight mb-6">
            Matriz de <span className="font-bold">Riesgo & Certificación</span>
          </h2>
          <p className="text-text-sec max-w-2xl mx-auto text-sm md:text-base font-sans">
            Mapeamos los puntos críticos que paralizan el cierre y los transformamos en certezas técnicas inobjetables.
          </p>
        </div>

        {/* Technical Ledger / Form Layout */}
        <div className="bg-white border border-divider-strong shadow-[0_30px_70px_rgba(15,23,42,0.08)] rounded-[4px] overflow-hidden">
          {/* Header of the "Document" */}
          <div className="grid grid-cols-12 border-b border-divider bg-slate-50/50 py-4 px-6 gap-4 text-[10px] font-mono font-bold uppercase tracking-widest text-text-ter">
            <div className="col-span-1">ID</div>
            <div className="col-span-5">Riesgo / Incertidumbre Detectada</div>
            <div className="col-span-4">Resolución Técnica S.A.S.A.</div>
            <div className="col-span-2 text-right">Efecto</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-divider">
            {riskMatrix.map((item, idx) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="grid grid-cols-12 gap-4 py-8 px-6 group transition-colors hover:bg-blue-mid/[0.01] items-center"
              >
                {/* ID Column */}
                <div className="col-span-1 text-xs font-mono text-blue-mid font-black">
                  {item.id}
                </div>

                {/* Risk Column */}
                <div className="col-span-5">
                  <p className="text-text-sec text-[15px] leading-relaxed pr-8">
                    {item.risk}
                  </p>
                </div>

                {/* Resolution Column */}
                <div className="col-span-4 relative">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-blue-mid/20 flex items-center justify-center mt-0.5 shrink-0 bg-white group-hover:border-blue-mid/50 transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${hoveredIdx === idx ? 'bg-blue-mid scale-100' : 'bg-transparent scale-50'}`} />
                    </div>
                    <p className={`text-[15px] leading-relaxed transition-all duration-500 ${hoveredIdx === idx ? 'text-blue-mid font-bold' : 'text-text-ter'}`}>
                      {item.resolution}
                    </p>
                  </div>
                </div>

                {/* Status/Badge Column */}
                <div className="col-span-2 text-right flex justify-end items-center gap-3">
                  <span className={`text-[10px] font-mono font-black uppercase px-2 py-1 rounded-sm border transition-all duration-500 ${
                    hoveredIdx === idx 
                      ? 'bg-blue-mid text-white border-blue-mid' 
                      : 'bg-slate-100 text-text-ter border-divider'
                  }`}>
                    {item.status}
                  </span>
                  <div className={`transition-all duration-700 ${hoveredIdx === idx ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-12 scale-90'}`}>
                    <ShieldCheck size={24} className="text-blue-mid" weight="fill" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer of the "Document" */}
          <div className="bg-slate-50 p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-divider">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-mid/5 flex items-center justify-center border border-blue-mid/10">
                <Stamp size={28} className="text-blue-mid opacity-40" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold text-text-main">FIRMA DIGITAL S.A.S.A.</p>
                <p className="text-[10px] font-mono text-text-ter">Validación de Activo Inmobiliario</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-text-ter text-xs font-serif italic mb-1">
                "La seguridad técnica es la base de toda negociación exitosa."
              </p>
              <div className="h-px w-24 bg-divider-strong ml-auto" />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-mid/[0.03] rounded-full blur-[100px] -z-10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-vibrant/[0.03] rounded-full blur-[120px] -z-10" />
      </div>
    </section>
  );
};

export default ProblemSolution;
