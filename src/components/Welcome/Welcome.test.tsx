import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Welcome section', () => {
  it('should have search input element', () => {
    render(<Welcome />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
});
