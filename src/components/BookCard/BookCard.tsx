import React from 'react';

import { stripText } from '../../utils/strip-text';
import styles from './BookCard.module.scss';

type BookCardProps = {
  data: Volume;
};

class BookCard extends React.Component<BookCardProps> {
  constructor(props: BookCardProps) {
    super(props);
  }

  render() {
    return (
      <div data-testid="book-item" className={styles.book_wrapper}>
        <div className={styles.book}>
          <img
            className={styles.book__img}
            src={this.props.data.imageLinks.thumbnail}
            alt="book"
          />
          <div className={styles.book__info}>
            <div className={styles.book__top}>
              <h4 className={styles.book__title}>
                {stripText(this.props.data.title, 100)}
              </h4>
              <p data-testid="subtitle" className={styles.book__text}>
                {stripText(
                  this.props.data.subtitle
                    ? this.props.data.subtitle
                    : this.props.data.description,
                  100
                )}
              </p>
              <p className={styles.book__text_light}>
                By: {this.props.data.authors.join(', ')}
              </p>
              <p className={styles.book__text_light}>
                Published: {this.props.data.publishedDate.slice(0, 4)}
              </p>
            </div>
            <div className={styles.book__actions}>
              <a
                className="btn btn-primary"
                target="_blank"
                href={this.props.data.previewLink}
                rel="noreferrer"
              >
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
