import ReactDOM from 'react-dom';
import { ReactPortal } from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { fakeApi } from 'shared/api';
import BookListSection from './BookList';

const queryClient = new QueryClient();

describe('BooksList', () => {
  beforeAll(() => {
    ReactDOM.createPortal = (node) => node as ReactPortal;
  });

  it('should render all books', async () => {
    render(
      <QueryClientProvider client={queryClient} contextSharing>
        <BookListSection />
      </QueryClientProvider>
    );
    const renderedBooks = await screen.findAllByTestId('book-item');

    expect(renderedBooks).toHaveLength(
      fakeApi.books.RES_BOOK_LIST.items.length
    );
  });
});
