import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SuggestBookContext } from 'features/suggest-book/suggest';
import { fakeApi } from 'shared/api';
import SuggestedSection from './SuggestedSection';

const mockAddBook = vi.fn();

describe('SuggestedSection', () => {
  it('should render all suggested books', () => {
    render(
      <SuggestBookContext.Provider
        value={{
          books: fakeApi.suggestedBooks.BOOK_LIST,
          addBook: mockAddBook,
        }}
      >
        <SuggestedSection />
      </SuggestBookContext.Provider>
    );
    const renderedBooks = screen.getAllByTestId('book-item');

    expect(renderedBooks).toHaveLength(fakeApi.suggestedBooks.BOOK_LIST.length);
  });
});
