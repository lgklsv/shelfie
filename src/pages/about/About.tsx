import React from 'react';
import { Helmet } from 'react-helmet';

import ReadmeSection from './readme/ReadmeSection';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <ReadmeSection />
    </>
  );
};

export default About;
