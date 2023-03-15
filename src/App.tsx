import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import appTitle from './consts/app-title';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home title={`Home | ${appTitle}`} />} />
            <Route
              path="*"
              element={<NotFound title={`404 | ${appTitle}`} />}
            />
          </Route>
        </Routes>
      </Suspense>
    );
  }
}

export default App;
