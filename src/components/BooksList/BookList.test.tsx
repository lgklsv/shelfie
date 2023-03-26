import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import books from '../../books.json';
import BooksList from './BooksList';

describe('BooksList', () => {
  it('should render all books', () => {
    render(<BooksList />);
    const renderedBooks = screen.getAllByTestId('book-item');

    expect(renderedBooks).toHaveLength(books.items.length);
  });
});
