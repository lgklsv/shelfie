import React from 'react';
import { Route, Routes } from 'react-router-dom';
import appTitle from './consts/app-title';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home title={`Home | ${appTitle}`} />} />
        <Route path="*" element={<NotFound title={`404 | ${appTitle}`} />} />
      </Routes>
    );
  }
}

export default App;
