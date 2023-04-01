import React from 'react';
import { useLocation } from 'react-router-dom';

import { dom } from 'shared/lib';

export const useResetScroll = () => {
  const location = useLocation();
  const prev = React.useRef<string>();

  if (prev.current !== location.pathname) {
    dom.scrollToTop();
  }

  prev.current = location.pathname;
};
