import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';

describe('Home', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<Home />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World'
    );
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/bad']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Not Found'
    );
  });
});
