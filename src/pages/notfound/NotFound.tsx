import React from 'react';
import { Helmet } from 'react-helmet';

import { Content } from './content';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <Content />
    </>
  );
};

export default NotFound;
