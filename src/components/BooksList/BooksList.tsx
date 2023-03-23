import React from 'react';

import books from '../../books.json';
import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.scss';

type BooksListState = {
  items: Book[];
};

class BooksList extends React.Component<Record<string, never>, BooksListState> {
  constructor() {
    super({});
    this.state = {
      items: books.items,
    };
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className={styles.bookList}>
            {this.state.items.map((obj: Book) => (
              <BookCard key={obj.id} data={obj.volumeInfo} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default BooksList;
