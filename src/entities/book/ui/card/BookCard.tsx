import React from 'react';

import { bookCategories } from 'shared/model/book-categories';
import { string, check } from 'shared/lib';
import { Modal } from 'shared/ui';
import styles from './BookCard.module.scss';

type BookCardProps = {
  data: Volume | SuggestedBook;
  id: string;
};

const BookCard: React.FC<BookCardProps> = ({ data, id }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const categories = data.categories ? data.categories.join(', ') : '';
  const category = check.isVolume(data)
    ? categories
    : bookCategories.find((el) => el.value === data.categories[0])?.text;

  return (
    <div data-testid="book-item" className={styles.book_wrapper}>
      <div className={styles.book}>
        <div className={styles.book__imgcont}>
          <img
            className={styles.book__img}
            src={
              data.imageLinks && data.imageLinks.thumbnail
                ? data.imageLinks.thumbnail
                : 'https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png'
            }
            alt="book"
          />
          {!check.isVolume(data) && data.isEbook && (
            <div className={styles.book__ebook}>E-Book</div>
          )}
        </div>
        <div className={styles.book__info}>
          <div className={styles.book__top}>
            <h4 className={styles.book__title}>
              {string.sliceText(data.title || 'No title available', 100)}
            </h4>

            {check.isVolume(data) && (
              <p data-testid="subtitle" className={styles.book__text}>
                {string.sliceText(
                  data.subtitle ||
                    data.description ||
                    'No description available',
                  100
                )}
              </p>
            )}

            {category && (
              <p className={styles.book__text_light}>Category: {category}</p>
            )}

            {data.authors && (
              <p className={styles.book__text_light}>
                By: {data.authors.join(', ')}
              </p>
            )}
            {data.publishedDate && (
              <p className={styles.book__text_light}>
                Published: {data.publishedDate.slice(0, 4)}
              </p>
            )}
          </div>
          {check.isVolume(data) && (
            <>
              <div className={styles.book__actions}>
                <a
                  className="btn btn-primary"
                  target="_blank"
                  href={data.previewLink}
                  rel="noreferrer"
                >
                  read more
                </a>
              </div>
              <div className={styles.book__actions}>
                <div onClick={toggleModal} className="btn btn-primary">
                  open
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Modal active={isModalOpen} toggle={toggleModal}>
        {isModalOpen && <p>{id}</p>}
      </Modal>
    </div>
  );
};

export default BookCard;
