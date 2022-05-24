/* eslint-disable no-unused-vars */
import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { FetchArgs } from '@reduxjs/toolkit/query/react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Link } from 'react-router-dom';

export const ArtistSearch = () => {
  const [name, setName] = useState('as');
  const [param, setParam] = useState<FetchArgs>({
    url: '',
    params: { name, page: 1, limit: 50 },
  });
  // TODO: decide the hasNext page dynamically
  const hasNextPage = true;

  const { data, refetch, isLoading, isFetching } = useSearchArtistsQuery(param);

  const loadMore = (): void => {
    setParam((prev) => {
      const next = { ...prev };
      next.params = { ...prev.params };
      if (next.params) {
        next.params.page = next.params.page + 1;
      }
      console.log('load more ', next.params?.page);
      return next;
    });
  };

  const [sentryRef] = useInfiniteScroll({
    loading: isFetching,
    hasNextPage,
    onLoadMore: loadMore,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: false,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 400px 0px',
  });

  const handleChange = (e: any) => {
    console.log('v=', e.target.value);
    const name = e.target.value;
    setName(name);
    refetch();
  };

  return (
    <div>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        onChange={handleChange}
      />
      <h2 style={{ position: 'fixed' }}>Length: {data?.length}</h2>
      <div>
        {data?.map((ele: any) => (
          <div key={ele.url}>
            <Link to={`/artist/${ele.mbid}`}>{ele.name}</Link>
          </div>
        ))}
      </div>
      {(isFetching || hasNextPage) && (
        <div ref={sentryRef}>
          <h1>Loading Screen</h1>
        </div>
      )}
    </div>
  );
};
