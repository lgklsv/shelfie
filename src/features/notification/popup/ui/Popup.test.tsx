import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PopupNotification from './Popup';
import { PopupContext } from '../model/popup-context';

const popupMockDefaultValue: PopupContextObj = {
  popup: {
    isVisible: false,
    type: 'error',
    message: '',
  },
  emitPopup: vi.fn(),
};

describe('Popup Notification', () => {
  it('should render and have provided text', () => {
    render(
      <PopupContext.Provider value={popupMockDefaultValue}>
        <PopupNotification type="success" message="Success, you are amazing" />
      </PopupContext.Provider>
    );

    expect(screen.getByText(/Success/i)).toBeInTheDocument();
  });
  it('should call unmount fuction after 3s and hide popup', () => {
    vi.useFakeTimers();

    render(
      <PopupContext.Provider value={popupMockDefaultValue}>
        <PopupNotification type="success" message="Success, you are amazing" />
      </PopupContext.Provider>
    );

    expect(screen.getByText(/Success, you are amazing/i)).toBeInTheDocument();
    vi.advanceTimersByTime(3000);

    expect(popupMockDefaultValue.emitPopup).toBeCalledWith({
      isVisible: false,
      type: 'error',
      message: '',
    });
  });
});
