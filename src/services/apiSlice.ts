import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getURL = (method: string, params: string) => {
  return `2.0?method=${method}&api_key=d732731be2f5f0ec4b10e5a3607d7090&${params}&format=json`;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ws.audioscrobbler.com/' }),
  endpoints: (builder) => ({
    searchArtists: builder.query({
      query: (name: string) => getURL('artist.search', `artist=${name}`),
    }),
    getSongs: builder.query({
      query: () =>
        '2.0?method=library.getartists&api_key=d732731be2f5f0ec4b10e5a3607d7090&user=malinda&format=json',
    }),
  }),
});

export const { useGetSongsQuery, useSearchArtistsQuery } = apiSlice;
