import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { string } from 'shared/lib';
import { fakeApi } from 'shared/api';
import BookCardModal from './BookCardModal';

describe('BookCard', () => {
  it('should have img', () => {
    render(<BookCardModal data={fakeApi.books.BOOK_FULL} />);
    expect(screen.getByRole('img')).toBeVisible();
  });
  it('should render subtitle', () => {
    render(<BookCardModal data={fakeApi.books.BOOK_FULL} />);
    expect(screen.getByTestId('subtitle')).toHaveTextContent(
      string.sliceText(fakeApi.books.BOOK_FULL.volumeInfo.subtitle, 100)
    );
  });
  it('should render description if there is not subtitle', () => {
    render(<BookCardModal data={fakeApi.books.BOOK_NO_TITLE} />);
    expect(screen.getByTestId('subtitle')).toHaveTextContent(
      string.sliceText(fakeApi.books.BOOK_FULL.volumeInfo.description, 100)
    );
  });
});
