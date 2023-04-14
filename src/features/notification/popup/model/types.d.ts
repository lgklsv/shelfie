interface NotificationState {
  isVisible: boolean;
  type: 'success' | 'error';
  message: string;
}

interface NotificationSlice {
  notification: NotificationState;
}
