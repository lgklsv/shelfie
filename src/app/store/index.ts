import { configureStore } from '@reduxjs/toolkit';

import { notificationSlice } from 'features/notification/popup';
import { searchSlice } from 'features/searchbar/search';
import { suggestedSlice } from 'features/suggest-book/suggest';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    suggested: suggestedSlice.reducer,
    notification: notificationSlice.reducer,
  },
});
