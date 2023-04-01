import React from 'react';
import { Helmet } from 'react-helmet';

import { SuggestBookContextProvider } from 'features/suggest-book/suggest';
import { SuggestedSection } from './suggested-books';
import { HeroSection } from './hero';
import { BookFormSection } from './form';

const Suggest: React.FC = () => {
  return (
    <SuggestBookContextProvider>
      <Helmet>
        <title>Suggest Book</title>
      </Helmet>
      <HeroSection />
      <BookFormSection />
      <SuggestedSection />
    </SuggestBookContextProvider>
  );
};

export default Suggest;
