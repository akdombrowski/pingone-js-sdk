// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { getAuthorizeAuthorizationCode } from "../../src/index.js";

Cypress.Commands.add(
  "getAuthorizeAuthorizationCode",
  (authPath, envID, clientID, redirectURI, scopes, pkce) => {
    return new Cypress.Promise((resolve, reject) => {
      //   const envID = "333d66b5-d2f0-48d0-8ec0-cf4cafd35d25";
      //   const authPath = "https://auth.pingone.com";
      //   const clientID = "84704a8e-bdaa-4262-aff2-38ec2382d6b9";
      //   const redirectURI = "https://example.com";
      //   const scopes = "openid profile p1:read:user";
      //   const pkce = false;
      getAuthorizeAuthorizationCode(
        authPath,
        envID,
        clientID,
        redirectURI,
        scopes,
        pkce
      ).then(function (data) {
        resolve(data);
      });
    });
  }
);
