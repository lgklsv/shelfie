import React from 'react';
import { Helmet } from 'react-helmet';

import NotFoundBlock from '../../components/NotFoundBlock/NotFoundBlock';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>404</title>
        </Helmet>
        <NotFoundBlock />
      </>
    );
  }
}

export default NotFound;
