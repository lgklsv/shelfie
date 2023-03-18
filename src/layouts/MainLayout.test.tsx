import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

describe('MainLayout', () => {
  it('should render main container', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MainLayout />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
