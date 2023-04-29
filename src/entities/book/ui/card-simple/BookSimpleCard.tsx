import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { Modal } from 'shared/ui';
import { string } from 'shared/lib';
import BookCardModal from '../card-modal/BookCardModal';
import BookCover from '../book-cover/BookCover';
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
    <div className={styles.card} data-testid="book-item">
      <div className={styles.card__title}>
        <p data-testid="simple-card-title" className={styles.card__title_text}>
          {string.sliceText(volume.title || 'Title is not available', 25)}
        </p>
      </div>
      <BookCover
        image={volume.imageLinks && volume.imageLinks.thumbnail}
        isEbook={data.saleInfo && data.saleInfo.isEbook}
        isOpen={false}
        openModal={toggleModal}
      />
      <div className={styles.shelf_shadows} />
      <div className={styles.shelf} />
      <AnimatePresence initial={false} mode="wait">
        {isModalOpen && (
          <Modal toggle={toggleModal}>
            <BookCardModal id={data.id} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookSimpleCard;
