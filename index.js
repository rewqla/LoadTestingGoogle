import { sleep } from "k6";
import { options } from './options.js';
import { Login } from "./src/login.js";
import { Update } from "./src/update.js";
export { options };

//check if not success
//grpc

const loginRequest = JSON.parse(open("./requests/login.json"));
const updateRequest = JSON.parse(open("./requests/update.json"));

export default function () {
  console.log("-----Starting process-----");

  Login(loginRequest);
  Update(updateRequest);

  console.log("-----Finish loop-----");

  sleep(1);
}
