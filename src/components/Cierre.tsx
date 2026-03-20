"use client";

import React from "react";
import { motion } from "framer-motion";

const Cierre = () => {
  return (
    <section className="py-40 px-6 bg-bg-main relative flex items-center justify-center overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Expanding top line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-0.5 bg-blue-struct mx-auto mb-16"
        />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-serif font-bold text-text-main leading-tight italic"
        >
          &ldquo;S.A.S.A. no es un servicio más. <br className="hidden md:block" />
          <span className="text-blue-light">Es una ventaja competitiva real.</span>&rdquo;
        </motion.h2>

        {/* Expanding bottom line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
          className="h-0.5 bg-blue-struct mx-auto mt-16"
        />
      </div>
      
    </section>
  );
};

export default Cierre;
