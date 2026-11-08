# Ponce.Art — Landing Page de Certificado de Autenticidad y Redes Sociales

Proyecto en **React + Vite + Tailwind CSS** con el diseño **Modelo 2: Galería Oscura de Lujo (Dark Luxury Gallery)** para **Jelvis J. Ponce E. (Ponce.Art)**.

## ¿Cómo agregar otra red social o tu futura Página Web Personal?

No necesitas modificar el diseño ni los componentes de React. Todo se controla desde un único archivo:

👉 **`src/config/datosArtista.js`**

1. Abre `src/config/datosArtista.js`.
2. Busca la lista `redesSociales`.
3. Para activar tu **Sitio Web Oficial** o **WhatsApp** (que ya vienen preconfigurados), solo cambia:
   ```js
   activo: false
   ```
   por:
   ```js
   activo: true
   ```
   y coloca tu dirección en `url: "https://..."`.
4. Si quieres agregar cualquier otra red (Facebook, YouTube, X, Pinterest, Correo), copia un bloque y usa cualquiera de los iconos integrados (`"instagram"`, `"tiktok"`, `"web"`, `"whatsapp"`, `"youtube"`, `"facebook"`, `"x"`, `"email"`).

## Comandos para ejecutar el proyecto en React

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar servidor de desarrollo local:
   ```bash
   npm run dev
   ```
3. Generar versión lista para subir a internet (Vercel / Netlify):
   ```bash
   npm run build
   ```

