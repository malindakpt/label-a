import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll/withScroll';
import { ArtistCard } from '../../presentational/ArtistCard/ArtistCard';
import { FluidGrid } from '../../styled/FluidGrid';
import { RightAligned } from '../../styled/RightAligned';

export interface Props {
  data: any[];
  onQueryParamChange: (params: any) => void;
}

const ArtistSearch: React.FC<Props> = ({ data, onQueryParamChange }: Props) => {
  // TODO: introduce a debounce method to avoid unnecessary server requests

  const handleChange = (e: any) => {
    const name = e.target.value;
    onQueryParamChange({ name });
  };

  return (
    <div>
      <RightAligned>
        <TextField
          id="filled-basic"
          label="Search Artist By Name"
          variant="outlined"
          type="search"
          size="small"
          onChange={handleChange}
        />
      </RightAligned>
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