import chai from "chai";
import { getUsers } from "../src/index.js";
import sinon from "sinon";

const expect = chai.expect;
chai.config.includeStack = true;

describe("Get Users", () => {
  describe("Get All Users", () => {
    describe("#getUsers()", () => {
      it("gets all users", async () => {
        const jwtToken =
          "eyJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHQifQ.eyJjbGllbnRfaWQiOiIwNGEzOWUxMi1mZTM2LTRkY2YtYmI3OS00OGVkNjA5N2JiZDkiLCJpc3MiOiJodHRwczovL2F1dGgucGluZ29uZS5jb20vMzMzZDY2YjUtZDJmMC00OGQwLThlYzAtY2Y0Y2FmZDM1ZDI1L2FzIiwiaWF0IjoxNjQyNDQzOTMzLCJleHAiOjE2NDI0NDc1MzMsImF1ZCI6WyJodHRwczovL2FwaS5waW5nb25lLmNvbSJdLCJlbnYiOiIzMzNkNjZiNS1kMmYwLTQ4ZDAtOGVjMC1jZjRjYWZkMzVkMjUiLCJvcmciOiJhNmZkY2RlOC0wYWUyLTRiM2MtODFkYy1iMzQ2OGZjZTY3ZjkifQ.OA3PgnQWScIrKXRnyRXmcInPiE5-AuItoih5yBj3eBkQVFtTF-PSeCavsPIrArRFnTYPROfCrw-sLtaoFNH6CvJDPo5382jxhw-k4xcm9qeJgOknP7I4d3YNE9f3-Y6BU9p5zjMB5CjRgTIjQMAqcC7yrOUPrx_4cdcMc3FpjJyoHLd6CzQNboE-RvHOJIRk1rdsnoq2kvMuB5opifw7FmcEdtgNLbC3ers_O43Np4YR2HZe5uIL5bM2_u3nY6QOgpPYAk2d-vsT_Cq9gzEus4FYTBBm2Hn3kTPalxydLnkoFKVnK6B99mIYfMPNIkXbgOjUxiKPcXwTxaKb9NSOkQ";
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
