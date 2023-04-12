import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from 'features/searchbar/search';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    // form: formModel.reducer,
    // notification: notificationModel.reducer,
  },
});
