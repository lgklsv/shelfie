import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundBlock from './NotFoundBlock';

describe('NotFoundBlock', () => {
  it('should have 404 test in heading', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NotFoundBlock />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('404');
  });
});
