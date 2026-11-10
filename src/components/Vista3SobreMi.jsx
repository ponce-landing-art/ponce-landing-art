/**
 * ============================================================================
 * VISTA 3: SECCIÓN "SOBRE MÍ" — PONCE.ART
 * ============================================================================
 * ¿PARA QUÉ SIRVE ESTE ARCHIVO?
 * Muestra tu fotografía como artista, tu biografía y las 3 características:
 * Especialidad, Ubicación e Inspiración.
 *
 * ¿DÓNDE SE EDITA EL TEXTO O TU FOTO PERSONAL?
 * En `src/config/datosWeb.js` -> sección `sobreMi`.
 */
import React from 'react';
import { IconoWeb } from './IconosWeb';

export function Vista3SobreMi({ datos }) {
  return (
    <section id="sobre-mi" className="bg-[#0E0E10] py-16 sm:py-20 border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* Columna Izquierda: Foto del Artista */}
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl border border-[#D5B895]/30 bg-[#141416] shadow-2xl">
              <img
                src={datos.fotoArtista}
                alt="Jelvis J. Ponce E. - Artista"
                className="h-72 sm:h-80 w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Columna Derecha: Biografía y Detalles */}
          <div className="md:col-span-7 space-y-5 text-left">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB]">
              {datos.titulo}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#C8C2B6]">
              {datos.biografia}
            </p>

            <div className="space-y-3 pt-2 border-t border-white/10">
              {datos.detalles.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base">
                  <span className="text-[#D5B895] shrink-0">
                    <IconoWeb nombre={item.icono} className="w-5 h-5" />
                  </span>
                  <p className="text-[#E5E0D5]">
                    <strong className="font-semibold text-[#F5F2EB]">{item.etiqueta}</strong>{' '}
                    <span className="text-[#B8B2A6]">{item.valor}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

