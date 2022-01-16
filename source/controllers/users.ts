/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface User {
  userId: Number;
  name: String;
}

const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
  apiPath: String,
  envID: String,
  jwtToken: String
) => {
  let result: AxiosResponse = await axios({
    method: "get",
    baseURL: apiPath + "/environments/" + envID,
    url: "/users",
    headers: { authorization: "Bearer " + jwtToken },
    timeout: 1000,
    responseType: "json",
  });
  let users: [User] = result.data;
  return res.status(200).json({
    message: users,
  });
};
