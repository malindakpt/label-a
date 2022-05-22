import { useSearchArtistsQuery } from '../../../services/apiSlice';
import { TextField } from '@mui/material';
import { useState } from 'react';

export const ArtistSearch = () => {
  const [name, setName] = useState('');
  const { data, refetch } = useSearchArtistsQuery(name);
  console.log(data);

  const arr = data?.results?.artistmatches?.artist;

  const handleChange = (e: any) => {
    console.log('v=', e.target.value);
    const name = e.target.value;
    setName(name);
    refetch();
  };
  return (
    <div>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        onChange={handleChange}
      />
      <div>
        {arr?.map((ele: any) => (
          <div key={ele.mbid}>{ele.name}</div>
        ))}
      </div>
    </div>
  );
};
