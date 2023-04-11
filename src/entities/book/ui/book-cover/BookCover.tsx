import React from 'react';
import cn from 'classnames';

import styles from './BookCover.module.scss';

type BookCoverPops = {
  image: string | undefined;
  isEbook: boolean;
  isOpen: boolean;
  openModal?: () => void;
};

const BookCover: React.FC<BookCoverPops> = ({
  image,
  isEbook,
  isOpen,
  openModal,
}) => {
  const img =
    image ||
    'https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png';

  return (
    <div className={styles.book} onClick={openModal}>
      <div
        data-testid="image"
        style={{
          background: `no-repeat center url(${img})`,
          backgroundSize: 'cover',
        }}
        className={cn(styles.book__cover, { [styles.open]: isOpen })}
      >
        {isEbook && <div className={styles.book__ebook}>E-Book</div>}
        <div className={styles.effect} />
        <div className={styles.light} />
      </div>
      <div className={styles.book_inside} />
    </div>
  );
};

export default BookCover;

BookCover.defaultProps = {
  openModal: () => {},
};
