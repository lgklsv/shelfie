import React from 'react';
import { Helmet } from 'react-helmet';

import { Content } from './content';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>404</title>
        </Helmet>
        <Content />
      </>
    );
  }
}

export default NotFound;
