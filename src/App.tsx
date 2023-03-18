import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import appTitle from './const/app-title';

import './App.scss';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home title={`Home | ${appTitle}`} />} />
            <Route
              path="about"
              element={<About title={`About Us | ${appTitle}`} />}
            />
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
