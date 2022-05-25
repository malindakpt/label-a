import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll';
import { ArtistCard } from '../ArtistCard/ArtistCard';
import styled from 'styled-components';

export interface Props {
  data: any[];
  onQueryParamChange: (params: any) => void;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
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
      <Container>
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
      </Container>
    </div>
  );
};

export default withScroll(ArtistSearch, useSearchArtistsQuery);
