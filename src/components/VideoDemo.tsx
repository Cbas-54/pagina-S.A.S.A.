"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "@phosphor-icons/react";

const VideoDemo = () => {
    return (
        <section id="demo" className="relative py-24 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4"
                    >
                        S.A.S.A. <span className="font-light italic text-blue-mid">en Acción</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Descubra cómo nuestra metodología transforma la seguridad técnica en una herramienta estratégica de venta.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-200 border border-slate-300 shadow-2xl group cursor-pointer"
                >
                    {/* Placeholder Background (Simulated Video) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <Play size={80} weight="fill" className="text-white/40 group-hover:text-green-vibrant/60 group-hover:scale-110 transition-all duration-500 z-10" />
                    </div>

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                    <div className="absolute bottom-8 left-8 z-10">
                        <p className="text-white/60 text-sm font-medium tracking-widest uppercase">Video Demostrativo IA (Próximamente)</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoDemo;
