import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PopupNotification from './PopupNotification';

describe('Popup Notification', () => {
  const mockUnmountFn = vi.fn();
  it('should have provided text', () => {
    render(
      <PopupNotification
        type="success"
        message="Success, you are amazing"
        unmountMe={mockUnmountFn}
      />
    );

    expect(screen.getByText(/Success/i)).toBeInTheDocument();
  });
  it('should call unmount fuction after 3s', () => {
    vi.useFakeTimers();

    render(
      <PopupNotification
        type="success"
        message="Success, you are amazing"
        unmountMe={mockUnmountFn}
      />
    );

    vi.advanceTimersByTime(3000);
    expect(mockUnmountFn).toHaveBeenCalled();
  });
});
