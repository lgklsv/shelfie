import React from 'react';

import { BookCard } from 'entities/book';
import styles from './SuggestedSection.module.scss';

type BooksListProps = {
  books: SuggestedBook[];
};

class SuggestedSection extends React.Component<BooksListProps> {
  constructor(props: BooksListProps) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="container">
          {this.props.books.length > 0 && (
            <>
              <h3>Suggested books</h3>
              <div className={styles.bookList}>
                {this.props.books.map((obj: SuggestedBook) => (
                  <BookCard key={obj.id} data={obj} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default SuggestedSection;
