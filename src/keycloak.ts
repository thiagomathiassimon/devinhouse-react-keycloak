import Keycloak from 'keycloak-js';


const keycloak = Keycloak({
  url: 'https://training.dev.delivery/auth/',
  realm: 'demo-app',
  clientId: 'devinhouse-front',
});

export default keycloak;
