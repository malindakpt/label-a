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
    onQueryParamChange({ mbid });
  }, []);

  return (
    <div>
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
