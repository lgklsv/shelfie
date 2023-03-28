import React from 'react';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SelectInput from './SelectInput';

export const mockOptions = [
  { value: 'b1', text: 'Option1' },
  { value: 'b2', text: 'Option2' },
  { value: 'b3', text: 'Option3' },
];

describe('SelectInput', () => {
  const ref = React.createRef<HTMLSelectElement>();
  it('should have select input parts', () => {
    render(
      <SelectInput
        innerRef={ref}
        name="category"
        id="category"
        defaultText="choose category"
        message="Custom error select"
        options={mockOptions}
      />
    );
    expect(screen.getByText(/Custom error select/i)).toBeInTheDocument();
    expect(screen.getByText(/choose category/i)).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(mockOptions.length);
  });
});
