import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.breakingbadapi.com/api/",
  }),
  tagTypes: ["Characters"],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (name) => `/characters?name=${name}`,
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "Characters", id })) : [],
    }),
  }),
});

export const { useGetCharactersQuery } = characterApi;
export const { reducerPath, reducer, middleware } = characterApi;
