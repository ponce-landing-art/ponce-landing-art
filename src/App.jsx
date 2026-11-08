import React from 'react';
import { datosArtista } from './config/datosArtista';
import { IconoRedSocial, OrnamentoLateral } from './components/IconosRedes';

export default function App() {
  // Solo mostramos las redes que tengan `activo: true` en src/config/datosArtista.js
  const redesActivas = datosArtista.redesSociales.filter((red) => red.activo);

  return (
    <div className="min-h-screen bg-[#070708] text-[#F5F2EB] flex items-center justify-center px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* Iluminación ambiental dorada de fondo */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[380px] w-[520px] rounded-full bg-[#D4AF37]/[0.08] blur-[120px]" />

      {/* Tarjeta Principal Responsiva (Exactamente como la captura que elegiste) */}
      <main className="relative z-10 w-full max-w-[440px] sm:max-w-[500px] rounded-[28px] border-[2px] border-[#2A2823] bg-[#0B0B0C] px-5 py-8 sm:px-8 sm:py-10 shadow-[0_0_55px_rgba(0,0,0,0.9)]">
        {/* Brillo suave interno superior */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-52 w-72 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

        {/* ================================================================
            CABECERA DEL ARTISTA (Ponce.Art)
           ================================================================ */}
        <header className="relative z-10 text-center space-y-2.5">
          {/* Monograma circular PA */}
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-gradient-to-b from-[#1C1B18] to-[#0D0D0F] gold-border-glow">
            <span className="font-serif text-xl font-bold tracking-wider gold-gradient-text">
              {datosArtista.iniciales}
            </span>
          </div>

          {/* Logo Ponce.Art con ornamentos dorados */}
          <div className="flex items-center justify-center gap-2.5">
            <OrnamentoLateral className="w-12 sm:w-14 h-5 text-[#D4AF37]" />
            <h1 className="font-serif italic text-3xl sm:text-4xl text-[#F5F2EB]">
              Ponce.<span className="text-[#D4AF37]">Art</span>
            </h1>
            <OrnamentoLateral invertido className="w-12 sm:w-14 h-5 text-[#D4AF37]" />
          </div>

          {/* Nombre y especialidad */}
          <div className="space-y-1 pt-0.5">
            <p className="font-serif text-base sm:text-lg tracking-wide text-[#F3E5AB]">
              {datosArtista.nombreCompleto}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-[#A39E93]">
              {datosArtista.especialidad}
            </p>
          </div>
        </header>

        {/* ================================================================
            SECCIÓN DE PERFILES Y REDES SOCIALES
           ================================================================ */}
        <section aria-label="Redes Sociales Oficiales" className="relative z-10 mt-7 space-y-3.5">
          {/* Divisor CONECTA CON MI ARTE */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <h2 className="font-serif text-xs sm:text-sm uppercase tracking-[0.22em] text-[#D4AF37]">
              {datosArtista.tituloSeccionRedes}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>

          {/* Lista de tarjetas de redes sociales */}
          <div className="grid grid-cols-1 gap-3">
            {redesActivas.map((red) => (
              <a
                key={red.id}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group luxury-card flex items-center gap-3.5 rounded-xl p-4 border transition-all duration-300 hover:-translate-y-0.5 ${
                  red.destacado
                    ? 'border-[#D4AF37]/45 gold-border-glow hover:border-[#F3E5AB]'
                    : 'border-white/15 hover:border-[#D4AF37]/60'
                }`}
              >
                {/* Cuadro de icono dorado */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C]">
                  <IconoRedSocial tipo={red.icono} className="w-5 h-5" />
                </div>

                {/* Textos del perfil */}
                <div className="min-w-0 flex-1">
                  <div className="font-serif text-base sm:text-lg font-semibold text-[#F5F2EB] group-hover:text-[#F3E5AB] transition-colors leading-snug">
                    {red.nombre}
                  </div>
                  <div className="text-xs text-[#D4AF37] font-medium">
                    {red.usuario}
                  </div>
                  {red.descripcion && (
                    <div className="text-xs text-[#A39E93] truncate mt-0.5">
                      {red.descripcion}
                    </div>
                  )}
                </div>

                {/* Flecha diagonal */}
                <div className="text-[#D4AF37]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F3E5AB]">
                  ↗
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
