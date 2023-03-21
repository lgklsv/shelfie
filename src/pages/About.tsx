import React from 'react';
import { Helmet } from 'react-helmet';
import AboutBlock from '../components/AboutBlock/AboutBlock';

class About extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>About</title>
        </Helmet>
        <AboutBlock />
      </>
    );
  }
}

export default About;
