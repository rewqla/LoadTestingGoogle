import { sleep } from "k6";
import { options } from './options.js';
import { Login } from "./data/login.js";
import { Update } from "./data/update.js";
export { options };

//for
//ready data
//random data
//random data from ready data
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
