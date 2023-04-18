import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './home';
import { About } from './about';
import { NotFound } from './notfound';
import { Suggest } from './suggest';
// import { useResetScroll } from './hooks';
import { Layout } from './layout';

const Routing: React.FC = () => {
  // useResetScroll();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="suggest" element={<Suggest />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
