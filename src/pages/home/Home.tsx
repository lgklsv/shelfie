import React from 'react';
import { Helmet } from 'react-helmet';

import { BookListSection } from './book-list';
import { WelcomeSection } from './welcome';

class Home extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <WelcomeSection />
        <BookListSection />
      </>
    );
  }
}

export default Home;
