import { Client, Stream  } from "k6/net/grpc";
import { check, sleep } from 'k6';

const client = new Client();
client.load(["definitions"], "./../specs/hello.proto");

export const LotsOfReplies = () => {
    client.connect("localhost:9000", { plaintext: true });

    const stream = new Stream("hello.HelloService/LotsOfReplies");
    stream.write({ greeting: "Hello from K6" });

    stream.on('data', (response) => {
        console.log(`Received reply: ${response.reply}`);
    });

    stream.on('error', (err) => {
        console.error(`Stream error: ${err}`);
    });

    stream.on('end', () => {
        console.log('Stream ended');
        client.close();
    });
    stream.end();

    sleep(1);  // Adjust this duration based on how long you expect the stream to take
};

