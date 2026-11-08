/**
 * ============================================================================
 * ARCHIVO DE CONFIGURACIÓN FÁCIL — PONCE.ART
 * ============================================================================
 * Ubicación de este archivo en tu PC:
 * C:\Users\ADMIN\.gemini\antigravity\scratch\ponce-art\src\config\datosArtista.js
 *
 * ¿CÓMO ACTIVAR O OCULTAR UNA RED SOCIAL O TU PÁGINA WEB?
 * - Cambia `activo: true` (para mostrar el botón) o `activo: false` (para ocultarlo).
 * - Cambia `url: "https://..."` con el enlace real de tu perfil.
 *
 * ICONOS DISPONIBLES SI AGREGAS OTRA RED EN EL FUTURO:
 * "instagram" | "tiktok" | "web" | "whatsapp" | "youtube" | "facebook" | "x" | "email"
 */

export const datosArtista = {
  iniciales: "PA",
  marca: "Ponce.Art",
  nombreCompleto: "Jelvis J. Ponce E.",
  especialidad: "Artista Panameño · Hiperrealismo",
  tituloSeccionRedes: "Conecta con mi Arte",

  // ==========================================================================
  // LISTA DE REDES SOCIALES Y PÁGINA WEB (EDITABLE)
  // ==========================================================================
  redesSociales: [
    {
      id: "instagram",
      nombre: "Instagram Oficial",
      usuario: "@_ponce.art",
      descripcion: "Proceso de obras, retratos hiperrealistas y galería reciente",
      url: "https://www.instagram.com/_ponce.art?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw==", // <-- Pon aquí el link de tu Instagram
      icono: "instagram",
      destacado: true,
      activo: true,
    },
    {
      id: "tiktok",
      nombre: "TikTok Oficial",
      usuario: "@_ponce.art",
      descripcion: "Videos de timelapse y técnica a grafito en vivo",
      url: "https://www.tiktok.com/@_ponce.art?_r=1&_t=ZS-9BFEPdPypDG", // <-- Pon aquí el link de tu TikTok
      icono: "tiktok",
      destacado: true,
      activo: true,
    },
    {
      id: "web-personal",
      nombre: "Sitio Web Oficial & Portafolio",
      usuario: "www.ponceart.com",
      descripcion: "Catálogo exclusivo de obras originales y cotizaciones",
      url: "https://tupaginaweb.com", // <-- Pon aquí tu web cuando la tengas lista
      icono: "web",
      destacado: false,
      activo: false, // <-- Cambia a `true` cuando quieras mostrar tu página web
    },
    {
      id: "whatsapp",
      nombre: "WhatsApp — Encargos",
      usuario: "Contacto Directo",
      descripcion: "Consulta disponibilidad para retratos personalizados",
      url: "https://wa.me/50768637081", // <-- Pon aquí tu número con código 507
      icono: "whatsapp",
      destacado: false,
      activo: true, // <-- Cambia a `true` si deseas mostrar WhatsApp
    },
  ],
};
