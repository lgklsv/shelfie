import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    search: searchModel.reducer,
    form: formModel.reducer,
  },
});
