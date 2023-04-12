import { configureStore } from '@reduxjs/toolkit';

import { notificationSlice } from 'features/notification/popup';
import { searchSlice } from 'features/searchbar/search';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    // form: formModel.reducer,
    notification: notificationSlice.reducer,
  },
});
