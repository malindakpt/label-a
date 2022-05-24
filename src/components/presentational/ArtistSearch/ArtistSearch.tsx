/* eslint-disable no-unused-vars */
import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { FetchArgs } from '@reduxjs/toolkit/query/react';
import { Link } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll';

export interface Props {
  data: any[];
  // params: FetchArgs;
  refetch: () => {};
}
const ArtistSearch: React.FC<Props> = ({ data, refetch }: Props) => {
  const [name, setName] = useState('as');
  // const [param, setParam] = useState<FetchArgs>({
  //   url: '',
  //   params: { name, page: 1, limit: 50 },
  // });
  // TODO: decide the hasNext page dynamically
  // const hasNextPage = true;

  // const { data, refetch, isLoading, isFetching } = useSearchArtistsQuery(param);

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
    </div>
  );
};

export default withScroll(ArtistSearch, useSearchArtistsQuery);
