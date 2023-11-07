import { createApp } from 'react'; 
import Catalog from './page'; // Importa el componente de inicio del modulo

const app = createApp(Catalog);
app.mount('#app');

export {
  app, // Exporta la instancia de la aplicación 
  Catalog, // Exporta el componente "Catalog"
};