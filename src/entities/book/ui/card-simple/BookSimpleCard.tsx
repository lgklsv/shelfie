import React from 'react';

import { Modal } from 'shared/ui';
import { string } from 'shared/lib';
import BookCardModal from '../card-modal/BookCardModal';
import styles from './BookSimpleCard.module.scss';

type BookCardProps = {
  data: Book;
};

const BookSimpleCard: React.FC<BookCardProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const volume = data.volumeInfo;

  return (
    <div className={styles.book_wrapper}>
      <div
        data-testid="book-item"
        onClick={toggleModal}
        className={styles.book}
      >
        <div className={styles.book__title}>
          <p className={styles.book__title_text}>
            {string.sliceText(volume.title || 'Title is not available', 25)}
          </p>
        </div>
        <div
          style={{
            background: `no-repeat center url(${
              volume.imageLinks && volume.imageLinks.thumbnail
                ? volume.imageLinks.thumbnail
                : 'https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png'
            })`,
            backgroundSize: 'cover',
          }}
          className={styles.book__cover}
        >
          {data.saleInfo && data.saleInfo.isEbook && (
            <div className={styles.book__ebook}>E-Book</div>
          )}
          <div className={styles.effect} />
          <div className={styles.light} />
        </div>
        <div className={styles.book_inside} />
      </div>
      <div className={styles.shelf_shadows} />
      <div className={styles.shelf} />
      <Modal active={isModalOpen} toggle={toggleModal}>
        {isModalOpen && <BookCardModal id={data.id} />}
      </Modal>
    </div>
  );
};

export default BookSimpleCard;
