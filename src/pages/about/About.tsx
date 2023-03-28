import React from 'react';
import { Helmet } from 'react-helmet';

import ReadmeSection from './readme/ReadmeSection';

class About extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>About</title>
        </Helmet>
        <ReadmeSection />
      </>
    );
  }
}

export default About;
