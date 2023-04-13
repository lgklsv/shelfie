import ReactDOM from 'react-dom';
import { ReactPortal } from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { store } from 'app/store';
import { fakeApi } from 'shared/api';
import BookListSection from './BookList';

describe('BooksList', () => {
  beforeAll(() => {
    ReactDOM.createPortal = (node) => node as ReactPortal;
  });

  it('should render all books', async () => {
    render(
      <Provider store={store}>
        <BookListSection />
      </Provider>
    );
    const renderedBooks = await screen.findAllByTestId('book-item');

    expect(renderedBooks).toHaveLength(
      fakeApi.books.RES_BOOK_LIST.items.length
    );
  });
});
