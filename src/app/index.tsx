import React from 'react';
import { Helmet } from 'react-helmet';

import Routing from 'pages';
import { PopupContextProvider } from 'features/notification/popup';
import { appTitle } from './config';
import './index.scss';

const App: React.FC = () => {
  return (
    <PopupContextProvider>
      <Helmet defaultTitle={appTitle} titleTemplate={`%s | ${appTitle}`} />
      <Routing />
    </PopupContextProvider>
  );
};

export default App;
