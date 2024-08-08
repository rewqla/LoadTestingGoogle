
import { getHeaders } from "../headers.js";
import { checkResponseStatus } from "../check-response.js";
import http from "k6/http";

export const Update = (updateRequest) => {
  console.log("-----Update-----");

  const randomId = Math.floor(Math.random() * 195);
  const url=`https://dummyjson.com/products/${randomId}`;

  const updateResponse = http.put(url, updateRequest, getHeaders);

  checkResponseStatus(updateResponse, "Update");
};
