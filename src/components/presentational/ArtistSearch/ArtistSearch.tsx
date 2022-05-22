import { useSearchArtistsQuery } from '../../../services/apiSlice';
import Button from '@mui/material/Button';

export const ArtistSearch = () => {
  const name = 'a';
  const { data } = useSearchArtistsQuery(name);
  console.log(data);
  return <div>Artist search <Button>Hi</Button></div>;
};
