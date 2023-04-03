import React from 'react';

import { BookCard } from 'entities/book';
import styles from './BookListSection.module.scss';

const BookListSection: React.FC = () => {
  const [books, setBooks] = React.useState<Book[]>([]);

  React.useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAhN-scFNVWmZZ9ZjrVgS1h8aM__f-FQeA`
        );
        const data = await res.json();
        setBooks(data.items);
      } catch (err) {
        console.log(err);
        alert('Error');
      }
    }

    fetchBooks();
  }, []);

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
