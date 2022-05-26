import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import React from 'react';
import { withScroll } from '../../hoc/withScroll/withScroll';
import { ArtistCard } from '../../presentational/ArtistCard/ArtistCard';
import { FluidGrid } from '../../styled/FluidGrid';
import { RightAligned } from '../../styled/RightAligned';
import { CustomLink } from '../../styled/CustomLink';
import logo from '../../../assets/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 100vw;
  height: 75vh;
  position: fixed;
  display: grid;
  place-items: center;

  img {
    width: 200px;
  }
`;
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

      {data?.length > 0 ? (
        <FluidGrid>
          {data?.map((ele: any) => (
            <div key={ele.url}>
              <CustomLink to={`/artistAlbums/${ele.mbid}`}>
                <ArtistCard
                  title={ele.name}
                  image={ele.image[2]['#text']}
                  url={ele.url}
                  description={`listeners: ${ele.listeners}`}
                />
              </CustomLink>
            </div>
          ))}
        </FluidGrid>
      ) : (
        <LogoContainer>
          <img src={logo} alt="logo"></img>
        </LogoContainer>
      )}
    </div>
  );
};

export default withScroll(ArtistSearch, useSearchArtistsQuery);
