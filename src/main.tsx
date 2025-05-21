import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import keycloak from './services/keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ReactKeycloakProvider authClient={keycloak}>
         <App />
    </ReactKeycloakProvider>
  </StrictMode>,
)
 