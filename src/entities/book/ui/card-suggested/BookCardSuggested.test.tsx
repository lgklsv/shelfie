import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import BookCardSuggested from './BookCardSuggested';

const mockData: SuggestedBook = {
  id: '43242342423',
  title: 'book1',
  authors: ['best author'],
  publishedDate: '2020-02-02',
  isEbook: true,
  categories: ['computers'],
  imageLinks: {
    thumbnail:
      'https://i.guim.co.uk/img/media/51e82d1479c8bec3fbf6e620f44199490171ac66/433_134_1145_1723/master/1145.jpg?width=700&quality=85&auto=format&fit=max&s=ba7fd94e443ce0193c3a42095c9b4736',
  },
};

const mockData2: SuggestedBook = {
  id: '43242342423',
  title: '',
  authors: ['best author'],
  publishedDate: '2020-02-02',
  isEbook: true,
  categories: ['computers'],
  imageLinks: {
    thumbnail:
      'https://i.guim.co.uk/img/media/51e82d1479c8bec3fbf6e620f44199490171ac66/433_134_1145_1723/master/1145.jpg?width=700&quality=85&auto=format&fit=max&s=ba7fd94e443ce0193c3a42095c9b4736',
  },
};

describe('BookCardSuggested', () => {
  it('should render img', () => {
    render(<BookCardSuggested data={mockData} />);

    expect(screen.getByTestId('image')).toBeVisible();
  });

  it('should render book title', () => {
    render(<BookCardSuggested data={mockData} />);

    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
  });

  it('should render "No title available" if title is empty', () => {
    render(<BookCardSuggested data={mockData2} />);

    expect(screen.getByText(/No title available/i)).toBeInTheDocument();
  });
});
