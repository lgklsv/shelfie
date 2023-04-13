import { configureStore } from '@reduxjs/toolkit';

import { notificationSlice } from 'features/notification/popup';
import { searchSlice } from 'features/searchbar/search';
import { suggestedSlice } from 'features/suggest-book/suggest';
import { googleApi } from 'shared/api';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    suggested: suggestedSlice.reducer,
    notification: notificationSlice.reducer,
    [googleApi.books.reducerPath]: googleApi.books.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(googleApi.books.middleware),
});
