import { check } from 'k6';

export const checkResponseStatus = (response, label) => {
  return check(response, {
    [`${label} - Status is 200`]: (res) => res.status === 200,
    // r.body.includes('Collection of simple web-pages suitable for load testing'),
  });
};
