/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
