import React from 'react';
import { Helmet } from 'react-helmet';
import BookForm from '../../components/BookForm/BookForm';
import HeroSection from '../../components/HeroSection/HeroSection';
import SuggestedBooks from '../../components/SuggestedBooks/SuggestedBooks';

class Suggest extends React.Component<Record<string, never>, BooksList> {
  constructor(props: never) {
    super(props);
    this.state = {
      items: [],
    };

    this.addBook = this.addBook.bind(this);
  }

  addBook(book: SuggestedBook) {
    this.setState((prevState) => ({
      items: [...prevState.items, book],
    }));
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Suggest Book</title>
        </Helmet>
        <HeroSection size="sm" />
        <BookForm addBook={this.addBook} />
        <SuggestedBooks books={this.state.items} />
      </>
    );
  }
}

export default Suggest;
