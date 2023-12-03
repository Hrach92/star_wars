import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starWars = createApi({
  reducerPath: "characters",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_ENDPOINT}` }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: (page = 1) => `people?page=${page}`,
    }),
    findCharacter: build.query({
      query: (text = "") => `people?search=${text}`,
    }),
    getCharacterById: build.query({
      query: (id = "") => `people/${id}`,
    }),
  }),
});
export const {
  useGetCharactersQuery,
  useFindCharacterQuery,
  useGetCharacterByIdQuery,
} = starWars;
