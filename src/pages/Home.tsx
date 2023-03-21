import React from 'react';
import { Helmet } from 'react-helmet';

import BooksList from '../components/BooksList/BooksList';
import Welcome from '../components/Welcome/Welcome';

class Home extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Welcome />
        <BooksList />
      </>
    );
  }
}

export default Home;
