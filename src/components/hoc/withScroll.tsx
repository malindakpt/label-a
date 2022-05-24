import React, { useState } from 'react';
import { FetchArgs } from '@reduxjs/toolkit/query/react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Props } from '../presentational/ArtistSearch/ArtistSearch';
import { hasNextPage } from './withScrollUtil';

export interface DataApiArgs extends FetchArgs {
  params: any;
}

export const withScroll = (Wrapped: React.FC<Props>, useData: any) => {
  let hasNext = false;
  const ScrollableComponent = () => {
    const [baseQueryParams, setBaseQueryParams] = useState<DataApiArgs>({
      url: '',
      params: { page: 1, limit: 50 },
    });

    const { data, refetch, isFetching } = useData(baseQueryParams);

    const loadMore = (): void => {
      setBaseQueryParams((prev) => {
        const next = { ...prev };
        next.params = { ...prev.params, isMorePage: true };
        if (next.params) {
          next.params.page = next.params.page + 1;
        }
        return next;
      });
    };

    const handleQueryParamChange = (qParam: any) => {
      setBaseQueryParams((prev) => {
        const next = { ...prev };
        next.params = { ...prev.params, ...qParam, isMorePage: false };
        return next;
      });
    };

    const [sentryRef] = useInfiniteScroll({
      loading: isFetching,
      hasNextPage: hasNext,
      onLoadMore: loadMore,
      // When there is an error, we stop infinite loading.
      // It can be reactivated by setting "error" state as undefined.
      disabled: false,
      // `rootMargin` is passed to `IntersectionObserver`.
      // We can use it to trigger 'onLoadMore' when the sentry comes near to become
      // visible, instead of becoming fully visible on the screen.
      rootMargin: '0px 0px 400px 0px',
    });

    if (data) {
      hasNext = hasNextPage(
        baseQueryParams.params.page,
        baseQueryParams.params.limit,
        data.totalSize
      );

      return (
        <>
          <Wrapped
            data={data.arr}
            refetch={refetch}
            onQueryParamChange={handleQueryParamChange}
          ></Wrapped>
          {(isFetching || hasNext) && (
            <div ref={sentryRef}>
              <h1>Loading Screen</h1>
            </div>
          )}
        </>
      );
    } else {
      return <div>Loading screen</div>;
    }
  };
  return ScrollableComponent;
};
