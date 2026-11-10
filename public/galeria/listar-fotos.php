<?php
/**
 * ============================================================================
 * LECTOR AUTOMÁTICO DE ALMACÉN DE IMÁGENES PARA HOSTINGER — PONCE.ART
 * ============================================================================
 * ¿PARA QUÉ SIRVE ESTE ARCHIVO?
 * Cuando tu página esté subida en Hostinger, este archivo revisa automáticamente
 * las carpetas dentro de `public_html/galeria/`:
 *   - galeria/retratos/
 *   - galeria/personas/
 *   - galeria/animales/
 *   - galeria/cultura/
 *   - galeria/paisajes/
 *
 * Así, cada vez que subas una foto nueva (.jpg, .jpeg, .png, .webp) desde el
 * Administrador de Archivos de Hostinger a cualquiera de esas carpetas,
 * ¡aparecerá automáticamente en la Galería de tu página web!
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$categorias = [
    'retratos' => 'Retratos',
    'personas' => 'Personas',
    'animales' => 'Animales',
    'cultura'  => 'Cultura',
    'paisajes' => 'Paisajes'
];

$baseDir = __DIR__;
$obrasEncontradas = [];

foreach ($categorias as $carpeta => $nombreCategoria) {
    $rutaCarpeta = $baseDir . DIRECTORY_SEPARATOR . $carpeta;
    if (is_dir($rutaCarpeta)) {
        $archivos = scandir($rutaCarpeta);
        foreach ($archivos as $archivo) {
            if ($archivo === '.' || $archivo === '..') continue;
            $ext = strtolower(pathinfo($archivo, PATHINFO_EXTENSION));
            if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp'])) {
                // Convertimos el nombre del archivo (ej. "retrato-abuelos.jpg") en un título limpio ("Retrato Abuelos")
                $nombreSinExt = pathinfo($archivo, PATHINFO_FILENAME);
                $tituloLimpio = ucwords(str_replace(['-', '_'], ' ', $nombreSinExt));

                $obrasEncontradas[] = [
                    'id'        => $carpeta . '-' . $nombreSinExt,
                    'titulo'    => $tituloLimpio,
                    'categoria' => $nombreCategoria,
                    'imagen'    => './galeria/' . $carpeta . '/' . rawurlencode($archivo),
                    'tecnica'   => 'Dibujo en Grafito · Hiperrealismo'
                ];
            }
        }
    }
}

echo json_encode([
    'automatico' => true,
    'obras'      => $obrasEncontradas
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

