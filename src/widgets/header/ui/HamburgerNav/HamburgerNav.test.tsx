import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

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

  it('should call open function by clicking on hamburger', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <HamburgerNav />
      </MemoryRouter>
    );
    const hamburger = screen.getByTestId('hamburger');
    expect(hamburger.getAttribute('class')).not.toMatch(/active/gi);

    fireEvent.click(hamburger);

    expect(hamburger.getAttribute('class')).toMatch(/active/gi);
  });
});
