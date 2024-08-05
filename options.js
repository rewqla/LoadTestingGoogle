export const options = {
    stages: [
      { duration: '10s', target: 20 }, // ramp up to 20 users
      { duration: '20s', target: 20 },  // stay at 20 users for 20 s
      { duration: '15s', target: 0 },  // ramp down to 0 users
    ],
  };