import { TopBar } from './components/presentational/TopBar/TopBar';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './services/apiSlice';
import { Provider } from 'react-redux';
import ResponsiveAppBar from './components/presentational/AppBar/AppBar';
import { RoutesContainer } from './RoutesContainer';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <ResponsiveAppBar />
        <TopBar />
        <RoutesContainer />
      </ApiProvider>
    </Provider>
  );
};

export default App;
