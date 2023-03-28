import React from 'react';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import StyledInput from './TextLikeInput';

describe('Styled input', () => {
  const ref = React.createRef<HTMLInputElement>();
  it('should have custom placeholder and error message', () => {
    render(
      <StyledInput
        innerRef={ref}
        type="text"
        name="title"
        id="title"
        message="Custom error"
        placeholder="Title"
      />
    );
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Custom error/i)).toBeInTheDocument();
  });
  it('should have input element setup', () => {
    render(
      <StyledInput
        innerRef={ref}
        type="text"
        name="title"
        id="title"
        message="Custom error"
        placeholder="Title"
      />
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder');
  });
});
