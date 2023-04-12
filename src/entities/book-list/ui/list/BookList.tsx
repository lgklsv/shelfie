import React from 'react';
import { useSelector } from 'react-redux';

import { searchSlice } from 'features/searchbar/search';
import { BookSimpleCard } from 'entities/book';
import { getBookListAsync } from 'entities/book-list/model';
import { LoadingSpinner, Card } from 'shared/ui';
import styles from './BookList.module.scss';

const BookList: React.FC = () => {
  const [books, setBooks] = React.useState<Book[]>([]);
  const { searchValue } = useSelector(searchSlice.selectSearch);

  const { isFetching, isError, refetch } = getBookListAsync(
    searchValue || 'react'
  )(setBooks);

  React.useEffect(() => {
    refetch();
  }, [refetch, searchValue]);

  if (isError) {
    return (
      <Card type="transparent">
        <p>Something went wrong...</p>
        <a href="/" className="btn btn-primary">
          Try again
        </a>
      </Card>
    );
  }

  if (isFetching) {
    return (
      <Card type="transparent">
        <LoadingSpinner />
      </Card>
    );
  }

  if (books.length === 0) {
    return <Card type="transparent">Nothing was found 😔</Card>;
  }

  return (
    <div className={styles.bookList}>
      {books.map((obj: Book) => (
        <BookSimpleCard key={obj.id} data={obj} />
      ))}
    </div>
  );
};

export default BookList;
