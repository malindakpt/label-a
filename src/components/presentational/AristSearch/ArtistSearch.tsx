import { useSearchArtistsQuery } from '../../../services/apiSlice';

export const ArtistSearch = () => {
  const name = 'cha';
  const { data } = useSearchArtistsQuery(name);
  console.log(data);
  return <div>Artist search</div>;
};
