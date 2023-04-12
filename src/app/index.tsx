import React from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from 'react-query';

import Routing from 'pages';
import { store } from './store';
import { appTitle } from './config';
import './index.scss';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} contextSharing>
        <Helmet defaultTitle={appTitle} titleTemplate={`%s | ${appTitle}`} />
        <Routing />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
