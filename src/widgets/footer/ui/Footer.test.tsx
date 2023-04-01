import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should have github link', () => {
    render(<Footer />);
    const linkItems = screen.getAllByRole('link') as HTMLAnchorElement[];

    expect(linkItems.find((el) => el.href.includes('github'))).not.toBe(
      undefined
    );
  });
  it('should have rs school link', () => {
    render(<Footer />);
    const linkItems = screen.getAllByRole('link') as HTMLAnchorElement[];

    expect(linkItems.find((el) => el.href.includes('rs.school'))).not.toBe(
      undefined
    );
  });
});
