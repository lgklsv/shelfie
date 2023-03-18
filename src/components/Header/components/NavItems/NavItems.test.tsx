import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import NavItems from './NavItems';

describe('NavItems', () => {
  it('renders 2 navbar items', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavItems />
      </MemoryRouter>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });
  it('should activate nav item on click', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavItems />
      </MemoryRouter>
    );
    const listItems = screen.getAllByTestId('nav-item');
    const secondItem = listItems[1];
    const firstItem = listItems[0];
    fireEvent.click(secondItem);
    expect(secondItem).toHaveClass('active');
    expect(firstItem).not.toHaveClass('active');
  });
});
