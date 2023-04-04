import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

// import books from 'shared/api/books.json';
import BookListSection from './BookListSection';

describe('BooksList', () => {
  it('should render all books', () => {
    render(<BookListSection />);
    const renderedBooks = screen.getAllByTestId('book-item');

    // expect(renderedBooks).toHaveLength(books.items.length);
  });
});
