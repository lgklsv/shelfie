import React from 'react';
import { useSelector } from 'react-redux';

import { searchSlice } from 'features/searchbar/search';
import { BookSimpleCard } from 'entities/book';
import { LoadingSpinner, Card } from 'shared/ui';
import { googleApi } from 'shared/api';
import styles from './BookList.module.scss';

const BookList: React.FC = () => {
  const { searchValue } = useSelector(searchSlice.selectSearch);

  const { data, isFetching, isError } = googleApi.useGetSearchBooksQuery(
    searchValue || 'react'
  );

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

  if (!data || !data.items || data.items.length === 0) {
    return <Card type="transparent">Nothing was found 😔</Card>;
  }

  return (
    <div className={styles.bookList}>
      {data.items.map((obj: Book) => (
        <BookSimpleCard key={obj.id} data={obj} />
      ))}
    </div>
  );
};

export default BookList;
