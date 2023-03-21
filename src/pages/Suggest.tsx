import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection/HeroSection';

class Suggest extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Suggest Book</title>
        </Helmet>
        <HeroSection />
      </>
    );
  }
}

export default Suggest;
