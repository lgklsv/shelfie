import React from 'react';
import { Helmet } from 'react-helmet';

import { PopupContextProvider } from 'features/notification/popup';
import { HeroSection } from './hero';
import { BookFormSection } from './form';
import { SuggestedSection } from './suggested-books';

const Suggest: React.FC = () => {
  const [items, setItems] = React.useState<SuggestedBook[]>([]);

  const addBook = (book: SuggestedBook) => {
    setItems((prev) => [...prev, book]);
  };

  return (
    <PopupContextProvider>
      <Helmet>
        <title>Suggest Book</title>
      </Helmet>
      <HeroSection />
      <BookFormSection addBook={addBook} />
      <SuggestedSection books={items} />
    </PopupContextProvider>
  );
};

export default Suggest;
