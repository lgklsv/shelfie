import React from 'react';

import books from '../../books.json';
import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.scss';

class BooksList extends React.Component {
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

export default BooksList;
