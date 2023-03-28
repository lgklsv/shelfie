import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { appTitle } from '../const/app-title';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Suggest from '../pages/Suggest';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Helmet defaultTitle={appTitle} titleTemplate={`%s | ${appTitle}`} />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="suggest" element={<Suggest />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
