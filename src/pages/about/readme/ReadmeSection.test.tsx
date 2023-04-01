import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import ReadmeSection from './ReadmeSection';

describe('ReadmeSection', () => {
  it('should render about section from markdown and have h3 headings', () => {
    render(<ReadmeSection />);
    expect(screen.getAllByRole('heading', { level: 3 }).length > 1).toBe(true);
  });
  it('should have project screenshot', () => {
    render(<ReadmeSection />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
