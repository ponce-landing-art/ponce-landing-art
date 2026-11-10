/**
 * ============================================================================
 * COMPONENTE PRINCIPAL DE LA APLICACIÓN (APP.JSX) — PONCE.ART
 * ============================================================================
 * ¿PARA QUÉ SIRVE ESTE ARCHIVO?
 * Une en orden las 7 vistas de tu página web profesional y les pasa la
 * información desde tu archivo editable `src/config/datosWeb.js`.
 */
import React from 'react';
import { datosWeb } from './config/datosWeb';
import { Vista1HeroInicio } from './components/Vista1HeroInicio';
import { Vista2GaleriaObras } from './components/Vista2GaleriaObras';
import { Vista3SobreMi } from './components/Vista3SobreMi';
import { Vista4Servicios } from './components/Vista4Servicios';
import { Vista5ProcesoTrabajo } from './components/Vista5ProcesoTrabajo';
import { Vista6Cotizador } from './components/Vista6Cotizador';
import { Vista7Contacto } from './components/Vista7Contacto';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F5F2EB]">
      {/* VISTA 1: Menú Superior + Portada Principal (Hero) + 4 Sellos */}
      <Vista1HeroInicio datos={datosWeb.artista} />

      {/* VISTA 2: Galería de Obras con Filtros y Almacén de Imágenes */}
      <Vista2GaleriaObras datos={datosWeb.galeria} />

      {/* VISTA 3: Sección "Sobre mí" */}
      <Vista3SobreMi datos={datosWeb.sobreMi} />

      {/* VISTA 4: Sección "Servicios" */}
      <Vista4Servicios datos={datosWeb.servicios} />

      {/* VISTA 5: Sección "Proceso de Trabajo" */}
      <Vista5ProcesoTrabajo datos={datosWeb.proceso} />

      {/* VISTA 6: Cotizador Dinámico en Una Sola Vista */}
      <Vista6Cotizador datos={datosWeb.cotizador} contacto={datosWeb.contacto} />

      {/* VISTA 7: Sección "Contacto" y Pie de Página */}
      <Vista7Contacto datos={datosWeb.contacto} artista={datosWeb.artista} />
    </div>
  );
}

