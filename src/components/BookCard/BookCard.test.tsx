import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import BookCard from './BookCard';
import { stripText } from '../../utils/strip-text';

const mockData = {
  kind: 'books#volume',
  id: 'xEApjgEACAAJ',
  etag: 'nIYkAbbO62c',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/xEApjgEACAAJ',
  volumeInfo: {
    title: 'React.js Essentials',
    authors: ['Artemij Fedosejev'],
    publishedDate: '2015',
    description:
      'This book will help you understand why big organizations use React.js to build web applications with maintainable and performant user interfaces. From creating UI elements to testing and exploring scaling solutions, this book will take you through building your own maintainable React.js application in no time.',
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '1783551623',
      },
      {
        type: 'ISBN_13',
        identifier: '9781783551620',
      },
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 0,
    printType: 'BOOK',
    categories: ['Application software'],
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: 'preview-1.0.0',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=xEApjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=xEApjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.co.uk/books?id=xEApjgEACAAJ&dq=react&hl=&cd=1&source=gbs_api',
    infoLink:
      'http://books.google.co.uk/books?id=xEApjgEACAAJ&dq=react&hl=&source=gbs_api',
    canonicalVolumeLink:
      'https://books.google.com/books/about/React_js_Essentials.html?hl=&id=xEApjgEACAAJ',
  },
  saleInfo: {
    country: 'GB',
    saleability: 'NOT_FOR_SALE',
    isEbook: false,
  },
  accessInfo: {
    country: 'GB',
    viewability: 'NO_PAGES',
    embeddable: false,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: false,
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink:
      'http://play.google.com/books/reader?id=xEApjgEACAAJ&hl=&source=gbs_api',
    accessViewStatus: 'NONE',
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      'This book will help you understand why big organizations use React.js to build web applications with maintainable and performant user interfaces.',
  },
};

const mockData2 = {
  kind: 'books#volume',
  id: 'xEApjgEACAAJ',
  etag: 'nIYkAbbO62c',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/xEApjgEACAAJ',
  volumeInfo: {
    title: 'React.js Essentials',
    subtitle:
      'A Fast-paced Guide to Designing and Building Scalable and Maintainable Web Apps with React.js',
    authors: ['Artemij Fedosejev'],
    publishedDate: '2015',
    description:
      'This book will help you understand why big organizations use React.js to build web applications with maintainable and performant user interfaces. From creating UI elements to testing and exploring scaling solutions, this book will take you through building your own maintainable React.js application in no time.',
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '1783551623',
      },
      {
        type: 'ISBN_13',
        identifier: '9781783551620',
      },
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 0,
    printType: 'BOOK',
    categories: ['Application software'],
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: 'preview-1.0.0',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=xEApjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=xEApjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.co.uk/books?id=xEApjgEACAAJ&dq=react&hl=&cd=1&source=gbs_api',
    infoLink:
      'http://books.google.co.uk/books?id=xEApjgEACAAJ&dq=react&hl=&source=gbs_api',
    canonicalVolumeLink:
      'https://books.google.com/books/about/React_js_Essentials.html?hl=&id=xEApjgEACAAJ',
  },
  saleInfo: {
    country: 'GB',
    saleability: 'NOT_FOR_SALE',
    isEbook: false,
  },
  accessInfo: {
    country: 'GB',
    viewability: 'NO_PAGES',
    embeddable: false,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: false,
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink:
      'http://play.google.com/books/reader?id=xEApjgEACAAJ&hl=&source=gbs_api',
    accessViewStatus: 'NONE',
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      'This book will help you understand why big organizations use React.js to build web applications with maintainable and performant user interfaces.',
  },
};

describe('BookCard', () => {
  it('should have img', () => {
    render(<BookCard data={mockData.volumeInfo} />);
    expect(screen.getByRole('img')).toBeVisible();
  });
  it('should render subtitle', () => {
    render(<BookCard data={mockData2.volumeInfo} />);
    expect(screen.getByTestId('subtitle')).toHaveTextContent(
      stripText(mockData2.volumeInfo.subtitle, 100)
    );
  });
  it('should render description if there is not subtitle', () => {
    render(<BookCard data={mockData.volumeInfo} />);
    expect(screen.getByTestId('subtitle')).toHaveTextContent(
      stripText(mockData.volumeInfo.description, 100)
    );
  });
});
