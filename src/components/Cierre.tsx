"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

const Cierre = React.memo(() => {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden noise-overlay">
      {/* Dramatic gradients */}
      <div className="absolute inset-0 -z-10 bg-bg-main" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(0,51,102,0.25)_0%,transparent_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(102,204,51,0.05)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="w-full h-px bg-gradient-to-r from-transparent via-blue-mid/30 to-transparent mb-14 origin-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <Quotes
            size={40}
            weight="fill"
            className="text-blue-mid/30 mb-8"
          />

          <blockquote className="text-3xl md:text-5xl font-serif font-light text-text-main leading-[1.3] italic mb-10">
            &ldquo;No vendemos <span className="text-gradient-green font-medium not-italic">certificaciones</span>.
            <br />
            Eliminamos la <span className="text-text-sec">incertidumbre</span>
            <br />
            que frena la <span className="text-gradient-gold font-medium not-italic">venta</span>.&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-gold-seal/20 bg-gold-seal/5 flex items-center justify-center">
              <span className="text-gold-seal text-sm font-serif font-bold">S</span>
            </div>
            <div className="text-left">
              <p className="text-text-main text-sm font-bold">
                Equipo S.A.S.A.
              </p>
              <p className="text-text-ter text-xs">
                Seguridad Antisiniestral, Salud y Accesibilidad
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-blue-mid/30 to-transparent mt-14 origin-center"
        />
      </div>
    </section>
  );
});

Cierre.displayName = "Cierre";

export default Cierre;
