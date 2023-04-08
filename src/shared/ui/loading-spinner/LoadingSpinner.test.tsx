import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import LoadingSpinner from './LoadingSpinner';

describe('Loading spinner', () => {
  it('should render spinner with animation', () => {
    render(<LoadingSpinner />);

    const spinner = screen.getByTestId('spinner');
    const animation = Object.values(window.getComputedStyle(spinner)).find(
      (el) => el === 'animation'
    );

    expect(spinner).toBeVisible();
    expect(animation).toBe('animation');
  });
});
