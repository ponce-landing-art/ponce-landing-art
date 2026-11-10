# Ponce.Art — Página Web Profesional (Jelvis J. Ponce E.)

Sitio web completo en **React + Vite + Tailwind CSS** con las **7 vistas** diseñadas para **Jelvis J. Ponce E. (`Ponce.Art`)**, preparado para alojarse en **Hostinger**.

---

## 📁 Estructura de Archivos (Todos con comentarios explicativos)

* **`src/config/datosWeb.js`** 👉 **El único archivo que necesitas editar** para cambiar textos, fotos principales, obras de la galería, precios del cotizador o tu número de WhatsApp.
* **`src/components/Vista1HeroInicio.jsx`** 👉 Menú superior + Portada ("Hola, soy Jelvis J. Ponce E.") + 4 sellos inferiores.
* **`src/components/Vista2GaleriaObras.jsx`** 👉 Galería interactiva con filtros (`Todo`, `Retratos`, `Personas`, `Animales`, `Cultura`, `Paisajes`) y zoom.
* **`src/components/Vista3SobreMi.jsx`** 👉 Biografía del artista, foto y detalles.
* **`src/components/Vista4Servicios.jsx`** 👉 Las 3 tarjetas de servicios (Retratos Personalizados, Mascotas, Obras por Encargo).
* **`src/components/Vista5ProcesoTrabajo.jsx`** 👉 Los 4 pasos numerados con iconos dorados.
* **`src/components/Vista6Cotizador.jsx`** 👉 Calculadora dinámica en una sola vista (despliega el precio al tocar *Cotizar Obra Ahora*).
* **`src/components/Vista7Contacto.jsx`** 👉 Formulario + Tarjeta de contacto directo y redes sociales.
* **`public/galeria/listar-fotos.php`** 👉 Lector automático para el almacén de **Hostinger**.

---

## 🖼️ ¿Cómo funciona el Almacén de Fotos de la Galería?

Dentro de `public/galeria/` están las 5 carpetas de categorías:
* `public/galeria/retratos/`
* `public/galeria/personas/`
* `public/galeria/animales/`
* `public/galeria/cultura/`
* `public/galeria/paisajes/`

Cuando subas tu web a **Hostinger**, basta con que entres al **Administrador de Archivos de Hostinger**, abras cualquiera de esas 5 carpetas dentro de `public_html/galeria/` y subas una foto nueva (`.jpg`, `.png` o `.webp`). El archivo `listar-fotos.php` la detectará y la publicará sola en tu galería.

---

## 🚀 Cómo probarla localmente en tu PC

Abre la consola dentro de `C:\ponce-art\ponce-web-art`:

```powershell
$env:Path += ";C:\Program Files\nodejs"; npm.cmd install; npm.cmd run dev
```

## 🌐 Cómo empaquetarla para subir a Hostinger

```powershell
$env:Path += ";C:\Program Files\nodejs"; npm.cmd run build
```
Eso generará la carpeta **`dist`**. Solo subes el contenido de `dist` a la carpeta **`public_html`** de tu Hostinger.

