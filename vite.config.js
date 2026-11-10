/**
 * ============================================================================
 * CONFIGURACIÓN DE VITE — PONCE.ART (WEB PROFESIONAL)
 * ============================================================================
 * Este archivo prepara y empaqueta tu código React cuando ejecutas
 * `npm run dev` (para probar en tu PC) o `npm run build` (para subir a Hostinger).
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
});

