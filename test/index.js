import chai from "chai";
import { getUsers } from "../src/index.js";
import { getAuthorizeAuthorizationCode } from "../src/index.js";
import sinon from "sinon";

const expect = chai.expect;
chai.config.includeStack = true;

describe("Authorize", () => {
  describe("Authorization Code", () => {
    describe("GET", () => {
      context("when not using pkce", () => {
        describe("#getAuthorizeAuthorizationCode()", () => {
          it("starts auth code flow", async () => {
            const envID = "333d66b5-d2f0-48d0-8ec0-cf4cafd35d25";
            const authPath = "https://auth.pingone.com";
            const clientID = "84704a8e-bdaa-4262-aff2-38ec2382d6b9";
            const redirectURI = "https://example.com";
            const scopes = "openid profile p1:read:user";
            const pkce = false;
            const authzObject = await getAuthorizeAuthorizationCode(
              authPath,
              envID,
              clientID,
              redirectURI,
              scopes,
              pkce
            );
            const response = authzObject.response;
            console.log("data: ");
            console.log(response.data);
            console.log();
            console.log("status: " + response.status);
            console.log();
            console.log("statusText: " + response.statusText);
            console.log();
            console.log("headers: " + JSON.stringify(response.headers));
            console.log();
            console.log("config: " + JSON.stringify(response.config));
          });
        });
      });
    });
  });
});

describe("Get Users", () => {
  describe("Get All Users", () => {
    describe("#getUsers()", () => {
      it("gets all users", async () => {
        const jwtToken =
          "";
        const envID = "333d66b5-d2f0-48d0-8ec0-cf4cafd35d25";
        const apiPath = "https://api.pingone.com/v1";
        const getUsersObject = await getUsers(apiPath, envID, jwtToken);
        const response = getUsersObject.response;
        const users = getUsersObject.users;
        console.log("data: ");
        console.log(response.data);
        console.log();
        console.log("status: " + response.status);
        console.log();
        console.log("statusText: " + response.statusText);
        console.log();
        console.log("headers: " + JSON.stringify(response.headers));
        console.log();
        console.log("config: " + JSON.stringify(response.config));
        console.log();
        console.log("users.length: " + users.length);
        console.log();
        console.log("users[0]: " + JSON.stringify(users[0]));
      });
    });
  });
});
