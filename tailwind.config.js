/**
 * ============================================================================
 * CONFIGURACIÓN DE ESTILOS (TAILWIND CSS) — PONCE.ART
 * ============================================================================
 * Define la paleta de colores oscuros y dorados champagne y las tipografías
 * elegantes que usa toda la página web.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0C',
        charcoal: '#141416',
        champagne: {
          light: '#F3E5AB',
          DEFAULT: '#D5B895',
          gold: '#C5A059',
          dark: '#8C6D3F',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

