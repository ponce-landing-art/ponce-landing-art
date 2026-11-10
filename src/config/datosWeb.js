/**
 * ============================================================================
 * ARCHIVO MAESTRO DE CONFIGURACIÓN — PONCE.ART (WEB PROFESIONAL)
 * ============================================================================
 * ¡HOLA JELVIS! Este es el ÚNICO archivo que necesitas abrir cuando quieras:
 *   1. Cambiar cualquier texto o frase de la página.
 *   2. Cambiar las fotos principales o agregar obras a la galería.
 *   3. Ajustar los precios y tamaños de tu Cotizador Dinámico.
 *   4. Actualizar tu número de WhatsApp, correo o redes sociales.
 */

export const datosWeb = {
  // ==========================================================================
  // 1. IDENTIDAD DEL ARTISTA Y BARRA DE NAVEGACIÓN (VISTA 1)
  // ==========================================================================
  artista: {
    monograma: "PA",
    marcaSuperior: "JELVIS J. PONCE E.",
    subtituloMarca: "Artista de Dibujo",
    saludoHero: "Hola, soy",
    nombreArtistico: "Jelvis J. Ponce E.",
    tituloEspecialidad: "Artista de Dibujo en Grafito especializado en Hiperrealismo",
    fraseInspiradora: "Transformo momentos, personas y emociones en obras de arte hechas a mano.",
    textoBotonHero: "Ver Galería",
    textoBotonMenu: "Solicitar un Retrato",
    // Imagen principal de la portada (guardada en public/galeria/retratos/obra-principal.jpg)
    imagenPortada: "./galeria/retratos/retrato-pareja-principal.jpg",

    // Los 4 sellos debajo de la portada
    sellosGarantia: [
      { icono: "lapiz", titulo: "Retratos\nPersonalizados" },
      { icono: "cuadro", titulo: "Hiperrealismo\nen Grafito" },
      { icono: "medalla", titulo: "Piezas Únicas\ny Originales" },
      { icono: "envio", titulo: "Envíos\n(Panamá y exterior)" },
    ],
  },

  // ==========================================================================
  // 2. GALERÍA DE OBRAS (VISTA 2)
  // ==========================================================================
  // NOTA IMPORTANTE SOBRE TU ALMACÉN DE IMÁGENES:
  // - En tu PC y en Hostinger tienes las carpetas:
  //     public/galeria/retratos/
  //     public/galeria/personas/
  //     public/galeria/animales/
  //     public/galeria/cultura/
  //     public/galeria/paisajes/
  // - Cuando subas la web a Hostinger, si metes fotos nuevas en esas carpetas,
  //   se agregan automáticamente. Además, aquí abajo tienes la lista base donde
  //   puedes cambiar títulos o rutas cuando quieras.
  galeria: {
    titulo: "Galería de Obras",
    subtitulo: "Una colección de retratos y creaciones en grafito, donde cada trazo cuenta una historia.",
    categorias: ["Todo", "Retratos", "Personas", "Animales", "Cultura", "Paisajes"],

    obras: [
      {
        id: "obra-1",
        titulo: "Amor Eterno — Retrato de Pareja",
        categoria: "Retratos",
        tecnica: "Grafito sobre papel de algodón · Hiperrealismo",
        imagen: "./galeria/retratos/retrato-pareja-principal.jpg",
      },
      {
        id: "obra-2",
        titulo: "Mirada Fiel — Golden Retriever",
        categoria: "Animales",
        tecnica: "Grafito y carboncillo · Textura de pelaje",
        imagen: "./galeria/animales/mascota-perro.jpg",
      },
      {
        id: "obra-3",
        titulo: "Inocencia — Retrato Infantil",
        categoria: "Personas",
        tecnica: "Hiperrealismo en grafito hecho a mano",
        imagen: "./galeria/personas/retrato-nina.jpg",
      },
      {
        id: "obra-4",
        titulo: "Fauna Silvestre — Iguana en Detalle",
        categoria: "Animales",
        tecnica: "Estudio hiperrealista de texturas en grafito",
        imagen: "./galeria/animales/iguana-textura.jpg",
      },
      {
        id: "obra-5",
        titulo: "Historia Viva — Panamá Viejo",
        categoria: "Paisajes",
        tecnica: "Arquitectura histórica en grafito",
        imagen: "./galeria/paisajes/panama-viejo.jpg",
      },
      {
        id: "obra-6",
        titulo: "Orgullo y Tradición — La Pollera Panameña",
        categoria: "Cultura",
        tecnica: "Hiperrealismo de orfebrería y encajes en grafito",
        imagen: "./galeria/cultura/empollerada-panama.jpg",
      },
    ],
  },

  // ==========================================================================
  // 3. SECCIÓN "SOBRE MÍ" (VISTA 3)
  // ==========================================================================
  sobreMi: {
    titulo: "Sobre mí",
    // Cambia esta foto en `public/galeria/foto-artista.jpg` por una foto tuya dibujando
    fotoArtista: "./galeria/retratos/retrato-pareja-principal.jpg",
    biografia:
      "Soy Jelvis J. Ponce E. (Ponce.Art), artista panameño apasionado por el dibujo en grafito y el hiperrealismo. A través del lápiz busco capturar la esencia, la emoción y los detalles que hacen única a cada persona y momento, entregando cada pieza con su Certificado de Autenticidad oficial.",
    detalles: [
      { icono: "lapiz", etiqueta: "Especialidad:", valor: "Dibujo en grafito (hiperrealismo)" },
      { icono: "ubicacion", etiqueta: "Ubicación:", valor: "Panamá" },
      { icono: "corazon", etiqueta: "Inspiración:", valor: "Personas, cultura y vida cotidiana" },
    ],
  },

  // ==========================================================================
  // 4. SECCIÓN "SERVICIOS" (VISTA 4)
  // ==========================================================================
  servicios: {
    titulo: "Servicios",
    subtitulo: "Puedo crear para ti una obra única y personalizada, con calidad y gran nivel de detalle.",
    tarjetas: [
      {
        id: "serv-1",
        titulo: "Retratos Personalizados",
        descripcion: "De personas, familia o seres queridos.",
        imagen: "./galeria/personas/retrato-nina.jpg",
      },
      {
        id: "serv-2",
        titulo: "Retratos de Mascotas",
        descripcion: "Capturo la esencia y personalidad de tu mascota.",
        imagen: "./galeria/animales/mascota-perro.jpg",
      },
      {
        id: "serv-3",
        titulo: "Obras por Encargo",
        descripcion: "Paisajes, arquitectura, cultura panameña y más.",
        imagen: "./galeria/paisajes/panama-viejo.jpg",
      },
    ],
  },

  // ==========================================================================
  // 5. SECCIÓN "PROCESO DE TRABAJO" (VISTA 5)
  // ==========================================================================
  proceso: {
    titulo: "Proceso de Trabajo",
    subtitulo: "Así convierto tu idea en una obra de arte:",
    pasos: [
      {
        numero: "1",
        titulo: "Solicitud",
        descripcion: "Cuéntame tu idea y envíame tu foto de referencia.",
        icono: "documento",
      },
      {
        numero: "2",
        titulo: "Boceto",
        descripcion: "Te muestro el encaje y avance inicial.",
        icono: "boceto",
      },
      {
        numero: "3",
        titulo: "Desarrollo",
        descripcion: "Trabajo el dibujo a mano con detalle y realismo.",
        icono: "lapiz",
      },
      {
        numero: "4",
        titulo: "Entrega",
        descripcion: "Recibe tu obra lista, protegida y con Certificado QR.",
        icono: "caja",
      },
    ],
  },

  // ==========================================================================
  // 6. SECCIÓN "COTIZADOR DINÁMICO EN UNA SOLA VISTA" (VISTA 6)
  // ==========================================================================
  // Aquí puedes cambiar los nombres de los tamaños y los valores en dólares ($).
  cotizador: {
    titulo: "Cotiza tu Obra Personalizada",
    subtitulo: "Selecciona las características de la obra que deseas en un solo vistazo y obtén un estimado inmediato.",
    moneda: "USD",
    notaAclaratoria:
      "* El valor mostrado es un estimado orientativo. El precio final se confirma al revisar la fotografía de referencia. Toda obra incluye Certificado de Autenticidad con QR.",

    // Filtro 1: Tamaños disponibles y su precio base en dólares (puedes editar medidas y precios)
    tamanos: [
      { id: "pequeno", nombre: "Pequeño", medidas: "21 × 28 cm (Carta / A4)", precioBase: 90, tiempoEstimado: "1 a 2 semanas" },
      { id: "mediano", nombre: "Mediano", medidas: "30 × 40 cm (A3)", precioBase: 150, tiempoEstimado: "2 a 3 semanas" },
      { id: "grande", nombre: "Grande", medidas: "40 × 50 cm", precioBase: 230, tiempoEstimado: "3 a 4 semanas" },
      { id: "coleccion", nombre: "Gran Formato", medidas: "50 × 70 cm", precioBase: 340, tiempoEstimado: "4 a 6 semanas" },
    ],

    // Filtro 2: Técnica (Grafito vs Color)
    tecnicas: [
      { id: "grafito", nombre: "Grafito (Blanco y Negro)", recargoPorcentaje: 0, detalle: "Trazos clásicos en grafito y carboncillo" },
      { id: "color", nombre: "Color Profesional", recargoPorcentaje: 30, detalle: "Lápices policromos de alta gama a color (+30%)" },
    ],

    // Filtro 3: Nivel de Detalle (Realismo vs Hiperrealismo)
    estilos: [
      { id: "realismo", nombre: "Realismo Artístico", recargoPorcentaje: 0, detalle: "Gran parecido, volumen y expresión natural" },
      { id: "hiperrealismo", nombre: "Hiperrealismo de Colección", recargoPorcentaje: 35, detalle: "Micro-detalle extremo en poros, luces y texturas (+35%)" },
    ],

    // Filtro 4: Cantidad de Sujetos (Personas / Mascotas / Objetos principales)
    sujetos: [
      { id: 1, etiqueta: "1 Sujeto", descripcion: "1 persona, mascota u objeto", costoExtra: 0 },
      { id: 2, etiqueta: "2 Sujetos", descripcion: "Pareja o 2 elementos", costoExtra: 45 },
      { id: 3, etiqueta: "3 Sujetos", descripcion: "Grupo de 3 integrantes", costoExtra: 90 },
      { id: 4, etiqueta: "4 o más", descripcion: "Retrato familiar grupal", costoExtra: 135 },
    ],
  },

  // ==========================================================================
  // 7. SECCIÓN "CONTACTO" Y REDES OFICIALES (VISTA 7)
  // ==========================================================================
  contacto: {
    titulo: "Contacto",
    subtitulo: "¿Te gustaría un retrato personalizado?",
    whatsappMostrar: "+507 6000-0000", // <-- Pon aquí tu número visible
    whatsappNumeroLink: "50760000000", // <-- Solo números con el código 507 de Panamá
    correo: "contacto@ponceart.com", // <-- Pon aquí tu correo real
    instagramUsuario: "@_ponce.art",
    instagramUrl: "https://www.instagram.com/_ponce.art/",
    tiktokUsuario: "@_ponce.art",
    tiktokUrl: "https://www.tiktok.com/@_ponce.art",
    ubicacion: "Panamá",
    qrLandingUrl: "https://ponce-landing-art.github.io/ponce-landing-art/",
  },
};

