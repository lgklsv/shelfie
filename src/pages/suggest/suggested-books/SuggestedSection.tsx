import React from 'react';

import { BookCard } from 'entities/book';
import styles from './SuggestedSection.module.scss';

type BooksListProps = {
  books: SuggestedBook[];
};

const SuggestedSection: React.FC<BooksListProps> = ({ books }) => {
  return (
    <section>
      <div className="container">
        {books.length > 0 && (
          <>
            <h3>Suggested books</h3>
            <div className={styles.bookList}>
              {books.map((obj: SuggestedBook) => (
                <BookCard key={obj.id} data={obj} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SuggestedSection;
