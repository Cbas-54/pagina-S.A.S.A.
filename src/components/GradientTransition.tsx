import React from "react";

/**
 * GradientTransition - Simplificación Minimalista
 * Realiza un fundido suave y elegante entre el blanco (#F4F4F5) y el azul profundo (#020C1B).
 * Altura de 32vh para dar suficiente aire visual y peso arquitectónico.
 */
export default function GradientTransition() {
  return (
    <div
      className="relative w-full h-32 md:h-64 pointer-events-none"
      style={{
        background: "linear-gradient(to bottom, #F4F4F5 0%, #020C1B 100%)",
      }}
    />
  );
}
