import React from "react";
import LandingWrapper from "@/components/LandingWrapper";

export const metadata = {
  title: "SASA | Certificación Técnica Inmobiliaria",
  description: "Sistema profesional de certificación preventiva para viviendas multifamiliares y complejos.",
};

export default function Home() {
  return (
    <main className="bg-bg-main text-text-main font-sans min-h-screen selection:bg-blue-mid/10">
      <LandingWrapper />
    </main>
  );
}
