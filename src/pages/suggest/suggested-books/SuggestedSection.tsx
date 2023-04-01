import React, { useContext } from 'react';

import { SuggestBookContext } from 'features/suggest-book/suggest';
import { BookCard } from 'entities/book';
import styles from './SuggestedSection.module.scss';

const SuggestedSection: React.FC = () => {
  const suggestCtx = useContext(SuggestBookContext);

  return (
    <section>
      <div className="container">
        {suggestCtx.books.length > 0 && (
          <>
            <h3>Suggested books</h3>
            <div className={styles.bookList}>
              {suggestCtx.books.map((obj: SuggestedBook) => (
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
