import React from 'react';

import { bookCategories } from 'shared/model/book-categories';
import BookCover from '../book-cover/BookCover';
import styles from './BookCardSuggested.module.scss';

type BookCardSuggestedProps = {
  data: SuggestedBook;
};

const BookCardSuggested: React.FC<BookCardSuggestedProps> = ({ data }) => {
  const category = bookCategories.find(
    (el) => el.value === data.categories[0]
  )?.text;

  return (
    <div data-testid="book-item" className={styles.book_wrapper}>
      <div className={styles.book}>
        <div className={styles.book__imgcont}>
          <BookCover
            image={data.imageLinks.thumbnail}
            isEbook={data.isEbook}
            isOpen
          />
        </div>
        <div className={styles.book__info}>
          <div className={styles.book__top}>
            <h4 className={styles.book__title}>{data.title}</h4>
            <div className={styles.book__bubbles}>
              <p className={styles.book__text_light}>Category: {category}</p>
              <p className={styles.book__text_light}>
                By: {data.authors.slice(0, 3).join(', ')}
              </p>
              <p className={styles.book__text_light}>
                Published: {data.publishedDate.slice(0, 4)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardSuggested;
