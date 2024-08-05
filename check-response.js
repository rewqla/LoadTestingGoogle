import { check } from 'k6';

export const checkResponseStatus = (response) => {
  return check(response, {
    "Status is 200": (res) => res.status === 200,
  });
};
