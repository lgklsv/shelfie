import React from 'react';

import { LoadingSpinner, Card } from 'shared/ui';
import { BookCard, bookListModel } from 'entities/book';
import styles from './BookListSection.module.scss';

const BookListSection: React.FC = () => {
  const [books, setBooks] = React.useState<Book[]>([]);

  const { isFetching, isError, error } =
    bookListModel.getBookListAsync('react')(setBooks);

  console.log(error, isError);

  return (
    <section>
      <div className="container">
        {isError && (
          <Card type="white">
            Something went wrong...{' '}
            <div className="btn btn-primary">Try again</div>
          </Card>
        )}
        {isFetching ? (
          <Card type="transparent">
            <LoadingSpinner />
          </Card>
        ) : (
          <div className={styles.bookList}>
            {books.map((obj: Book) => (
              <BookCard key={obj.id} data={obj.volumeInfo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BookListSection;
