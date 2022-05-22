import { TopBar } from './components/presentational/TopBar/TopBar';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './services/apiSlice';
import React from 'react';
import { ArtistSearch } from './components/presentational/AristSearch/ArtistSearch';

const App = () => {
  return (
    <ApiProvider api={apiSlice}>
      <TopBar />
      <ArtistSearch />
    </ApiProvider>
  );
};

export default App;
