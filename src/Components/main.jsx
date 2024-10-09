import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';

/* Elemento base, llama a la app */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);