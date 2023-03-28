import React from 'react';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CheckboxInput from './CheckboxInput';

describe('Checkbox input', () => {
  const ref = React.createRef<HTMLInputElement>();
  it('should have checkbox input parts', () => {
    render(
      <CheckboxInput
        innerRef={ref}
        name="agreement"
        id="agreement"
        text="I have read and agree to the Terms of Service"
        message="Custom checkbox error"
      />
    );
    expect(screen.getByLabelText(/I have/i)).toBeInTheDocument();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toHaveAttribute('id');
    expect(screen.getByRole('checkbox')).toHaveAttribute('name');
  });
});
