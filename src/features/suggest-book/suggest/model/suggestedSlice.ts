import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: SuggestedState = {
  suggested: [],
};

export const suggestedSlice = createSlice({
  name: 'suggested',
  initialState,
  reducers: {
    saveSuggested: (state, { payload }: PayloadAction<SuggestedBook>) => {
      state.suggested.push(payload);
    },
  },
});

export const { saveSuggested } = suggestedSlice.actions;

export const { reducer } = suggestedSlice;

export const selectSuggested = (state: RootState) => state.suggested;
