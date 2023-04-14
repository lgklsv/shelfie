import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: NotificationSlice = {
  notification: {
    isVisible: false,
    type: 'error',
    message: '',
  },
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    emitNotification: (
      state,
      { payload }: PayloadAction<NotificationState>
    ) => {
      state.notification = payload;
    },
  },
});

export const { emitNotification } = notificationSlice.actions;

export const { reducer } = notificationSlice;

export const selectNotification = (state: RootState) => state.notification;
