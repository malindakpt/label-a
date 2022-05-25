import { useTopAlbumsQuery } from '../../../services/apiSlice';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll/withScroll';
import { ArtistCard } from '../../presentational/ArtistCard/ArtistCard';
import { FluidGrid } from '../../styled/FluidGrid';

export interface Props {
  data: any[];
  onQueryParamChange: (params: any) => void;
}
const ArtistAlbums: React.FC<Props> = ({ data, onQueryParamChange }: Props) => {
  const { mbid } = useParams();

  useEffect(() => {
    onQueryParamChange({ mbid });
  }, []);

  return (
    <FluidGrid>
      {data?.map((ele: any) => (
        <div key={ele.url}>
          <ArtistCard
            title={ele.name}
            image={ele.image[2]['#text']}
            url={ele.url}
            description={`listeners: ${ele.listeners}`}
          />
        </div>
      ))}
    </FluidGrid>
  );
};

export default withScroll(ArtistAlbums, useTopAlbumsQuery);
