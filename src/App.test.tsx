import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('Home', () => {
  it('Renders app name', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Shelfie'
    );
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/badroutewfhwgfqwwfhw']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('404');
  });
});
