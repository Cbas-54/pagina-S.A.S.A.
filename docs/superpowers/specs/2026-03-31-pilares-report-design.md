# Diseño de Sección: Pilares S.A.S.A. (Estilo Reporte Pericial)

## Visión General
Rediseño de la sección "Pilares" de la landing page de S.A.S.A. para pasar de una estética puramente digital/tecnológica a una identidad de "Reporte Pericial Profesional". El objetivo es transmitir máxima autoridad técnica y realismo mediante un diseño limpio, tipografía editorial y elementos de auditoría física.

## Requisitos de Diseño (Aprobados)
*   **Estética**: Informe Profesional / Editorial de Arquitectura.
*   **Paleta de Colores**: 
    *   Fondos claros (`bg-white` / `bg-[#fdfdfd]`) para las tarjetas.
    *   Cabecera de alto contraste en Azul Profundo (`bg-[#020C1B]`).
    *   Acentos en Verde Vibrante (`text-[#059669]`).
*   **Tipografía**: 
    *   Títulos en Serifa elegante (fuente existente en el sitio).
    *   Etiquetas y detalles técnicos en Sans-Serif / Monospaced sutil.
*   **Iconografía**: Recuperar iconos originales de Phosphor (`ShieldCheck`, `Heart`, `Wheelchair`).
*   **Elementos Visuales**: 
    *   Marcas de agua técnicas (números o ejes de escala).
    *   Bordes superiores gruesos (accent borders).
    *   Efecto de checklist (`[ ]`) para los bullets.

## Componentes y Estructura

### Contenedor Principal
*   ID: `pilares`
*   Padding vertical generoso (`py-32` o superior).
*   Fondo limpio con una rejilla técnica muy tenue de fondo.

### Cabecera (Header)
*   Bloque oscuro (`bg-[#020C1B]`) con bordes redondeados pronunciados.
*   Texto principal en Serifa blanca.
*   Subtítulos en Azul Claro / Cian sutil.

### Tarjetas de Pilares
*   **Layout**: Grid de 3 columnas.
*   **Estilo**: 
    *   Fondo blanco puro.
    *   Borde superior de 8px con el color del pilar.
    *   Sombra suave (`shadow-sm`) que se intensifica en hover (`hover:shadow-2xl`).
    *   Esquinas redondeadas (`rounded-xl`).
*   **Contenidos**:
    *   Caja de icono dedicada con borde y fondo suave.
    *   Título del pilar en Serifa.
    *   Puntos de auditoría presentados como checklist (`→` o `[ ]`).

## Verificación
*   Coherencia con el diseño del resto de la página.
*   Responsividad en móviles (apilado vertical).
*   Accesibilidad (contraste de texto).
