import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll/withScroll';
import { ArtistCard } from '../../presentational/ArtistCard/ArtistCard';
import { FluidGrid } from '../../styled/FluidGrid';
import { RightAligned } from '../../styled/RightAligned';
import { IAppState } from '../../../interfaces/IAppState';
import { artistSearch } from '../../../services/appSlice';
import { connect } from 'react-redux';
import { ArtistSearchProps } from './Types';

const ArtistSearch: React.FC<ArtistSearchProps> = ({
  data,
  onQueryParamChange,
  artistSearch,
  artistSearchKey,
}: ArtistSearchProps) => {
  // TODO: introduce a debounce method to avoid unnecessary server requests

  const handleChange = (e: any) => {
    const name = e.target.value;
    onQueryParamChange({ name });
    artistSearch(name);
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
            <Link
              to={`/artistAlbums/${ele.mbid}`}
              style={{ textDecoration: 'none' }}
            >
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

const Scrollable = withScroll(ArtistSearch, useSearchArtistsQuery);

export const mapStateToProps = (state: IAppState) => ({
  artistSearchKey: state.artistSearchKey,
});
export const actionCreators = {
  artistSearch,
};

export const connector = connect(mapStateToProps, actionCreators);
export default connector(Scrollable);
