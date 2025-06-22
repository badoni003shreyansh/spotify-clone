/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "shazam-core.p.rapidapi.com",
    "x-rapidapi-key": "0dfbbce60bmsh3b198053e395770p194f3ejsn65357f3dd296",
  },
};

fetch(
  "https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=DZ",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
});
