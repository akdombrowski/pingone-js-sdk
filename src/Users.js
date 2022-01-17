import axios from "axios";

export const getUsers = async (apiPath, envID, jwtToken) => {
  let err;
  let users;
  let response = await axios({
    method: "get",
    baseURL: apiPath + "/environments/" + envID,
    url: "/users",
    headers: { authorization: "Bearer " + jwtToken },
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
    users = response.data._embedded.users;
    // console.log(users);
    let nextPage = response.data._links.next;
    let count = 1;
    while (nextPage) {
      let nextPageResponse = await axios({
        method: "get",
        url: nextPage.href,
        headers: { authorization: "Bearer " + jwtToken },
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

      if (err) {
        console.log(err);
        break;
      }

      if (nextPageResponse) {
        // console.log(nextPageResponse.data);
        users = users.concat(nextPageResponse.data._embedded.users);
        if (nextPageResponse.data) {
          nextPage = nextPageResponse.data._links.next;
        }
      }
    }
  }

  return { users: users, response: response, error: err };
};
