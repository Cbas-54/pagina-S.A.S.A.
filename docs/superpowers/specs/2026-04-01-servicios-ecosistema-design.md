# Diseño de Sección: Ecosistema de Servicios S.A.S.A. (Bento Grid)

## Visión General
Transformación de la sección "Servicios" de un catálogo de propiedades (Multifamiliares, Comerciales, Oficinas) a un **Ecosistema de Valor Agregado**. El objetivo es mostrar la profundidad del servicio SASA y cómo cada contrato incluye un paquete completo de soluciones técnicas, comerciales y estratégicas.

## Estructura Bento Grid (Jerarquía Visual)
Utilizaremos un diseño de rejilla (Bento Grid) para organizar los 9 puntos oficiales de la documentación en 4 módulos conceptuales de alto impacto:

### 1. Módulo: Auditoría Técnica Integral (Principal)
*   **Contenido**: Auditoría técnica completa + Checklist visual profesional.
*   **Visual**: Iconografía de plano técnico/arquitectura.
*   **Enfoque**: El rigor de los 48-72 ítems verificados.

### 2. Módulo: Certificación & Identidad
*   **Contenido**: Certificación oficial con Sello S.A.S.A. + Integración con identidad visual de la inmobiliaria.
*   **Visual**: El Sello SASA en un entorno de "marca blanca" o co-branding.
*   **Enfoque**: La autoridad del sello para el cierre de operaciones.

### 3. Módulo: Aceleración Comercial
*   **Contenido**: Brochure optimizado + Materiales de marketing (digital/impreso).
*   **Visual**: Mockups de brochures y posts de redes sociales.
*   **Enfoque**: La velocidad de venta mediante materiales listos para usar.

### 4. Módulo: Respaldo Estratégico & Capacitación
*   **Contenido**: Capacitación del equipo de ventas + Asesoramiento estratégico + Actualización permanente.
*   **Visual**: Iconos de equipo y leyes/normativas.
*   **Enfoque**: La tranquilidad legal y la alineación del equipo comercial.

## Estética y UX
*   **Fondo**: `bg-[#F4F4F5]` (Gris ceniza muy suave) para destacar las tarjetas blancas.
*   **Tarjetas**: `bg-white` con bordes redondeados (`rounded-[40px]`), sombras suaves y bordes de acento en `blue-mid` o `gold-seal`.
*   **Interactividad**: Animaciones de entrada escalonadas (`stagger`) mediante Framer Motion. Efectos de hover que revelan detalles técnicos.
*   **Tipografía**: Encabezados en Serifa (Playfair Display) y textos informativos en Inter (Sans-Serif).

## Fidelidad Documental
*   Se utilizarán las frases exactas de la sección **"Servicios Incluidos"** del archivo `PRESENTACION_S_A_S_A_vF.md`.

## Verificación
*   Responsividad completa (columna única en móviles).
*   Accesibilidad (contraste AA).
*   Integración fluida en `page.tsx` reemplazando el componente antiguo.
