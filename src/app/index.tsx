import React from 'react';
import { Helmet } from 'react-helmet';

import Routing from 'pages';
import { appTitle } from './config';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Helmet defaultTitle={appTitle} titleTemplate={`%s | ${appTitle}`} />
        <Routing />
      </>
    );
  }
}

export default App;
