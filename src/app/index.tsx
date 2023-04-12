import React from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from 'react-query';

import Routing from 'pages';
import { PopupContextProvider } from 'features/notification/popup';
import { appTitle } from './config';
import './index.scss';
import { store } from './store';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} contextSharing>
        <PopupContextProvider>
          <Helmet defaultTitle={appTitle} titleTemplate={`%s | ${appTitle}`} />
          <Routing />
        </PopupContextProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
