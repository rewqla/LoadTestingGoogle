import { Client, Stream } from "k6/net/grpc";
import { sleep } from "k6";

const client = new Client();
client.load(["definitions"], "./../specs/hello.proto");

export const BidiHello = () => {
  client.connect("localhost:9000", { plaintext: true, reflect: true });

  const stream = new Stream(client, "hello.HelloService/BidiHello");

  stream.on("data", (response) => {
    console.log(`Received reply: ${JSON.stringify(response)} ${JSON.stringify(response.reply)}`);
  });

  stream.on("error", (err) => {
    console.error(`Stream error: ${JSON.stringify(err)}`);
  });

  stream.on("end", () => {
    console.log("All done");
    client.close();
  });

  messageSender(stream, "Stream and another stream");

  stream.end();
};

const messageSender = (stream, message) => {
  console.log(`Sending message: ${message}`);

  stream.write({ greeting: message });

  sleep(0.5);
};
