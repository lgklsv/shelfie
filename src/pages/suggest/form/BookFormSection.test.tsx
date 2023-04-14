import { Provider } from 'react-redux';
import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { store } from 'app/store';
import { notificationSlice } from 'features/notification/popup';
import BookFormSection from './BookFormSection';

describe('Book form section', () => {
  it('should render book form and not show popup notification by render', () => {
    render(
      <Provider store={store}>
        <BookFormSection />
      </Provider>
    );

    const formTitle = screen.getByText(/Book details/i);
    const popup = screen.queryByTestId('popup');

    expect(formTitle).toBeInTheDocument();
    expect(popup).toBeNull();
  });

  it('should show popup notification is state isVisible=true', () => {
    store.dispatch(
      notificationSlice.emitNotification({
        isVisible: true,
        type: 'success',
        message: 'You are amazing',
      })
    );

    render(
      <Provider store={store}>
        <BookFormSection />
      </Provider>
    );

    expect(screen.getByTestId('popup')).toBeVisible();
  });

  it('should show error popup on incorrect form submit', () => {
    const mockDispatch = vi.fn();
    store.dispatch = mockDispatch;

    render(
      <Provider store={store}>
        <BookFormSection />
      </Provider>
    );

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    const popup = screen.queryByText(/All form fields are required !/i);

    expect(mockDispatch).toBeCalledWith({
      payload: {
        isVisible: true,
        type: 'error',
        message: 'All form fields are required !',
      },
      type: 'notification/emitNotification',
    });
    expect(popup).toBeNull();
  });
});
