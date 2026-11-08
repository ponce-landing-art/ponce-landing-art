import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 'base: ./' permite que los archivos CSS y JS carguen correctamente
  // dentro de la subcarpeta de GitHub Pages (ej. /ponce-landing-art/)
  base: './',
  plugins: [react()],
});
