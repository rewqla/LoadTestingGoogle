import { sleep } from "k6";
import { options } from './options.js';
import { Login } from "./src/login.js";
import { Update } from "./src/update.js";
import { Hello } from "./src/hello.js";
export { options };

const loginRequest = JSON.parse(open("./requests/login.json"));
const updateRequest = JSON.parse(open("./requests/update.json"));

export default function () {
  console.log("-----Starting process-----");

  Hello();
  // Login(loginRequest);
  // Update(updateRequest);

  console.log("-----Finish loop-----");

  sleep(1);
}
