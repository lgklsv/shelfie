import React from 'react';

import { string, check } from 'shared/lib';
import { bookCategories } from '../../const/book-categories';
import styles from './BookCard.module.scss';

type BookCardProps = {
  data: Volume | SuggestedBook;
};

class BookCard extends React.Component<BookCardProps> {
  constructor(props: BookCardProps) {
    super(props);
  }

  render() {
    const category = check.isVolume(this.props.data)
      ? this.props.data.categories.join(', ')
      : bookCategories.find((el) => el.value === this.props.data.categories[0])
          ?.text;

    return (
      <div data-testid="book-item" className={styles.book_wrapper}>
        <div className={styles.book}>
          <div className={styles.book__imgcont}>
            <img
              className={styles.book__img}
              src={this.props.data.imageLinks.thumbnail}
              alt="book"
            />
            {!check.isVolume(this.props.data) && this.props.data.isEbook && (
              <div className={styles.book__ebook}>E-Book</div>
            )}
          </div>
          <div className={styles.book__info}>
            <div className={styles.book__top}>
              <h4 className={styles.book__title}>
                {string.sliceText(this.props.data.title, 100)}
              </h4>
              {check.isVolume(this.props.data) && (
                <p data-testid="subtitle" className={styles.book__text}>
                  {string.sliceText(
                    this.props.data.subtitle
                      ? this.props.data.subtitle
                      : this.props.data.description,
                    100
                  )}
                </p>
              )}

              <p className={styles.book__text_light}>Category: {category}</p>
              <p className={styles.book__text_light}>
                By: {this.props.data.authors.join(', ')}
              </p>
              <p className={styles.book__text_light}>
                Published: {this.props.data.publishedDate.slice(0, 4)}
              </p>
            </div>
            {check.isVolume(this.props.data) && (
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
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
