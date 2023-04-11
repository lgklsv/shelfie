import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { SuggestBookContext } from 'features/suggest-book/suggest';
import { PopupContext } from 'features/notification/popup';
import BookFormSection from './BookFormSection';

const mockCtxValue = {
  books: [],
  addBook: vi.fn(),
};

const popupMockDefaultValue: PopupContextObj = {
  popup: {
    isVisible: false,
    type: 'error',
    message: '',
  },
  emitPopup: vi.fn(),
};

const popupMockVisibleValue: PopupContextObj = {
  popup: {
    isVisible: true,
    type: 'success',
    message: 'You are amazing',
  },
  emitPopup: vi.fn(),
};

describe('Book form section', () => {
  it('should render book form and not show popup notification by render', () => {
    render(
      <PopupContext.Provider value={popupMockDefaultValue}>
        <SuggestBookContext.Provider value={mockCtxValue}>
          <BookFormSection />
        </SuggestBookContext.Provider>
      </PopupContext.Provider>
    );

    const formTitle = screen.getByText(/Book details/i);
    const popup = screen.queryByTestId('popup');

    expect(formTitle).toBeInTheDocument();
    expect(popup).toBeNull();
  });

  it('should show popup notification is state isVisible=true', () => {
    render(
      <PopupContext.Provider value={popupMockVisibleValue}>
        <SuggestBookContext.Provider value={mockCtxValue}>
          <BookFormSection />
        </SuggestBookContext.Provider>
      </PopupContext.Provider>
    );

    expect(screen.getByTestId('popup')).toBeVisible();
  });

  it('should show error popup on incorrect form submit', () => {
    render(
      <PopupContext.Provider value={popupMockDefaultValue}>
        <SuggestBookContext.Provider value={mockCtxValue}>
          <BookFormSection />
        </SuggestBookContext.Provider>
      </PopupContext.Provider>
    );

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    const popup = screen.queryByText(/All form fields are required !/i);

    expect(popupMockDefaultValue.emitPopup).toBeCalledWith({
      isVisible: true,
      type: 'error',
      message: 'All form fields are required !',
    });
    expect(popup).toBeNull();
  });
});
