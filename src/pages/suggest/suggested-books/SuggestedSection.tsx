import React from 'react';
import { useSelector } from 'react-redux';

import { suggestedSlice } from 'features/suggest-book/suggest';
import { BookCardSuggested } from 'entities/book';
import styles from './SuggestedSection.module.scss';

const SuggestedSection: React.FC = () => {
  const { suggested } = useSelector(suggestedSlice.selectSuggested);

  return (
    <section>
      <div className="container">
        {suggested.length > 0 && (
          <>
            <h2>Suggested books</h2>
            <div className={styles.bookList}>
              {suggested.map((obj: SuggestedBook) => (
                <BookCardSuggested key={obj.id} data={obj} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SuggestedSection;
