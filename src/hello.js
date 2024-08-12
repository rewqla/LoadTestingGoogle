import { BidiHello } from "./gRPC/BidiHello.js";
import { LotsOfReplies } from "./gRPC/LotsOfReplies.js";
import { SayHello } from "./gRPC/SayHello.js";



export const Hello = () => {
    BidiHello();
    // LotsOfReplies();  -- FIX
    // SayHello();
};


//streams request
// request streams
// stream stream
//errors


//------------------------------------
//docker pull grafana/k6-grpcbin
//docker run -it --rm -p 9000:9000 -p 8080:8080 grafana/k6-grpcbin
