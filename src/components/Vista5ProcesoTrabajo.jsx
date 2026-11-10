/**
 * ============================================================================
 * VISTA 5: SECCIÓN "PROCESO DE TRABAJO" — PONCE.ART
 * ============================================================================
 * ¿PARA QUÉ SIRVE ESTE ARCHIVO?
 * Muestra los 4 pasos numerados con círculos dorados champagne conectados por
 * flechas (1 Solicitud -> 2 Boceto -> 3 Desarrollo -> 4 Entrega).
 *
 * ¿DÓNDE SE EDITAN LOS TEXTOS DE LOS PASOS?
 * En `src/config/datosWeb.js` -> sección `proceso`.
 */
import React from 'react';
import { IconoWeb } from './IconosWeb';

export function Vista5ProcesoTrabajo({ datos }) {
  return (
    <section id="proceso" className="bg-[#111113] py-16 sm:py-20 border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB]">
          {datos.titulo}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#B8B2A6]">
          {datos.subtitulo}
        </p>

        {/* Los 4 pasos con flechas intermedias */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {datos.pasos.map((paso, index) => (
            <div key={paso.numero} className="relative flex flex-col items-center text-center">
              {/* Círculo color champagne con icono adentro */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-[#E5CCB0] to-[#C6A37B] text-[#181512] shadow-[0_0_25px_rgba(213,184,149,0.25)]">
                <IconoWeb nombre={paso.icono} className="w-8 h-8" />
              </div>

              {/* Flecha hacia la derecha en pantallas grandes (excepto en el último paso) */}
              {index < datos.pasos.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-5 text-[#D5B895]/60 text-xl">
                  →
                </div>
              )}

              {/* Título y descripción del paso */}
              <h3 className="mt-4 font-serif text-lg sm:text-xl font-semibold text-[#F5F2EB]">
                <span className="text-[#D5B895] mr-1">{paso.numero}</span>
                {paso.titulo}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#A8A298] max-w-[200px] leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

