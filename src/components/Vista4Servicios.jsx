/**
 * ============================================================================
 * VISTA 4: SECCIÓN "SERVICIOS" — PONCE.ART
 * ============================================================================
 * ¿PARA QUÉ SIRVE ESTE ARCHIVO?
 * Dibuja las 3 tarjetas de servicios (Retratos Personalizados, Retratos de
 * Mascotas, Obras por Encargo) con imagen superior y recuadro beige/champagne
 * inferior, idéntico a tu imagen de referencia.
 *
 * ¿DÓNDE SE EDITAN ESTOS SERVICIOS?
 * En `src/config/datosWeb.js` -> sección `servicios`.
 */
import React from 'react';

export function Vista4Servicios({ datos }) {
  return (
    <section id="servicios" className="gallery-surface py-16 sm:py-20 border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB]">
          {datos.titulo}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#B8B2A6] max-w-xl mx-auto">
          {datos.subtitulo}
        </p>

        {/* Las 3 tarjetas de servicios */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {datos.tarjetas.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl border border-[#D5B895]/40 bg-[#DFD3C3] text-[#1A1714] shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Foto superior en blanco y negro */}
              <div className="h-48 sm:h-52 w-full overflow-hidden bg-[#18181B]">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="h-full w-full object-cover object-center grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bloque inferior color champagne/arena como en tu boceto */}
              <div className="p-5 text-center space-y-2">
                <h3 className="font-serif text-xl font-bold leading-snug text-[#181512]">
                  {item.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A433B] leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

