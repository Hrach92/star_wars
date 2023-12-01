import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starWars = createApi({
  reducerPath: "characters",
  tagTypes: ["characters"],
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_ENDPOINT}` }),
  keepUnusedDataFor: 30,
  endpoints: (build) => ({
    getCharacters: build.query({
      query: (page = 1) => `people?page=${page}`,
    }),
  }),
});
export const { useGetCharactersQuery } = starWars;
