/**
 * ============================================================================
 * VISTA 1: BARRA DE NAVEGACIÓN Y PORTADA PRINCIPAL (HERO) — PONCE.ART
 * ============================================================================
 * ¿PARA QUÉ SIRVE ESTE ARCHIVO?
 * Dibuja la primera pantalla que ve el visitante:
 *   1. Menú superior fijo con tu marca "JELVIS J. PONCE E." y enlaces.
 *   2. Portada con tu nombre caligráfico, especialidad y retrato principal.
 *   3. Barra inferior con los 4 sellos de confianza (Retratos, Grafito, Originales, Envíos).
 *
 * ¿DÓNDE SE CAMBIAN LOS TEXTOS O LA FOTO DE PORTADA?
 * En `src/config/datosWeb.js` -> sección `artista`.
 */
import React, { useState } from 'react';
import { IconoWeb } from './IconosWeb';

export function Vista1HeroInicio({ datos }) {
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

  const enlacesMenu = [
    { nombre: 'Inicio', href: '#inicio' },
    { nombre: 'Galería', href: '#galeria' },
    { nombre: 'Sobre mí', href: '#sobre-mi' },
    { nombre: 'Servicios', href: '#servicios' },
    { nombre: 'Cotizar Obra', href: '#cotizador' },
    { nombre: 'Contacto', href: '#contacto' },
  ];

  return (
    <div id="inicio" className="relative bg-[#0B0B0C] overflow-hidden border-b border-white/10">
      {/* ====================================================================
          BARRA DE NAVEGACIÓN SUPERIOR FIJA
         ==================================================================== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0C]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          {/* Logo Izquierdo: Monograma PA + Nombre */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <span className="font-script text-3xl sm:text-4xl text-[#D5B895] leading-none">
              {datos.monograma}
            </span>
            <div className="border-l border-white/15 pl-3">
              <div className="font-serif text-base sm:text-lg font-semibold tracking-[0.18em] text-[#F5F2EB] group-hover:text-[#D5B895] transition">
                {datos.marcaSuperior}
              </div>
              <div className="text-xs tracking-[0.14em] text-[#A8A298]">
                {datos.subtituloMarca}
              </div>
            </div>
          </a>

          {/* Enlaces Centrales (Escritorio) */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-[#D6D1C7]">
            {enlacesMenu.map((item) => (
              <a
                key={item.nombre}
                href={item.href}
                className="hover:text-[#D5B895] transition-colors tracking-wide"
              >
                {item.nombre}
              </a>
            ))}
          </nav>

          {/* Botón Derecho: Solicitar un Retrato */}
          <div className="hidden sm:block">
            <a
              href="#cotizador"
              className="btn-champagne inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-transform hover:scale-[1.02]"
            >
              <IconoWeb nombre="lapiz" className="w-4 h-4" />
              <span>{datos.textoBotonMenu}</span>
            </a>
          </div>

          {/* Botón Hamburguesa (Celular) */}
          <button
            type="button"
            onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
            className="md:hidden rounded-lg border border-white/15 p-2 text-[#D5B895]"
            aria-label="Abrir menú"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuMovilAbierto ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desplegable en Celular */}
        {menuMovilAbierto && (
          <div className="md:hidden border-t border-white/10 bg-[#111113] px-4 py-4 space-y-3">
            {enlacesMenu.map((item) => (
              <a
                key={item.nombre}
                href={item.href}
                onClick={() => setMenuMovilAbierto(false)}
                className="block py-1.5 text-sm text-[#E5E0D5] hover:text-[#D5B895]"
              >
                {item.nombre}
              </a>
            ))}
            <a
              href="#cotizador"
              onClick={() => setMenuMovilAbierto(false)}
              className="btn-champagne mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium"
            >
              <IconoWeb nombre="lapiz" className="w-4 h-4" />
              <span>{datos.textoBotonMenu}</span>
            </a>
          </div>
        )}
      </header>

      {/* ====================================================================
          PORTADA PRINCIPAL (HERO)
         ==================================================================== */}
      <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Columna Izquierda: Textos de Presentación */}
          <div className="lg:col-span-6 space-y-5 z-10 text-left">
            <p className="font-serif text-2xl sm:text-3xl text-[#E5E0D5]">
              {datos.saludoHero}
            </p>

            <h1 className="font-script text-5xl sm:text-7xl text-[#F5F2EB] leading-tight drop-shadow">
              {datos.nombreArtistico}
            </h1>

            <h2 className="font-serif text-xl sm:text-2xl text-[#D5B895] leading-snug max-w-md">
              {datos.tituloEspecialidad}
            </h2>

            {/* Línea divisoria dorada */}
            <div className="h-px w-20 bg-[#D5B895]/60" />

            <p className="text-sm sm:text-base text-[#B8B2A6] max-w-md leading-relaxed">
              {datos.fraseInspiradora}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#galeria"
                className="btn-champagne inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm sm:text-base font-medium transition-transform hover:scale-105"
              >
                <span>{datos.textoBotonHero}</span>
                <span>›</span>
              </a>
              <a
                href="#cotizador"
                className="inline-flex items-center gap-2 rounded-full border border-[#D5B895]/40 bg-white/[0.03] px-6 py-3 text-sm sm:text-base text-[#E5E0D5] hover:border-[#D5B895] transition"
              >
                <span>Cotizar Obra</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Obra Hiperrealista Fundida con el Fondo Oscuro */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
              <img
                src={datos.imagenPortada}
                alt={datos.nombreArtistico}
                className="w-full h-[380px] sm:h-[440px] object-cover object-center grayscale contrast-125"
              />
              {/* Difuminado suave en los bordes para integrarse con la galería oscura */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-transparent to-transparent opacity-65" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* ==================================================================
            BARRA INFERIOR DE 4 SELLOS DE GARANTÍA
           ================================================================== */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
          {datos.sellosGarantia.map((sello, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2.5 border-r last:border-r-0 border-white/10 px-2"
            >
              <div className="text-[#D5B895]">
                <IconoWeb nombre={sello.icono} className="w-7 h-7" />
              </div>
              <p className="font-serif text-sm sm:text-base text-[#E5E0D5] whitespace-pre-line leading-snug">
                {sello.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

