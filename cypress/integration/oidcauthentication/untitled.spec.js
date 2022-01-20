// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import { getAuthzCode } from "../../../src/index.js";
describe("Get Authorize Authz Code", () => {
  it("Visits signin page", async () => {
    const envID = "333d66b5-d2f0-48d0-8ec0-cf4cafd35d25";
    const authPath = "https://auth.pingone.com";
    const clientID = "84704a8e-bdaa-4262-aff2-38ec2382d6b9";
    const redirectURI = "https://example.com";
    const scopes = "openid profile p1:read:user";
    const pkce = false;
    let signInPage = "";

    cy.intercept("*pingone.com*").as("pingone");
    // cy.getAuthorizeAuthorizationCode(
    //   authPath,
    //   envID,
    //   clientID,
    //   redirectURI,
    //   scopes,
    //   pkce
    // ).then((result) => {
    //   data = result;
    //   console.log("data");
    //   console.log(data);
    // });
    cy.wait("@pingone");
    getAuthzCode(authPath, envID, clientID, redirectURI, scopes, pkce)
      .then((response) => {
        console.log("response: ");
        console.log(response);
        // console.log("data: ");
        // console.log(response.data);
        // signInPage = response.data;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  });
});
