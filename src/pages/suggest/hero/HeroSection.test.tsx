import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('should h2 heading and paragraph', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Suggest book'
    );
    expect(screen.getByText(/Our library/i)).toBeInTheDocument();
  });
});
