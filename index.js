import { sleep } from "k6";
import { options } from './options.js';
import { Login } from "./data/login.js";
export { options };



const loginRequest = JSON.parse(open("./requests/login.json"));

export default function () {
  console.log("-----Starting process-----");

  Login(loginRequest);

  console.log("-----Finish loop-----");

  sleep(1);
}
