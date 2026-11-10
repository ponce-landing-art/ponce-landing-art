/**
 * ============================================================================
 * VISTA 2: GALERÍA DE OBRAS CON FILTROS Y ALMACÉN DE IMÁGENES — PONCE.ART
 * ============================================================================
 * ¿PARA QUÉ SIRVE ESTE ARCHIVO?
 * Muestra tu cuadrícula de obras con botones de filtro por categoría:
 *   "Todo" | "Retratos" | "Personas" | "Animales" | "Cultura" | "Paisajes"
 *
 * ¿CÓMO FUNCIONA EL ALMACÉN DE IMÁGENES EN HOSTINGER?
 * 1. Carga primero las obras definidas en `src/config/datosWeb.js`.
 * 2. Además, consulta automáticamente `./galeria/listar-fotos.php` (en Hostinger):
 *    si subiste fotos nuevas al Administrador de Archivos de Hostinger dentro de
 *    `galeria/retratos/`, `galeria/animales/`, etc., las agrega solas a la galería.
 * 3. Al hacer clic en cualquier obra, la abre en pantalla grande (Lightbox).
 */
import React, { useState, useEffect } from 'react';

export function Vista2GaleriaObras({ datos }) {
  const [categoriaActiva, setCategoriaActiva] = useState('Todo');
  const [listaObras, setListaObras] = useState(datos.obras || []);
  const [obraAmpliada, setObraAmpliada] = useState(null);

  // Cuando la página corre en Hostinger, verifica si hay fotos nuevas en las carpetas de `galeria/`
  useEffect(() => {
    fetch('./galeria/listar-fotos.php')
      .then((res) => {
        if (!res.ok) throw new Error('Modo local');
        return res.json();
      })
      .then((data) => {
        if (data?.automatico && Array.isArray(data.obras) && data.obras.length > 0) {
          // Combinamos las obras de datosWeb.js con cualquier foto nueva encontrada en las carpetas de Hostinger
          const imagenesExistentes = new Set((datos.obras || []).map((o) => o.imagen));
          const nuevasDeHostinger = data.obras.filter((o) => !imagenesExistentes.has(o.imagen));
          if (nuevasDeHostinger.length > 0) {
            setListaObras([...datos.obras, ...nuevasDeHostinger]);
          }
        }
      })
      .catch(() => {
        // En modo local (PC) usa directamente las obras de datosWeb.js
      });
  }, [datos.obras]);

  // Filtramos las obras según el botón que el visitante haya tocado
  const obrasFiltradas =
    categoriaActiva === 'Todo'
      ? listaObras
      : listaObras.filter(
          (obra) => obra.categoria.toLowerCase() === categoriaActiva.toLowerCase()
        );

  return (
    <section id="galeria" className="gallery-surface py-16 sm:py-20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cabecera de la Galería */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB]">
            {datos.titulo}
          </h2>
          <p className="text-sm sm:text-base text-[#B8B2A6]">
            {datos.subtitulo}
          </p>
        </div>

        {/* Botones de Filtro por Categoría */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {datos.categorias.map((cat) => {
            const activo = categoriaActiva === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoriaActiva(cat)}
                className={`rounded-full px-5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                  activo
                    ? 'btn-champagne scale-105'
                    : 'border border-[#D5B895]/30 bg-[#171615] text-[#D6D1C7] hover:border-[#D5B895]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cuadrícula de Obras (Grid Responsivo de 3 columnas como en tu diseño) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {obrasFiltradas.map((obra) => (
            <div
              key={obra.id}
              onClick={() => setObraAmpliada(obra)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-[#D5B895]/25 bg-[#121214] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#D5B895]"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#18181B]">
                <img
                  src={obra.imagen}
                  alt={obra.titulo}
                  className="h-full w-full object-cover object-center grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
                {/* Etiqueta sutil de categoría al pasar el mouse */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs uppercase tracking-widest text-[#D5B895]">
                    {obra.categoria}
                  </span>
                  <h3 className="font-serif text-lg text-white font-semibold">
                    {obra.titulo}
                  </h3>
                  <p className="text-xs text-[#D6D1C7]">{obra.tecnica}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox para ver la obra en grande al hacer clic */}
        {obraAmpliada && (
          <div
            onClick={() => setObraAmpliada(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl border border-[#D5B895]/40 bg-[#121214] p-4 sm:p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setObraAmpliada(null)}
                className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-sm text-[#D5B895] hover:bg-[#D5B895] hover:text-black transition"
              >
                ✕ Cerrar
              </button>
              <img
                src={obraAmpliada.imagen}
                alt={obraAmpliada.titulo}
                className="max-h-[70vh] w-full object-contain rounded-lg grayscale contrast-125"
              />
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 pt-3">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D5B895]">
                    {obraAmpliada.categoria}
                  </span>
                  <h3 className="font-serif text-xl text-[#F5F2EB]">
                    {obraAmpliada.titulo}
                  </h3>
                  <p className="text-xs text-[#A8A298]">{obraAmpliada.tecnica}</p>
                </div>
                <a
                  href="#cotizador"
                  onClick={() => setObraAmpliada(null)}
                  className="btn-champagne rounded-full px-5 py-2 text-xs font-semibold text-center"
                >
                  Cotizar una obra similar ›
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

