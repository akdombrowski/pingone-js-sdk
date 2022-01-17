import axios from "axios";
export const getUsers = async (apiPath, envID, jwtToken) => {
  let result = await axios({
    method: "get",
    baseURL: apiPath + "/environments/" + envID,
    url: "/users",
    headers: {
      authorization: "Bearer " + jwtToken
    },
    timeout: 1000,
    responseType: "json"
  });
  console.log(result);
  console.log(result.data);
  return result;
};