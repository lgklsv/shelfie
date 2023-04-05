import React from 'react';

import { BookList } from 'entities/book-list';

const BookListSection: React.FC = () => {
  return (
    <section>
      <div className="container">
        <BookList />
      </div>
    </section>
  );
};

export default BookListSection;
