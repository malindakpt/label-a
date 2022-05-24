import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll';

export interface Props {
  data: any[];
  onQueryParamChange: (params: any) => void;
}
const ArtistSearch: React.FC<Props> = ({ data, onQueryParamChange }: Props) => {
  const handleChange = (e: any) => {
    const name = e.target.value;
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
            <Link to={`/artistAlbums/${ele.mbid}`}>{ele.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withScroll(ArtistSearch, useSearchArtistsQuery);
