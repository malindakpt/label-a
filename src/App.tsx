// import { useEffect } from 'react';
// import { Provider } from 'react-redux';
import { TopBar } from './components/presentational/TopBar/TopBar';
// import { useGetSongsQuery } from './services/apiSlice';
// import { store } from './redux/store';
// import { useGetPokemonByNameQuery } from './services/pokemon';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './services/apiSlice';
import React from 'react';

const App = () => {
  // const { data, isLoading } = useGetSongsQuery('malinda', {});
  // useEffect(() => {
  //   console.log('useEffect');
  // }, []);

  return (
    <ApiProvider api={apiSlice}>
      <TopBar />
    </ApiProvider>
  );
};

export default App;
