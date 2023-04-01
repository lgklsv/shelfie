interface PopupState {
  isVisible: boolean;
  type: 'success' | 'error';
  message: string;
}

type PopupContextObj = {
  popup: PopupState;
  emitPopup: (popupType: PopupState) => void;
};
