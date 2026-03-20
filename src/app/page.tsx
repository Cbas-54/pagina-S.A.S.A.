import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pilares from "@/components/Pilares";
import ProblemSolution from "@/components/ProblemSolution";
import AuditDetails from "@/components/AuditDetails";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      {/* Navbar overlay */}
      <Navbar />
      
      {/* Section Content */}
      <div className="flex flex-col">
        <Hero />
        <ProblemSolution />
        <Pilares />
        <AuditDetails />
        <Contact />
      </div>

      {/* Footer / Credits */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/20 text-sm font-medium">
            © 2026 S.A.S.A. - Seguridad Antisiniestral, Salud y Accesibilidad.
          </div>
          <div className="flex items-center gap-6 text-white/40 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-accent transition-colors">Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Condiciones</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
