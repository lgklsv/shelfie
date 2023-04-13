import { Provider } from 'react-redux';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { store } from 'app/store';
import PopupNotification from './Popup';

describe('Popup Notification', () => {
  it('should render and have provided text', () => {
    render(
      <Provider store={store}>
        <PopupNotification type="success" message="Success, you are amazing" />
      </Provider>
    );

    expect(screen.getByText(/Success/i)).toBeInTheDocument();
  });
  it('should call unmount function after 3s and hide popup', () => {
    vi.useFakeTimers();

    const mockDispatch = vi.fn();
    store.dispatch = mockDispatch;

    render(
      <Provider store={store}>
        <PopupNotification type="success" message="Success, you are amazing" />
      </Provider>
    );

    expect(screen.getByText(/Success, you are amazing/i)).toBeInTheDocument();
    vi.advanceTimersByTime(3000);

    expect(mockDispatch).toBeCalledTimes(1);

    expect(mockDispatch).toBeCalledWith({
      payload: {
        isVisible: false,
        message: '',
        type: 'error',
      },
      type: 'notification/emitNotification',
    });
  });
});
