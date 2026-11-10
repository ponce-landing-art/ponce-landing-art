/**
 * ============================================================================
 * VISTA 7: SECCIÓN "CONTACTO" Y PIE DE PÁGINA — PONCE.ART
 * ============================================================================
 * ¿PARA QUÉ SIRVE ESTE ARCHIVO?
 * Muestra el formulario de contacto a la izquierda y la tarjeta con tus datos
 * oficiales (WhatsApp, Correo, Instagram, TikTok y Ubicación) a la derecha.
 *
 * ¿DÓNDE SE CAMBIA TU WHATSAPP, CORREO O INSTAGRAM?
 * En `src/config/datosWeb.js` -> sección `contacto`.
 */
import React, { useState } from 'react';
import { IconoWeb } from './IconosWeb';

export function Vista7Contacto({ datos, artista }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Al enviar el formulario, abre WhatsApp con el mensaje del cliente listo para enviarte
  const manejarEnvio = (e) => {
    e.preventDefault();
    const texto = encodeURIComponent(
      `Hola Jelvis (Ponce.Art), te escribo desde tu página web:\n\n` +
        `• Nombre: ${nombre}\n` +
        `• Correo: ${correo}\n` +
        `• Mensaje: ${mensaje}`
    );
    window.open(`https://wa.me/${datos.whatsappNumeroLink}?text=${texto}`, '_blank');
  };

  return (
    <section id="contacto" className="bg-[#0B0B0C] pt-16 pb-10 sm:pt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Cabecera de Contacto */}
        <div className="text-center space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB]">
            {datos.titulo}
          </h2>
          <p className="text-sm sm:text-base text-[#B8B2A6]">
            {datos.subtitulo}
          </p>
        </div>

        {/* Bloque de 2 columnas: Formulario + Tarjeta de Datos */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Formulario */}
          <form onSubmit={manejarEnvio} className="md:col-span-7 space-y-4">
            <input
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
              className="w-full rounded-xl border border-[#D5B895]/25 bg-[#151518] px-4 py-3 text-sm text-[#F5F2EB] placeholder-[#8E887E] focus:border-[#D5B895] focus:outline-none"
            />
            <input
              type="email"
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Correo electrónico"
              className="w-full rounded-xl border border-[#D5B895]/25 bg-[#151518] px-4 py-3 text-sm text-[#F5F2EB] placeholder-[#8E887E] focus:border-[#D5B895] focus:outline-none"
            />
            <textarea
              rows="4"
              required
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Mensaje (cuéntame qué idea o retrato te gustaría realizar)"
              className="w-full rounded-xl border border-[#D5B895]/25 bg-[#151518] px-4 py-3 text-sm text-[#F5F2EB] placeholder-[#8E887E] focus:border-[#D5B895] focus:outline-none"
            />

            <div className="pt-2 text-center sm:text-left">
              <button
                type="submit"
                className="btn-champagne inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-transform hover:scale-105 cursor-pointer"
              >
                <IconoWeb nombre="enviar" className="w-4 h-4" />
                <span>Enviar Mensaje</span>
              </button>
            </div>
          </form>

          {/* Columna Derecha: Tarjeta con Datos Directos */}
          <div className="md:col-span-5 rounded-2xl border border-[#D5B895]/30 bg-[#121215] p-6 space-y-5 shadow-xl">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${datos.whatsappNumeroLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="text-[#D5B895] group-hover:scale-110 transition-transform">
                <IconoWeb nombre="whatsapp" className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#A8A298]">WhatsApp</div>
                <div className="text-sm font-medium text-[#F5F2EB] group-hover:text-[#D5B895]">
                  {datos.whatsappMostrar}
                </div>
              </div>
            </a>

            {/* Correo */}
            <a
              href={`mailto:${datos.correo}`}
              className="flex items-center gap-4 group"
            >
              <div className="text-[#D5B895] group-hover:scale-110 transition-transform">
                <IconoWeb nombre="correo" className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#A8A298]">Correo</div>
                <div className="text-sm font-medium text-[#F5F2EB] group-hover:text-[#D5B895]">
                  {datos.correo}
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={datos.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="text-[#D5B895] group-hover:scale-110 transition-transform">
                <IconoWeb nombre="instagram" className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#A8A298]">Instagram</div>
                <div className="text-sm font-medium text-[#F5F2EB] group-hover:text-[#D5B895]">
                  {datos.instagramUsuario}
                </div>
              </div>
            </a>

            {/* TikTok */}
            <a
              href={datos.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="text-[#D5B895] group-hover:scale-110 transition-transform">
                <IconoWeb nombre="tiktok" className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#A8A298]">TikTok</div>
                <div className="text-sm font-medium text-[#F5F2EB] group-hover:text-[#D5B895]">
                  {datos.tiktokUsuario}
                </div>
              </div>
            </a>

            {/* Ubicación */}
            <div className="flex items-center gap-4">
              <div className="text-[#D5B895]">
                <IconoWeb nombre="ubicacion" className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#A8A298]">Ubicación</div>
                <div className="text-sm font-medium text-[#F5F2EB]">
                  {datos.ubicacion}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de página final */}
        <footer className="mt-16 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E887E]">
          <div>
            © {new Date().getFullYear()} <strong className="text-[#D5B895]">Ponce.Art</strong> — {artista.nombreArtistico}. Todos los derechos reservados.
          </div>
          <a
            href={datos.qrLandingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D5B895] hover:underline"
          >
            Ver Tarjeta Digital de Perfiles (QR) ↗
          </a>
        </footer>
      </div>
    </section>
  );
}

