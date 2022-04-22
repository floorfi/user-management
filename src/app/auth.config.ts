import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  // issuer: 'https://idsvr4.azurewebsites.net',
  issuer: 'http://192.168.0.9:8381/realms/jcd',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/login',

  postLogoutRedirectUri: window.location.origin + '/',


  // clientId: 'spa',
  clientId: 'user-management',

  responseType: 'code',


  //scope: 'openid profile email offline_access api',
  scope: 'openid profile',

  showDebugInformation: true,
  requireHttps: false,

  // Activate Session Checks:
  sessionChecksEnabled: true
};
