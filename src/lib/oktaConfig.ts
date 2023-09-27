export const oktaConfig = {
  clientId: "0oablc40wfLtIdIFe5d7",
  issuer: "https://dev-28910030.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
