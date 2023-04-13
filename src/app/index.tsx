import React from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import Routing from 'pages';
import { store } from './store';
import { appTitle } from './config';
import './index.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Helmet defaultTitle={appTitle} titleTemplate={`%s | ${appTitle}`} />
      <Routing />
    </Provider>
  );
};

export default App;
