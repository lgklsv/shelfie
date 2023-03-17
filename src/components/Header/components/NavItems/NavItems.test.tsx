import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../../../../App';

describe('Nav', () => {
  it('renders 2 navbar items', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });
});
