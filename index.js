import { sleep } from 'k6';
import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 20 }, // ramp up to 20 users
    { duration: '20s', target: 20 },  // stay at 20 users for 20 s
    { duration: '15s', target: 0 },  // ramp down to 0 users
  ],
};

export default function () {
    const url='https://dummyjson.com/auth/login';

    const payload = JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
    });
    
    const headers = {
        'Content-Type': 'application/json',
    };

    const res = http.post(url, payload, { headers: headers });

    check(res, {
      'Status is 200': (response) => response.status === 200,
    }); 

    sleep(1);
}
