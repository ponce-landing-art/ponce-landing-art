/**
 * ============================================================================
 * VISTA 6: COTIZADOR DINÁMICO EN UNA SOLA VISTA — PONCE.ART
 * ============================================================================
 * ¿PARA QUÉ SIRVE ESTE ARCHIVO?
 * Permite que el cliente elija en una sola vista (sin pasar páginas):
 *   1. Tamaño de la obra
 *   2. Técnica (Grafito o Color)
 *   3. Estilo (Realismo o Hiperrealismo)
 *   4. Cantidad de personas / mascotas / objetos
 *
 * Cuando el cliente presiona el botón "Cotizar Obra", se despliega justo abajo
 * el valor aproximado, los detalles incluidos y el botón para enviarte esa
 * cotización lista a tu WhatsApp.
 *
 * ¿DÓNDE SE CAMBIAN LOS PRECIOS Y MEDIDAS?
 * En `src/config/datosWeb.js` -> sección `cotizador`.
 */
import React, { useState } from 'react';
import { IconoWeb } from './IconosWeb';

export function Vista6Cotizador({ datos, contacto }) {
  // Estados de los 4 filtros seleccionados por el cliente
  const [tamanoId, setTamanoId] = useState(datos.tamanos[1]?.id || datos.tamanos[0]?.id);
  const [tecnicaId, setTecnicaId] = useState(datos.tecnicas[0]?.id);
  const [estiloId, setEstiloId] = useState(datos.estilos[1]?.id || datos.estilos[0]?.id);
  const [sujetoId, setSujetoId] = useState(datos.sujetos[0]?.id);

  // Controla si ya se presionó el botón "Cotizar" para desplegar el resultado
  const [cotizacionVisible, setCotizacionVisible] = useState(false);

  // Buscamos los objetos seleccionados actualmente
  const tamanoActual = datos.tamanos.find((t) => t.id === tamanoId) || datos.tamanos[0];
  const tecnicaActual = datos.tecnicas.find((t) => t.id === tecnicaId) || datos.tecnicas[0];
  const estiloActual = datos.estilos.find((e) => e.id === estiloId) || datos.estilos[0];
  const sujetoActual = datos.sujetos.find((s) => s.id === sujetoId) || datos.sujetos[0];

  // Cálculo matemático del precio aproximado según la configuración en datosWeb.js
  const baseConSujetos = tamanoActual.precioBase + sujetoActual.costoExtra;
  const recargoTecnica = baseConSujetos * (tecnicaActual.recargoPorcentaje / 100);
  const recargoEstilo = baseConSujetos * (estiloActual.recargoPorcentaje / 100);
  const precioEstimado = Math.round(baseConSujetos + recargoTecnica + recargoEstilo);

  // Armamos el mensaje automático para WhatsApp por si el cliente quiere encargarlo
  const mensajeWhatsApp = encodeURIComponent(
    `Hola Jelvis (Ponce.Art), hice una cotización en tu página web y me gustaría consultar por esta obra:\n\n` +
      `• Tamaño: ${tamanoActual.nombre} (${tamanoActual.medidas})\n` +
      `• Técnica: ${tecnicaActual.nombre}\n` +
      `• Acabado: ${estiloActual.nombre}\n` +
      `• Cantidad: ${sujetoActual.etiqueta}\n` +
      `• Valor aproximado en web: $${precioEstimado} ${datos.moneda}\n\n` +
      `Te envío mi foto de referencia para confirmar disponibilidad.`
  );

  return (
    <section id="cotizador" className="gallery-surface py-16 sm:py-20 border-b border-white/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Cabecera del Cotizador */}
        <div className="text-center space-y-2.5">
          <span className="inline-block rounded-full border border-[#D5B895]/40 bg-[#D5B895]/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#D5B895]">
            Calculadora Interactiva
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB]">
            {datos.titulo}
          </h2>
          <p className="text-sm sm:text-base text-[#B8B2A6] max-w-2xl mx-auto">
            {datos.subtitulo}
          </p>
        </div>

        {/* Tarjeta única con TODOS los filtros en una sola vista */}
        <div className="mt-10 dark-luxury-card rounded-2xl border border-[#D5B895]/30 p-6 sm:p-8 shadow-2xl space-y-7">
          {/* FILTRO 1: TAMAÑO DE LA OBRA */}
          <div className="space-y-3">
            <label className="block font-serif text-lg text-[#F5F2EB]">
              1. Elige el Tamaño de la Obra:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {datos.tamanos.map((t) => {
                const seleccionado = t.id === tamanoId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTamanoId(t.id)}
                    className={`rounded-xl p-3.5 text-left border transition-all ${
                      seleccionado
                        ? 'border-[#D5B895] bg-[#D5B895]/15 shadow-[0_0_20px_rgba(213,184,149,0.18)]'
                        : 'border-white/10 bg-[#121214] hover:border-[#D5B895]/40'
                    }`}
                  >
                    <div className="font-serif text-base font-semibold text-[#F5F2EB]">
                      {t.nombre}
                    </div>
                    <div className="text-xs text-[#D5B895] mt-0.5">{t.medidas}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FILTRO 2 Y 3: TÉCNICA Y ESTILO EN LA MISMA FILA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Filtro 2: Técnica (Grafito / Color) */}
            <div className="space-y-3">
              <label className="block font-serif text-lg text-[#F5F2EB]">
                2. Técnica:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {datos.tecnicas.map((tec) => {
                  const seleccionado = tec.id === tecnicaId;
                  return (
                    <button
                      key={tec.id}
                      type="button"
                      onClick={() => setTecnicaId(tec.id)}
                      className={`rounded-xl p-3.5 text-left border transition-all ${
                        seleccionado
                          ? 'border-[#D5B895] bg-[#D5B895]/15'
                          : 'border-white/10 bg-[#121214] hover:border-[#D5B895]/40'
                      }`}
                    >
                      <div className="font-serif text-base font-semibold text-[#F5F2EB]">
                        {tec.nombre}
                      </div>
                      <div className="text-xs text-[#A8A298] mt-0.5">{tec.detalle}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filtro 3: Nivel de Detalle (Realismo / Hiperrealismo) */}
            <div className="space-y-3">
              <label className="block font-serif text-lg text-[#F5F2EB]">
                3. Nivel de Detalle:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {datos.estilos.map((est) => {
                  const seleccionado = est.id === estiloId;
                  return (
                    <button
                      key={est.id}
                      type="button"
                      onClick={() => setEstiloId(est.id)}
                      className={`rounded-xl p-3.5 text-left border transition-all ${
                        seleccionado
                          ? 'border-[#D5B895] bg-[#D5B895]/15'
                          : 'border-white/10 bg-[#121214] hover:border-[#D5B895]/40'
                      }`}
                    >
                      <div className="font-serif text-base font-semibold text-[#F5F2EB]">
                        {est.nombre}
                      </div>
                      <div className="text-xs text-[#A8A298] mt-0.5">{est.detalle}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FILTRO 4: CANTIDAD DE PERSONAS / MASCOTAS / OBJETOS */}
          <div className="space-y-3">
            <label className="block font-serif text-lg text-[#F5F2EB]">
              4. Cantidad de Personas, Mascotas u Objetos en la Obra:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {datos.sujetos.map((suj) => {
                const seleccionado = suj.id === sujetoId;
                return (
                  <button
                    key={suj.id}
                    type="button"
                    onClick={() => setSujetoId(suj.id)}
                    className={`rounded-xl p-3 text-center border transition-all ${
                      seleccionado
                        ? 'border-[#D5B895] bg-[#D5B895]/15'
                        : 'border-white/10 bg-[#121214] hover:border-[#D5B895]/40'
                    }`}
                  >
                    <div className="font-serif text-base font-semibold text-[#F5F2EB]">
                      {suj.etiqueta}
                    </div>
                    <div className="text-xs text-[#A8A298] mt-0.5">{suj.descripcion}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* BOTÓN PRINCIPAL PARA COTIZAR / ACEPTAR */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => setCotizacionVisible(true)}
              className="btn-champagne inline-flex items-center justify-center gap-2 rounded-full px-10 py-3.5 text-sm sm:text-base font-semibold transition-transform hover:scale-105 cursor-pointer"
            >
              <IconoWeb nombre="lapiz" className="w-4 h-4" />
              <span>Cotizar Obra Ahora</span>
            </button>
          </div>

          {/* ================================================================
              RESULTADO DESPLEGABLE (Aparece ahí mismo al tocar "Cotizar")
             ================================================================ */}
          {cotizacionVisible && (
            <div className="mt-6 rounded-2xl border border-[#D5B895]/50 bg-[#0B0B0C]/90 p-6 sm:p-7 shadow-[0_0_35px_rgba(213,184,149,0.18)] space-y-5 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="space-y-1 text-left">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D5B895]">
                    Resumen de tu Cotización
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB]">
                    {estiloActual.nombre} en {tecnicaActual.nombre}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B2A6]">
                    Tamaño: <strong className="text-[#F5F2EB]">{tamanoActual.nombre} ({tamanoActual.medidas})</strong> ·{' '}
                    Sujetos: <strong className="text-[#F5F2EB]">{sujetoActual.etiqueta}</strong>
                  </p>
                </div>

                {/* Valor Aproximado */}
                <div className="rounded-xl border border-[#D5B895]/40 bg-[#D5B895]/10 px-6 py-4 text-center shrink-0">
                  <div className="text-xs uppercase tracking-widest text-[#D5B895]">
                    Valor Aproximado
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F2EB] mt-0.5">
                    ${precioEstimado} <span className="text-base font-normal text-[#D5B895]">{datos.moneda}</span>
                  </div>
                </div>
              </div>

              {/* Detalles incluidos y botón directo a WhatsApp */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#C8C2B6]">
                <div className="space-y-1 text-left">
                  <p>⏱️ <strong>Tiempo estimado de entrega:</strong> {tamanoActual.tiempoEstimado}</p>
                  <p>🎖️ <strong>Incluye:</strong> Certificado de Autenticidad Oficial firmado con código QR</p>
                </div>

                <a
                  href={`https://wa.me/${contacto.whatsappNumeroLink}?text=${mensajeWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-champagne inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold shrink-0"
                >
                  <IconoWeb nombre="whatsapp" className="w-4 h-4" />
                  <span>Solicitar este encargo por WhatsApp</span>
                </a>
              </div>

              <p className="text-xs text-[#8E887E] italic text-left pt-1">
                {datos.notaAclaratoria}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

