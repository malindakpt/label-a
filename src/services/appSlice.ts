import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAppState } from '../interfaces/IAppState'

const initialState: IAppState = {
  artistSearchKey: '',
}

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    artistSearch: (state, action: PayloadAction<string>) => {
      state.artistSearchKey = action.payload;
    },
  },
});

export const { artistSearch } = appSlice.actions;

export default appSlice.reducer;
