import React from 'react';
import { Helmet } from 'react-helmet';

import { HeroSection } from './hero';
import { BookFormSection } from './form';
import { SuggestedSection } from './suggested-books';

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
        <HeroSection />
        <BookFormSection addBook={this.addBook} />
        <SuggestedSection books={this.state.items} />
      </>
    );
  }
}

export default Suggest;
