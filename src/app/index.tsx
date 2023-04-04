import React from 'react';
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from 'react-query';

import Routing from 'pages';
import { PopupContextProvider } from 'features/notification/popup';
import { appTitle } from './config';
import './index.scss';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <PopupContextProvider>
        <Helmet defaultTitle={appTitle} titleTemplate={`%s | ${appTitle}`} />
        <Routing />
      </PopupContextProvider>
    </QueryClientProvider>
  );
};

export default App;
