import { TopBar } from './components/presentational/TopBar/TopBar';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './services/apiSlice';
import React from 'react';
import ResponsiveAppBar from './components/presentational/AppBar/AppBar';
import { RoutesContainer } from './RoutesContainer';

const App = () => {
  return (
    <ApiProvider api={apiSlice}>
      <ResponsiveAppBar />
      <TopBar />
      <RoutesContainer />
    </ApiProvider>
  );
};

export default App;
