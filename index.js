import { sleep } from "k6";
import http from "k6/http";
import { getHeaders } from "./headers.js";
import { checkResponseStatus } from "./check-response.js";
import { options } from './options.js';
export { options };


const loginRequest = JSON.parse(open("./requests/login.json"));

export default function () {
  console.log("-----Starting process-----");

  console.log("-----Login-----");

  const loginURL = "https://dummyjson.com/auth/login";

  const loginRes = http.post(loginURL, loginRequest, getHeaders);

  checkResponseStatus(loginRes);

  console.log("-----Finish loop-----");

  sleep(1);
}
