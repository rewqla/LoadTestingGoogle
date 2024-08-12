import { Client, StatusOK } from "k6/net/grpc";
import { check, sleep } from 'k6';

const client = new Client();
client.load(["definitions"], "./../specs/hello.proto");

export const SayHello = () => {
    client.connect("localhost:9000", { plaintext: true });
  
    const data = { greeting: "Bert" };
    const response = client.invoke("hello.HelloService/SayHello", data);
  
    check(response, {
      "status is OK": (r) => r && r.status === StatusOK,
    });
  
    console.log(JSON.stringify(response.message));
  
    client.close();
    sleep(1);
  };
  