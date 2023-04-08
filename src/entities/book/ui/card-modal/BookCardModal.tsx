import React from 'react';

import { Card, LoadingSpinner } from 'shared/ui';
import { getBookByIdAsync } from 'entities/book-list/model';
import { string } from 'shared/lib';
import LinkIcon from './LinkIcon.icon';
import BookCover from '../book-cover/BookCover';
import styles from './BookCardModal.module.scss';

type BookCardModalProps = {
  id: string;
};

const BookCardModal: React.FC<BookCardModalProps> = ({ id }) => {
  const [data, setData] = React.useState<Book>();

  const { isFetching, isError, refetch } = getBookByIdAsync(id)(setData);

  const refetchHandler = () => {
    refetch();
  };

  if (isFetching) {
    return (
      <Card type="transparent">
        <LoadingSpinner />
      </Card>
    );
  }

  if (isError) {
    return (
      <Card type="transparent">
        Something went wrong...
        <button
          type="button"
          onClick={refetchHandler}
          className="btn btn-primary"
        >
          Try again
        </button>
      </Card>
    );
  }

  if (!data) {
    return <Card type="transparent">Nothing was found 😔</Card>;
  }

  const volume = data.volumeInfo;
  const category = volume.categories ? volume.categories.join(', ') : '';

  return (
    <div data-testid="book-item" className={styles.book_wrapper}>
      <div className={styles.book}>
        <div className={styles.book__imgcont}>
          <BookCover
            image={volume.imageLinks && volume.imageLinks.thumbnail}
            isEbook={data.saleInfo && data.saleInfo.isEbook}
            isOpen
          />
        </div>
        <div className={styles.book__info}>
          <div className={styles.book__top}>
            <div className={styles.book__title_wrapper}>
              <h4 className={styles.book__title}>
                {volume.title || 'No title available'}
              </h4>
              {volume.subtitle && (
                <h5 className={styles.book__subtitle}>{volume.subtitle}</h5>
              )}
            </div>

            {(category || volume.authors || volume.publishedDate) && (
              <div className={styles.book__bubbles}>
                {category && (
                  <p className={styles.book__text_light}>
                    Category: {category}
                  </p>
                )}

                {volume.authors && (
                  <p className={styles.book__text_light}>
                    By: {volume.authors.slice(0, 3).join(', ')}
                  </p>
                )}
                {volume.publishedDate && (
                  <p className={styles.book__text_light}>
                    Published: {volume.publishedDate.slice(0, 4)}
                  </p>
                )}
              </div>
            )}
          </div>

          <h4>Description</h4>
          <p data-testid="subtitle" className={styles.book__description}>
            {volume.description
              ? string.cleanText(volume.description)
              : 'No description available'}
          </p>
          <div className={styles.book__actions}>
            <a
              className="btn btn-primary"
              target="_blank"
              href={volume.previewLink}
              rel="noreferrer"
            >
              <LinkIcon />
              google books
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardModal;
