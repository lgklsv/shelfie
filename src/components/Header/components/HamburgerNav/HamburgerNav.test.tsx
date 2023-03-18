import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import HamburgerNav from './HamburgerNav';

describe('HamburgerNav', () => {
  it('should not be visible on desktop', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HamburgerNav />
      </MemoryRouter>
    );
    const hamburgerNav = screen.getByTestId('hamburger-nav');
    expect(hamburgerNav).not.toBeVisible();
  });
});
