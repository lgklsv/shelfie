import React from 'react';

type BookCardProps = {
  data: Book;
};

class BookCard extends React.Component<BookCardProps> {
  render() {
    return <div>{this.props.data.volumeInfo.title}</div>;
  }
}

export default BookCard;
