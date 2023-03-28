import React from 'react';

import BookCard from 'components/BookCard/BookCard';

import books from 'shared/api/books.json';
import styles from './BookListSection.module.scss';

class BookListSection extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className={styles.bookList}>
            {books.items.map((obj: Book) => (
              <BookCard key={obj.id} data={obj.volumeInfo} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default BookListSection;
