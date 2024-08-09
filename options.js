export const options = {
    stages: [
      { duration: '10s', target: 20 }, // ramp up to 20 users
      { duration: '20s', target: 20 },  // stay at 20 users for 20 s
      { duration: '15s', target: 0 },  // ramp down to 0 users
    ],
    thresholds:{
      http_req_failed: ['rate<0.30'], // http errors should be less than 30%
      http_req_duration: ['p(90) < 150','p(95)<200'], // 95% of requests should be below 200ms, 90% of requests should be below 150ms
      iterations: ['count>500'] //must be more than 500 iterations
    }
  };