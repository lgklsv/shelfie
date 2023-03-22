import React from 'react';
import { Helmet } from 'react-helmet';
import BookForm from '../components/BookForm/BookForm';
import HeroSection from '../components/HeroSection/HeroSection';

class Suggest extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Suggest Book</title>
        </Helmet>
        <HeroSection size="sm" />
        <BookForm />
      </>
    );
  }
}

export default Suggest;
