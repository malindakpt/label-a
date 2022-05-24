/* eslint-disable no-unused-vars */
import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll';

export interface Props {
  data: any[];
  onQueryParamChange: (params: any) => void;
  refetch: () => {};
}
const ArtistSearch: React.FC<Props> = ({ data, onQueryParamChange }: Props) => {
  const [name, setName] = useState('as');

  console.log(data);

  const handleChange = (e: any) => {
    console.log('v=', e.target.value);
    const name = e.target.value;
    setName(name);
    // refetch();
    onQueryParamChange({ name });
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
            {ele.mbid ? (
              <Link to={`/artistAlbums/${ele.mbid}`}>{ele.name}</Link>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withScroll(ArtistSearch, useSearchArtistsQuery);
