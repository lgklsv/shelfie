import React from 'react';

import { bookCategories } from 'shared/model/book-categories';
import { string } from 'shared/lib';
import styles from './BookCardSuggested.module.scss';

type BookCardSuggestedProps = {
  data: SuggestedBook;
};

const BookCardSuggested: React.FC<BookCardSuggestedProps> = ({ data }) => {
  const category = bookCategories.find(
    (el) => el.value === data.categories[0]
  )?.text;

  const img =
    data.imageLinks && data.imageLinks.thumbnail
      ? data.imageLinks.thumbnail
      : 'https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png';

  return (
    <div data-testid="book-item" className={styles.book_wrapper}>
      <div className={styles.book}>
        <div className={styles.book__imgcont}>
          <img className={styles.book__img} src={img} alt="book" />
          {data.isEbook && <div className={styles.book__ebook}>E-Book</div>}
        </div>
        <div className={styles.book__info}>
          <div className={styles.book__top}>
            <h4 className={styles.book__title}>
              {data.title &&
                string.sliceText(data.title || 'No title available', 100)}
            </h4>
            {(category || data.authors || data.publishedDate) && (
              <div className={styles.book__bubbles}>
                {category && (
                  <p className={styles.book__text_light}>
                    Category: {category}
                  </p>
                )}

                {data.authors && (
                  <p className={styles.book__text_light}>
                    By: {data.authors.slice(0, 3).join(', ')}
                  </p>
                )}
                {data.publishedDate && (
                  <p className={styles.book__text_light}>
                    Published: {data.publishedDate.slice(0, 4)}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardSuggested;
