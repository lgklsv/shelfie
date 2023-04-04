import React from 'react';

import { BookCard, bookListModel } from 'entities/book';
import styles from './BookListSection.module.scss';

const BookListSection: React.FC = () => {
  const [books, setBooks] = React.useState<Book[]>([]);

  const { isFetching } = bookListModel.getBookListAsync('react')(setBooks);

  console.log(isFetching);

  return (
    <section>
      <div className="container">
        <div className={styles.bookList}>
          {books.map((obj: Book) => (
            <BookCard key={obj.id} data={obj.volumeInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookListSection;
