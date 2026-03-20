"use client";

import React from "react";
import { motion } from "framer-motion";
import { WarningCircle, SmileySad, SealCheck, ArrowRight } from "@phosphor-icons/react";

const ProblemSolution = () => {
  return (
    <section className="py-24 px-6 bg-bg-alt border-y border-divider overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-6">
            La Incertidumbre es el Enemigo de la Venta
          </h2>
          <p className="text-text-sec text-lg max-w-2xl mx-auto leading-relaxed">
            Una propiedad sin documentación técnica verificable genera desconfianza,
            miedo a costos ocultos y negociaciones que reducen su valor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-10 bg-bg-main border border-divider rounded-sm hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-divider">
              <WarningCircle size={40} className="text-green-vibrant" weight="light" />
              <h3 className="text-2xl font-serif text-text-main">Inseguridad Técnica</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-green-vibrant mt-1">•</span>
                <p className="text-text-sec">Instalaciones eléctricas sin certificación y posibles riesgos de incendio ocultos.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-green-vibrant mt-1">•</span>
                <p className="text-text-sec">Falta de ventilación adecuada o deficiencias estructurales no declaradas.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="p-10 bg-bg-main border border-divider rounded-sm hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-divider">
              <SmileySad size={40} className="text-green-vibrant" weight="light" />
              <h3 className="text-2xl font-serif text-text-main">Miedo Emocional</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-green-vibrant mt-1">•</span>
                <p className="text-text-sec">El comprador teme cometer un error económico irreparable en su gran inversión.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-green-vibrant mt-1">•</span>
                <p className="text-text-sec">Desconfianza hacia la inmobiliaria por falta de garantías o transparencia.</p>
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
