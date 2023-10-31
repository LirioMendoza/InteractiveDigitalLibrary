import { createApp } from 'react'; 
import Home from './page'; // Importa el componente de inicio del modulo

const app = createApp(Home);
app.mount('#app');

export {
  app, // Exporta la instancia de la aplicación 
  Home, // Exporta el componente "Home"
};