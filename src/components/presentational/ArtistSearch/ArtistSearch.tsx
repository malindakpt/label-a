import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll';
import { ArtistCard } from '../ArtistCard/ArtistCard';
import { FluidGrid } from '../../styled/FluidGrid';

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
        label="Enter Artist Name"
        variant="standard"
        onChange={handleChange}
      />
      <FluidGrid>
        {data?.map((ele: any) => (
          <div key={ele.url}>
            <Link to={`/artistAlbums/${ele.mbid}`}>
              <ArtistCard
                title={ele.name}
                image={ele.image[2]['#text']}
                url={ele.url}
                description={`listeners: ${ele.listeners}`}
              />
            </Link>
          </div>
        ))}
      </FluidGrid>
    </div>
  );
};

export default withScroll(ArtistSearch, useSearchArtistsQuery);
