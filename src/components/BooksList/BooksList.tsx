/* eslint-disable react/state-in-constructor */
import React from 'react';

import books from '../../books.json';
import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.scss';

type BooksListState = {
  items: Book[];
};

class BooksList extends React.Component {
  state: BooksListState = {
    items: books.items,
  };

  render() {
    return (
      <div className="container">
        <div className={styles.bookList}>
          {this.state.items.map((obj: Book) => (
            <BookCard key={obj.id} data={obj} />
          ))}
        </div>
      </div>
    );
  }
}

export default BooksList;
