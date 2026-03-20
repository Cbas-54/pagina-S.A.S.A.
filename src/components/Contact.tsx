"use client";

import React from "react";
import { motion } from "framer-motion";
import { EnvelopeSimple, Phone, IdentificationBadge } from "@phosphor-icons/react";

const Contacto = () => {
  return (
    <section className="py-24 px-6 bg-bg-alt">
      <div className="max-w-5xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-6">
            Llevemos su Agencia al Siguiente Nivel
          </h2>
          <p className="text-text-sec text-lg mx-auto max-w-2xl">
            Conversemos sobre cómo certificar su portfolio y brindar una experiencia 
            de compra con garantías reales.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-blue border border-divider p-10 md:p-14 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 text-left"
        >
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-bg-main border border-divider flex items-center justify-center shrink-0">
                <IdentificationBadge size={24} className="text-green-vibrant" />
              </div>
              <div>
                <p className="text-text-main font-serif text-xl font-bold">Lic. Franco Fandiño</p>
                <p className="text-text-sec text-sm">Mat. COPIME IN-04710 · Mat. APRA 9534</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-bg-main border border-divider flex items-center justify-center shrink-0">
                <EnvelopeSimple size={24} className="text-green-vibrant" />
              </div>
              <div>
                <p className="text-text-sec text-sm block mb-1">Email Directo</p>
                <a href="mailto:info@sasa.com" className="text-text-main hover:text-blue-light transition-colors">
                  info@sasa.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-bg-main border border-divider flex items-center justify-center shrink-0">
                <Phone size={24} className="text-green-vibrant" />
              </div>
              <div>
                <p className="text-text-sec text-sm block mb-1">Línea Directa</p>
                <a href="tel:+541100000000" className="text-text-main hover:text-blue-light transition-colors">
                  +54 11 0000-0000
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end">
            <button className="w-full md:w-auto px-10 py-6 bg-green-vibrant text-bg-main font-bold text-lg rounded-none border border-transparent transition-all duration-300 hover:bg-transparent hover:text-green-vibrant hover:border-green-vibrant shadow-[0_0_30px_rgba(102,204,51,0.2)] hover:shadow-none">
              Solicitar Reunión
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contacto;
