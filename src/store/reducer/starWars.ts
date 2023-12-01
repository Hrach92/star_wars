/* import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";

const initialState = {};

export const Features = createSlice({
  name: "features",
  initialState,
  reducers: {},
});
export const {} = Features.actions;
export const SampleData = (state: RootState) => state.sampleData;
export default Features.reducer; */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starWars = createApi({
  reducerPath: "characters",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: (page = 1) => `people?page=${page}`,
    }),
  }),
});
export const { useGetCharactersQuery } = starWars;
