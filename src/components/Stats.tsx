"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendUp, Timer, CurrencyDollar, CheckCircle } from "@phosphor-icons/react";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  color: string;
}

function AnimatedCounter({
  value,
  suffix,
  prefix = "",
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = (value / duration) * step;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const Stats = () => {
  const stats: StatItem[] = [
    {
      value: 70,
      suffix: "%",
      label: "Menos Objeciones",
      sublabel: "técnicas resueltas preventivamente",
      icon: <CheckCircle size={24} weight="duotone" />,
      color: "text-green-vibrant",
    },
    {
      value: 3,
      suffix: "x",
      label: "Más Velocidad",
      sublabel: "en el tiempo promedio de cierre",
      icon: <Timer size={24} weight="duotone" />,
      color: "text-blue-light",
    },
    {
      value: 15,
      suffix: "%",
      prefix: "+",
      label: "Valor Percibido",
      sublabel: "de venta superior al mercado",
      icon: <CurrencyDollar size={24} weight="duotone" />,
      color: "text-gold-seal",
    },
    {
      value: 100,
      suffix: "%",
      label: "Rigurosidad",
      sublabel: "certificada por matriculados",
      icon: <TrendUp size={24} weight="duotone" />,
      color: "text-green-mid",
    },
  ];

  return (
    <section id="stats" className="relative z-20 py-24 px-6 overflow-hidden">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 -z-10 bg-bg-main" />
      <div className="blob blob-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-divider/20 border border-divider/20 rounded-3xl overflow-hidden glass-premium shadow-2xl">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`${stat.color} mb-6 bg-white/[0.03] p-3 rounded-xl border border-white/[0.05] group-hover:scale-110 group-hover:border-blue-mid/30 transition-all duration-500`}>
                  {stat.icon}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold font-serif text-text-main leading-none mb-3 tracking-tighter">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </h3>
                
                <p className="text-text-main font-bold text-sm mb-1 uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="text-text-ter text-[11px] leading-relaxed max-w-[140px]">
                  {stat.sublabel}
                </p>
              </div>

              {/* Decorative accent boarder on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-mid/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
