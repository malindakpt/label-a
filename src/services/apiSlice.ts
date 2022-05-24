import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getURL } from './apiSliceUtil';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ws.audioscrobbler.com/' }),
  endpoints: (builder) => ({
    searchArtists: builder.query({
      query: (args: FetchArgs) => getURL('artist.search', `artist=${args.params?.name}&page=${args.params?.page}&limit=${args.params?.limit}`),
      transformResponse: (response: { results: any }, meta, arg) => {
        const newData = response?.results?.artistmatches?.artist ?? [];
        return {
          arr: [...(arg.params?.prevData ?? []), ...newData],
          totalSize: response?.results['opensearch:totalResults'] ?? 0
        };
      },
      async onQueryStarted (
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          queryFulfilled,
          getCacheEntry,
          updateCachedData,
        }
      ) {
        console.log('onQueryStarted');
      },
      async onCacheEntryAdded (
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
          updateCachedData,
        }
      ) {
        console.log('onCacheEntryAdded');
      },
    }),
    topAlbums: builder.query({
      query: (args: FetchArgs) => getURL('artist.gettopalbums', `mbid=${args.params?.mbid}&page=${args.params?.page}&limit=${args.params?.limit}`),
      transformResponse: (response: { topalbums: any }, meta, arg) => {
        const newData = response?.topalbums?.album ?? [];
        // allData = [...allData, ...newData];
        return newData;
      },
    }),
    getSongs: builder.query({
      query: () =>
        '2.0?method=library.getartists&api_key=d732731be2f5f0ec4b10e5a3607d7090&user=malinda&format=json',
    }),
  }),
});

export const { useGetSongsQuery, useSearchArtistsQuery, useTopAlbumsQuery } = apiSlice;
