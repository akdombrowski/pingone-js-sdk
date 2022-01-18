import axios from "axios";

export const getAuthorizeAuthorizationCode = async (
  authPath,
  envID,
  clientID,
  redirectURI,
  scopes,
  pkce,
  codeChallenge
) => {
  let response;
  let err;
  let authzCode;
  let queryParams = {
    response_type: "code",
    client_id: clientID,
    redirect_uri: redirectURI,
    scope: scopes,
  };

  if (pkce) {
    queryParams = {
      response_type: "code",
      client_id: clientID,
      redirect_uri: redirectURI,
      scope: scopes,
      code_challenge: codeChallenge,
    };
  }

  response = await axios({
    method: "get",
    baseURL: authPath + "/" + envID,
    url: "/as/authorize",
    params: {
      response_type: "code",
      client_id: clientID,
      redirect_uri: redirectURI,
      scope: scopes,
    },
    timeout: 1000,
    responseType: "json",
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      err = {
        data: error.response.data,
        status: error.response.status,
        headers: error.response.headers,
      };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(error.request);
      err = { request: error.request };
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log("Error", error.message);
      err = { message: error.message };
    }
    // console.log(error.config);
    err.config = error.config;
  });

  if (!err) {
    console.log(response.data);
  }

  return { response: response, error: err };
};
