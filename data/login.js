
import { getHeaders } from "../headers.js";
import { checkResponseStatus } from "../check-response.js";
import http from "k6/http";

export const Login = (loginRequest) => {

  console.log("-----Login-----");

  const loginURL = "https://dummyjson.com/auth/login";

  const loginRes = http.post(loginURL, loginRequest, getHeaders);

  checkResponseStatus(loginRes);
};
