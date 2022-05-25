import { useAlbumDetailsQuery } from '../../../services/apiSlice';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll/withScroll';
import { ArtistCard } from '../../presentational/ArtistCard/ArtistCard';
import { FluidGrid } from '../../styled/FluidGrid';

export interface Props {
  data: any[];
  onQueryParamChange: (params: any) => void;
}
const AlbumDetails: React.FC<Props> = ({ data, onQueryParamChange }: Props) => {
  const { artist, album } = useParams();

  useEffect(() => {
    onQueryParamChange({ artist, album });
  }, []);

  return (
    <FluidGrid>
      {data?.map((ele: any) => (
        <div key={ele.url}>
          <ArtistCard
            title={ele.name}
            // TODO: read the image index in a better way
            image={''}
            url={ele.url}
            description={''}
          />
        </div>
      ))}
    </FluidGrid>
  );
};

export default withScroll(AlbumDetails, useAlbumDetailsQuery);
