import { sleep } from 'k6';
import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 20 }, // ramp up to 20 users
    { duration: '20s', target: 20 },  // stay at 20 users for 20 s
    { duration: '15s', target: 0 },  // ramp down to 0 users
  ],
};
//delete 
//put
//refactor into a modules
//for 
//some request in one time (using functions)
//ready data 
//random data
//random data from ready data
//grpc
export default function () {
    const randomId = Math.floor(Math.random() * 195);
    const url=`https://dummyjson.com/products/${randomId}`;

    const res = http.del(url);
    
    console.log(`Deleting product with ID: ${randomId}`);

    check(res, {
      'Status is 200': (response) => response.status === 200,
      'Is deleted': (response) => JSON.parse(response.body).isDeleted === true
    }); 

    sleep(1);
}
