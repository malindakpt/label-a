import { TopBar } from './components/presentational/TopBar/TopBar';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './services/apiSlice';
import React from 'react';
import { ArtistSearch } from './components/presentational/ArtistSearch/ArtistSearch';
import ResponsiveAppBar from './components/presentational/AppBar/AppBar';

const App = () => {
  return (
    <ApiProvider api={apiSlice}>
      <ResponsiveAppBar />
      <TopBar />
      <ArtistSearch />
    </ApiProvider>
  );
};

export default App;
