import { useGetSongsQuery } from '../../../services/apiSlice';
import React from 'react';

export const TopBar = () => {
  const { data } = useGetSongsQuery('asd');
  console.log(data);

  return <div>This is TOPBAR</div>;
};
