import { getHeaders } from "../headers.js";
import { checkResponseStatus } from "../check-response.js";
import http from "k6/http";
import { randomItemFromArray } from "../utils/randomItemFromArray.js";

const updateData = JSON.parse(open("../data/updatedata.json"));

export const Update = (updateRequest) => {
  console.log("-----Update-----");

  const randomUpdateDataRequest = randomItemFromArray(updateData);

  updateRequest.title = randomUpdateDataRequest.title;
  updateRequest.description = randomUpdateDataRequest.description;
  updateRequest.reviewerName = randomUpdateDataRequest.reviewerName;

  console.log(updateRequest);

  const randomId = Math.floor(Math.random() * 195);
  const url = `https://dummyjson.com/products/${randomId}`;

  const updateResponse = http.put(
    url,
    JSON.stringify(updateRequest),
    getHeaders
  );

  checkResponseStatus(updateResponse, "Update");
};
