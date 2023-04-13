import ReactDOM from 'react-dom';
import { ReactPortal } from 'react';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import { fakeApi } from 'shared/api';
import BookSimpleCard from './BookSimpleCard';

describe('Simple Book Card', () => {
  beforeAll(() => {
    ReactDOM.createPortal = (node) => node as ReactPortal;
  });

  it('should have book image', () => {
    render(<BookSimpleCard data={fakeApi.books.BOOK_FULL} />);
    expect(screen.getByTestId('image')).toBeVisible();
  });
  it('should have hidden book title', () => {
    render(<BookSimpleCard data={fakeApi.books.BOOK_FULL} />);
    const titleElement = screen.getByText(/React.js Essentials/i);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).not.toBeVisible();
  });
  it('should render placeholder if title is empty', () => {
    render(<BookSimpleCard data={fakeApi.books.BOOK_NO_TITLE} />);
    const titleElement = screen.getByText(/Title is not available/i);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).not.toBeVisible();
  });
  it('should open modal by clicking on the book', () => {
    render(
      <Provider store={store}>
        <BookSimpleCard data={fakeApi.books.BOOK_FULL} />
      </Provider>
    );

    const bookElement = screen.getByTestId('image')
      .parentElement as HTMLElement;

    fireEvent.click(bookElement);

    expect(screen.getByTestId('modal').getAttribute('class')).toMatch(
      /active/i
    );
  });
});
