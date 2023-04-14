import React from 'react';
import { Helmet } from 'react-helmet';

import { SuggestedSection } from './suggested-books';
import { HeroSection } from './hero';
import { BookFormSection } from './form';

const Suggest: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Suggest Book</title>
      </Helmet>
      <HeroSection />
      <BookFormSection />
      <SuggestedSection />
    </>
  );
};

export default Suggest;
