/**
 * ============================================================================
 * PUNTO DE ENTRADA DE REACT — PONCE.ART
 * ============================================================================
 * Este archivo conecta tu componente principal `App.jsx` con el `index.html`.
 * No necesitas editar este archivo.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

