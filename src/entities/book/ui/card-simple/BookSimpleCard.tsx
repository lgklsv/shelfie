import React from 'react';

import { Modal } from 'shared/ui';
import BookCard from '../card/BookCard';
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
    <>
      <div
        data-testid="book-item"
        onClick={toggleModal}
        className={styles.book}
      >
        <div className={styles.book__imgcont}>
          <img
            className={styles.book__img}
            src={
              volume.imageLinks && volume.imageLinks.thumbnail
                ? volume.imageLinks.thumbnail
                : 'https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png'
            }
            alt="book"
          />
          {data.saleInfo.isEbook && (
            <div className={styles.book__ebook}>E-Book</div>
          )}
        </div>
        <h4 className={styles.book__title}>{volume.title}</h4>
      </div>
      <Modal active={isModalOpen} toggle={toggleModal}>
        {isModalOpen && <BookCard data={volume} />}
      </Modal>
    </>
  );
};

export default BookSimpleCard;
