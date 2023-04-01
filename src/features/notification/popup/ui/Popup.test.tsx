import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PopupNotification from './Popup';

describe('Popup Notification', () => {
  const mockUnmountFn = vi.fn();
  it('should have provided text', () => {
    render(
      <PopupNotification type="success" message="Success, you are amazing" />
    );

    expect(screen.getByText(/Success/i)).toBeInTheDocument();
  });
  it('should call unmount fuction after 3s', () => {
    vi.useFakeTimers();

    render(
      <PopupNotification type="success" message="Success, you are amazing" />
    );

    vi.advanceTimersByTime(3000);
    expect(mockUnmountFn).toHaveBeenCalled();
  });
});
