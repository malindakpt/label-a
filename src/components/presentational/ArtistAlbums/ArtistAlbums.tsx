import { useTopAlbumsQuery } from '../../../services/apiSlice';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { withScroll } from '../../hoc/withScroll';

export interface Props {
  data: any[];
  onQueryParamChange: (params: any) => void;
}
const ArtistAlbums: React.FC<Props> = ({ data, onQueryParamChange }: Props) => {
  const { mbid } = useParams();

  useEffect(() => {
    console.log('mbid', mbid);
    onQueryParamChange({ mbid });
  }, []);

  return (
    <div>
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

export default withScroll(ArtistAlbums, useTopAlbumsQuery);
