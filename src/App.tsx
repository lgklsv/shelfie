import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="*" element={<NotFound title="404 Not Found" />} />
      </Routes>
    );
  }
}

export default App;
