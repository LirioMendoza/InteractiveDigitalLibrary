import { createApp } from 'react'; 
import Login from './page'; // Importa el componente de inicio del modulo

const app = createApp(Home);
app.mount('#app');

export {
  app, // Exporta la instancia de la aplicación 
  Login, // Exporta el componente "Login"
};