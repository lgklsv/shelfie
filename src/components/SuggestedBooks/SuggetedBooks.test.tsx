import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import SuggestedBooks from './SuggestedBooks';

const suggestedBooksMock: SuggestedBook[] = [
  {
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
  },
  {
    id: '23442432432',
    title: 'book2',
    authors: ['best author again'],
    publishedDate: '2000-02-02',
    isEbook: false,
    categories: ['computers'],
    imageLinks: {
      thumbnail:
        'https://i.guim.co.uk/img/media/51e82d1479c8bec3fbf6e620f44199490171ac66/433_134_1145_1723/master/1145.jpg?width=700&quality=85&auto=format&fit=max&s=ba7fd94e443ce0193c3a42095c9b4736',
    },
  },
];

describe('SuggestedBooks', () => {
  it('should render all suggested books', () => {
    render(<SuggestedBooks books={suggestedBooksMock} />);
    const renderedBooks = screen.getAllByTestId('book-item');

    expect(renderedBooks).toHaveLength(suggestedBooksMock.length);
  });
});
