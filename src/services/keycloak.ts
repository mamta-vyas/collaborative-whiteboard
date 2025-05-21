import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'collab-whiteboard',
  clientId: 'whiteboard-client',
});

export default keycloak;
