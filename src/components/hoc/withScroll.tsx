import React, { useState } from 'react';
import { FetchArgs } from '@reduxjs/toolkit/query/react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Props } from '../presentational/ArtistSearch/ArtistSearch';

export const withScroll = (Wrapped: React.FC<Props>, useData: any) => {
  const ScrollableComponent = () => {
    const [hasNextPage] = useState(false); // TODO: set hasNextPage
    const [params, setParams] = useState<FetchArgs>({
      url: '',
      params: { name: 'as', page: 1, limit: 50 },
    });

    const { data, refetch, isFetching } = useData(params);

    const loadMore = (): void => {
      setParams((prev) => {
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

    return (
      <>
        <Wrapped data={data} refetch={refetch}></Wrapped>
        {(isFetching || hasNextPage) && (
          <div ref={sentryRef}>
            <h1>Loading Screen</h1>
          </div>
        )}
      </>
    );
  };
  return ScrollableComponent;
};
