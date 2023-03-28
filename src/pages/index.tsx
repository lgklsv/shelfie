import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import Home from './home/Home';
import About from './about/About';
import Suggest from './suggest/Suggest';
import NotFound from './notfound/NotFound';
import { useResetScroll } from './hooks';

const Routing: React.FC = () => {
  useResetScroll();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="suggest" element={<Suggest />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
