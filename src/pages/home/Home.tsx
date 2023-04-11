import React from 'react';
import { Helmet } from 'react-helmet';

import { SearchContextProvider } from 'features/searchbar/search';
import { BookListSection } from './book-list';
import { WelcomeSection } from './welcome';

const Home: React.FC = () => {
  return (
    <SearchContextProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <WelcomeSection />
      <BookListSection />
    </SearchContextProvider>
  );
};

export default Home;
