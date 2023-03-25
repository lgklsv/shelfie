import React from 'react';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import RadioInput from './RadioInput';

describe('Radio input', () => {
  const ref = React.createRef<HTMLInputElement>();
  it('should have radio input parts', () => {
    render(<RadioInput innerRef={ref} name="ebook" id="ebook" text="e-book" />);
    expect(screen.getByLabelText(/e-book/i)).toBeInTheDocument();
    expect(screen.getByRole('radio')).toHaveAttribute('name');
    expect(screen.getByRole('radio')).toHaveAttribute('id');
  });
});
