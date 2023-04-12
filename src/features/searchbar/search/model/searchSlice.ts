import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: {
  results: Book[];
  searchValue: string;
} = {
  results: [],
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export const { reducer } = searchSlice;

export const selectSearch = (state: RootState) => state.search;
