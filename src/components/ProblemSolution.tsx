"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle, Warning, SealCheck } from "@phosphor-icons/react";

const ProblemSolution = () => {
  return (
    <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-lg bg-red-500/10 text-red-500 text-sm font-bold uppercase tracking-widest">
            <Warning size={18} weight="duotone" />
            El Problema
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            La Incertidumbre es el <br />
            Enemigo de la Venta
          </h2>
          <p className="text-white/50 text-lg mb-8 leading-relaxed">
            El comprador de hoy es escéptico. Una propiedad sin documentación técnica verificable genera desconfianza, 
            miedo a costos ocultos y negociaciones interminables que reducen el valor percibido.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 glass rounded-2xl border-red-500/20">
              <XCircle size={24} weight="duotone" className="text-red-500 mt-1" />
              <div>
                <p className="text-white font-bold mb-1">Inseguridad Técnica</p>
                <p className="text-white/40 text-sm">Instalaciones sin certificar, riesgos ocultos de incendio o gas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 glass rounded-2xl border-red-500/20">
              <XCircle size={24} weight="duotone" className="text-red-500 mt-1" />
              <div>
                <p className="text-white font-bold mb-1">Miedo Emocional</p>
                <p className="text-white/40 text-sm">El comprador teme cometer un error irreparable en su inversión.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-lg bg-accent/10 text-accent text-sm font-bold uppercase tracking-widest">
            <SealCheck size={18} weight="duotone" />
            La Solución S.A.S.A.
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Convertimos la Duda <br />
            en Confianza Absoluta
          </h2>
          <p className="text-white/50 text-lg mb-8 leading-relaxed">
            Nuestro sello garantiza que la propiedad ha sido auditada bajo estándares técnicos rigurosos. 
            No solo vendes un inmueble, vendes un producto certificado, auditable y seguro.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 glass rounded-2xl border-accent/20">
              <CheckCircle size={24} weight="duotone" className="text-accent mt-1" />
              <div>
                <p className="text-white font-bold mb-1">Sello de Calidad S.A.S.A.</p>
                <p className="text-white/40 text-sm">Validación por profesionales matriculados en Seguridad y Salud.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 glass rounded-2xl border-accent/20">
              <CheckCircle size={24} weight="duotone" className="text-accent mt-1" />
              <div>
                <p className="text-white font-bold mb-1">Cierre de Venta Acelerado</p>
                <p className="text-white/40 text-sm">Elimina objeciones técnicas antes de que aparezcan.</p>
              </div>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSolution;
