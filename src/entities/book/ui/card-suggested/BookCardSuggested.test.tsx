import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { fakeApi } from 'shared/api';
import BookCardSuggested from './BookCardSuggested';

describe('BookCardSuggested', () => {
  it('should render img', () => {
    render(<BookCardSuggested data={fakeApi.suggestedBooks.BOOK_FULL} />);

    expect(screen.getByTestId('image')).toBeVisible();
  });

  it('should render book title', () => {
    render(<BookCardSuggested data={fakeApi.suggestedBooks.BOOK_FULL} />);

    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
  });
});
