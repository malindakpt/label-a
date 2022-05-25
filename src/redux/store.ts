import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../services/appSlice';

export const store = configureStore({
  reducer: {
    appReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type Rspatch = typeof store.dispatch;
