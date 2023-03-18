import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AboutBlock from './AboutBlock';

describe('AboutBlock', () => {
  it('should render about section from markdown and have h3 headings', () => {
    render(<AboutBlock />);
    expect(screen.getAllByRole('heading', { level: 3 }).length > 1).toBe(true);
  });
  it('should have project screenshot', () => {
    render(<AboutBlock />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
