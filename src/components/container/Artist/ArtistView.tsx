import { FetchArgs } from '@reduxjs/toolkit/dist/query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTopAlbumsQuery } from '../../../services/apiSlice';

export const Artist = () => {
  const { mbid } = useParams();
  const [param] = useState<FetchArgs>({
    url: '',
    params: { mbid, page: 1, limit: 50 },
  });
  // eslint-disable-next-line no-unused-vars
  const { data, isFetching } = useTopAlbumsQuery(param);
  console.log(data);
  return <div>Album view {mbid}</div>;
};
