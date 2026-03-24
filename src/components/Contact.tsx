"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  PaperPlaneTilt,
  CheckCircle,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-32 px-6 noise-overlay">
      <div className="absolute inset-0 -z-10 bg-bg-alt" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,51,102,0.2)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-green-vibrant/70 mb-4">
              Hablemos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-5 leading-snug">
              Lleve S.A.S.A.{" "}
              <span className="font-light italic text-blue-light/80">
                a su oficina
              </span>
            </h2>
            <p className="text-text-sec text-base leading-relaxed font-light mb-12 max-w-md">
              Agenda una reunión de 30 minutos para conocer cómo S.A.S.A. puede
              integrarse a la operación de su inmobiliaria.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: <EnvelopeSimple size={20} weight="duotone" />,
                  label: "contacto@sasa.com.ar",
                  href: "mailto:contacto@sasa.com.ar",
                },
                {
                  icon: <Phone size={20} weight="duotone" />,
                  label: "+54 11 4567-8900",
                  href: "tel:+541145678900",
                },
                {
                  icon: <MapPin size={20} weight="duotone" />,
                  label: "Buenos Aires, Argentina",
                  href: null,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-divider flex items-center justify-center text-blue-light shrink-0 group-hover:border-blue-mid/50 transition-colors">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-text-sec text-sm link-underline hover:text-text-main transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-text-sec text-sm">{item.label}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: <LinkedinLogo size={18} />, href: "#" },
                { icon: <InstagramLogo size={18} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-lg border border-divider bg-white/[0.02] flex items-center justify-center text-text-ter hover:text-text-main hover:border-blue-mid/40 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center p-12 glass-premium rounded-md text-center"
              >
                <CheckCircle
                  size={56}
                  weight="fill"
                  className="text-green-vibrant mb-5"
                />
                <h3 className="text-2xl font-serif text-text-main font-bold mb-3">
                  ¡Mensaje Recibido!
                </h3>
                <p className="text-text-sec text-sm font-light max-w-sm">
                  Nos pondremos en contacto con usted dentro de las próximas 24
                  horas hábiles para coordinar una reunión.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-9 glass-premium rounded-md space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-text-ter mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/[0.03] border border-divider rounded-sm text-text-main text-sm placeholder:text-text-ter/50 focus:outline-none focus:border-green-vibrant/50 focus:ring-1 focus:ring-green-vibrant/20 transition-all"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-text-ter mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-divider rounded-sm text-text-main text-sm placeholder:text-text-ter/50 focus:outline-none focus:border-green-vibrant/50 focus:ring-1 focus:ring-green-vibrant/20 transition-all"
                      placeholder="Inmobiliaria / Empresa"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-text-ter mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/[0.03] border border-divider rounded-sm text-text-main text-sm placeholder:text-text-ter/50 focus:outline-none focus:border-green-vibrant/50 focus:ring-1 focus:ring-green-vibrant/20 transition-all"
                    placeholder="email@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-text-ter mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-divider rounded-sm text-text-main text-sm placeholder:text-text-ter/50 focus:outline-none focus:border-green-vibrant/50 focus:ring-1 focus:ring-green-vibrant/20 transition-all"
                    placeholder="+54 11 xxxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-text-ter mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-divider rounded-sm text-text-main text-sm placeholder:text-text-ter/50 focus:outline-none focus:border-green-vibrant/50 focus:ring-1 focus:ring-green-vibrant/20 transition-all resize-none"
                    placeholder="¿Cuántas propiedades maneja mensualmente? ¿Qué modelo le interesa?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group w-full mt-2 px-6 py-4 font-bold text-bg-main bg-green-vibrant rounded-sm flex items-center justify-center gap-2 overflow-hidden relative transition-all hover:shadow-[0_8px_40px_rgba(102,204,51,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Enviar Mensaje
                    <PaperPlaneTilt
                      size={18}
                      weight="fill"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-vibrant to-green-mid opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
