import React from 'react';

import BookCard from '../BookCard/BookCard';
import styles from './SuggestedBooks.module.scss';

type BooksListProps = {
  books: SuggestedBook[];
};

class SuggestedBooks extends React.Component<BooksListProps> {
  constructor(props: BooksListProps) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className={styles.bookList}>
            {this.props.books.map((obj: SuggestedBook) => (
              <BookCard key={obj.title} data={obj} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default SuggestedBooks;
